import { useLanguage } from '../contexts/LanguageContext';
import { Banknote, QrCode, ArrowUpRight } from 'lucide-react';

export default function Donate() {
  const { language } = useLanguage();

  const bankDetails = [
    // { label: 'Account Name', value: 'Sri Chikkenakoppa Channaveeratata Sharanara Balaga' },
    { label: 'Bank Name', value: 'State Bank of India,Kampli' },
    { label: 'Account Number', value: 'XXXXXXXXXXXX' },
    { label: 'IFSC Code', value: 'XXXXXX00000' },
    { label: 'UPI ID', value: 'sharanabalaga@upi' },
  ];

  const upiPayload = 'upi://pay?pa=sharanabalaga@upi&pn=Sri Chikkenakoppa Channaveeratata Sharanara Balaga&cu=INR';
  const upiQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(upiPayload)}`;

  const hospitalProject = {
    en: [
      'A modern, fully equipped free eye hospital is being constructed at Kottal on the site generously donated by Mr. Poluru Satyanarayana in memory of his father, Mr. Narayanappa. The project is being undertaken by Sri Chikkenakoppa Channaveeratata Sharanara Balaga to provide quality and specialized eye care services to people living in rural areas.',
      'Key highlights of the project include a well-equipped two-storey hospital building, advanced facilities for specialized ophthalmic treatment, and civil construction work that is currently in progress. The hospital is expected to be inaugurated in October or November 2026.',
    ],
    kn: [
      'ಶ್ರೀ ಪೋಲೂರು ಸತ್ಯನಾರಾಯಣ ಅವರು ತಮ್ಮ ತಂದೆಯಾದ ಶ್ರೀ ನಾರಾಯಣಪ್ಪ ಅವರ ಸ್ಮರಣಾರ್ಥವಾಗಿ ಕೊಟ್ಟಾಲ್‌ನಲ್ಲಿ ದಾನವಾಗಿ ನೀಡಿದ ನಿವೇಶನದಲ್ಲಿ, ಶ್ರೀ ಚಿಕ್ಕೇನಕೊಪ್ಪ ಚನ್ನವೀರತಾತ ಶರಣರ ಬಳಗದ ವತಿಯಿಂದ ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳನ್ನು ಒಳಗೊಂಡ ಉಚಿತ ಕಣ್ಣಿನ ಆಸ್ಪತ್ರೆಯ ನಿರ್ಮಾಣ ಕಾರ್ಯವು ವೇಗವಾಗಿ ಸಾಗುತ್ತಿದೆ. ಗ್ರಾಮೀಣ ಪ್ರದೇಶದ ಜನರಿಗೆ ಗುಣಮಟ್ಟದ ಹಾಗೂ ವಿಶೇಷ ನೇತ್ರ ಚಿಕಿತ್ಸಾ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುವ ಉದ್ದೇಶದಿಂದ ಈ ಮಹತ್ವಾಕಾಂಕ್ಷಿ ಯೋಜನೆಯನ್ನು ಕೈಗೆತ್ತಿಕೊಳ್ಳಲಾಗಿದೆ.',
      'ಯೋಜನೆಯ ಪ್ರಮುಖ ವಿಶೇಷತೆಗಳಲ್ಲಿ ಎರಡು ಅಂತಸ್ತಿನ ಸುಸಜ್ಜಿತ ಆಸ್ಪತ್ರೆ ಕಟ್ಟಡ, ಆಧುನಿಕ ವೈದ್ಯಕೀಯ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ನೇತ್ರ ಚಿಕಿತ್ಸಾ ಸೇವೆಗಳು, ಮತ್ತು ಪ್ರಸ್ತುತ ಪ್ರಗತಿಯಲ್ಲಿರುವ ಸಿವಿಲ್ ಕಾಮಗಾರಿ ಸೇರಿವೆ. ಆಸ್ಪತ್ರೆಯ ಉದ್ಘಾಟನೆ 2026ರ ಅಕ್ಟೋಬರ್ ಅಥವಾ ನವೆಂಬರ್ ತಿಂಗಳಲ್ಲಿ ನಡೆಯುವ ನಿರೀಕ್ಷೆ ಇದೆ.',
    ],
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-[#fff7f2] to-[#eef6ff]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] mb-6">
            {language === 'en' ? 'Make a Difference Today' : 'ಇಂದು ಬದಲಾವಣೆ ತನ್ನಿ'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {language === 'en'
              ? 'Your contribution helps us continue serving rural communities.'
              : 'ನಿಮ್ಮ ಕೊಡುಗೆ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ ಮುಂದುವರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1e3a8a]/10 text-[#1e3a8a]">
                <Banknote className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Donation Details' : 'ದೇಣಿಗೆ ವಿವರಗಳು'}
                </h2>
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

            <div className="mt-6 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 sm:p-5">
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                {language === 'en' ? 'Free Eye Hospital - Kottal' : 'ಉಚಿತ ಕಣ್ಣಿನ ಆಸ್ಪತ್ರೆ - ಕೊಟ್ಟಾಲ್'}
              </h3>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {(language === 'en' ? hospitalProject.en : hospitalProject.kn).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
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
                  <img src={upiQrUrl} alt="UPI QR code" className="h-56 w-56 rounded-xl object-contain" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 shadow-sm">
              <h4 className="text-xl font-bold text-[#1e3a8a] mb-4">
                {language === 'en' ? 'Project Highlights' : 'ಯೋಜನೆಯ ಪ್ರಮುಖ ವಿಶೇಷತೆಗಳು'}
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                {language === 'en' ? (
                  <>
                    <p>• Well-equipped two-storey hospital building</p>
                    <p>• Advanced facilities for specialized ophthalmic treatment</p>
                    <p>• Civil construction work is currently in progress</p>
                    <p>• Hospital inauguration expected in October or November 2026</p>
                  </>
                ) : (
                  <>
                    <p>• ಎರಡು ಅಂತಸ್ತಿನ ಸುಸಜ್ಜಿತ ಆಸ್ಪತ್ರೆ ಕಟ್ಟಡ</p>
                    <p>• ಆಧುನಿಕ ವೈದ್ಯಕೀಯ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ನೇತ್ರ ಚಿಕಿತ್ಸಾ ಸೇವೆಗಳು</p>
                    <p>• ಪ್ರಸ್ತುತ ಸಿವಿಲ್ ಕಾಮಗಾರಿ ಪ್ರಗತಿಯಲ್ಲಿದೆ</p>
                    <p>• ಆಸ್ಪತ್ರೆಯ ಉದ್ಘಾಟನೆ 2026ರ ಅಕ್ಟೋಬರ್ ಅಥವಾ ನವೆಂಬರ್ ತಿಂಗಳಲ್ಲಿ ನಡೆಯುವ ನಿರೀಕ್ಷೆ</p>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
