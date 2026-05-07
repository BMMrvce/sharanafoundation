import { useLanguage } from '../contexts/LanguageContext';

export default function Gallery() {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Gallery' : 'ಗ್ಯಾಲರಿ'}
          </h1>
          <p className="text-xl text-blue-100">
            {language === 'en'
              ? 'Moments that capture our journey of service and hope'
              : 'ನಮ್ಮ ಸೇವೆ ಮತ್ತು ಭರವಸೆಯ ಪ್ರಯಾಣವನ್ನು ಸೆರೆಹಿಡಿಯುವ ಕ್ಷಣಗಳು'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
