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
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-2">Activity & Impact</h2>
              <p className="text-sm text-gray-500 italic">(from Eye care & Eye Healing)</p>
              <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mt-4"></div>
            </div>

            {/* Area Outreach */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#1e3a8a] mb-2">
                  Towns / Pattana Panchayat
                </p>
                <p className="text-gray-700 leading-relaxed">Kampli, Gangavathi, Hosapete, Kamalapur</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-slate-50 border border-orange-100 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#ff6b35] mb-2">
                  Villages & Camps
                </p>
                <p className="text-3xl font-bold text-gray-900">50+</p>
              </div>
            </div>

            {/* Awareness Programmes & Camps */}
            <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
              <div className="bg-[#1e3a8a] px-6 py-4">
                <h3 className="text-white font-bold text-lg">Awareness Programmes & Camps</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { label: 'Eye care', value: 'Every Year' },
                  { label: 'Deworming', value: "Every Year on Independence Day for children of Govt schools" },
                  { label: 'Hepatitis B', value: '09' },
                  { label: 'Cancer Detection', value: '03' },
                  { label: 'Dental Awareness', value: '05' },
                  { label: 'Eye Camp', value: '25 (now discontinued since 2023 due to Govt regulations)' },
                  { label: "Cataract Surgery's", value: '10,000' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-6 py-3"
                  >
                    <span className="font-semibold text-gray-900">{row.label}</span>
                    <span className="text-gray-600 sm:text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 mb-8">
              <div className="rounded-2xl bg-white/80 border border-amber-100 p-4 sm:p-5 shadow-sm">
                <p className="font-semibold text-[#1e3a8a] mb-2">Free Tubectomy</p>
                <p className="text-gray-700 leading-relaxed">
                  On the 50th year of India's independence (1997) the sangha conducted a free Tubectomy camp
                  and more than 100 patients availed the facility.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-amber-100 p-4 sm:p-5 shadow-sm">
                <p className="font-semibold text-[#1e3a8a] mb-2">Polio & Triple Antigen</p>
                <p className="text-gray-700 leading-relaxed">
                  Since inception, the dose was given every month to new-born children, but this has now been
                  discontinued due to Govt regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-amber-100 p-6 sm:p-8 shadow-sm">
            <div className="max-w-4xl">
              <p className="inline-flex items-center rounded-full bg-[#1e3a8a] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">
                {language === 'en' ? 'Since 1991' : '1991 ರಿಂದ'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {language === 'en'
                  ? 'Patient support that continues after surgery and during every camp'
                  : 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರವೂ ಮತ್ತು ಪ್ರತಿಯೊಂದು ಶಿಬಿರದಲ್ಲಿಯೂ ಮುಂದುವರಿಯುವ ರೋಗಿ ಸಹಾಯ'}
              </h2>
              <div className="grid gap-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <div className="rounded-2xl bg-white/80 border border-amber-100 p-4 sm:p-5 shadow-sm">
                  <p className="font-semibold text-[#1e3a8a] mb-2">
                    {language === 'en' ? 'Free support for operated patients' : 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೊಂಡ ರೋಗಿಗಳಿಗೆ ಉಚಿತ ಸಹಾಯ'}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {language === 'en' ? 'Free medicine' : 'ಉಚಿತ ಔಷಧಿ'}
                    </span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {language === 'en' ? 'Free food' : 'ಉಚಿತ ಆಹಾರ'}
                    </span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {language === 'en' ? 'Free spectacles' : 'ಉಚಿತ ಕನ್ನಡಕ'}
                    </span>
                  </div>
                  <p>
                    {language === 'en'
                      ? 'We provide free food, accommodation, medicine, and spectacles for all cataract surgery patients along with their attenders until the patient is discharged.'
                      : 'ಎಲ್ಲಾ ಕಣ್ಣಿನ ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೊಂಡ ರೋಗಿಗಳಿಗೆ ಮತ್ತು ಅವರ ಜೊತೆಯಲ್ಲಿರುವವರಿಗೆ ರೋಗಿ ಬಿಡುಗಡೆಯಾಗುವವರೆಗೆ ಉಚಿತ ಆಹಾರ, ವಸತಿ, ಔಷಧಿ ಮತ್ತು ಕನ್ನಡಕವನ್ನು ಒದಗಿಸುತ್ತೇವೆ.'}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-amber-100 p-4 sm:p-5 shadow-sm">
                  <p className="font-semibold text-[#1e3a8a] mb-2">
                    {language === 'en' ? 'Special camp tradition' : 'ವಿಶೇಷ ಶಿಬಿರ ಸಂಪ್ರದಾಯ'}
                  </p>
                  <p>
                    {language === 'en'
                      ? 'During our eye camps, we present saris to all operated female patients, female attenders, and female volunteers as part of the muttaiyederige udi tumbuva karya.'
                      : 'ನಮ್ಮ ಕಣ್ಣಿನ ಶಿಬಿರಗಳ ಸಂದರ್ಭದಲ್ಲಿ, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೊಂಡ ಎಲ್ಲಾ ಮಹಿಳಾ ರೋಗಿಗಳು, ಮಹಿಳಾ ಜೊತೆಯಲ್ಲಿರುವವರು ಮತ್ತು ಮಹಿಳಾ ಸ್ವಯಂಸೇವಕರಿಗೆ ಮುತ್ತೈದೆಯರಿಗೆ ಉಡಿ ತುಂಬುವ ಕಾರ್ಯದ ಅಂಗವಾಗಿ ಸೀರೆಗಳನ್ನು ನೀಡುತ್ತೇವೆ.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

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
