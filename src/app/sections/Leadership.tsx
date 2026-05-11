import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Heart, Award, UserCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Leadership() {
  const { language } = useLanguage();

  const leadershipStory = {
    en: [
      'Dr. Jambunath Gouda is the lifeline and driving force behind Sri Chikkenakoppa Channaveeratata Sharanara Balaga. As a consultant obstetrician and gynaecologist, he has continuously served the people of rural Karnataka for more than 45 years, at a time when there was little medical access or recognition for rural communities.',
      'In 1990, moved by the suffering of villagers losing their sight to cataracts, he founded Sri Chikkenakoppa Channaveeratata Sharanara Balaga as a small trust to provide free eye treatment for the poor. What began with only a few volunteers has, under his capable leadership, grown into one of North Karnataka’s most trusted rural healthcare organisations.',
      'Beyond medical service, Dr. Gouda is a respected social worker, mentor, and community elder. He continues to personally lead camps, train young doctors, and inspire a new generation of volunteers to serve the villages of Karnataka.',
    ],
    kn: [
      'ಡಾ. ಜಂಬುನಾಥ ಗೌಡ ಅವರು ಶ್ರೀ ಚಿಕ್ಕೇನಕೊಪ್ಪ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗದ ಜೀವನಾಡಿ ಮತ್ತು ಪ್ರೇರಕ ಶಕ್ತಿಯಾಗಿದ್ದಾರೆ. ಪ್ರಸೂತಿ ಮತ್ತು ಸ್ತ್ರೀರೋಗ ತಜ್ಞರಾಗಿರುವ ಇವರು, ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕದ ಜನತೆಗೆ ಯಾವುದೇ ವೈದ್ಯಕೀಯ ಸೌಲಭ್ಯ ಅಥವಾ ಮನ್ನಣೆ ಇಲ್ಲದ ಕಾಲದಿಂದಲೂ ಕಳೆದ 45 ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ನಿರಂತರವಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಾ ಬಂದಿದ್ದಾರೆ.',
      '1990ರಲ್ಲಿ, ಕಣ್ಣಿನ ಪೊರೆಯಿಂದ ದೃಷ್ಟಿ ಕಳೆದುಕೊಳ್ಳುತ್ತಿದ್ದ ಹಳ್ಳಿಗರ ಸಂಕಷ್ಟವನ್ನು ಕಂಡು ಮರುಗಿದ ಇವರು, ಬಡವರಿಗೆ ಉಚಿತ ಕಣ್ಣಿನ ಚಿಕಿತ್ಸೆ ನೀಡಲು ಶ್ರೀ ಚಿಕ್ಕೇನಕೊಪ್ಪ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗ ಎಂಬ ಸಣ್ಣ ಟ್ರಸ್ಟ್ ಅನ್ನು ಸ್ಥಾಪಿಸಿದರು. ಕೆಲವೇ ಕೆಲವು ಸ್ವಯಂಸೇವಕರಿಂದ ಆರಂಭವಾದ ಈ ಸಂಸ್ಥೆ, ಇಂದು ಅವರ ಸಮರ್ಥ ನಾಯಕತ್ವದಲ್ಲಿ ಉತ್ತರ ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ಗ್ರಾಮೀಣ ಆರೋಗ್ಯ ಸಂಸ್ಥೆಯಾಗಿ ಬೆಳೆದಿದೆ.',
      'ವೈದ್ಯಕೀಯ ಸೇವೆಯ ಜೊತೆಗೆ, ಡಾ. ಜಂಬುನಾಥ ಗೌಡ ಅವರು ಒಬ್ಬ ಗೌರವಾನ್ವಿತ ಸಮಾಜ ಸೇವಕರು, ಮಾರ್ಗದರ್ಶಕರು ಮತ್ತು ಸಮುದಾಯದ ಹಿರಿಯರಾಗಿದ್ದಾರೆ. ಇಂದಿಗೂ ಅವರು ವೈಯಕ್ತಿಕವಾಗಿ ಶಿಬಿರಗಳ ನೇತೃತ್ವ ವಹಿಸುತ್ತಾ, ಯುವ ವೈದ್ಯರಿಗೆ ತರಬೇತಿ ನೀಡುತ್ತಾ, ಕರ್ನಾಟಕದ ಹಳ್ಳಿಗಳಲ್ಲಿ ಸೇವೆ ಸಲ್ಲಿಸಲು ಹೊಸ ತಲೆಮಾರಿನ ಸ್ವಯಂಸೇವಕರಿಗೆ ಸ್ಫೂರ್ತಿಯಾಗಿದ್ದಾರೆ.',
    ],
  };

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
                <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/assets/leader.png" 
                    alt="Dr. Jambunath Gouda"
                    className="w-full h-full object-cover"
                  />
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
                {(language === 'en' ? leadershipStory.en : leadershipStory.kn).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#1e3a8a]">45+</div>
                  <div className="text-xs text-gray-600">
                    {language === 'en' ? 'Years of medical service' : 'ವೈದ್ಯಕೀಯ ಸೇವೆಯ ವರ್ಷಗಳು'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#1e3a8a]">Since 1990</div>
                  <div className="text-xs text-gray-600">
                    {language === 'en' ? 'Secretary & Founder' : 'ಕಾರ್ಯದರ್ಶಿ ಮತ್ತು ಸಂಸ್ಥಾಪಕ'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <UserCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#1e3a8a]">Mentor</div>
                  <div className="text-xs text-gray-600">
                    {language === 'en' ? 'To new doctors' : 'ಹೊಸ ವೈದ್ಯರಿಗೆ'}
                  </div>
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

        {/* Committee Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-3">
              {language === 'en' ? 'Our Board of Directors and Advisers' : 'ನಮ್ಮ ನಿರ್ದೇಶಕರ ಮಂಡಳಿ ಮತ್ತು ಸಲಹೆಗಾರರು'}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              {language === 'en'
                ? 'Visionary leaders and experienced advisers guiding our mission for rural healthcare excellence'
                : 'ಗ್ರಾಮೀಣ ಆರೋಗ್ಯಸೇವೆಯ ಶ್ರೇಷ್ಠತೆಗಾಗಿ ನಮ್ಮ ಧ್ಯೇಯವನ್ನು ದಿಕ್ಸೂಚಿ ನೀಡುತ್ತಿರುವ ದೂರದರ್ಶಿ ನಾಯಕರು ಮತ್ತು ಅನುಭವಿ ಸಲಹೆಗಾರರು'}
            </p>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative group">
              {/* Outer decorative border with gradient shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b35] via-[#1e3a8a] to-[#ff6b35] rounded-3xl opacity-20 group-hover:opacity-40 blur transition duration-300"></div>
              
              {/* Main container with attractive styling */}
              <div className="relative bg-white rounded-3xl border-4 border-[#1e3a8a] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]">
                {/* Image container with inner shadow border */}
                <div className="p-2 bg-gradient-to-br from-[#ff6b35] to-[#1e3a8a]">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <img
                      src="/assets/committee-members.png"
                      alt={language === 'en' ? 'Committee Members' : 'ಸಮಿತಿ ಸದಸ್ಯರು'}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#ff6b35] rounded-full opacity-30"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-[#1e3a8a] rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
