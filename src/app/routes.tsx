import { createBrowserRouter } from 'react-router';
import Root from './components/layout/Root';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Leadership from './pages/Leadership';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import UpcomingProject from './pages/UpcomingProject';
import Compliance from './pages/Compliance';
import Volunteers from './pages/Volunteers';
import VivekanandaSevashrama from './pages/VivekanandaSevashrama';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'activities', Component: Activities },
      { path: 'leadership', Component: Leadership },
      { path: 'gallery', Component: Gallery },
      { path: 'events', Component: Events },
      { path: 'upcoming-project', Component: UpcomingProject },
      { path: 'compliance', Component: Compliance },
      { path: 'volunteers', Component: Volunteers },
      { path: 'volunteers/vivekananda-sevashrama', Component: VivekanandaSevashrama },
      { path: 'donate', Component: Donate },
      { path: 'contact', Component: Contact },
    ],
  },
]);
