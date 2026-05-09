import { useLanguage } from '../contexts/LanguageContext';
import { Eye, Heart } from 'lucide-react';

export default function Impact() {
  const { language, t } = useLanguage();

  const stats = [
    { icon: Eye, value: '25', label: t('eyeCampsConducted') },
    { icon: Heart, value: '10,000', label: t('surgeriesCompleted') },
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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
