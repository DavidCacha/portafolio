import { useState } from 'react';
import { profile, FORM_ENDPOINT } from '../data';
import Reveal from './Reveal';
import { Mail, LinkedIn, Code, Send } from './Icons';

const EMPTY = { nombre: '', email: '', mensaje: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const valid = form.nombre.trim() && /.+@.+\..+/.test(form.email) && form.mensaje.trim();
    if (!valid) { setError('Completa nombre, un correo válido y tu mensaje.'); return; }
    setError('');

    if (FORM_ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('send failed');
      } catch {
        setStatus('idle');
        setError('No se pudo enviar. Intenta de nuevo o escríbeme por correo.');
        return;
      }
    }
    setStatus('sent');
  };

  const reset = () => { setForm(EMPTY); setStatus('idle'); setError(''); };

  return (
    <section id="contacto" className="wrap" style={{ paddingBlock: '40px 120px' }}>
      <Reveal className="contact">
        <div className="contact-info">
          <span className="eyebrow">05 — Contacto</span>
          <h2>¿Tienes un proyecto en mente?</h2>
          <p className="muted" style={{ margin: 0, fontSize: 18, lineHeight: 1.6 }}>
            Escríbeme y te respondo en menos de 24 horas.
          </p>
          <div className="links">
            <a href={`mailto:${profile.email}`}><Mail />{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn />LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><Code />GitHub</a>
          </div>
        </div>

        <div>
          {status === 'sent' ? (
            <div className="success" role="status">
              <span className="mono" style={{ color: 'var(--accent)' }}>✓ mensaje_enviado</span>
              <h3>¡Gracias, {form.nombre.trim().split(' ')[0]}!</h3>
              <p className="muted" style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
                Recibí tu mensaje. Te contactaré pronto.
              </p>
              <button className="btn btn-ghost" type="button" onClick={reset} style={{ marginTop: 8 }}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="c-nombre">Nombre</label>
                <input id="c-nombre" name="nombre" type="text" placeholder="Tu nombre" autoComplete="name" value={form.nombre} onChange={onChange} />
              </div>
              <div className="field">
                <label htmlFor="c-correo">Correo</label>
                <input id="c-correo" name="email" type="email" placeholder="tucorreo@empresa.com" autoComplete="email" value={form.email} onChange={onChange} />
              </div>
              <div className="field">
                <label htmlFor="c-msg">Mensaje</label>
                <textarea id="c-msg" name="mensaje" rows={5} placeholder="Cuéntame sobre tu proyecto o vacante…" value={form.mensaje} onChange={onChange} />
              </div>
              {error && <p className="error" role="alert">{error}</p>}
              <button className="btn btn-primary" type="submit" disabled={status === 'sending'} style={{ minHeight: 52 }}>
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'} <Send />
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
