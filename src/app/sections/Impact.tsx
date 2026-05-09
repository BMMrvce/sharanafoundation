import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Eye, Heart } from 'lucide-react';

function CounterCard({ value, suffix, label, icon: Icon, delay }: any) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasStarted(true);
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById(`counter-${label}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [hasStarted, label]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <motion.div
      id={`counter-${label}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-2xl p-6 lg:p-8 text-center hover:shadow-2xl transition-all"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm sm:text-base text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
}

export default function Impact() {
  const { language, t } = useLanguage();

  const stats = [
    { value: 25, suffix: '', label: t('eyeCampsConducted'), icon: Eye },
    { value: 10000, suffix: '', label: t('surgeriesCompleted'), icon: Heart },
  ];

  return (
    <section id="impact" className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
            {language === 'en' ? 'Our Impact' : 'ನಮ್ಮ ಪ್ರಭಾವ'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Measuring the difference we make in transforming lives'
              : 'ಜೀವನಗಳನ್ನು ಪರಿವರ್ತಿಸುವಲ್ಲಿ ನಾವು ಮಾಡುವ ವ್ಯತ್ಯಾಸ'}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 w-full max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <CounterCard key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
