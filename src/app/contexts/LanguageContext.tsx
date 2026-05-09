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
    heroTitle: 'Bringing Light to Rural Lives',
    heroSubtitle: 'Free eye checkups, cataract surgeries, and spectacles distribution across Karnataka since 1990',
    learnMore: 'Learn More',
    yearsOfService: 'Years of Service',
    eyeCampsConducted: 'Eye Camps Conducted',
    patientsServed: 'Patients Served',
    freeSurgeries: 'Free Surgeries',
    surgeriesCompleted: 'Surgeries Completed',
    villagesReached: 'Villages Reached',
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
    heroTitle: 'ಗ್ರಾಮೀಣ ಜೀವನಕ್ಕೆ ಬೆಳಕು ತರುತ್ತಿದೆ',
    heroSubtitle: '1990 ರಿಂದ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಉಚಿತ ಕಣ್ಣಿನ ಪರೀಕ್ಷೆಗಳು, ಕಣ್ಣಿನ ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಕನ್ನಡಕ ವಿತರಣೆ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    yearsOfService: 'ವರ್ಷಗಳ ಸೇವೆ',
    eyeCampsConducted: 'ಕಣ್ಣಿನ ಶಿಬಿರಗಳು',
    patientsServed: 'ರೋಗಿಗಳಿಗೆ ಸೇವೆ',
    freeSurgeries: 'ಉಚಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು',
    surgeriesCompleted: 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು ಪೂರ್ಣಗೊಂಡಿವೆ',
    villagesReached: 'ಗ್ರಾಮಗಳನ್ನು ತಲುಪಲಾಗಿದೆ',
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
