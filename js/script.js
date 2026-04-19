/* ========================================================================
   sustainable& — site-wide script
   モバイルナビ制御（#navToggle / #navClose / #mnav）
   ======================================================================== */

(function() {
  'use strict';

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
})();
