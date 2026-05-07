import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
            {language === 'en' ? 'About Us' : 'ನಮ್ಮ ಬಗ್ಗೆ'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Since 1990, dedicated to eliminating preventable blindness and bringing quality eye care to rural Karnataka'
              : '1990 ರಿಂದ ತಡೆಯಬಹುದಾದ ಕುರುಡುತನವನ್ನು ತೊಡೆದುಹಾಕಲು ಮತ್ತು ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕಕ್ಕೆ ಗುಣಮಟ್ಟದ ಕಣ್ಣಿನ ಆರೈಕೆಯನ್ನು ತರಲು ಸಮರ್ಪಿತವಾಗಿದೆ'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {language === 'en' ? 'Our Story' : 'ನಮ್ಮ ಕಥೆ'}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {language === 'en'
                ? 'Founded in 1990, Sri Chikkenakoppa Channaveeratata Sharanara Balaga (R) emerged from a vision to ensure no one in rural Karnataka suffers from preventable blindness. Over three decades, we have conducted 500+ eye camps, performed thousands of surgeries, and distributed spectacles to those in need.'
                : '1990 ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ ಶ್ರೀ ಚಿಕ್ಕೆನಕೊಪ್ಪದ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗ (ರಿ), ಕರ್ನಾಟಕದ ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ತಡೆಯಬಹುದಾದ ಕುರುಡುತನದಿಂದ ಯಾರೂ ಬಳಲುವುದಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸುವ ದೃಷ್ಟಿಯಿಂದ ಹುಟ್ಟಿಕೊಂಡಿತು.'}
            </p>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {language === 'en'
                ? 'What began as a small initiative has grown into a comprehensive eye care program serving hundreds of communities across Karnataka, driven by compassion and unwavering commitment to social service.'
                : 'ಮೂರು ದಶಕಗಳಲ್ಲಿ, ನಾವು 500+ ಕಣ್ಣಿನ ಶಿಬಿರಗಳನ್ನು ನಡೆಸಿದ್ದೇವೆ, ಸಾವಿರಾರು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳನ್ನು ಮಾಡಿದ್ದೇವೆ ಮತ್ತು ಅಗತ್ಯವಿರುವವರಿಗೆ ಕನ್ನಡಕಗಳನ್ನು ವಿತರಿಸಿದ್ದೇವೆ.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-green-100">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <Eye className="w-16 h-16 lg:w-24 lg:h-24" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
