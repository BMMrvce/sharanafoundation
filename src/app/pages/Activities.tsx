import { useLanguage } from '../contexts/LanguageContext';
import { Eye, Heart, Glasses, Users, TrendingUp, MessageCircle } from 'lucide-react';

export default function Activities() {
  const { language } = useLanguage();

  const activities = [
    { icon: Eye, title: 'Free Eye Checkups', desc: 'Comprehensive eye examinations in rural villages' },
    { icon: Heart, title: 'Cataract Surgeries', desc: 'Free surgical intervention using modern techniques' },
    { icon: Glasses, title: 'Spectacles Distribution', desc: 'Providing prescription eyeglasses to those in need' },
    { icon: Users, title: 'Rural Outreach Camps', desc: 'Mobile medical camps in remote villages' },
    { icon: MessageCircle, title: 'Awareness Programs', desc: 'Educational sessions on eye health' },
    { icon: TrendingUp, title: 'Community Welfare', desc: 'Supporting overall community health initiatives' },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Our Activities' : 'ನಮ್ಮ ಚಟುವಟಿಕೆಗಳು'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Comprehensive eye care services bringing hope to rural Karnataka'
              : 'ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕಕ್ಕೆ ಭರವಸೆಯನ್ನು ತರುವ ಸಮಗ್ರ ಕಣ್ಣಿನ ಆರೈಕೆ ಸೇವೆಗಳು'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-6">
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
