import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  const scrollToSection = (id: string) => {
    // Close menu immediately
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with id "${id}" not found`);
    }
  };

  const navLinks = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'activities', label: t('activities') },
    { id: 'leadership', label: t('leadership') },
    { id: 'impact', label: t('impact') },
    { id: 'gallery', label: t('gallery') },
    { id: 'events', label: t('events') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SB</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-700 hover:text-[#ff6b35] transition-colors"
              >
                {link.label}
              </button>
            ))}

            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">
                {language === 'en' ? 'ಕನ್ನಡ' : 'ENG'}
              </span>
            </button>

            {/* Donate Button */}
            <button
              type="button"
              onClick={() => scrollToSection('donate')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white rounded-full font-medium hover:shadow-lg transition-all"
            >
              {t('donate')}
            </button>
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-5 h-5 text-gray-700" />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <div 
              className="px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection(link.id);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToSection('donate');
                }}
                className="block w-full px-4 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white text-center rounded-lg font-medium hover:shadow-lg transition-all mt-4 cursor-pointer"
              >
                {t('donate')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
