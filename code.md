<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sustainable& | Sustainability Management Consulting</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;800&family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Noto Sans JP"', 'sans-serif'],
                        en: ['"Manrope"', 'sans-serif'],
                    },
                    colors: {
                        'brand-black': '#1a1a1a',
                        'brand-gray': '#f4f4f4',
                        'brand-green': '#2c3e36', // Deep forest green instead of gradient
                        'brand-accent': '#d4d4d8',
                    }
                }
            }
        }
    </script>

    <style>
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f4f4f4;
        }
        ::-webkit-scrollbar-thumb {
            background: #2c3e36;
        }

        /* Image Hover Effect */
        .img-zoom-container {
            overflow: hidden;
        }
        .img-zoom {
            transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .group:hover .img-zoom {
            transform: scale(1.05);
        }

        /* Text Reveal Animation */
        .reveal-text {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s ease-out;
        }
        .reveal-text.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="bg-brand-gray text-brand-black font-sans antialiased selection:bg-brand-green selection:text-white">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 top-0 mix-blend-difference text-white px-6 py-6 flex justify-between items-center">
        <div class="font-en font-bold text-2xl tracking-tighter">sustainable&</div>
        <div class="hidden md:flex gap-8 font-en text-sm tracking-widest uppercase">
            <a href="#about" class="hover:opacity-70 transition-opacity">About</a>
            <a href="#expertise" class="hover:opacity-70 transition-opacity">Expertise</a>
            <a href="#works" class="hover:opacity-70 transition-opacity">Works</a>
            <a href="#contact" class="hover:opacity-70 transition-opacity">Contact</a>
        </div>
        <button class="md:hidden text-white">
            <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
    </nav>

    <!-- Hero Section -->
    <header class="relative w-full h-screen flex flex-col justify-between p-4 md:p-8 overflow-hidden bg-brand-black text-white">
        <div class="absolute inset-0 z-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" alt="Minimalist Architecture" class="w-full h-full object-cover">
        </div>
        
        <div class="relative z-10 mt-20">
            <p class="font-en text-sm tracking-[0.2em] mb-4 uppercase">Life Cycle Assessment & Management</p>
            <h1 class="font-en text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter">
                DESIGNING<br>
                THE FUTURE<br>
                LOGICALLY.
            </h1>
        </div>

        <div class="relative z-10 flex flex-col md:flex-row justify-between items-end w-full border-t border-white/20 pt-6">
            <div class="max-w-md mb-6 md:mb-0">
                <p class="text-sm md:text-base leading-relaxed opacity-90">
                    脱炭素、その先へ。<br>
                    LCAエキスパートと中小企業診断士の視点で、<br>
                    確かなデータに基づくサステナビリティ経営を実装します。
                </p>
            </div>
            <div class="font-en text-xl md:text-2xl font-light flex items-center gap-2">
                SCROLL DOWN <i data-lucide="arrow-down" class="w-5 h-5 animate-bounce"></i>
            </div>
        </div>
    </header>

    <!-- About / Philosophy Section -->
    <section id="about" class="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div class="md:col-span-4">
                <h2 class="font-en text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none reveal-text">
                    DATA<br>
                    DRIVEN<br>
                    IMPACT.
                </h2>
            </div>
            <div class="md:col-span-8 flex flex-col gap-8 reveal-text" style="transition-delay: 100ms;">
                <p class="text-lg md:text-2xl font-bold leading-relaxed text-brand-green">
                    「なんとなく」のSDGsは、もう終わり。<br>
                    数値で語る、選ばれる企業へ。
                </p>
                <p class="text-gray-600 leading-loose">
                    環境負荷の見える化（LCA）と経営戦略の統合は、現代企業の必須課題です。sustainable&（サステナブルアンド）は、高度な専門知識を持つLCAエキスパート兼中小企業診断士が、貴社の事業構造を深く理解し、実効性のあるサステナビリティ変革を支援します。大手企業での豊富な支援実績に基づき、現場に即した解を導き出します。
                </p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div class="border border-gray-300 p-6">
                        <h3 class="font-en text-xl font-bold mb-2">LCA Expert</h3>
                        <p class="text-sm text-gray-600">製品・サービスのライフサイクル全体における環境負荷を定量的・科学的に評価。</p>
                    </div>
                    <div class="border border-gray-300 p-6">
                        <h3 class="font-en text-xl font-bold mb-2">SME Consultant</h3>
                        <p class="text-sm text-gray-600">中小企業診断士として、経営資源の最適化と持続可能な成長戦略を策定。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Expertise / Services (Bento Grid Layout) -->
    <section id="expertise" class="py-20 px-4 md:px-8 bg-white">
        <div class="max-w-screen-2xl mx-auto">
            <div class="flex justify-between items-end mb-12 border-b-2 border-brand-black pb-4">
                <h2 class="font-en text-4xl md:text-6xl font-bold tracking-tighter">EXPERTISE</h2>
                <span class="font-en text-sm tracking-widest">SERVICES</span>
            </div>

            <!-- Bento Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[800px]">
                
                <!-- Item 1: Large Left -->
                <div class="md:col-span-2 md:row-span-2 group relative bg-brand-gray overflow-hidden cursor-pointer">
                    <div class="img-zoom-container h-full w-full absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Data Analysis" class="img-zoom w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                    </div>
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    <div class="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                        <span class="border border-white px-3 py-1 text-xs font-en uppercase tracking-widest mb-4 inline-block bg-black/30 backdrop-blur-sm">Core Service</span>
                        <h3 class="font-en text-3xl md:text-5xl font-bold mb-2">LCA Calculation & Analysis</h3>
                        <p class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 mt-2 text-sm md:text-base max-w-lg">
                            国際規格(ISO14040/44)に準拠した算定。スコープ1,2,3の算出から、製品単位のCFP（カーボンフットプリント）算定まで、精緻なデータ化を実現します。
                        </p>
                    </div>
                </div>

                <!-- Item 2: Top Right -->
                <div class="group relative bg-brand-green text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                    <div class="relative z-10">
                        <i data-lucide="target" class="w-10 h-10 mb-6 opacity-80"></i>
                        <h3 class="font-en text-2xl md:text-3xl font-bold mb-4">Sustainability Strategy</h3>
                        <p class="text-sm text-gray-300 leading-relaxed">
                            経営戦略とサステナビリティの統合。マテリアリティ特定、KPI設定、ロードマップ策定を支援し、企業価値向上へ繋げます。
                        </p>
                    </div>
                    <div class="absolute right-[-20px] bottom-[-20px] opacity-10">
                        <i data-lucide="target" class="w-40 h-40"></i>
                    </div>
                </div>

                <!-- Item 3: Bottom Right -->
                <div class="group relative bg-stone-200 p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                     <div class="img-zoom-container h-full w-full absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop" alt="Accounting" class="img-zoom w-full h-full object-cover">
                    </div>
                    <div class="relative z-10">
                        <i data-lucide="file-bar-chart" class="w-10 h-10 mb-6 text-brand-black"></i>
                        <h3 class="font-en text-2xl md:text-3xl font-bold mb-4 text-brand-black">Reporting & Disclosure</h3>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            CDP、TCFD、統合報告書など、ステークホルダーへの効果的な情報開示をサポート。評価向上につながるコミュニケーションを設計します。
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Works / Track Record -->
    <section id="works" class="py-20 px-4 md:px-8 bg-brand-black text-white">
         <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="font-en text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        PROVEN<br>
                        RECORDS.
                    </h2>
                    <p class="text-gray-400 mb-8">
                        大手製造業、上場企業を中心に多数の支援実績がございます。<br>
                        守秘義務の観点から、詳細な企業名は対面にてご案内可能です。
                    </p>
                    <a href="#contact" class="inline-flex items-center gap-2 font-en border-b border-white pb-1 hover:opacity-70 transition-opacity">
                        REQUEST PORTFOLIO <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                </div>

                <div class="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                    <!-- Mockup Logos -->
                    <div class="bg-brand-black p-8 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-colors aspect-video">
                        <span class="font-en font-bold text-xl opacity-50">Global Maker A</span>
                    </div>
                    <div class="bg-brand-black p-8 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-colors aspect-video">
                        <span class="font-en font-bold text-xl opacity-50">Logistics Corp</span>
                    </div>
                    <div class="bg-brand-black p-8 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-colors aspect-video">
                        <span class="font-en font-bold text-xl opacity-50">Chemical Ind.</span>
                    </div>
                    <div class="bg-brand-black p-8 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-colors aspect-video">
                        <span class="font-en font-bold text-xl opacity-50">Retail Holdings</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 px-4 md:px-8 bg-brand-gray relative">
        <div class="max-w-4xl mx-auto text-center">
            <p class="font-en text-sm tracking-widest uppercase mb-4 text-brand-green font-bold">Start the Transformation</p>
            <h2 class="font-en text-5xl md:text-7xl font-bold tracking-tighter mb-12">
                READY TO<br>SUSTAIN?
            </h2>
            
            <div class="bg-white p-8 md:p-12 shadow-none border border-gray-200 text-left">
                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs font-en uppercase tracking-wider mb-2 text-gray-500">Name</label>
                            <input type="text" class="w-full bg-brand-gray border-0 border-b-2 border-gray-300 p-3 focus:border-brand-black focus:ring-0 transition-colors outline-none placeholder-gray-400" placeholder="山田 太郎">
                        </div>
                        <div>
                            <label class="block text-xs font-en uppercase tracking-wider mb-2 text-gray-500">Company</label>
                            <input type="text" class="w-full bg-brand-gray border-0 border-b-2 border-gray-300 p-3 focus:border-brand-black focus:ring-0 transition-colors outline-none placeholder-gray-400" placeholder="株式会社〇〇">
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-en uppercase tracking-wider mb-2 text-gray-500">Email</label>
                        <input type="email" class="w-full bg-brand-gray border-0 border-b-2 border-gray-300 p-3 focus:border-brand-black focus:ring-0 transition-colors outline-none placeholder-gray-400" placeholder="email@example.com">
                    </div>
                    <div>
                        <label class="block text-xs font-en uppercase tracking-wider mb-2 text-gray-500">Message</label>
                        <textarea rows="4" class="w-full bg-brand-gray border-0 border-b-2 border-gray-300 p-3 focus:border-brand-black focus:ring-0 transition-colors outline-none placeholder-gray-400" placeholder="ご相談内容をご記入ください"></textarea>
                    </div>
                    <button type="button" class="w-full bg-brand-black text-white font-en font-bold py-5 px-8 hover:bg-brand-green transition-colors duration-300 flex justify-center items-center gap-3 group">
                        SEND MESSAGE
                        <i data-lucide="arrow-up-right" class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-black text-white py-12 px-4 border-t border-white/10">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="font-en font-bold text-2xl tracking-tighter">sustainable&</div>
            <div class="text-xs text-gray-500 font-en">
                &copy; 2025 sustainable&. All Rights Reserved.
            </div>
            <div class="flex gap-4">
                <!-- Social placeholders -->
                <a href="#" class="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <i data-lucide="linkedin" class="w-4 h-4"></i>
                </a>
                <a href="#" class="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <i data-lucide="facebook" class="w-4 h-4"></i>
                </a>
            </div>
        </div>
    </footer>

    <!-- Icons Init & Scroll Animation Script -->
    <script>
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

            document.querySelectorAll('.reveal-text').forEach(el => {
                observer.observe(el);
            });
        });
    </script>
</body>
</html>