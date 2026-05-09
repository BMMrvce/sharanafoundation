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
