import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'About Sharana Balaga' : 'ಶರಣ ಬಳಗದ ಬಗ್ಗೆ'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Dedicated to eliminating preventable blindness and bringing quality eye care to rural Karnataka since 1990'
              : '1990 ರಿಂದ ತಡೆಯಬಹುದಾದ ಕುರುಡುತನವನ್ನು ತೊಡೆದುಹಾಕಲು ಮತ್ತು ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕಕ್ಕೆ ಗುಣಮಟ್ಟದ ಕಣ್ಣಿನ ಆರೈಕೆಯನ್ನು ತರಲು ಸಮರ್ಪಿತವಾಗಿದೆ'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'en' ? 'Our Story' : 'ನಮ್ಮ ಕಥೆ'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'Since 1990, Sharana Balaga has been a beacon of hope for rural communities across Karnataka. Our mission is to eliminate preventable blindness by providing accessible, high-quality eye care services free of cost.'
                : '1990 ರಿಂದ, ಶರಣ ಬಳಗ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಭರವಸೆಯ ದೀಪವಾಗಿದೆ. ತಡೆಯಬಹುದಾದ ಕುರುಡುತನವನ್ನು ತೊಡೆದುಹಾಕಲು ಉಚಿತ ಗುಣಮಟ್ಟದ ಕಣ್ಣಿನ ಆರೈಕೆ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುವುದು ನಮ್ಮ ಧ್ಯೇಯ.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
