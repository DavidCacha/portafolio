const base = {
  fill: 'none', stroke: 'currentColor', strokeWidth: 2,
  strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, viewBox: '0 0 24 24',
};

export const Download = ({ size = 18 }) => (
  <svg width={size} height={size} {...base}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>
);
export const Arrow = ({ size = 16 }) => (
  <svg width={size} height={size} {...base}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
);
export const Mail = ({ size = 20 }) => (
  <svg width={size} height={size} {...base}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const LinkedIn = ({ size = 20 }) => (
  <svg width={size} height={size} {...base}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7" /><path d="M8 7v.01" /><path d="M12 17v-4a2 2 0 0 1 4 0v4" /><path d="M12 10v7" /></svg>
);
export const Code = ({ size = 20 }) => (
  <svg width={size} height={size} {...base}><path d="m8 8-5 4 5 4" /><path d="m16 8 5 4-5 4" /><path d="m14 4-4 16" /></svg>
);
export const Send = ({ size = 18 }) => (
  <svg width={size} height={size} {...base}><path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" /></svg>
);
