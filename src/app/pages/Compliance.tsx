import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, ShieldCheck, Landmark, Receipt, BadgeCheck, BookOpen } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { SecurePdfViewer } from '../components/SecurePdfViewer';

const documents = [
  {
    id: '12a',
    src: '/documents/compliance/12a-registration.pdf',
    icon: ShieldCheck,
    title: { en: '12A Registration', kn: '12A ನೋಂದಣಿ' },
  },
  {
    id: '80g',
    src: '/documents/compliance/80g-registration.pdf',
    icon: Receipt,
    title: { en: '80G Registration', kn: '80G ನೋಂದಣಿ' },
  },
  {
    id: 'pan',
    src: '/documents/compliance/pan-card.pdf',
    icon: BadgeCheck,
    title: { en: 'PAN Card', kn: 'PAN ಕಾರ್ಡ್' },
  },
  {
    id: 'csr',
    src: '/documents/compliance/csr-registration-2025.pdf',
    icon: Landmark,
    title: { en: 'CSR Registration (2025)', kn: 'CSR ನೋಂದಣಿ (2025)' },
  },
  {
    id: 'trust-reg',
    src: '/documents/compliance/trust-registration-certificate.pdf',
    icon: FileText,
    title: { en: 'Trust Registration Certificate (1991-92)', kn: 'ಟ್ರಸ್ಟ್ ನೋಂದಣಿ ಪ್ರಮಾಣಪತ್ರ (1991-92)' },
  },
  {
    id: 'balance-sheet',
    src: '/documents/compliance/balance-sheet-audit-report.pdf',
    icon: BookOpen,
    title: { en: 'Balance Sheet & Audit Report', kn: 'ತುಲನಾ ಪತ್ರ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನಾ ವರದಿ' },
  },
];

export default function Compliance() {
  const { language } = useLanguage();
  const [openDoc, setOpenDoc] = useState<(typeof documents)[number] | null>(null);

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Compliance & Legal Documents' : 'ಅನುಸರಣೆ ಮತ್ತು ಕಾನೂನು ದಾಖಲೆಗಳು'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Our registrations, certifications, and financial disclosures for full transparency'
              : 'ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆಗಾಗಿ ನಮ್ಮ ನೋಂದಣಿಗಳು, ಪ್ರಮಾಣೀಕರಣಗಳು ಮತ್ತು ಆರ್ಥಿಕ ವಿವರಗಳು'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setOpenDoc(doc)}
                className="flex items-center gap-4 text-left bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <doc.icon className="w-7 h-7 text-white" />
                </div>
                <span className="font-semibold text-gray-900">{doc.title[language]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={openDoc !== null} onOpenChange={(open) => !open && setOpenDoc(null)}>
        <DialogContent
          className="max-w-none sm:max-w-none border-0 p-0 gap-0 overflow-hidden flex flex-col"
          style={{
            width: 'min(90vw, calc(88vh * 595 / 841))',
            maxWidth: 'none',
            height: '88vh',
          }}
        >
          <DialogHeader className="px-4 py-3 border-b">
            <DialogTitle className="text-base">{openDoc?.title[language]}</DialogTitle>
          </DialogHeader>
          {openDoc ? <SecurePdfViewer src={openDoc.src} /> : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
