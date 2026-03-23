import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { useLenis } from './hooks/useLenis';
import LoadingScreen from './components/ui/LoadingScreen';
import AnimatedCursor from './components/ui/AnimatedCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import CodeShowcase from './components/sections/CodeShowcase';
import TechRadar from './components/sections/TechRadar';
import Languages from './components/sections/Languages';
import Contact from './components/sections/Contact';

const AppContent: React.FC = () => {
  useLenis();

  return (
    <>
      <LoadingScreen />
      <AnimatedCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CodeShowcase />
        <TechRadar />
        <Languages />
        <Contact />
      </main>

      <Footer />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--color-bg-card)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
            fontFamily: 'var(--font-body)',
          },
        }}
      />
    </>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
