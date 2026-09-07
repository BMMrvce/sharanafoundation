import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { MapPin, Briefcase, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const COMMITTEE_PICS_DIR = '/assets/Managing commutee pics';

const managingCommittee = [
  {
    designation: 'President',
    name: 'Sri G. Linganagoudru',
    place: 'Devasamudra',
    age: 75,
    profession: 'Rice Business and Agriculturist',
    image: `${COMMITTEE_PICS_DIR}/Lingana goudru.jpg`,
  },
  {
    designation: 'Vice President',
    name: 'Sri Gogga Channabasavaraj',
    place: 'Hosapete',
    age: 71,
    profession: 'Mine Owner',
    image: `${COMMITTEE_PICS_DIR}/Gogga Gurubasavaraj.jpg`,
  },
  {
    designation: 'Secretary',
    name: 'Dr. Jambunath Gowda',
    place: 'Kampli',
    age: 73,
    profession: 'Doctor and Agriculturist',
    image: `${COMMITTEE_PICS_DIR}/DR Jambunath gouda.png`,
  },
  {
    designation: 'Treasurer',
    name: 'Sri K. Gavisiddappa',
    place: 'Kampli',
    age: 74,
    profession: 'Retd as Society Secretary',
    image: `${COMMITTEE_PICS_DIR}/Sanna Gavisiddappa.jpg`,
  },
  {
    designation: 'Managing Committee',
    name: 'Sri H. Manjunath',
    place: 'Kampli',
    age: 46,
    profession: 'Agriculturist',
    image: `${COMMITTEE_PICS_DIR}/Manjunath.jpg`,
  },
  {
    designation: 'Managing Committee',
    name: 'Sri T. Kotresh',
    place: 'Kampli',
    age: 64,
    profession: 'Rice Business',
    image: `${COMMITTEE_PICS_DIR}/Kotresh.jpg`,
  },
  {
    designation: 'Managing Committee',
    name: 'Sri Chandrashekar Banagar',
    place: 'Kampli',
    age: 75,
    profession: 'Agriculturist',
    image: `${COMMITTEE_PICS_DIR}/Chandrashekar.jpg`,
  },
  {
    designation: 'Managing Committee',
    name: 'Sri P. Mukaiah Swamy',
    place: 'Sannapura',
    age: 67,
    profession: 'APEX Bank Director, Bangalore. BDCC Bank Director Hosapete and Agriculturist',
    image: `${COMMITTEE_PICS_DIR}/Mukaiah swamy.jpg`,
  },
  {
    designation: 'Managing Committee',
    name: 'Smt. Lalita',
    place: 'Kampli',
    age: 60,
    profession: 'House Wife',
    image: `${COMMITTEE_PICS_DIR}/Lalita.jpg`,
  },
];

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

          <div className="prose prose-lg max-w-none mt-12">
            <h2 className="text-3xl font-bold mb-6">The Background</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The devotees of His Holiness of Shree Chikkenakoppa Sharanaru residing in kampli and surrounding areas had an intense desire to form a charitable trust and serve the community.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The blessings and guidance of His Holiness channelised this force to serve the community by providing free eye care to the masses.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The present sharanaru Shree Shivashantaveera Sharanaru, Balaganur. Is the mentor of our sangha.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mt-12">
            <h2 className="text-3xl font-bold mb-6">The Team</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The activities of the sangha were started in the year 1990 and registered itself in the year 1991 as a trust under the society's act 1960 G.O.K. vide reg no.59/1991-92.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Managing Committee
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The dedicated leaders and members steering our mission of service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {managingCommittee.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Glow border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>

                <div className="relative bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center text-center group-hover:-translate-y-1">
                  {/* Header gradient banner */}
                  <div className="w-full h-16 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] relative">
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                      <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-xl bg-gradient-to-br from-blue-100 to-orange-100">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-6 pt-16 pb-6 flex flex-col items-center">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide text-white bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] mb-3 shadow-sm">
                      {member.designation}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#1e3a8a]" />
                      {member.place}
                    </p>

                    <div className="w-full pt-4 border-t border-gray-100 space-y-2.5 text-left">
                      <p className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                        <span>
                          <span className="font-semibold text-gray-900">Age:</span> {member.age}
                        </span>
                      </p>
                      <p className="flex items-start gap-2 text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-semibold text-gray-900">Profession:</span>{' '}
                          {member.profession}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
