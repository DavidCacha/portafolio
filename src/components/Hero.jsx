import { profile, clients } from '../data';
import Typewriter from './Typewriter';
import { Download } from './Icons';
import { Fragment } from 'react';

const TERMINAL_CLIENTS = ['BBVA', 'AEROMÉXICO', 'TIBSMX', 'MCMTELECOM', 'COMPUSOF', 'SOFTTEK'];
const PER_LINE = 3;                     
const INDENT = '\n' + ' '.repeat(15);

const str = (v) => <span className="s">"{v}"</span>;

export default function Hero() {
  return (
    <section id="inicio" className="wrap hero">
      <div className="hero-copy">
        {profile.available && (
          <div className="status rise d1"><span className="dot" />Disponible para nuevos proyectos · CDMX</div>
        )}
        <h1 className="rise d2">{profile.name}<br />{profile.lastName}</h1>
        <p className="role rise d3">&gt; <Typewriter words={profile.roles} /><span className="cursor" /></p>
        <p className="lead rise d4">{profile.summary}</p>
        <div className="actions rise d5">
          <a className="btn btn-primary" href="#proyectos">Ver proyectos</a>
          <a className="btn btn-ghost" href={profile.cvUrl} download><Download />Descargar CV</a>
        </div>
      </div>

      <div className="terminal rise d3">
        <div className="terminal-bar">
          <span className="b" /><span className="b" /><span className="b" />
          <span className="t">luis@dev ~ perfil.json</span>
        </div>
        <pre>{'{\n  '}
          <span className="k">"nombre"</span>: {str(profile.fullName)},{'\n  '}
          <span className="k">"rol"</span>: {str('Fullstack / Frontend')},{'\n  '}
          <span className="k">"experiencia"</span>: <span className="n">"6+ años"</span>,{'\n  '}
          <span className="k">"clientes"</span>: [
            {TERMINAL_CLIENTS.map((c, i) => (
              <Fragment key={c}>
                {i > 0 && (i % PER_LINE === 0 ? ',' + INDENT : ', ')}
                {str(c)}
              </Fragment>
            ))}],{'\n  '}
          <span className="k">"stack"</span>: [{str('React Native')}, {str('React')},{'\n            '}
          {str('Node.js')}, {str('Cells')}, {str('AWS')}],{'\n  '}
          <span className="k">"ubicación"</span>: {str(profile.location)}{'\n}'}
        </pre>
        <div className="scanline" aria-hidden="true" />
      </div>
    </section>
  );
}
