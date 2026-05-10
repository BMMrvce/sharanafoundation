import { useLanguage } from '../contexts/LanguageContext';
import { Award, Heart, Users, TrendingUp } from 'lucide-react';

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
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {(language === 'en' ? leadershipStory.en : leadershipStory.kn).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
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
