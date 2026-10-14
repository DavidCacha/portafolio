import { useEffect, useRef } from 'react';
import { skills } from '../data';
import { prefersReducedMotion } from '../hooks/useReveal';
import Reveal from './Reveal';

const SPEED = 40;

const clean = skills.map((s) => ({
  group: s.group.replace(/:\s*$/, '').trim(),
  items: [...new Set(s.items.map((i) => i.trim()))],
}));

export default function Stack() {
  const trackRef = useRef(null);
  const pos = useRef(0);          
  const hovering = useRef(false);
  const drag = useRef(null);      

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = prefersReducedMotion();
    let raf, last = performance.now();

    const wrap = () => {
      const half = el.scrollWidth / 2;
      if (pos.current >= half) pos.current -= half;
      if (pos.current < 0) pos.current += half;
      el.scrollLeft = pos.current;
    };

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!reduce && !hovering.current && !drag.current) {
        pos.current += SPEED * dt;
        wrap();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const down = (e) => {
      drag.current = { x: e.clientX, start: pos.current };
      el.setPointerCapture(e.pointerId);
      el.classList.add('dragging');
    };
    const move = (e) => {
      if (!drag.current) return;
      pos.current = drag.current.start - (e.clientX - drag.current.x);
      wrap();
    };
    const up = () => {
      drag.current = null;
      el.classList.remove('dragging');
    };
    const wheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      pos.current += e.deltaX;
      wrap();
    };
    const enter = () => (hovering.current = true);
    const leave = () => (hovering.current = false);

    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('wheel', wheel, { passive: false });
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
      el.removeEventListener('wheel', wheel);
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, []);

  const loop = [...clean, ...clean];

  return (
    <section id="stack" className="section">
      <Reveal className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 48 }}>
        <span className="eyebrow">04 — Stack</span>
        <h2 className="h2">Herramientas del día a día</h2>
        <p className="muted" style={{ margin: 0, fontSize: 15 }}>Arrastra para explorar →</p>
      </Reveal>

      <div className="stack-carousel" ref={trackRef} aria-label="Habilidades técnicas" role="region" tabIndex={0}>
        <div className="stack-track">
          {loop.map((s, i) => (
            <div key={i} className="card stack-card" aria-hidden={i >= clean.length}>
              <div className="label">{s.group}</div>
              <div className="chips">
                {s.items.map((it) => <span className="chip" key={it}>{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
