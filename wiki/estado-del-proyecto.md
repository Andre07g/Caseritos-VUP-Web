---
tipo: estado
estado: vigente
creado: 2026-11-12
actualizado: 2026-11-12
tags: [estado]
fuentes: [package.json, src/]
---
# Estado del proyecto
- **Origen** (confirmado): código exportado de Google AI Studio, ya extraído en la raíz; no existe ZIP en la carpeta.
- **Stack** (confirmado): React 19, TypeScript, Vite 8, Tailwind 4, motion, lucide-react. Dependencias sin uso del export: express, dotenv, @google/genai.
- **Secciones** (confirmado): Header, Hero, Populares, Menú (12 categorías), Eventos (cotizador → WhatsApp), Cómo pedir, Nosotros, Testimonios, FAQ, CTA final, Footer, carrito (envía pedido por WhatsApp), botón flotante de WhatsApp.
- **Local** (2026-11-13): `npm run lint` y `npm run build` pasan. **Revisado visualmente** con Edge sin pantalla en escritorio (1366 px) y móvil (390 px): sin desbordamiento horizontal, sin errores de consola, las imágenes cargan. **Probado funcionalmente**: pestañas de momento del día, agregar al carrito, abrir el carrito y enlaces de WhatsApp con producto. **No probado**: envío real de un mensaje de WhatsApp.
- **Git**: repositorio local, varios commits. Sin remoto.
- **Publicación**: ninguna (ni GitHub ni sitio público).
- **Siguiente paso**: que la dueña revise y apruebe (fotos asignadas, catálogo por momentos, FAQ); completar datos legales; publicar solo con autorización. Ver [[plan-de-mejoras]] y [[pendientes]].
