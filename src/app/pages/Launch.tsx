import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Home from './Home';

/** How long the curtains take to clear the screen, in ms. */
const CURTAIN_MS = 1900;

/** Layered gradients that read as folded velvet rather than flat colour. */
const velvet = {
  backgroundImage: [
    'repeating-linear-gradient(90deg, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0) 24px, rgba(255,255,255,0.10) 48px, rgba(0,0,0,0) 72px, rgba(0,0,0,0.55) 96px)',
    'linear-gradient(90deg, #5c0d16 0%, #8c1220 28%, #a8172a 52%, #7a1019 78%, #4a0910 100%)',
  ].join(', '),
};

/** Scalloped lower edge for the pelmet across the top. */
const scallop = {
  WebkitMaskImage: 'radial-gradient(circle at 50% 100%, transparent 0 26px, #000 26px)',
  maskImage: 'radial-gradient(circle at 50% 100%, transparent 0 26px, #000 26px)',
  WebkitMaskSize: '52px 100%',
  maskSize: '52px 100%',
  WebkitMaskRepeat: 'repeat-x',
  maskRepeat: 'repeat-x',
};

export default function Launch() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const duration = reduced ? 400 : CURTAIN_MS;

  // Hold the page still while the curtains are closed.
  useEffect(() => {
    if (opened) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [opened]);

  // Once the curtains are clear, settle on the real home URL.
  useEffect(() => {
    if (!opened) return;
    const timer = window.setTimeout(() => navigate('/', { replace: true }), duration + 150);
    return () => window.clearTimeout(timer);
  }, [opened, duration, navigate]);

  const open = useCallback(() => {
    if (opened) return;
    setOpened(true);

    if (reduced) return;
    const colors = ['#FF9933', '#FFFFFF', '#FFD700', '#138808'];
    confetti({ particleCount: 90, spread: 70, angle: 60, origin: { x: 0, y: 0.7 }, colors });
    confetti({ particleCount: 90, spread: 70, angle: 120, origin: { x: 1, y: 0.7 }, colors });
    window.setTimeout(
      () => confetti({ particleCount: 140, spread: 110, startVelocity: 42, origin: { x: 0.5, y: 0.6 }, colors }),
      450,
    );
  }, [opened, reduced]);

  const ease = [0.7, 0, 0.25, 1] as const;

  return (
    <>
      {/* The real site, revealed as the curtains part. */}
      <Home />

      <motion.div
        className="fixed inset-0 z-[100] overflow-hidden"
        style={{ pointerEvents: opened ? 'none' : 'auto' }}
        role="button"
        tabIndex={opened ? -1 : 0}
        aria-label={language === 'en' ? 'Unveil the website' : 'ಜಾಲತಾಣವನ್ನು ಅನಾವರಣಗೊಳಿಸಿ'}
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
          }
        }}
        animate={opened ? { opacity: 0 } : { opacity: 1 }}
        transition={{ opacity: { delay: duration / 1000, duration: 0.01 } }}
      >
        {/* Dim stage behind the fabric so the split reads clearly. */}
        <motion.div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 45%, #2a0509 0%, #140204 70%, #0a0102 100%)' }}
          animate={opened ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: duration / 1000, ease }}
        />

        {/* Left panel */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-[52%] shadow-[10px_0_40px_rgba(0,0,0,0.6)]"
          style={velvet}
          initial={{ x: 0 }}
          animate={opened ? { x: '-103%' } : { x: 0 }}
          transition={{ duration: duration / 1000, ease }}
        >
          <div
            className="absolute top-0 bottom-0 right-0 w-[10px]"
            style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.5), #d4a132 55%, #f6dd8a)' }}
          />
        </motion.div>

        {/* Right panel */}
        <motion.div
          className="absolute top-0 bottom-0 right-0 w-[52%] shadow-[-10px_0_40px_rgba(0,0,0,0.6)]"
          style={velvet}
          initial={{ x: 0 }}
          animate={opened ? { x: '103%' } : { x: 0 }}
          transition={{ duration: duration / 1000, ease }}
        >
          <div
            className="absolute top-0 bottom-0 left-0 w-[10px]"
            style={{ background: 'linear-gradient(270deg, rgba(0,0,0,0.5), #d4a132 55%, #f6dd8a)' }}
          />
        </motion.div>

        {/* Pelmet + tassels across the top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[14%] min-h-[70px]"
          animate={opened ? { y: '-115%' } : { y: 0 }}
          transition={{ duration: duration / 1000, ease }}
        >
          <div className="absolute inset-0" style={{ ...velvet, ...scallop }} />
          <div
            className="absolute left-0 right-0 bottom-0 h-[6px]"
            style={{ ...scallop, background: 'linear-gradient(180deg, #f6dd8a, #b8860b)' }}
          />
        </motion.div>

        {/* Invitation */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          animate={opened ? { opacity: 0, scale: 0.94 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.32) 45%, transparent 72%)' }}
          />
          <motion.img
            src="/assets/logo.png"
            alt=""
            className="relative w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full bg-white/95 p-2 ring-4 ring-[#f6dd8a] shadow-[0_0_60px_rgba(246,221,138,0.45)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          />

          <motion.h1
            className="relative mt-7 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl"
            style={{ color: '#FFF3DC', textShadow: '0 2px 18px rgba(0,0,0,0.6)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {language === 'en'
              ? 'Sri Chikkenakoppa Channaveeratata Sharanara Balaga (R)'
              : 'ಶ್ರೀ ಚಿಕ್ಕೆನಕೊಪ್ಪದ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗ (ರಿ)'}
          </motion.h1>

          <motion.p
            className="relative mt-4 text-base sm:text-xl text-white/85 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            {language === 'en'
              ? 'Website Inauguration'
              : 'ಜಾಲತಾಣ ಉದ್ಘಾಟನೆ'}
          </motion.p>

          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              open();
            }}
            className="relative mt-10 inline-flex items-center gap-3 rounded-full px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold text-[#4a0910] bg-gradient-to-r from-[#f6dd8a] via-[#e9c65c] to-[#d4a132] shadow-[0_10px_40px_rgba(246,221,138,0.35)] hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Sparkles className="w-5 h-5" />
            {language === 'en' ? 'Unveil the Website' : 'ಅನಾವರಣಗೊಳಿಸಿ'}
          </motion.button>

          <motion.p
            className="relative mt-6 text-sm text-white/55"
            animate={{ opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            {language === 'en' ? 'Tap anywhere to open' : 'ತೆರೆಯಲು ಎಲ್ಲಿ ಬೇಕಾದರೂ ಸ್ಪರ್ಶಿಸಿ'}
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}
