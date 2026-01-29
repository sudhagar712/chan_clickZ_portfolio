import { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const headerRef = useRef(null);
  const portfolioGridRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'photography', label: 'Photography' },
    { id: 'graphic-design', label: 'Graphic Design' },
  ];

  // Sample portfolio items - in a real app, these would come from an API
  const portfolioItems = [
    {
      id: 1,
      title: 'Portrait Session',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    },
    {
      id: 3,
      title: 'Product Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    },
    {
      id: 4,
      title: 'Event Coverage',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    },
    {
      id: 5,
      title: 'Logo Design',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    },
    {
      id: 6,
      title: 'Fashion Shoot',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&q=80',
    },
    {
      id: 7,
      title: 'Web Design',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    },
    {
      id: 8,
      title: 'Nature Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

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

    const elementsToObserve = [headerRef.current];
    
    // Observe all portfolio items in the grid
    if (portfolioGridRef.current) {
      const portfolioItems = portfolioGridRef.current.querySelectorAll('[data-portfolio-item]');
      portfolioItems.forEach((el) => elementsToObserve.push(el));
    }

    const filteredElements = elementsToObserve.filter(Boolean);
    filteredElements.forEach((el) => observer.observe(el));

    return () => {
      filteredElements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredItems]);

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 md:mb-20 opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Explore our collection of stunning photography and creative graphic design work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 min-h-[44px] active:scale-95 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div ref={portfolioGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              data-portfolio-item
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm uppercase tracking-wide opacity-90">
                    {item.category === 'photography' ? '📸 Photography' : '🎨 Graphic Design'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

