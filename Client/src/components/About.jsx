import { useEffect, useRef } from 'react';

const About = () => {
  const headerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const serviceCardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToObserve = [
      headerRef.current,
      leftContentRef.current,
      rightContentRef.current,
      ...serviceCardRefs.current,
    ].filter(Boolean);

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: '📸',
      title: 'Photoshoot Services',
      description: 'Professional photography sessions for portraits, events, products, and more.',
    },
    {
      icon: '🎨',
      title: 'Graphic Design',
      description: 'Creative visual designs including branding, logos, posters, and digital graphics.',
    },
    {
      icon: '✨',
      title: 'Photo Editing',
      description: 'Expert photo retouching and enhancement to make your images stand out.',
    },
    {
      icon: '🎬',
      title: 'Visual Storytelling',
      description: 'Creating compelling visual narratives that connect with your audience.',
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 md:mb-20 opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ClickZ Design</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            We specialize in creating stunning visual content that captures your brand's essence
            and tells your story through the power of photography and design.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left - Image Placeholder */}
          <div ref={leftContentRef} className="opacity-0 transition-opacity duration-1000 delay-200 order-2 md:order-1">
            <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white p-6 sm:p-8">
                  <svg
                    className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 opacity-80"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-xl sm:text-2xl font-semibold">About Us</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div ref={rightContentRef} className="opacity-0 transition-opacity duration-1000 delay-400 order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Passion Meets Creativity
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg leading-relaxed">
              At ClickZ Design, we believe that every image tells a story and every design has
              the power to inspire. Our team of skilled photographers and graphic designers are
              dedicated to bringing your vision to life.
            </p>
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              With years of experience in the industry, we've worked with clients ranging from
              startups to established brands, helping them communicate their message through
              compelling visual content.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="px-3 sm:px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold text-sm sm:text-base">
                Professional Quality
              </div>
              <div className="px-3 sm:px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold text-sm sm:text-base">
                Creative Excellence
              </div>
              <div className="px-3 sm:px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold text-sm sm:text-base">
                Client-Focused
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceCardRefs.current[index] = el)}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

