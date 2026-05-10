import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { ActivityCard } from '../components/activities/ActivityCard';
import { useSheetActivities } from '../hooks/useSheetActivities';

export default function Events() {
  const { language } = useLanguage();
  const { activities, isLoading, error, refresh } = useSheetActivities();

  return (
    <section id="events" className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
            {language === 'en' ? 'Camps & Activities' : 'ಶಿಬಿರಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳು'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-6 sm:mb-8"></div>
          {/* <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Updated directly from our Google Sheet by the NGO team.'
              : 'ಎನ್‌ಜಿಒ ತಂಡವು ನೇರವಾಗಿ ಗೂಗಲ್ ಶೀಟ್‌ನಿಂದ ನವೀಕರಿಸುತ್ತದೆ.'}
          </p> */}
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-56 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 animate-pulse"
              />
            ))}
          </div>
        ) : null}

        {!isLoading && error ? (
          <div className="max-w-2xl mx-auto text-center bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-red-700 mb-2">
              {language === 'en' ? 'Unable to load activities' : 'ಚಟುವಟಿಕೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ'}
            </h3>
            <p className="text-red-700/90 mb-5">{error}</p>
            <button
              type="button"
              onClick={() => {
                void refresh();
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#1e3a8a] text-white font-semibold hover:bg-[#1a3278] transition-colors"
            >
              {language === 'en' ? 'Try Again' : 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ'}
            </button>
          </div>
        ) : null}

        {!isLoading && !error && activities.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
              {language === 'en' ? 'No activities listed yet' : 'ಇನ್ನೂ ಯಾವುದೇ ಚಟುವಟಿಕೆಗಳನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? 'Please check back soon. New rows in the sheet appear here automatically.'
                : 'ದಯವಿಟ್ಟು ನಂತರ ಪರಿಶೀಲಿಸಿ. ಶೀಟ್‌ನಲ್ಲಿನ ಹೊಸ ಸಾಲುಗಳು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.'}
            </p>
          </div>
        ) : null}

        {!isLoading && !error && activities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <ActivityCard activity={activity} />
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
