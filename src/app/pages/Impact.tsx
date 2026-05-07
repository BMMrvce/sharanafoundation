import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, Users, Eye, Heart, MapPin, Calendar } from 'lucide-react';

export default function Impact() {
  const { language } = useLanguage();

  const stats = [
    { icon: Calendar, value: '35+', label: 'Years of Service' },
    { icon: Eye, value: '500+', label: 'Eye Camps Conducted' },
    { icon: Users, value: '50,000+', label: 'Patients Served' },
    { icon: Heart, value: '5,000+', label: 'Free Surgeries' },
    { icon: MapPin, value: '300+', label: 'Villages Reached' },
    { icon: TrendingUp, value: '15,000+', label: 'Spectacles Distributed' },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Our Impact' : 'ನಮ್ಮ ಪ್ರಭಾವ'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Measuring the difference we make in transforming lives'
              : 'ಜೀವನಗಳನ್ನು ಪರಿವರ್ತಿಸುವಲ್ಲಿ ನಾವು ಮಾಡುವ ವ್ಯತ್ಯಾಸವನ್ನು ಅಳೆಯುವುದು'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
