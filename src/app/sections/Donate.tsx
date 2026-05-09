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

  const upiPayload = 'upi://pay?pa=9448145035@sbi&pn=Sri%20Chikkenakoppa%20Channaveeratata%20Sharanara%20Balaga&am=0&tn=';
  const upiQrUrl = '/assets/QRCode.png';

  return (
    <section id="donate" className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#fff7f2] via-white to-[#eef6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
            {language === 'en' ? 'Make a Difference Today' : 'ಇಂದು ಬದಲಾವಣೆ ತನ್ನಿ'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#1e3a8a] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Your contribution helps us continue serving rural communities.'
              : 'ನಿಮ್ಮ ಕೊಡುಗೆ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ ಮುಂದುವರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1e3a8a]/10 text-[#1e3a8a]">
                <Banknote className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Donation Details' : 'ದೇಣಿಗೆ ವಿವರಗಳು'}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === 'en' ? 'Send directly by bank or UPI' : 'ಬ್ಯಾಂಕ್ ಅಥವಾ ಯುಪಿಐ ಮೂಲಕ ನೇರವಾಗಿ ಕಳುಹಿಸಿ'}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {bankDetails.map((detail) => (
                <div key={detail.label} className="rounded-2xl bg-gray-50 p-4">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">{detail.label}</div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900 break-words">{detail.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff6b35]/10 text-[#ff6b35]">
                  <QrCode className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'en' ? 'UPI QR Code' : 'ಯುಪಿಐ ಕ್ಯೂಆರ್ ಕೋಡ್'}
                  </h3>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <img
                    src={upiQrUrl}
                    alt="UPI QR code"
                    className="h-56 w-56 rounded-xl object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {/* {[
                { label: language === 'en' ? 'Quick scan' : 'ತ್ವರಿತ ಸ್ಕ್ಯಾನ್', value: 'UPI' },
                { label: language === 'en' ? 'Direct transfer' : 'ನೇರ ವರ್ಗಾವಣೆ', value: 'Bank' },
                { label: language === 'en' ? 'For camps' : 'ಶಿಬಿರಗಳಿಗೆ', value: 'Support' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                  <div className="text-xl font-bold text-[#1e3a8a] flex items-center gap-2">
                    {item.value}
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              ))} */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
