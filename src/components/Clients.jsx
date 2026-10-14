import { Fragment } from 'react';
import { clients } from '../data';

export default function Clients() {
  const loop = [...clients, ...clients];
  return (
    <section className="clients" aria-label="Clientes y empresas">
      <div className="track">
        {loop.map((c, i) => (
          <Fragment key={i}>
            <span aria-hidden={i >= clients.length}>{c}</span>
            <span className="sep" aria-hidden="true">✦</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
