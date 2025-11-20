tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Noto Sans JP"', 'sans-serif'],
                en: ['"Manrope"', 'sans-serif'],
            },
            colors: {
                'brand-black': '#0a0a0a',
                'brand-white': '#ffffff',
                'brand-green': '#1B4D3E', /* Deep Dark Green */
                'brand-gray': '#f2f2f2',
            },
            letterSpacing: {
                'tightest': '-.05em',
                'widest': '.25em',
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'image-reveal': 'imageReveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                imageReveal: {
                    '0%': { clipPath: 'inset(100% 0 0 0)' },
                    '100%': { clipPath: 'inset(0 0 0 0)' },
                }
            }
        }
    }
}
