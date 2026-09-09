import { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  const languageLabel = language === 'en' ? 'ಕನ್ನಡ' : 'English';

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/activities', label: t('activities') },
    { to: '/leadership', label: t('leadership') },
    { to: '/gallery', label: t('gallery') },
    { to: '/events', label: t('events') },
    { to: '/upcoming-project', label: t('upcomingProject') },
    { to: '/compliance', label: t('compliance') },
    { to: '/volunteers', label: t('volunteers') },
    { to: '/contact', label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-gray-100 flex items-center justify-center flex-shrink-0">
              <img src="/assets/logo.png" alt="Sharana Balaga logo" className="w-full h-full object-contain" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 whitespace-nowrap"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{languageLabel}</span>
            </button>

            <Link
              to="/donate"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700"
            >
              {t('donate')}
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-2 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 px-2 py-2.5 rounded-lg hover:bg-gray-50"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{languageLabel}</span>
            </button>

            <Link
              to="/donate"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium text-center hover:from-orange-600 hover:to-orange-700"
            >
              {t('donate')}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
