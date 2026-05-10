import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
            {language === 'en' ? 'Contact Us' : 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-6 sm:mb-8"></div>
          </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
          {[
            {
              icon: MapPin,
              title: language === 'en' ? 'Address' : 'ವಿಳಾಸ',
              content:
                language === 'en'
                  ? 'Kottureshwara Maternity Home, Opp: SMGJ Boys College, Kampli Road, KAMPLI - 583132, Kampli Tq. Bellary Dist. Karnataka State'
                  : 'ಕೊಟ್ಟೂರೇಶ್ವರ ಪ್ರಸೂತಿ ಹೋಮ್, ಎಸ್.ಎಂ.ಜಿ.ಜೆ. ಬಾಯ್ಸ್ ಕಾಲೇಜ್ ಎದುರು, ಕೊತ್ತಾಲ್ ರಸ್ತೆ, ಕಂಪ್ಲಿ - 583132, ಕಂಪ್ಲಿ ತಾ. ಬಳ್ಳಾರಿ ಜಿಲ್ಲೆ. ಕರ್ನಾಟಕ ರಾಜ್ಯ',
              color: 'from-blue-500 to-blue-600',
            },
            {
              icon: Phone,
              title: language === 'en' ? 'Phone' : 'ದೂರವಾಣಿ',
              content: '+91 94481 45035',
              color: 'from-green-500 to-green-600',
            },
            {
              icon: Mail,
              title: language === 'en' ? 'Email' : 'ಇಮೇಲ್',
              content: 'sharanarabalaga@outlook.com',
              color: 'from-purple-500 to-purple-600',
            },
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              content: '+91 94481 45035 ',
              color: 'from-orange-500 to-orange-600',
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center hover:shadow-2xl transition-all"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center`}>
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600 text-sm break-words">{info.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
