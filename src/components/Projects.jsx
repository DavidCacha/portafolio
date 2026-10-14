import { useEffect, useRef, useState } from 'react';
import { projects } from '../data';
import Reveal from './Reveal';
import { Arrow, Code } from './Icons';

const FILTERS = [
  ['todos', 'Todos'],
  ['movil', 'Móvil'],
  ['web', 'Web'],
];
const GAP = 24;           
const AUTOPLAY_MS = 4000;

const Chevron = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === 'left' ? <path d="m15 6-6 6 6 6" /> : <path d="m9 6 6 6-6 6" />}
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('todos');
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const trackRef = useRef(null);
  const drag = useRef(null);
  const justDragged = useRef(false);
  const paused = useRef(false);

  const shown = filter === 'todos' ? projects : projects.filter((p) => p.category === filter);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const stepSize = () => {
    const card = trackRef.current.querySelector('.project');
    return card ? card.offsetWidth + GAP : trackRef.current.clientWidth;
  };

  const go = (dir) => trackRef.current.scrollBy({ left: dir * stepSize(), behavior: 'smooth' });

  useEffect(() => {
    const el = trackRef.current;
    el.scrollTo({ left: 0 });
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [filter]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el || paused.current || drag.current || document.hidden) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + stepSize(), behavior: 'smooth' });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [filter]);

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag.current = { x: e.clientX, left: trackRef.current.scrollLeft, moved: false };
    trackRef.current.classList.add('dragging');
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 5) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.left - dx;
  };
  const endDrag = () => {
    if (!drag.current) return;
    const el = trackRef.current;
    justDragged.current = drag.current.moved;
    drag.current = null;
    el.classList.remove('dragging');
    const step = stepSize();
    el.scrollTo({ left: Math.round(el.scrollLeft / step) * step, behavior: 'smooth' });
    setTimeout(() => (justDragged.current = false), 0);
  };
  const onClickCapture = (e) => {
    if (justDragged.current) { e.preventDefault(); e.stopPropagation(); }
  };

  return (
    <section id="proyectos" className="projects-band">
      <div className="wrap section">
        <Reveal className="projects-head">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="eyebrow">03 — Proyectos</span>
            <h2 className="h2">Lo que he construido</h2>
          </div>
          <div className="projects-controls">
            <div className="filters" role="group" aria-label="Filtrar proyectos">
              {FILTERS.map(([id, label]) => (
                <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)}>
                  {label}
                </button>
              ))}
            </div>
            <div className="carousel-nav">
              <button type="button" onClick={() => go(-1)} disabled={!canPrev} aria-label="Proyecto anterior"><Chevron dir="left" /></button>
              <button type="button" onClick={() => go(1)} disabled={!canNext} aria-label="Proyecto siguiente"><Chevron dir="right" /></button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="projects"
            ref={trackRef}
            role="region"
            aria-label="Proyectos"
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
            onTouchStart={() => (paused.current = true)}
            onTouchEnd={() => setTimeout(() => (paused.current = false), 4000)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onClickCapture={onClickCapture}
            onDragStart={(e) => e.preventDefault()}
          >
            {shown.map((p) => (
              <article key={p.id} className="card project">
                <div className="thumb">
                  {p.image ? <img src={p.image} alt={`Captura de ${p.title}`} draggable={false} /> : <span className="ph">[CAPTURA DEL PROYECTO]</span>}
                  <span className="tag">{p.tag}</span>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="chips">
                    {p.stack.map((t, j) => <span className="chip" key={j}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    {p.link && p.link !== '#' && (
                      <a className="more" href={p.link} target="_blank" rel="noopener noreferrer">Demo <Arrow /></a>
                    )}
                    {p.repo && (
                      <a className="more" href={p.repo} target="_blank" rel="noopener noreferrer"><Code size={16} /> Repositorio</a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}