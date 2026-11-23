/* ========================================================================
   sustainable& — site-wide script
   1. モバイルナビ制御（#navToggle / #navClose / #mnav）
   2. お問い合わせフォーム（トップページ）：ページ内送信・完了表示・GA4 計測
   ======================================================================== */

(function() {
  'use strict';

  /* ----------------------------------------------------------------------
     1. モバイルナビ
     ---------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('navToggle');
    var close = document.getElementById('navClose');
    var mnav = document.getElementById('mnav');

    if (!toggle || !mnav) return;

    function isOpen() {
      return mnav.getAttribute('aria-hidden') === 'false';
    }

    function openMenu() {
      mnav.setAttribute('aria-hidden', 'false');
      mnav.removeAttribute('inert');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'メニューを閉じる');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      mnav.setAttribute('aria-hidden', 'true');
      mnav.setAttribute('inert', '');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'メニューを開く');
      document.body.style.overflow = '';
      toggle.focus();
    }

    toggle.addEventListener('click', function() {
      if (isOpen()) closeMenu(); else openMenu();
    });

    if (close) {
      close.addEventListener('click', closeMenu);
    }

    mnav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen()) closeMenu();
    });

    var mq = window.matchMedia('(min-width: 1101px)');
    var mqHandler = function(e) { if (e.matches && isOpen()) closeMenu(); };
    if (mq.addEventListener) {
      mq.addEventListener('change', mqHandler);
    } else if (mq.addListener) {
      mq.addListener(mqHandler);
    }
  });

  /* ----------------------------------------------------------------------
     2. お問い合わせフォーム
     - Formspree へ fetch で送り、ページ内に完了を表示して GA4 の generate_lead を送る
     - 送信先（action）と項目名（name / company / email / message）は HTML のまま
     - うまくいかないときは、従来どおりの通常送信（Formspree のページへ遷移）に戻す。
       問い合わせを取りこぼさないことを最優先にしている
     ---------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form.contact__form');
    if (!form) return;

    var area = form.querySelector('textarea[name="message"]');
    var button = form.querySelector('button[type="submit"]');

    // 「課題から探す」のカード：選んだテーマを相談内容に引き継ぐ（入力済みなら触らない）
    var lastTopic = '';
    document.querySelectorAll('.exp__picks a[data-topic]').forEach(function(a) {
      a.addEventListener('click', function() {
        if (!area) return;
        if (area.value !== '' && area.value !== lastTopic) return;
        lastTopic = 'ご相談テーマ：' + a.getAttribute('data-topic') + '\n';
        area.value = lastTopic;
      });
    });

    // fetch / FormData が無い環境は、何もせず通常送信に任せる
    if (!window.fetch || !window.FormData) return;

    var sending = false;
    var statusEl = null;
    var buttonLabel = button ? button.innerHTML : '';

    function track(name, params) {
      try {
        if (typeof window.gtag === 'function') window.gtag('event', name, params);
      } catch (err) { /* 計測の失敗で送信を止めない */ }
    }

    function setSending(on) {
      sending = on;
      if (!button) return;
      button.disabled = on;
      if (on) button.textContent = '送信中…'; else button.innerHTML = buttonLabel;
    }

    function showStatus(text) {
      if (!statusEl) {
        statusEl = document.createElement('p');
        statusEl.className = 'contact__status';
        statusEl.setAttribute('role', 'alert');
        form.insertBefore(statusEl, button);
      }
      statusEl.textContent = text;
      statusEl.hidden = false;
    }

    function showDone() {
      var done = document.createElement('div');
      done.className = 'contact__done';
      done.setAttribute('role', 'status');
      done.setAttribute('tabindex', '-1');

      var kicker = document.createElement('span');
      kicker.className = 'contact__done-k';
      kicker.textContent = 'Thank you';
      var title = document.createElement('b');
      title.textContent = '送信が完了しました。';
      var body = document.createElement('p');
      body.textContent = 'お問い合わせありがとうございます。2営業日以内に、ご入力いただいたメールアドレス宛にご返信します。';
      done.appendChild(kicker);
      done.appendChild(title);
      done.appendChild(body);

      // 入力欄と入れ替える。高さは保って、画面が跳ねないようにする
      form.style.minHeight = form.offsetHeight + 'px';
      form.style.justifyContent = 'center';
      while (form.firstChild) form.removeChild(form.firstChild);
      form.appendChild(done);
      done.focus();
    }

    // 従来の送信（Formspree のページへ遷移）。submit イベントは発火しない
    function submitNormally() {
      track('contact_form_fallback', {
        'event_category': 'contact',
        'event_label': 'contact_form'
      });
      HTMLFormElement.prototype.submit.call(form);
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (sending) return;

      if (navigator.onLine === false) {
        showStatus('オフラインのようです。通信環境をご確認のうえ、もう一度お試しください。');
        return;
      }

      setSending(true);
      if (statusEl) statusEl.hidden = true;

      var timer = null;
      try {
        var ctrl = window.AbortController ? new AbortController() : null;
        timer = setTimeout(function() { if (ctrl) ctrl.abort(); }, 20000);

        fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' },
          signal: ctrl ? ctrl.signal : undefined
        }).then(function(res) {
          return res.json().then(function(data) {
            // 受付完了の応答は next（遷移先URL）を含む。それ以外は受け付けられていない
            if (!res.ok || !data || (typeof data.next !== 'string' && data.ok !== true)) {
              throw new Error('not accepted');
            }
          });
        }).then(function() {
          // 受付済み。ここから先で何か起きても、再送信はしない
          clearTimeout(timer);
          track('generate_lead', {
            'event_category': 'contact',
            'event_label': 'contact_form'
          });
          showDone();
        }, function() {
          clearTimeout(timer);
          submitNormally();
        });
      } catch (err) {
        clearTimeout(timer);
        submitNormally();
      }
    });

    // 通常送信のあと「戻る」で復元されたとき、送信中のまま固まらないように戻す
    window.addEventListener('pageshow', function(e) {
      if (e.persisted && sending) setSending(false);
    });
  });
})();
