import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Eye, Heart, Users, MapPin } from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">{t('heroTitle')}</h1>
            <p className="text-xl mb-8 text-blue-100">{t('heroSubtitle')}</p>
            <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50">
              {t('learnMore')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Eye, value: '35+', label: t('yearsOfService') },
              { icon: Users, value: '50,000+', label: t('patientsServed') },
              { icon: Heart, value: '5,000+', label: t('freeSurgeries') },
              { icon: MapPin, value: '300+', label: t('villagesReached') },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t('ourServices')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t('freeEyeCheckups'), desc: t('freeEyeCheckupsDesc'), icon: Eye },
              { title: t('cataractSurgeries'), desc: t('cataractSurgeriesDesc'), icon: Heart },
              { title: t('freeSpectacles'), desc: t('freeSpectaclesDesc'), icon: Users },
              { title: t('ruralOutreach'), desc: t('ruralOutreachDesc'), icon: MapPin },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('donateTitle')}</h2>
          <p className="text-xl mb-8 text-orange-50">{t('donateSubtitle')}</p>
          <button className="px-10 py-5 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50">
            {t('donate')}
          </button>
        </div>
      </section>
    </div>
  );
}
