# Portafolio — Luis David Casanova

Portafolio personal hecho con **React + Vite**.

## Cómo correrlo

```bash
npm install
npm run dev      # abre http://localhost:5173
npm run build    # genera la carpeta dist/ lista para publicar
```

## Dónde editar

| Qué quieres cambiar | Archivo |
|---|---|
| Textos, experiencia, proyectos, stack, links | `src/data.js` |
| Colores (variable `--accent`), tipografías, espaciados | `src/index.css` (bloque `:root`) |
| Estructura de cada sección | `src/components/*.jsx` |
| Tu CV en PDF y capturas de proyectos | carpeta `public/` |

Busca los textos entre `[CORCHETES]` en `src/data.js`: son los datos que faltan.

## Formulario de contacto

Por defecto funciona en modo demo (valida y muestra la confirmación).
Para recibir los mensajes en tu correo:

1. Crea un formulario gratis en https://formspree.io
2. Copia tu endpoint (`https://formspree.io/f/xxxxxxx`)
3. Pégalo en `FORM_ENDPOINT` dentro de `src/data.js`

## Publicarlo gratis

- **Vercel** o **Netlify**: conecta el repo de GitHub; detectan Vite solos.
- **GitHub Pages**: `npm run build` y sube la carpeta `dist/`.
