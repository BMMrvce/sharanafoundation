import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                <span className="text-white font-bold text-lg">SB</span>
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
              {['home', 'about', 'activities', 'leadership', 'impact', 'gallery', 'events', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-blue-200 hover:text-[#ff6b35] transition-colors text-sm"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
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
                  ? 'Kottureshwara Maternity Home, Opp: SMGJ Boys College, Kottal Road, KAMPLI - 583132, Kampli Tq. Bellary Dist. Karnataka State'
                  : 'ಕೊತ್ತುರೇಶ್ವರ ಪ್ರಸೂತಿ ಹೋಮ್, SMGJ ಬಾಯ್ಸ್ ಕಾಲೇಜ್ ಎದುರು, ಕೊತ್ತಾಲ್ ರಸ್ತೆ, KAMPLI - 583132, ಕಾಂಪಲಿ ತಾ. ಬೆಳಾರಿ ಜಿಲ್ಲೆ. ಕರ್ನಾಟಕ ರಾಜ್ಯ'}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Sri Chikkenakoppa Channaveeratata Sharanara Balaga (R).
              {language === 'en' ? ' All rights reserved.' : ' ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#ff6b35] transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">Terms</a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-center text-xs text-blue-300">
            Built by <a href="https://tantravruksha.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">tantravruksha.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
