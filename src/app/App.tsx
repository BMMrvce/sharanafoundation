import { LanguageProvider } from './contexts/LanguageContext';
import SinglePageApp from './pages/SinglePageApp';

export default function App() {
  return (
    <LanguageProvider>
      <SinglePageApp />
    </LanguageProvider>
  );
}
