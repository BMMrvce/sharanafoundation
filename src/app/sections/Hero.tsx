import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { heroImages } from '../../generated/live-assets';

export default function Hero() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={heroImages[currentImageIndex]}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/70 via-[#2563eb]/65 to-[#3b82f6]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          {/* Official Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight px-4" style={{ color: '#FF9933' }}>
              {language === 'en'
                ? 'Sri Chikkenakoppa Channaveeratata Sharanara Balaga (R)'
                : 'ಶ್ರೀ ಚಿಕ್ಕೆನಕೊಪ್ಪದ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗ (ರಿ)'}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-bold mb-3 px-4">
              KAMPLI – 583132
              <br />
              (a Charitable Trust regd. under Society act 1960 G.O.K)
            </p>
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium">
                {t('tagline')}
              </p>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              {t('heroTitle')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate('/about')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#1e3a8a] rounded-full font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>{t('aboutUsCta')}</span>
                <ArrowDown className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/donate')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
              >
                {t('donate')}
              </button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 sm:mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block"
            >
              <ArrowDown className="w-8 h-8 text-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 sm:h-24 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
