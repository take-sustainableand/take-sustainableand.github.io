// Initialize Icons
lucide.createIcons();

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-text, .reveal-img').forEach(el => {
        observer.observe(el);
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('.mobile-menu-link');
    const navBar = document.querySelector('nav');

    function openMenu() {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        mobileMenu.setAttribute('aria-hidden', 'false');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.setAttribute('aria-label', 'メニューを閉じる');
        menuBtn.innerHTML = '<i data-lucide="x" class="w-8 h-8"></i>';
        lucide.createIcons();
        document.body.style.overflow = 'hidden';
        navBar.classList.remove('mix-blend-difference');
    }

    function closeMenu() {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'メニューを開く');
        menuBtn.innerHTML = '<i data-lucide="menu" class="w-8 h-8"></i>';
        lucide.createIcons();
        document.body.style.overflow = '';
        navBar.classList.add('mix-blend-difference');
    }

    function isMenuOpen() {
        return !mobileMenu.classList.contains('translate-x-full');
    }

    menuBtn.addEventListener('click', () => {
        if (isMenuOpen()) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen()) {
            closeMenu();
        }
    });

    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && isMenuOpen()) {
            closeMenu();
        }
    });
});
