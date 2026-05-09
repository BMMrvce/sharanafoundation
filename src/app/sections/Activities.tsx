import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Eye, Heart, Glasses, Users, TrendingUp, MessageCircle } from 'lucide-react';

export default function Activities() {
  const { language } = useLanguage();

  const activities = [
    {
      icon: Eye,
      title: language === 'en' ? 'Free Eye Checkups' : 'ಉಚಿತ ಕಣ್ಣಿನ ಪರೀಕ್ಷೆಗಳು',
      desc: language === 'en'
        ? 'Comprehensive eye examinations in rural villages by qualified ophthalmologists'
        : 'ಅರ್ಹ ನೇತ್ರಶಾಸ್ತ್ರಜ್ಞರಿಂದ ಗ್ರಾಮೀಣ ಹಳ್ಳಿಗಳಲ್ಲಿ ಸಮಗ್ರ ಕಣ್ಣಿನ ಪರೀಕ್ಷೆಗಳು',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Cataract Surgeries' : 'ಕಣ್ಣಿನ ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು',
      desc: language === 'en'
        ? 'Free surgical intervention using modern techniques and equipment'
        : 'ಆಧುನಿಕ ತಂತ್ರಗಳು ಮತ್ತು ಸಾಧನಗಳನ್ನು ಬಳಸಿ ಉಚಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Glasses,
      title: language === 'en' ? 'Spectacles Distribution' : 'ಕನ್ನಡಕಗಳ ವಿತರಣೆ',
      desc: language === 'en'
        ? 'Providing prescription eyeglasses to students, elderly, and those in need'
        : 'ವಿದ್ಯಾರ್ಥಿಗಳು, ಹಿರಿಯರು ಮತ್ತು ಅಗತ್ಯವಿರುವವರಿಗೆ ಕನ್ನಡಕಗಳು',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: language === 'en' ? 'Rural Outreach Camps' : 'ಗ್ರಾಮೀಣ ಪ್ರದೇಶ ಶಿಬಿರಗಳು',
      desc: language === 'en'
        ? 'Mobile medical camps reaching the remotest villages'
        : 'ದೂರದ ಹಳ್ಳಿಗಳನ್ನು ತಲುಪುವ ಚಲಿಸುವ ವೈದ್ಯಕೀಯ ಶಿಬಿರಗಳು',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: MessageCircle,
      title: language === 'en' ? 'Awareness Programs' : 'ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು',
      desc: language === 'en'
        ? 'Educational sessions on eye health and prevention'
        : 'ಕಣ್ಣಿನ ಆರೋಗ್ಯ ಮತ್ತು ತಡೆಗಟ್ಟುವಿಕೆಯ ಬಗ್ಗೆ ಶಿಕ್ಷಣ',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Community Welfare' : 'ಸಮುದಾಯ ಕಲ್ಯಾಣ',
      desc: language === 'en'
        ? 'Supporting overall community health and development'
        : 'ಒಟ್ಟಾರೆ ಸಮುದಾಯ ಆರೋಗ್ಯ ಮತ್ತು ಅಭಿವೃದ್ಧಿ',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section id="activities" className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
            {language === 'en' ? 'Our Activities' : 'ನಮ್ಮ ಚಟುವಟಿಕೆಗಳು'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Comprehensive eye care services bringing hope to rural Karnataka'
              : 'ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕಕ್ಕೆ ಭರವಸೆಯನ್ನು ತರುವ ಸಮಗ್ರ ಕಣ್ಣಿನ ಆರೈಕೆ ಸೇವೆಗಳು'}
          </p>
        </motion.div>

        <div className="mb-12 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-amber-100 p-6 sm:p-8 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <p className="inline-flex items-center rounded-full bg-[#1e3a8a] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">
              {language === 'en' ? 'Since 1991' : '1991 ರಿಂದ'}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {language === 'en'
                ? 'Patient support that continues after surgery and during every camp'
                : 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರವೂ ಮತ್ತು ಪ್ರತಿಯೊಂದು ಶಿಬಿರದಲ್ಲಿಯೂ ಮುಂದುವರಿಯುವ ರೋಗಿ ಸಹಾಯ'}
            </h3>
            <div className="grid gap-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <div className="rounded-2xl bg-white/80 border border-amber-100 p-4 sm:p-5 shadow-sm">
                <p className="font-semibold text-[#1e3a8a] mb-2">
                  {language === 'en' ? 'Free support for operated patients' : 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೊಂಡ ರೋಗಿಗಳಿಗೆ ಉಚಿತ ಸಹಾಯ'}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {language === 'en' ? 'Free medicine' : 'ಉಚಿತ ಔಷಧಿ'}
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {language === 'en' ? 'Free food' : 'ಉಚಿತ ಆಹಾರ'}
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {language === 'en' ? 'Free spectacles' : 'ಉಚಿತ ಕನ್ನಡಕ'}
                  </span>
                </div>
                <p>
                  {language === 'en'
                    ? 'We provide free medicine, spectacles, and food to all operated patients, and free food for attenders until the patient is discharged.'
                    : 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೊಂಡ ಎಲ್ಲಾ ರೋಗಿಗಳಿಗೆ ಉಚಿತ ಔಷಧಿ, ಕನ್ನಡಕ ಮತ್ತು ಆಹಾರವನ್ನು ನೀಡುತ್ತೇವೆ; ರೋಗಿ ಬಿಡುಗಡೆಯಾಗುವವರೆಗೆ ಜೊತೆಯಲ್ಲಿರುವವರಿಗೆ ಕೂಡ ಉಚಿತ ಆಹಾರ ಒದಗಿಸುತ್ತೇವೆ.'}
                </p>
              </div>

              <div className="rounded-2xl bg-white/80 border border-amber-100 p-4 sm:p-5 shadow-sm">
                <p className="font-semibold text-[#1e3a8a] mb-2">
                  {language === 'en' ? 'Special camp tradition' : 'ವಿಶೇಷ ಶಿಬಿರ ಸಂಪ್ರದಾಯ'}
                </p>
                <p>
                  {language === 'en'
                    ? 'During eye camps, we give saris to all operated female patients, female attenders, and female volunteers as a mark of muttaiyederige udi tumbuva karya.'
                    : 'ಕಣ್ಣಿನ ಶಿಬಿರಗಳ ಸಂದರ್ಭದಲ್ಲಿ, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೊಂಡ ಮಹಿಳಾ ರೋಗಿಗಳು, ಮಹಿಳಾ ಜೊತೆಯಲ್ಲಿರುವವರು ಮತ್ತು ಮಹಿಳಾ ಸ್ವಯಂಸೇವಕರಿಗೆ ಮುತ್ತೈದೆಯರಿಗೆ ಉಡಿ ತುಂಬುವ ಕಾರ್ಯದ ಅಂಗವಾಗಿ ಸೀರೆಗಳನ್ನು ನೀಡುತ್ತೇವೆ.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all group"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                <activity.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{activity.title}</h3>
              <p className="text-gray-600 leading-relaxed">{activity.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
