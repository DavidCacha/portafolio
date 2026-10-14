import { experience } from '../data';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experiencia" className="wrap" style={{ paddingBlock: '40px 120px' }}>
      <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 48 }}>
        <span className="eyebrow">02 — Experiencia</span>
        <h2 className="h2">Dónde he trabajado</h2>
      </Reveal>
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal as="article" key={job.company} delay={i * 80} className={`card job ${job.current ? 'current' : ''}`}>
            <div className="job-head">
              <h3>{job.role} · <em>{job.company}</em></h3>
              <span className="date">{job.period}</span>
            </div>
            <div className="via">{job.via}</div>
            <p>{job.description}</p>
            <div className="chips">
              {job.stack.map((t, j) => <span className="chip" key={j}>{t}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
