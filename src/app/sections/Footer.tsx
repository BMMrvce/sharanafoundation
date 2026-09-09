import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const quickLinks = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/activities', key: 'activities' },
  { to: '/leadership', key: 'leadership' },
  { to: '/gallery', key: 'gallery' },
  { to: '/events', key: 'events' },
  { to: '/upcoming-project', key: 'upcomingProject' },
  { to: '/contact', key: 'contact' },
  { to: '/compliance', key: 'compliance' },
  { to: '/volunteers', key: 'volunteers' },
];

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 overflow-hidden">
                <img src="/assets/logo.png" alt="Organization logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">
                  {language === 'en'
                    ? 'Sri Chikkenakoppa Channaveeratata Sharanara Balaga'
                    : 'ಶ್ರೀ ಚಿಕ್ಕೆನಕೊಪ್ಪದ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗ'}
                </span>
                <span className="text-xs text-blue-200">{language === 'en' ? 'Since 1990' : '1990 ರಿಂದ'}</span>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4 text-sm">
              {language === 'en'
                ? 'A charitable organization dedicated to providing free eye care services to rural communities across Karnataka since 1990.'
                : '1990 ರಿಂದ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಉಚಿತ ಕಣ್ಣಿನ ಆರೈಕೆ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುವ ದತ್ತಿ ಸಂಸ್ಥೆ.'}
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#ff6b35] rounded-full flex items-center justify-center transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'en' ? 'Quick Links' : 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-blue-200 hover:text-[#ff6b35] transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'en' ? 'Contact' : 'ಸಂಪರ್ಕ'}
            </h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                {language === 'en'
                  ? 'Kottureshwara Maternity Home, Opp: SMGJ Boys College, Kampli Road, KAMPLI - 583132, Kampli Tq. Bellary Dist. Karnataka State'
                  : 'ಕೊಟ್ಟೂರೇಶ್ವರ ಪ್ರಸೂತಿ ಹೋಮ್, ಎಸ್.ಎಂ.ಜಿ.ಜೆ. ಬಾಯ್ಸ್ ಕಾಲೇಜ್ ಎದುರು, ಕೊತ್ತಾಲ್ ರಸ್ತೆ, ಕಂಪ್ಲಿ - 583132, ಕಂಪ್ಲಿ ತಾ. ಬಳ್ಳಾರಿ ಜಿಲ್ಲೆ. ಕರ್ನಾಟಕ ರಾಜ್ಯ'}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-200">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Sri Chikkenakoppa Channaveeratata Sharanara Balaga (R).
              {language === 'en' ? ' All rights reserved.' : ' ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-blue-200">Built by <a href="https://tantravruksha.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">tantravruksha.in</a></span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-white/10 text-center text-xs text-blue-300">
            {/* Intentionally left blank to remove Privacy/Terms links; credit moved above */}
          </div>
        </div>
      </div>
    </footer>
  );
}
