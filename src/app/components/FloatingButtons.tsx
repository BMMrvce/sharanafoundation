import { MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FloatingButtons() {
  const { t } = useLanguage();

  const scrollToDonate = () => {
    const element = document.getElementById('donate');
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
    <>
      {/* Call Floating Button */}
      <a
        href="tel:+919448145035"
        className="fixed bottom-40 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919448145035"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Sticky Donate Button */}
      <button
        onClick={scrollToDonate}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 px-4 sm:px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#ff6b35] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center space-x-2"
      >
        <span>❤️</span>
        <span className="text-sm sm:text-base">{t('donate')}</span>
      </button>
    </>
  );
}
