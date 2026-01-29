import { useEffect, useRef } from 'react';
import heroImage from '../assets/hero.png';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroHeight = heroRef.current?.offsetHeight || window.innerHeight;

      // Only apply parallax when within hero section
      if (scrolled < heroHeight) {
        // Background layer - slowest parallax (moves up slower)
        if (heroRef.current) {
          heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        }

        // Floating elements with different parallax speeds
        if (layer1Ref.current) {
          layer1Ref.current.style.transform = `translateY(${scrolled * 0.3}px) translateX(${scrolled * 0.1}px)`;
        }
        if (layer2Ref.current) {
          layer2Ref.current.style.transform = `translateY(${scrolled * 0.4}px) translateX(${-scrolled * 0.15}px)`;
        }
        if (layer3Ref.current) {
          layer3Ref.current.style.transform = `translateY(${scrolled * 0.25}px) translateX(${scrolled * 0.2}px)`;
        }
        if (layer4Ref.current) {
          layer4Ref.current.style.transform = `translateY(${scrolled * 0.35}px) translateX(${-scrolled * 0.1}px)`;
        }

        // Content layer - fastest parallax (moves up faster)
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
      }
    };

    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={heroRef}
        className="absolute inset-0 parallax bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          willChange: 'transform',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Multiple Parallax Layers with different speeds */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Layer 1 - Large purple orb */}
          <div 
            ref={layer1Ref}
            className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
            style={{ 
              willChange: 'transform',
              animation: 'float 20s ease-in-out infinite',
            }}
          ></div>
          
          {/* Layer 2 - Large pink orb */}
          <div 
            ref={layer2Ref}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-pink-500/20 rounded-full blur-3xl"
            style={{ 
              willChange: 'transform',
              animation: 'float 25s ease-in-out infinite 2s',
            }}
          ></div>
          
          {/* Layer 3 - Medium blue orb */}
          <div 
            ref={layer3Ref}
            className="absolute top-1/2 right-1/3 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-500/15 rounded-full blur-3xl"
            style={{ 
              willChange: 'transform',
              animation: 'float 18s ease-in-out infinite 1s',
            }}
          ></div>
          
          {/* Layer 4 - Small yellow orb */}
          <div 
            ref={layer4Ref}
            className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-yellow-400/15 rounded-full blur-3xl"
            style={{ 
              willChange: 'transform',
              animation: 'float 22s ease-in-out infinite 3s',
            }}
          ></div>
        </div>
      </div>

      {/* Content with parallax */}
      <div
        ref={contentRef}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-32 min-h-screen flex flex-col justify-between"
        style={{ willChange: 'transform' }}
      >
        <div className="animate-fade-in max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              ClickZ Design
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center animate-slide-up pb-10 sm:pb-16" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={scrollToPortfolio}
            className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 active:scale-95 transform hover:scale-105 transition-all duration-200 shadow-xl cursor-pointer"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

