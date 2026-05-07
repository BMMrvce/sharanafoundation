import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Activities from '../sections/Activities';
import Leadership from '../sections/Leadership';
import Impact from '../sections/Impact';
import Gallery from '../sections/Gallery';
import Events from '../sections/Events';
import Donate from '../sections/Donate';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function SinglePageApp() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Leadership />
        <Impact />
        <Gallery />
        <Events />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
