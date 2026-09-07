import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    activities: 'Activities',
    leadership: 'Leadership',
    gallery: 'Gallery',
    impact: 'Impact',
    events: 'Events',
    contact: 'Contact',
    donate: 'Donate',
    tagline: 'Serving Rural Vision Since 1990',
    heroTitle: 'Bringing Sight to Rural Communities',
    heroSubtitle: 'Free eye checkups, cataract surgeries, and spectacles distribution across Karnataka since 1990',
    learnMore: 'Learn More',
    aboutUsCta: 'About Us',
    yearsOfService: 'Years of Service',
    eyeCampsConducted: 'Eye Camps Conducted',
    patientsServed: 'Patients Served',
    freeSurgeries: 'Free Surgeries',
    surgeriesCompleted: 'Surgeries Completed',
    villagesReached: 'Villages Reached',
    ourServices: 'Our Services',
    freeEyeCheckups: 'Free Eye Checkups',
    freeEyeCheckupsDesc: 'Comprehensive eye screenings for all age groups at no cost.',
    cataractSurgeries: 'Cataract Surgeries',
    cataractSurgeriesDesc: 'Free, high-quality cataract surgeries restoring sight to those in need.',
    freeSpectacles: 'Free Spectacles',
    freeSpectaclesDesc: 'Distributing spectacles to correct vision for underserved communities.',
    ruralOutreach: 'Rural Outreach',
    ruralOutreachDesc: 'Conducting eye camps across villages in and around Kampli.',
    donateTitle: 'Support Our Mission',
    donateSubtitle: 'Your contribution helps us bring the gift of sight to those who need it most.',
  },
  kn: {
    home: 'ಮುಖಪುಟ',
    about: 'ನಮ್ಮ ಬಗ್ಗೆ',
    activities: 'ಚಟುವಟಿಕೆಗಳು',
    leadership: 'ನಾಯಕತ್ವ',
    gallery: 'ಗ್ಯಾಲರಿ',
    impact: 'ಪ್ರಭಾವ',
    events: 'ಕಾರ್ಯಕ್ರಮಗಳು',
    contact: 'ಸಂಪರ್ಕ',
    donate: 'ದೇಣಿಗೆ',
    tagline: '1990 ರಿಂದ ಗ್ರಾಮೀಣ ದೃಷ್ಟಿ ಸೇವೆ',
    heroTitle: 'ಗ್ರಾಮೀಣ ಜನತೆಯ ಬಾಳಿಗೆ ಆಶಾಕಿರಣ',
    heroSubtitle: '1990 ರಿಂದ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಉಚಿತ ಕಣ್ಣಿನ ಪರೀಕ್ಷೆಗಳು, ಕಣ್ಣಿನ ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಕನ್ನಡಕ ವಿತರಣೆ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    aboutUsCta: 'ನಮ್ಮ ಬಗ್ಗೆ',
    yearsOfService: 'ವರ್ಷಗಳ ಸೇವೆ',
    eyeCampsConducted: 'ಕಣ್ಣಿನ ಶಿಬಿರಗಳು',
    patientsServed: 'ರೋಗಿಗಳಿಗೆ ಸೇವೆ',
    freeSurgeries: 'ಉಚಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು',
    surgeriesCompleted: 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು ಪೂರ್ಣಗೊಂಡಿವೆ',
    villagesReached: 'ಗ್ರಾಮಗಳನ್ನು ತಲುಪಲಾಗಿದೆ',
    ourServices: 'ನಮ್ಮ ಸೇವೆಗಳು',
    freeEyeCheckups: 'ಉಚಿತ ಕಣ್ಣಿನ ತಪಾಸಣೆ',
    freeEyeCheckupsDesc: 'ಎಲ್ಲಾ ವಯೋಮಾನದವರಿಗೆ ಉಚಿತ ಸಮಗ್ರ ಕಣ್ಣಿನ ತಪಾಸಣೆ.',
    cataractSurgeries: 'ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು',
    cataractSurgeriesDesc: 'ಅಗತ್ಯವಿರುವವರ ದೃಷ್ಟಿಯನ್ನು ಮರಳಿಸುವ ಉಚಿತ, ಗುಣಮಟ್ಟದ ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು.',
    freeSpectacles: 'ಉಚಿತ ಕನ್ನಡಕಗಳು',
    freeSpectaclesDesc: 'ಅಗತ್ಯವಿರುವ ಸಮುದಾಯಗಳಿಗೆ ದೃಷ್ಟಿ ಸರಿಪಡಿಸಲು ಕನ್ನಡಕ ವಿತರಣೆ.',
    ruralOutreach: 'ಗ್ರಾಮೀಣ ಸಂಪರ್ಕ',
    ruralOutreachDesc: 'ಕಂಪ್ಲಿ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಗ್ರಾಮಗಳಲ್ಲಿ ಕಣ್ಣಿನ ಶಿಬಿರಗಳು.',
    donateTitle: 'ನಮ್ಮ ಧ್ಯೇಯಕ್ಕೆ ಬೆಂಬಲ ನೀಡಿ',
    donateSubtitle: 'ನಿಮ್ಮ ಕೊಡುಗೆ ಅಗತ್ಯವಿರುವವರಿಗೆ ದೃಷ್ಟಿಯ ಕೊಡುಗೆ ನೀಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
