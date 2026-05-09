import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Banknote, QrCode, ArrowUpRight } from 'lucide-react';

export default function Donate() {
  const { language } = useLanguage();

  const bankDetails = [
    // { label: 'Account Name', value: 'Sri Chikkenakoppa Channaveeratata Sharanara Balaga' },
    { label: 'Bank Name', value: 'State Bank of India,Kampli' },
    { label: 'Account Number', value: '43861285667' },
    { label: 'IFSC Code', value: 'SBIN0040118' },
    { label: 'UPI ID', value: '9448145035@sbi' },
  ];

  const projectProgress = {
    completed: 1.5,
    needed: 2,
    total: 3.5,
  };

  const upiPayload = 'upi://pay?pa=9448145035@sbi&pn=Sri%20Chikkenakoppa%20Channaveeratata%20Sharanara%20Balaga&am=0&tn=';
  const upiQrUrl = '/assets/QRCode.png';

  return (
    <section id="donate" className="min-h-screen flex items-center py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-[#fff7f2] via-white to-[#eef6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-3 sm:mb-4">
            {language === 'en' ? 'Make a Difference Today' : 'ಇಂದು ಬದಲಾವಣೆ ತನ್ನಿ'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Your contribution helps us continue serving rural communities.'
              : 'ನಿಮ್ಮ ಕೊಡುಗೆ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ ಮುಂದುವರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1e3a8a]/10 text-[#1e3a8a]">
                <Banknote className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {language === 'en' ? 'Donation Details' : 'ದೇಣಿಗೆ ವಿವರಗಳು'}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === 'en' ? 'Send directly by bank or UPI' : 'ಬ್ಯಾಂಕ್ ಅಥವಾ ಯುಪಿಐ ಮೂಲಕ ನೇರವಾಗಿ ಕಳುಹಿಸಿ'}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {bankDetails.map((detail) => (
                <div key={detail.label} className="rounded-2xl bg-gray-50 p-3">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">{detail.label}</div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900 break-words">{detail.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-center">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-600 mb-3 text-center font-semibold">
                  {language === 'en' ? 'Quick Scan' : 'ತ್ವರಿತ ಸ್ಕ್ಯಾನ್'}
                </p>
                <img
                  src={upiQrUrl}
                  alt="UPI QR code"
                  className="h-40 w-40 rounded-xl object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-3">
              {language === 'en' ? 'Free Eye Hospital - Kampli' : 'ಉಚಿತ ಕಣ್ಣಿನ ರೋಗಾಲಯ - ಕಂಪಳಿ'}
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              {language === 'en'
                ? 'We are constructing a free eye hospital in Kampli on a donated site by Shri. Polur Satyanarayana (Son of Sri Narayanappa, Kottal). The hospital will serve rural communities with specialized eye care services.'
                : 'ನಾವು ಕಂಪಳಿಯಲ್ಲಿ ಸೌಜನ್ಯವಾಗಿ ಕಣ್ಣಿನ ರೋಗಾಲಯ ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ ಶ್ರೀ. ಪೊಲೂರ್ ಸತ್ಯನಾರಾಯಣ (ಶ್ರೀ ನಾರಾಯಣಪ್ಪನ ಮಗ, ಕೋಟ್ಟಲ್) ನೀಡಿದ ಭೂಮಿಯಲ್ಲಿ. ರೋಗಾಲಯವು ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ವಿಶೇಷ ಕಣ್ಣಿನ ಸೇವೆ ಒದಗಿಸುತ್ತದೆ.'}
            </p>

            <div className="space-y-2">
              <div>
                <p className="text-xs text-gray-600 mb-1">
                  {language === 'en' ? 'Project Details' : 'ಯೋಜನೆಯ ವಿವರಗಳು'}
                </p>
                <div className="text-gray-800 space-y-1">
                  {language === 'en' ? (
                    <>
                      <p>• Two-floor building structure</p>
                      <p>• Civil work in progress</p>
                    </>
                  ) : (
                    <>
                      <p>• ಎರಡು ಮಹಡಿ ಕಟ್ಟಡ ರಚನೆ</p>
                      <p>• ನಾಗರಿಕ ಕೆಲಸ ಜಾರಿಯಲ್ಲಿ</p>
                    </>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  {language === 'en' ? 'Expected Opening' : 'ನಿರೀಕ್ಷಿತ ಉದ್ಘಾಟನೆ'}
                </p>
                <p className="text-gray-800 font-semibold">
                  {language === 'en' ? 'October or November 2026' : 'ಅಕ್ಟೋಬರ್ ಅಥವಾ ನವೆಂಬರ್ 2026'}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2 font-semibold">
                {language === 'en' ? 'Construction Progress' : 'ನಿರ್ಮಾಣ ಪ್ರಗತಿ'}
              </p>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700">
                      {language === 'en' ? 'Work Completed' : 'ಕೆಲಸ ಪೂರ್ಣ'}
                    </span>
                    <span className="text-sm font-semibold text-[#1e3a8a]">₹1.5 Cr</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{ width: `${(projectProgress.completed / projectProgress.total) * 100}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-700">
                      {language === 'en' ? 'Still Needed' : 'ಇನ್ನೂ ಅಗತ್ಯ'}
                    </span>
                    <span className="text-sm font-semibold text-[#ff6b35]">₹2 Cr</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-400 to-red-600 h-3 rounded-full" style={{ width: `${(projectProgress.needed / projectProgress.total) * 100}%` }}></div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-1">
                    {language === 'en' ? 'Total Project Cost' : 'ಒಟ್ಟು ಯೋಜನೆ ವೆಚ್ಚ'}
                  </p>
                  <p className="text-xl font-bold text-[#1e3a8a]">₹3.5 Cr</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
