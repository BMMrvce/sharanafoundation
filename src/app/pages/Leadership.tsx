import { useLanguage } from '../contexts/LanguageContext';
import { Award, Heart, Users, TrendingUp } from 'lucide-react';

export default function Leadership() {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Leadership' : 'ನಾಯಕತ್ವ'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Visionary leadership driving social change for over four decades'
              : 'ನಾಲ್ಕು ದಶಕಗಳಿಂದ ಸಾಮಾಜಿಕ ಬದಲಾವಣೆಯನ್ನು ಮುನ್ನಡೆಸುವ ದೂರದೃಷ್ಟಿಯ ನಾಯಕತ್ವ'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Dr. Jambunath Gouda</h2>
              <p className="text-xl text-blue-600">
                {language === 'en'
                  ? 'Consultant Obstetrician & Gynaecologist | Social Worker | Secretary of Sharana Balaga'
                  : 'ಸಲಹೆಗಾರ ಪ್ರಸೂತಿ ಮತ್ತು ಸ್ತ್ರೀರೋಗ ತಜ್ಞ | ಸಮಾಜ ಸೇವಕ | ಶರಣ ಬಳಗದ ಕಾರ್ಯದರ್ಶಿ'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'With over 45 years of dedicated service to rural healthcare, Dr. Jambunath Gouda has been the driving force behind Sharana Balaga\'s humanitarian mission. His unwavering commitment to bringing medical care to underserved communities has transformed thousands of lives.'
                  : '45 ವರ್ಷಗಳ ಗ್ರಾಮೀಣ ಆರೋಗ್ಯ ಸೇವೆಯೊಂದಿಗೆ, ಶರಣ ಬಳಗದ ಮಾನವೀಯ ಧ್ಯೇಯದ ಹಿಂದಿನ ಪ್ರೇರಕ ಶಕ್ತಿ ಡಾ. ಜಂಬುನಾಥ ಗೌಡ.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Award, title: '35+ Years', desc: 'Founded Sharana Balaga in 1990' },
                { icon: Users, title: '50,000+', desc: 'Lives touched through eye care' },
                { icon: Heart, title: 'Community Impact', desc: 'Served 300+ villages' },
                { icon: TrendingUp, title: 'Medical Excellence', desc: '45+ years in practice' },
              ].map((achievement, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
