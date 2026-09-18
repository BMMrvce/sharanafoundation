import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Flower2 } from 'lucide-react';

const tributes = [
  {
    image: '/assets/restinpeace/DR.DEVDATT GUDUGUR.png',
    name: 'Dr. Devdatt Gudugur',
    nameKn: 'ಡಾ. ದೇವದತ್ತ ಗುಡುಗೂರ',
    role: 'Well-wisher & Guiding Light of Sharanara Balaga',
    roleKn: 'ಶರಣರ ಬಳಗದ ಹಿತೈಷಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶಕರು',
  },
  {
    image: '/assets/restinpeace/Dr.L.S.MANVI.png',
    name: 'Dr. L. S. Manvi',
    nameKn: 'ಡಾ. ಎಲ್. ಎಸ್. ಮನ್ವಿ',
    role: 'Well-wisher & Guiding Light of Sharanara Balaga',
    roleKn: 'ಶರಣರ ಬಳಗದ ಹಿತೈಷಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶಕರು',
  },
];

export default function Condolence() {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Flower2 className="w-12 h-12 mx-auto mb-6 text-slate-300" />
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'In Loving Memory' : 'ಪ್ರೀತಿಯ ನೆನಪಿನಲ್ಲಿ'}
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'We remember with deep gratitude the souls whose compassion and service shaped Sharanara Balaga.'
              : 'ಶರಣರ ಬಳಗವನ್ನು ರೂಪಿಸಿದ ಕರುಣೆ ಮತ್ತು ಸೇವೆಯ ಆತ್ಮಗಳನ್ನು ನಾವು ಆಳವಾದ ಕೃತಜ್ಞತೆಯಿಂದ ಸ್ಮರಿಸುತ್ತೇವೆ.'}
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-3 leading-relaxed">
            {language === 'en'
              ? 'Their light lives on in every life they touched. May their souls rest in eternal peace.'
              : 'ಅವರು ಸ್ಪರ್ಶಿಸಿದ ಪ್ರತಿ ಜೀವನದಲ್ಲಿ ಅವರ ಬೆಳಕು ಜೀವಂತವಾಗಿದೆ. ಅವರ ಆತ್ಮಗಳಿಗೆ ಚಿರಶಾಂತಿ ಸಿಗಲಿ.'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {tributes.map((tribute, i) => (
              <motion.div
                key={tribute.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
              >
                <div className="bg-gradient-to-br from-slate-100 to-white p-8 flex justify-center">
                  <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-lg bg-white">
                    <img
                      src={tribute.image}
                      alt={tribute.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="px-6 pb-8 text-center">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {language === 'en' ? tribute.name : tribute.nameKn}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {language === 'en' ? tribute.role : tribute.roleKn}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <Flower2 className="w-3.5 h-3.5" />
                    {language === 'en' ? 'Rest in Peace' : 'ಚಿರಶಾಂತಿ'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-16 text-center text-gray-500 italic max-w-2xl mx-auto">
            {language === 'en'
              ? '"Those we love never truly leave us — they walk beside us every day, unseen, unheard, but always near."'
              : '"ನಾವು ಪ್ರೀತಿಸುವವರು ನಿಜವಾಗಿಯೂ ನಮ್ಮನ್ನು ಬಿಟ್ಟು ಹೋಗುವುದಿಲ್ಲ — ಅವರು ಪ್ರತಿದಿನ ನಮ್ಮ ಜೊತೆಯಲ್ಲಿ ನಡೆಯುತ್ತಾರೆ."'}
          </p>
        </div>
      </section>
    </div>
  );
}
