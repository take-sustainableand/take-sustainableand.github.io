/* ========================================================================
   sustainable& — site-wide script
   - 新マークアップ（#navToggle / #navClose / #mnav）のモバイルメニュー制御
   - 旧マークアップ（#mobile-menu-btn / #mobile-menu、Tailwind translate-x-*）
     への後方互換。Phase B でコラム各記事・プライバシーを新構造に揃え次第、
     旧互換ブロックは削除する。
   ======================================================================== */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initNewMobileNav();
    initLegacyMobileNav();
  });

  /* ---------- 新構造（index.html / これから刷新するページ） ---------- */
  function initNewMobileNav() {
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
  }

  /* ---------- 旧 Tailwind 構造（刷新待ちのコラム・プライバシー） ---------- */
  function initLegacyMobileNav() {
    var btn = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    var navBar = document.querySelector('nav');
    var links = menu.querySelectorAll('.mobile-menu-link');

    function isOpen() {
      return !menu.classList.contains('translate-x-full');
    }

    function setLucide(name) {
      btn.innerHTML = '<i data-lucide="' + name + '" class="w-8 h-8"></i>';
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }

    function openMenu() {
      menu.classList.remove('translate-x-full');
      menu.classList.add('translate-x-0');
      menu.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'メニューを閉じる');
      setLucide('x');
      document.body.style.overflow = 'hidden';
      if (navBar) navBar.classList.remove('mix-blend-difference');
    }

    function closeMenu() {
      menu.classList.remove('translate-x-0');
      menu.classList.add('translate-x-full');
      menu.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'メニューを開く');
      setLucide('menu');
      document.body.style.overflow = '';
      if (navBar) navBar.classList.add('mix-blend-difference');
    }

    btn.addEventListener('click', function() {
      if (isOpen()) closeMenu(); else openMenu();
    });

    links.forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen()) closeMenu();
    });

    menu.addEventListener('click', function(e) {
      if (e.target === menu) closeMenu();
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768 && isOpen()) closeMenu();
    });

    // 初期化時に Lucide アイコン描画
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }
})();
