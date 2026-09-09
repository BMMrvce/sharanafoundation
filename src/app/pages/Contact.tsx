import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, MessageCircle, PhoneCall } from 'lucide-react';

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/logo.png"
                alt="Sharana Balaga logo"
                className="w-72 h-72 sm:w-96 sm:h-96 object-contain"
              />
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
                  <info.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600 text-sm break-words">{info.content}</p>
                  </div>
                </div>
              ))}

              <a
                href="tel:+919448145035"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                {language === 'en' ? 'Call Us' : 'ನಮಗೆ ಕರೆ ಮಾಡಿ'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
