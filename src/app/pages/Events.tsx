import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { PdfPageViewer } from '../components/PdfPageViewer';

export default function Events() {
  const { language } = useLanguage();
  const [reportOpen, setReportOpen] = useState(false);

  const events = [
    {
      title: 'Free Eye Camp - Koppa Taluk',
      date: 'June 15, 2026',
      location: 'Government Primary School, Koppa',
      time: '9:00 AM - 5:00 PM',
    },
    {
      title: 'Cataract Surgery Camp - Siddapura',
      date: 'July 2, 2026',
      location: 'Community Health Center, Siddapura',
      time: '8:00 AM - 6:00 PM',
    },
    {
      title: 'Spectacles Distribution Drive',
      date: 'August 10, 2026',
      location: 'Multiple locations across Hosanagara',
      time: '10:00 AM - 4:00 PM',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Events & Camps' : 'ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಶಿಬಿರಗಳು'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Join us in our mission to bring healthcare to every corner'
              : 'ಆರೋಗ್ಯ ಸೇವೆಯನ್ನು ತರುವ ನಮ್ಮ ಧ್ಯೇಯದಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <Button onClick={() => setReportOpen(true)}>
              {language === 'en' ? 'See More' : 'ಇನ್ನಷ್ಟು ನೋಡಿ'}
            </Button>
          </div>
          <div className="space-y-6">
            {events.map((event, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Date</div>
                      <div className="font-medium text-gray-900">{event.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Time</div>
                      <div className="font-medium text-gray-900">{event.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium text-gray-900">{event.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent
          className="max-w-none sm:max-w-none border-0 p-0 gap-0 overflow-hidden"
          style={{
            width: 'min(92vw, calc(90vh * 841 / 595))',
            maxWidth: 'none',
            aspectRatio: '841 / 595',
          }}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>
              {language === 'en' ? 'Free Eye Camp Report (1990 - 2020)' : 'ಉಚಿತ ಕಣ್ಣಿನ ಶಿಬಿರ ವರದಿ (1990 - 2020)'}
            </DialogTitle>
          </DialogHeader>
          <PdfPageViewer src="/documents/camp-report.pdf" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
