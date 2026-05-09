import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ImageZoomModal from '../components/figma/ImageZoomModal';
import { galleryImages } from '../../generated/live-assets';

export default function Gallery() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentMobileImage, setCurrentMobileImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const chunk = (arr: string[], size: number) => {
    const out: string[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

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

  const galleryPages = chunk(galleryImageList, 8);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % galleryPages.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [galleryPages.length]);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentMobileImage((prev) => (prev + 1) % galleryImageList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, galleryImageList.length]);

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

        <div className="relative max-w-6xl mx-auto w-full">
          {isMobile ? (
            <div className="w-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMobileImage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in"
                  onClick={() => setSelectedImage(galleryImageList[currentMobileImage])}
                >
                  <ImageWithFallback
                    src={galleryImageList[currentMobileImage]}
                    alt={`Gallery image ${currentMobileImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-5">
                {galleryImageList.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMobileImage(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentMobileImage === index ? 'w-8 bg-[#ff6b35]' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full"
              >
                {galleryPages[currentPage].map((image, index) => (
                  <motion.div
                    key={`${currentPage}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-zoom-in"
                    onClick={() => setSelectedImage(image)}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Gallery image ${currentPage * 8 + index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {selectedImage ? (
            <ImageZoomModal src={selectedImage} alt="Gallery image" onClose={() => setSelectedImage(null)} />
          ) : null}

          {/* Page Indicators */}
          {!isMobile ? (
            <div className="flex justify-center gap-3 mt-8 sm:mt-12">
              {galleryPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentPage === index
                      ? 'w-12 bg-[#ff6b35]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
