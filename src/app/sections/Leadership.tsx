import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Heart, Award, UserCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Leadership() {
  const { language } = useLanguage();

  return (
    <section id="leadership" className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
            {language === 'en' ? 'Leadership' : 'ನಾಯಕತ್ವ'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-6 sm:mb-8"></div>
          {/* <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Meet the dedicated visionary leading our mission for three decades'
              : 'ಮೂರು ದಶಕ ಧರೆ ನಮ್ಮ ಧ್ಯೇಯದಲ್ಲಿ ನಾಯಕತ್ವ ನೀಡುತ್ತಿರುವ ಸಮರ್ಪಿತ ದೃಷ್ಟಿಧಾರೀಯನನ್ನು ಭೇಟಿ ಮಾಡಿ'}
          </p> */}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full h-full">
            {/* Profile Image Section */}
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 lg:p-12 flex flex-col items-center justify-start lg:justify-center">
              <div className="text-center w-full">
                <div className="w-48 h-48 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center overflow-hidden shadow-xl">
                  <UserCircle2 className="w-100 h-100 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Jambunath Gouda</h3>
                <p className="text-xs text-gray-600 mb-1">
                  {language === 'en' ? 'Consultant Obstetrician & Gynaecologist' : 'ಸಲಹೆಗಾರ ಪ್ರಸೂತಿ ಮತ್ತು ಸ್ತ್ರೀರೋಗ ತಜ್ಞ'}
                </p>
                <p className="text-xs font-semibold text-[#ff6b35]">
                  {language === 'en' ? 'Social Worker & Secretary' : 'ಸಮಾಜ ಸೇವಕ ಮತ್ತು ಕಾರ್ಯದರ್ಶಿ'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {language === 'en'
                    ? 'Sri Chikkenakoppa Channaveeratata Sharanara Balaga'
                    : 'ಶ್ರೀ ಚಿಕ್ಕೆನಕೊಪ್ಪದ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗ'}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-12 flex flex-col justify-start">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'A life dedicated to rural healing' : 'ಗ್ರಾಮೀಣ ಚಿಕಿತ್ಸೆಗೆ ಸಮರ್ಪಿತ ಜೀವನ'}
              </h2>

              <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
                <p>
                  {language === 'en'
                    ? 'Dr. Jambunath Gouda is the heart and soul of Sri Chikkenakoppa Channaveeratata Sharanara Balaga. A Consultant Obstetrician & Gynaecologist, he has dedicated more than 45 years to serving rural Karnataka — long before it was easy or recognised.'
                    : 'ಡಾ. ಜಂಬುನಾಥ ಗೌಡ ಶ್ರೀ ಚಿಕ್ಕೆನಕೊಪ್ಪದ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗದ ಹೃದಯ ಮತ್ತು ಆತ್ಮ. ಸಲಹೆಗಾರ ಪ್ರಸೂತಿ ಮತ್ತು ಸ್ತ್ರೀರೋಗ ತಜ್ಞರಾಗಿ, ಅವರು 45 ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸಿದ್ದಾರೆ.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'In 1990, moved by the suffering of villagers losing their sight to untreated cataracts, he founded Sri Chikkenakoppa Channaveeratata Sharanara Balaga as a small trust to bring free eye care to those who could afford it. What began with a handful of volunteers has, under his quiet leadership, grown into one of North Karnataka\'s most trusted rural healthcare initiatives.'
                    : '1990 ರಲ್ಲಿ, ಚಿಕಿತ್ಸೆ ಪಡೆಯದ ಕಣ್ಣಿನ ಪೊರೆಯಿಂದ ದೃಷ್ಟಿ ಕಳೆದುಕೊಳ್ಳುವ ಗ್ರಾಮೀಣರ ಸಂಕಟದಿಂದ ಪ್ರೇರಿತರಾಗಿ, ಉಚಿತ ಕಣ್ಣಿನ ಆರೈಕೆಯನ್ನು ತರಲು ಶ್ರೀ ಚಿಕ್ಕೆನಕೊಪ್ಪದ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗವನ್ನು ಸಣ್ಣ ಟ್ರಸ್ಟ್ ಆಗಿ ಸ್ಥಾಪಿಸಿದರು.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Beyond medicine, Dr. Gouda is a respected social worker, mentor and community elder. He continues to lead camps personally, train young doctors, and inspire a new generation of volunteers to serve the villages of Karnataka.'
                    : 'ವೈದ್ಯಕೀಯವನ್ನು ಮೀರಿ, ಡಾ. ಗೌಡ ಗೌರವಾನ್ವಿತ ಸಮಾಜ ಸೇವಕ, ಮಾರ್ಗದರ್ಶಕ ಮತ್ತು ಸಮುದಾಯದ ಹಿರಿಯರು. ಅವರು ವೈಯಕ್ತಿಕವಾಗಿ ಶಿಬಿರಗಳನ್ನು ಮುನ್ನಡೆಸುತ್ತಲೇ ಇದ್ದಾರೆ.'}
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#1e3a8a]">45+</div>
                  <div className="text-xs text-gray-600">Years of medical service</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#1e3a8a]">Since 1990</div>
                  <div className="text-xs text-gray-600">Secretary & Founder</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <UserCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#1e3a8a]">Mentor</div>
                  <div className="text-xs text-gray-600">To new doctors</div>
                </div>
                <div className="text-center sm:col-span-1 col-span-2">
                  <button
                    onClick={() => {
                      const element = document.getElementById('donate');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white rounded-lg font-semibold hover:shadow-xl transition-all text-sm"
                  >
                    {language === 'en' ? 'Donate Now' : 'ದಾನ ಮಾಡಿ'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
