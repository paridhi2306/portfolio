import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <LoadingSpinner />
      <Header />
      <main className="bg-black">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;