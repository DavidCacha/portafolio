import { useEffect, useState } from 'react';

const LINKS = [
  ['sobre-mi', 'Sobre mí'],
  ['experiencia', 'Experiencia'],
  ['proyectos', 'Proyectos'],
  ['stack', 'Stack'],
  ['contacto', 'Contacto'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

    return () => { window.removeEventListener('scroll', onScroll); spy.disconnect(); };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap">
        <a className="logo" href="#inicio">&lt;LDC /&gt;</a>
        <nav className="nav-links" aria-label="Principal">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-outline" href="#contacto">Hablemos</a>
      </div>
    </header>
  );
}
