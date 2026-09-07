import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ImageZoomModal from '../components/figma/ImageZoomModal';

const galleryImages = [
  '/assets/upcoming-project/01-3d-render.jpg',
  '/assets/upcoming-project/02-bhoomi-pooja-banner.jpg',
  '/assets/upcoming-project/03-bhoomi-pooja-ceremony-1.jpg',
  '/assets/upcoming-project/04-bhoomi-pooja-ceremony-2.jpg',
  '/assets/upcoming-project/05-foundation-columns-group.jpg',
  '/assets/upcoming-project/06-ground-floor-construction.jpg',
  '/assets/upcoming-project/07-walls-aerial-view.jpg',
  '/assets/upcoming-project/08-first-floor-scaffolding-group.jpg',
  '/assets/upcoming-project/09-roof-casting-mixer.jpg',
  '/assets/upcoming-project/10-structure-complete-front.jpg',
  '/assets/upcoming-project/11-building-side-view.jpg',
  '/assets/upcoming-project/12-building-front-view.jpg',
  '/assets/upcoming-project/13-building-recent-view.jpg',
  '/assets/upcoming-project/14-bhoomi-pooja-ceremony-3.jpg',
];

const projectFacts: { label: { en: string; kn: string }; value: { en: string; kn: string } }[] = [
  { label: { en: 'Location', kn: 'ಸ್ಥಳ' }, value: { en: 'Opposite Sai Baba Temple, Kottal Road', kn: 'ಸಾಯಿ ಬಾಬಾ ದೇವಸ್ಥಾನದ ಎದುರು, ಕೊಟ್ಟಾಲ್ ರಸ್ತೆ' } },
  { label: { en: 'Land Area', kn: 'ಭೂಮಿಯ ವಿಸ್ತೀರ್ಣ' }, value: { en: '11,970 Sft', kn: '11,970 ಚದರ ಅಡಿ' } },
  { label: { en: 'Total Built-up Area', kn: 'ಒಟ್ಟು ನಿರ್ಮಾಣ ಪ್ರದೇಶ' }, value: { en: '80 x 55 = 4,400 Sft', kn: '80 x 55 = 4,400 ಚದರ ಅಡಿ' } },
  { label: { en: 'Floors', kn: 'ಮಹಡಿಗಳು' }, value: { en: 'Ground + 1', kn: 'ನೆಲ + 1' } },
  { label: { en: 'Beds', kn: 'ಹಾಸಿಗೆಗಳು' }, value: { en: '10 Male, 10 Female', kn: '10 ಪುರುಷ, 10 ಮಹಿಳೆ' } },
  { label: { en: 'Operation Theatres', kn: 'ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಕೊಠಡಿಗಳು' }, value: { en: '2 (1 Major, 1 Minor)', kn: '2 (1 ಪ್ರಮುಖ, 1 ಸಣ್ಣ)' } },
  { label: { en: 'Estimated Building Cost', kn: 'ಅಂದಾಜು ನಿರ್ಮಾಣ ವೆಚ್ಚ' }, value: { en: '₹300 Lakhs approx. (excluding land)', kn: 'ಸುಮಾರು ₹300 ಲಕ್ಷ (ಭೂಮಿ ಹೊರತುಪಡಿಸಿ)' } },
];

export default function UpcomingProject() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Upcoming Project' : 'ಮುಂಬರುವ ಯೋಜನೆ'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Sri Chikkenakoppa Channaveera Sharanara Charitable Eye Care Hospital'
              : 'ಶ್ರೀ ಚಿಕ್ಕೇನಕೊಪ್ಪ ಚನ್ನವೀರ ಶರಣರ ಚಾರಿಟಬಲ್ ಐ ಕೇರ್ ಆಸ್ಪತ್ರೆ'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Dream in the Making' : 'ಕನಸಿನ ಸಾಕಾರ'}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {language === 'en'
              ? 'With deep gratitude, we are proud to share our new venture: a state-of-the-art charitable eye care hospital with all modern facilities and equipment, where every service is free and patient care and comfort remain our top priority. An eye bank is proposed to be added to this premises at a later stage.'
              : 'ಆಳವಾದ ಕೃತಜ್ಞತೆಯೊಂದಿಗೆ, ನಮ್ಮ ಹೊಸ ಯೋಜನೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ನಾವು ಹೆಮ್ಮೆಪಡುತ್ತೇವೆ: ಎಲ್ಲಾ ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ಹೊಂದಿರುವ ಅತ್ಯಾಧುನಿಕ ಚಾರಿಟಬಲ್ ಕಣ್ಣಿನ ಆಸ್ಪತ್ರೆ, ಇಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಸೇವೆ ಉಚಿತವಾಗಿದ್ದು ರೋಗಿಗಳ ಆರೈಕೆ ಮತ್ತು ಸೌಕರ್ಯವೇ ನಮ್ಮ ಮೊದಲ ಆದ್ಯತೆ. ನಂತರದ ಹಂತದಲ್ಲಿ ಇದೇ ಆವರಣದಲ್ಲಿ ಐ ಬ್ಯಾಂಕ್ ಸೇರಿಸುವ ಪ್ರಸ್ತಾಪವಿದೆ.'}
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {projectFacts.map((fact) => (
              <div key={fact.label.en} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 flex justify-between items-center gap-4">
                <span className="text-gray-500 font-medium">{fact.label[language]}</span>
                <span className="text-gray-900 font-semibold text-right">{fact.value[language]}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-6 max-w-4xl">
            <h3 className="text-xl font-bold text-orange-900 mb-2">
              {language === 'en' ? 'Status of the Project' : 'ಯೋಜನೆಯ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ'}
            </h3>
            <p className="text-orange-900">
              {language === 'en'
                ? 'Civil works are 80% complete. Approximate expenditure incurred as on 30th July 2026 is around ₹150 Lakhs.'
                : 'ಸಿವಿಲ್ ಕಾಮಗಾರಿ ಶೇ. 80ರಷ್ಟು ಪೂರ್ಣಗೊಂಡಿದೆ. 30 ಜುಲೈ 2026ರವರೆಗೆ ಅಂದಾಜು ₹150 ಲಕ್ಷ ವೆಚ್ಚವಾಗಿದೆ.'}
            </p>
          </div>

          <div className="mt-12 max-w-md">
            <h3 className="text-xl font-bold text-gray-900 underline mb-4">
              {language === 'en' ? 'Our Esteemed Donor' : 'ನಮ್ಮ ಗೌರವಾನ್ವಿತ ದಾನಿಗಳು'}
            </h3>
            <button
              onClick={() => setSelectedImage('/assets/upcoming-project/00-esteemed-donor.jpg')}
              className="block w-full rounded-2xl overflow-hidden shadow-md cursor-zoom-in"
            >
              <ImageWithFallback
                src="/assets/upcoming-project/00-esteemed-donor.jpg"
                alt="Smt & Sri Polur Narayanappa and Laxmidevi"
                className="w-full h-auto"
              />
            </button>
            <p className="mt-4 text-lg font-semibold text-gray-900">
              {language === 'en' ? 'Smt & Sri Polur Narayanappa & Laxmidevi' : 'ಶ್ರೀಮತಿ ಮತ್ತು ಶ್ರೀ ಪೊಲೂರ್ ನಾರಾಯಣಪ್ಪ & ಲಕ್ಷ್ಮಿದೇವಿ'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Project Gallery' : 'ಯೋಜನೆಯ ಗ್ಯಾಲರಿ'}
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            {language === 'en'
              ? 'Follow the journey from the groundbreaking Bhoomi Pooja ceremony to the current stage of construction.'
              : 'ಭೂಮಿ ಪೂಜೆಯಿಂದ ಆರಂಭಿಸಿ ಪ್ರಸ್ತುತ ನಿರ್ಮಾಣ ಹಂತದವರೆಗಿನ ಪ್ರಯಾಣ.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <button
                key={src}
                onClick={() => setSelectedImage(src)}
                className="aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-zoom-in group"
              >
                <ImageWithFallback
                  src={src}
                  alt={`Upcoming project stage ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>

          {selectedImage ? (
            <ImageZoomModal src={selectedImage} alt="Upcoming project" onClose={() => setSelectedImage(null)} />
          ) : null}
        </div>
      </section>
    </div>
  );
}
