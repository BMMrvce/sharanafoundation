import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ImageZoomModal from '../components/figma/ImageZoomModal';
import { galleryImages } from '../../generated/live-assets';

export default function Gallery() {
  const { language } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImageList = galleryImages.length ? galleryImages : [
    '/assets/gallery/gallery1.jpg',
    '/assets/gallery/gallery2.jpg',
    '/assets/gallery/gallery3.jpg',
    '/assets/gallery/gallery4.jpg',
    '/assets/gallery/gallery5.jpg',
    '/assets/gallery/gallery6.jpg',
    '/assets/gallery/gallery7.jpg',
    '/assets/gallery/gallery8.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImageList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImageList.length]);

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImageList.length) % galleryImageList.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImageList.length);
  };

  return (
    <section id="gallery" className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
            {language === 'en' ? 'Gallery' : 'ಗ್ಯಾಲರಿ'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Moments from our journey of bringing light to thousands of lives'
              : 'ಸಾವಿರಾರು ಜೀವನಗಳಿಗೆ ಬೆಳಕು ತರುವ ನಮ್ಮ ಪ್ರಯಾಣದ ಕ್ಷಣಗಳು'}
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in"
              onClick={() => setSelectedImage(galleryImageList[currentImage])}
            >
              <ImageWithFallback
                src={galleryImageList[currentImage]}
                alt={`Gallery image ${currentImage + 1}`}
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

          {selectedImage ? (
            <ImageZoomModal src={selectedImage} alt="Gallery image" onClose={() => setSelectedImage(null)} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
