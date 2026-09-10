import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router';
import { Users, HeartHandshake, Megaphone, Stethoscope, ClipboardList, HandCoins, UserPlus } from 'lucide-react';

const opportunities = [
  { icon: Users, en: 'Camp Coordination', kn: 'ಶಿಬಿರ ಸಂಯೋಜನೆ' },
  { icon: HeartHandshake, en: 'Patient Assistance', kn: 'ರೋಗಿಗಳ ಸಹಾಯ' },
  { icon: Megaphone, en: 'Awareness Campaign', kn: 'ಜಾಗೃತಿ ಅಭಿಯಾನ' },
  { icon: Stethoscope, en: 'Medical (Doctors & Nurses)', kn: 'ವೈದ್ಯಕೀಯ (ವೈದ್ಯರು ಮತ್ತು ದಾದಿಯರು)' },
  { icon: ClipboardList, en: 'Record Maintenance', kn: 'ದಾಖಲೆ ನಿರ್ವಹಣೆ' },
  { icon: HandCoins, en: 'Fund Raising Support', kn: 'ನಿಧಿ ಸಂಗ್ರಹ ಬೆಂಬಲ' },
  { icon: UserPlus, en: 'General Volunteer', kn: 'ಸಾಮಾನ್ಯ ಸ್ವಯಂಸೇವಕ' },
];

const associates: { name: string; role?: { en: string; kn: string }; to?: string }[] = [
  { name: 'Vivekananda Sevasharma, Bengaluru', to: '/volunteers/vivekananda-sevashrama' },
  { name: 'IMA Kampli & Gangavathi' },
  { name: 'Venkatesh Murthy', role: { en: 'Chairman, VKS', kn: 'ಅಧ್ಯಕ್ಷರು, VKS' } },
  { name: 'Dr Chetan & Team', role: { en: 'Ophthalmic Surgeon', kn: 'ನೇತ್ರ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರು' } },
  { name: 'Kampli Taluk Pharmacists Associations' },
  { name: 'BioVitamins Pvt Ltd' },
  { name: 'Gopi Charitable Blood Center', role: { en: 'Gangavathi & Kampli', kn: 'ಗಂಗಾವತಿ ಮತ್ತು ಕಂಪ್ಲಿ' } },
  { name: 'Sun Pharma, Kampli' },
  { name: 'Ambedkar Sangha' },
  { name: 'Jain Sangha' },
  { name: 'Veerashaiva Sangha' },
];

const logos = [
  { src: '/assets/associates/biovitamins.png', alt: 'BioVitamins Private Limited' },
  { src: '/assets/associates/ima.jpeg', alt: 'Indian Medical Association' },
  { src: '/assets/associates/sun-pharma.png', alt: 'Sun Pharma' },
];

export default function Volunteers() {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Volunteers & Associates' : 'ಸ್ವಯಂಸೇವಕರು ಮತ್ತು ಸಹಭಾಗಿಗಳು'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Welcome to the world of gifting sight to the needy. Become a volunteer.'
              : 'ಅಗತ್ಯವಿರುವವರಿಗೆ ದೃಷ್ಟಿಯ ಕೊಡುಗೆ ನೀಡುವ ಜಗತ್ತಿಗೆ ಸ್ವಾಗತ. ಸ್ವಯಂಸೇವಕರಾಗಿ.'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {language === 'en' ? 'Volunteer Opportunities' : 'ಸ್ವಯಂಸೇವಕ ಅವಕಾಶಗಳು'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((op) => (
              <div
                key={op.en}
                className="flex flex-col items-center text-center gap-3 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                  <op.icon className="w-7 h-7 text-white" />
                </div>
                <span className="font-semibold text-gray-900">{language === 'en' ? op.en : op.kn}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-colors"
            >
              {language === 'en' ? 'Click Here to Register for Volunteer' : 'ಸ್ವಯಂಸೇವಕರಾಗಿ ನೋಂದಾಯಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ'}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            {language === 'en' ? 'Our Esteemed Associates' : 'ನಮ್ಮ ಗೌರವಾನ್ವಿತ ಸಹಭಾಗಿಗಳು'}
          </h2>
          <p className="text-center text-blue-600 font-semibold mb-10">
            {language === 'en' ? 'Together we serve' : 'ಒಟ್ಟಾಗಿ ನಾವು ಸೇವೆ ಸಲ್ಲಿಸುತ್ತೇವೆ'}
          </p>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 mb-16">
            {associates.map((a) =>
              a.to ? (
                <Link
                  key={a.name}
                  to={a.to}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold text-blue-700">{a.name}</p>
                  {a.role ? <p className="text-sm text-gray-500 mt-1">{a.role[language]}</p> : null}
                </Link>
              ) : (
                <div key={a.name} className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-semibold text-gray-900">{a.name}</p>
                  {a.role ? <p className="text-sm text-gray-500 mt-1">{a.role[language]}</p> : null}
                </div>
              ),
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {logos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center h-36 w-80 px-6">
                <img src={logo.src} alt={logo.alt} className="max-h-28 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
