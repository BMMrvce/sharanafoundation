import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'en' ? 'Address' : 'ವಿಳಾಸ',
      content:
        language === 'en'
          ? 'Kottureshwara Maternity Home, Opp: SMGJ Boys College, Kampli Road, KAMPLI - 583132, Kampli Tq. Bellary Dist. Karnataka State'
          : 'ಕೊಟ್ಟೂರೇಶ್ವರ ಪ್ರಸೂತಿ ಹೋಮ್, ಎಸ್.ಎಂ.ಜಿ.ಜೆ. ಬಾಯ್ಸ್ ಕಾಲೇಜ್ ಎದುರು, ಕೊತ್ತಾಲ್ ರಸ್ತೆ, ಕಂಪ್ಲಿ - 583132, ಕಂಪ್ಲಿ ತಾ. ಬಳ್ಳಾರಿ ಜಿಲ್ಲೆ. ಕರ್ನಾಟಕ ರಾಜ್ಯ',
    },
    {
      icon: Phone,
      title: language === 'en' ? 'Phone' : 'ದೂರವಾಣಿ',
      content: '+91 94481 45035',
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Email' : 'ಇಮೇಲ್',
      content: 'sharanarabalaga@outlook.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+91 94481 45035',
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Contact Us' : 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {contactInfo.map((info, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
                <info.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm break-words">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
