import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { CareerObjective } from './sections/CareerObjective';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#172A25] overflow-x-clip">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <CareerObjective />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
