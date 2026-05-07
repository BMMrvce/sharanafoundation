import { Link } from 'react-router';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">Sharana Balaga</span>
              <span className="text-xs text-gray-600">{t('tagline')}</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('home')}
            </Link>
            <Link to="/about" className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('about')}
            </Link>
            <Link to="/activities" className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('activities')}
            </Link>
            <Link to="/leadership" className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('leadership')}
            </Link>
            <Link to="/gallery" className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('gallery')}
            </Link>
            <Link to="/impact" className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('impact')}
            </Link>
            <Link to="/events" className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('events')}
            </Link>
            <Link to="/contact" className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('contact')}
            </Link>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'ಕನ್ನಡ' : 'ENG'}</span>
            </button>

            <Link
              to="/donate"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700"
            >
              {t('donate')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
