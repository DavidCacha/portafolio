import Nav from './components/Nav';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import { profile } from './data';

export default function App() {
  return (
    <div className="page">
      <div className="grid-bg" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Clients />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {profile.fullName}</span>
          <span>Hecho con React · {profile.location}</span>
        </div>
      </footer>
    </div>
  );
}
