import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Award, Heart, UserCircle2 } from 'lucide-react';

const roles = [
  'Dr. Jambunath Gowda. M.B.B.S.; M.D.;',
  'Senior Consultant Obstetrician & Gynaecologist',
  'Kampli & Gangavathi.',
  'Social Worker.',
  'Secretary Sri Chikkenakoppa Channaveeratata Sharanara Balaga',
  'Chairman Karnataka State Health Scheme, Gangavathi.',
  'Secretary Loins Educational Trust, Gangavathi.',
];

const story = [
  'Dr. Jambunath Gowda is the lifeline and driving force behind Sri Chikkenakoppa Channaveeratata Sharanara Balaga. As a consultant obstetrician and gynaecologist, he has continuously served the people of rural Karnataka for more than 45 years, at a time when there were hardly any qualified medical doctors available in rural areas.',
  'Being born and brought up in a village and continuing to serve as a doctor in rural areas, his passion to serve rural communities he could feel the pain and pangs of the communities and need for qualified affordable eye care.',
  'Thus, with the blessing of Sri Chikkenakoppa sharanaru and supports of his friends he founded the Sri Chikkenakoppa Channaveeratata Sharanara Balaga Sangha, a charitable trust dedicated for eye care.',
  'Beyond medical service, social work he is also a community elder and mentor to young doctors. He is also Training young doctors and inspiring a new generation of youth voluntaries and encouraging them to render their services in rural india.',
];

export default function Leadership() {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'The Driving Force' : 'ಪ್ರೇರಕ ಶಕ್ತಿ'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A Life dedicated to Health Care and serving the needy, poor, in rural communities
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Profile Image Section */}
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 lg:p-12 flex flex-col items-center justify-start lg:justify-center">
                <div className="text-center w-full">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/assets/leader.png"
                      alt="Dr. Jambunath Gowda"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    {roles.map((role) => (
                      <p key={role} className="text-sm text-gray-700 leading-snug">
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-12 flex flex-col justify-start">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  A life dedicated to health care and rural service
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                  {story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-base font-bold text-[#1e3a8a]">47 Years</div>
                    <div className="text-xs text-gray-600">Speciality medical service</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-base font-bold text-[#1e3a8a]">37 Years</div>
                    <div className="text-xs text-gray-600">Social service</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <UserCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-base font-bold text-[#1e3a8a]">Mentor</div>
                    <div className="text-xs text-gray-600">To young doctors</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
