import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();

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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Address', content: 'Karnataka, India' },
              { icon: Phone, title: 'Phone', content: '+91 XXXXX XXXXX' },
              { icon: Mail, title: 'Email', content: 'info@sharanabalaga.in' },
            ].map((info, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
                <info.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
