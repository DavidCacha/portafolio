import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../hooks/useReveal';

export default function Typewriter({ words, typeSpeed = 80, deleteSpeed = 40, hold = 2200 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || words.length < 2) return;
    const word = words[index];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) delay = hold;
    if (deleting && text === '') delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') { setDeleting(false); setIndex((i) => (i + 1) % words.length); }
      else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold]);

  return <span aria-live="polite">{text}</span>;
}
