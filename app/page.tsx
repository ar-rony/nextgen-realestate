import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutFamily from '@/components/AboutFamily';
import SmoothMove from '@/components/SmoothMove';
import Values from '@/components/Values';
import Stats from '@/components/Stats';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutFamily />
        <SmoothMove />
        <Values />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}