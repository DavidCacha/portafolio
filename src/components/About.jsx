import { useEffect, useState } from 'react';
import { profile, stats } from '../data';
import { useReveal, prefersReducedMotion } from '../hooks/useReveal';
import Reveal from './Reveal';

function Counter({ value, suffix = '', start }) {
  const [n, setN] = useState(value);
  useEffect(() => {
    if (!start || prefersReducedMotion()) return;
    let i = 0;
    setN(0);
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= value) clearInterval(id);
    }, 900 / value);
    return () => clearInterval(id);
  }, [start, value]);
  return <b>{n}{suffix}</b>;
}

export default function About() {
  const [ref, visible] = useReveal();
  return (
    <section id="sobre-mi" className="wrap section about">
      <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span className="eyebrow">01 — Sobre mí</span>
        <h2 className="h2">Código limpio, productos que escalan.</h2>
      </Reveal>
      <div ref={ref} className={`reveal ${visible ? 'in' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <p className="muted" style={{ margin: 0, fontSize: 18, lineHeight: 1.7 }}>{profile.about}</p>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <Counter value={s.value} suffix={s.suffix} start={visible} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
