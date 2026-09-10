import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ImageZoomModal from '../components/figma/ImageZoomModal';

const galleryImages = [
  '/assets/vivekananda-sevashrama/01-operating-theatre.jpg',
  '/assets/vivekananda-sevashrama/02-eye-drop-administration.jpg',
  '/assets/vivekananda-sevashrama/03-cataract-camp-patients-hall.jpg',
  '/assets/vivekananda-sevashrama/04-cataract-camp-banner-group.jpg',
  '/assets/vivekananda-sevashrama/05-patients-waiting.jpg',
  '/assets/vivekananda-sevashrama/06-camp-overview.jpg',
  '/assets/vivekananda-sevashrama/07-camp-consultation.jpg',
  '/assets/vivekananda-sevashrama/08-camp-crowd.jpg',
];

const stats: { value: string; label: { en: string; kn: string } }[] = [
  { value: '1976', label: { en: 'Trust Established', kn: 'ಟ್ರಸ್ಟ್ ಸ್ಥಾಪನೆ' } },
  { value: '70,000+', label: { en: 'Free Surgeries Performed', kn: 'ಉಚಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು' } },
  { value: '10-15', label: { en: 'Camps Every Year', kn: 'ವಾರ್ಷಿಕ ಶಿಬಿರಗಳು' } },
  { value: '1,758', label: { en: 'Surgeries in Kampli (till 2020)', kn: 'ಕಂಪ್ಲಿಯಲ್ಲಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು (2020ರವರೆಗೆ)' } },
];

export default function VivekanandaSevashrama() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link
            to="/volunteers"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'en' ? 'Back to Volunteers & Associates' : 'ಸ್ವಯಂಸೇವಕರು ಮತ್ತು ಸಹಭಾಗಿಗಳಿಗೆ ಹಿಂತಿರುಗಿ'}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Sri Vivekananda Sevashrama</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === 'en' ? 'Sight to the Sightless' : 'ದೃಷ್ಟಿಹೀನರಿಗೆ ದೃಷ್ಟಿ'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            {language === 'en' ? (
              <>
                <p>
                  Sri Vivekananda Sevashrama is a registered Charitable Trust established in 1976 with an
                  object to serve the poor in the field of Health and Education. In its initial stages, it
                  functioned through two clinics in the rural areas near Bangalore, providing consultation
                  and medicines free of cost to patients.
                </p>
                <p>
                  In 1991, an Eye Hospital was opened in Bangalore to provide consultation and perform
                  cataract surgeries free of cost — at a time when no hospital besides government
                  hospitals offered free eye care in the city. We provide free consultation and treatment
                  for all eye-related ailments, though most patients come for cataract surgery, which is
                  performed without taking any profit.
                </p>
                <p>
                  Cataract is an age-related ailment affecting almost every individual regardless of
                  economic status. Vision loss can be overcome with a simple surgery lasting about 5-10
                  minutes, but private treatment is costly and many poor patients remain in darkness for
                  years. We therefore arrange 10 to 15 cataract surgery camps a year in rural areas lacking
                  medical and surgical facilities, performing 3,000 to 4,000 free surgeries annually — about
                  70,000 in total so far. All our financial requirements are met through donations from
                  individuals, organisations, and CSR funds from corporates.
                </p>
                <p>
                  Dr. Jambunatha Gowda and Chikkankoppa Sharanara Balaga have been associated with us
                  since 2008. Together we have conducted 6 cataract surgery camps in Kampli, performing
                  1,758 surgeries till 2020. We are glad to see that Dr. Jambunatha Gowda and his associates
                  have constructed an Eye Hospital in Kampli for the poor, and we look forward to renewing
                  our work and joining them in bringing people from darkness to light in their old age.
                </p>
              </>
            ) : (
              <>
                <p>
                  ಶ್ರೀ ವಿವೇಕಾನಂದ ಸೇವಾಶ್ರಮವು 1976ರಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾದ ನೋಂದಾಯಿತ ದತ್ತಿ ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಆರೋಗ್ಯ ಮತ್ತು
                  ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರದಲ್ಲಿ ಬಡವರಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುವ ಉದ್ದೇಶವನ್ನು ಹೊಂದಿದೆ. ಆರಂಭಿಕ ಹಂತಗಳಲ್ಲಿ, ಇದು ಬೆಂಗಳೂರಿನ
                  ಸಮೀಪದ ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಎರಡು ಚಿಕಿತ್ಸಾಲಯಗಳ ಮೂಲಕ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಾ, ರೋಗಿಗಳಿಗೆ ಉಚಿತವಾಗಿ
                  ಸಲಹೆ ಮತ್ತು ಔಷಧಿಗಳನ್ನು ನೀಡುತ್ತಿತ್ತು.
                </p>
                <p>
                  1991ರಲ್ಲಿ, ಬೆಂಗಳೂರಿನಲ್ಲಿ ಒಂದು ಕಣ್ಣಿನ ಆಸ್ಪತ್ರೆಯನ್ನು ತೆರೆಯಲಾಯಿತು — ಆ ಸಮಯದಲ್ಲಿ ಸರ್ಕಾರಿ
                  ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹೊರತುಪಡಿಸಿ ಬೇರೆ ಯಾವುದೇ ಆಸ್ಪತ್ರೆ ಉಚಿತ ಕಣ್ಣಿನ ಆರೈಕೆ ನೀಡುತ್ತಿರಲಿಲ್ಲ. ಎಲ್ಲಾ ಕಣ್ಣಿನ
                  ಸಮಸ್ಯೆಗಳಿಗೆ ನಾವು ಉಚಿತ ಸಲಹೆ ಮತ್ತು ಚಿಕಿತ್ಸೆ ನೀಡುತ್ತೇವೆ, ಆದರೆ ಹೆಚ್ಚಿನ ರೋಗಿಗಳು ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಾಗಿ
                  ಬರುತ್ತಾರೆ, ಇದನ್ನು ಯಾವುದೇ ಲಾಭವಿಲ್ಲದೆ ನಡೆಸಲಾಗುತ್ತದೆ.
                </p>
                <p>
                  ಪೊರೆ ಒಂದು ವಯಸ್ಸಿಗೆ ಸಂಬಂಧಿಸಿದ ಸಮಸ್ಯೆಯಾಗಿದ್ದು, ಆರ್ಥಿಕ ಸ್ಥಿತಿ ಏನೇ ಇರಲಿ ಬಹುತೇಕ ಎಲ್ಲರ ಮೇಲೂ
                  ಪರಿಣಾಮ ಬೀರುತ್ತದೆ. 5-10 ನಿಮಿಷಗಳ ಸರಳ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಿಂದ ದೃಷ್ಟಿ ನಷ್ಟವನ್ನು ಸರಿಪಡಿಸಬಹುದು, ಆದರೆ
                  ಖಾಸಗಿ ಚಿಕಿತ್ಸೆ ದುಬಾರಿಯಾಗಿದ್ದು ಅನೇಕ ಬಡ ರೋಗಿಗಳು ವರ್ಷಗಟ್ಟಲೆ ಕತ್ತಲೆಯಲ್ಲೇ ಉಳಿಯುತ್ತಾರೆ. ಆದ್ದರಿಂದ
                  ವೈದ್ಯಕೀಯ ಸೌಲಭ್ಯಗಳಿಲ್ಲದ ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ವರ್ಷಕ್ಕೆ 10 ರಿಂದ 15 ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಶಿಬಿರಗಳನ್ನು
                  ನಡೆಸುತ್ತೇವೆ, ವಾರ್ಷಿಕವಾಗಿ 3,000 ರಿಂದ 4,000 ಉಚಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳನ್ನು ನಡೆಸುತ್ತೇವೆ — ಇದುವರೆಗೆ ಒಟ್ಟು
                  ಸುಮಾರು 70,000. ನಮ್ಮ ಎಲ್ಲಾ ಆರ್ಥಿಕ ಅಗತ್ಯಗಳನ್ನು ವ್ಯಕ್ತಿಗಳು, ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ CSR
                  ನಿಧಿಗಳಿಂದ ದೇಣಿಗೆಗಳ ಮೂಲಕ ಪೂರೈಸಲಾಗುತ್ತದೆ.
                </p>
                <p>
                  ಡಾ. ಜಂಬುನಾಥ ಗೌಡ ಮತ್ತು ಚಿಕ್ಕಂಕೊಪ್ಪ ಶರಣರ ಬಳಗ 2008ರಿಂದ ನಮ್ಮೊಂದಿಗೆ ಸಂಬಂಧ ಹೊಂದಿದ್ದಾರೆ. ನಾವು
                  ಒಟ್ಟಾಗಿ ಕಂಪ್ಲಿಯಲ್ಲಿ 6 ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಶಿಬಿರಗಳನ್ನು ನಡೆಸಿ, 2020ರವರೆಗೆ 1,758 ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳನ್ನು
                  ಪೂರ್ಣಗೊಳಿಸಿದ್ದೇವೆ. ಡಾ. ಜಂಬುನಾಥ ಗೌಡ ಮತ್ತು ಅವರ ಸಹಭಾಗಿಗಳು ಬಡವರಿಗಾಗಿ ಕಂಪ್ಲಿಯಲ್ಲಿ ಕಣ್ಣಿನ
                  ಆಸ್ಪತ್ರೆಯನ್ನು ನಿರ್ಮಿಸಿರುವುದನ್ನು ಕಂಡು ನಮಗೆ ಸಂತೋಷವಾಗಿದೆ, ಮತ್ತು ವೃದ್ಧಾಪ್ಯದಲ್ಲಿ ಜನರನ್ನು ಕತ್ತಲೆಯಿಂದ
                  ಬೆಳಕಿಗೆ ತರುವ ಕಾರ್ಯದಲ್ಲಿ ಅವರೊಂದಿಗೆ ಮತ್ತೆ ಕೈಜೋಡಿಸಲು ನಾವು ಎದುರುನೋಡುತ್ತಿದ್ದೇವೆ.
                </p>
              </>
            )}
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label.en} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label[language]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {language === 'en' ? 'Camp Gallery' : 'ಶಿಬಿರದ ಗ್ಯಾಲರಿ'}
          </h2>

          <div className="relative max-w-2xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in"
                onClick={() => setSelectedImage(galleryImages[currentImage])}
              >
                <ImageWithFallback
                  src={galleryImages[currentImage]}
                  alt={`Vivekananda Sevashrama camp ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-[#1e3a8a]" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-[#1e3a8a]" />
            </button>
          </div>

          {selectedImage ? (
            <ImageZoomModal src={selectedImage} alt="Vivekananda Sevashrama" onClose={() => setSelectedImage(null)} />
          ) : null}
        </div>
      </section>
    </div>
  );
}
