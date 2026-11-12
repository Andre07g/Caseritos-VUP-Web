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
- **Local**: `npm install`, `npm run lint` y `npm run build` pasan. Solo "compila": **aún sin revisión visual en navegador ni pruebas funcionales**.
- **Git**: repositorio local, commit base `714c134`. Sin remoto.
- **Publicación**: ninguna (ni GitHub ni sitio público).
- **Siguiente paso**: que el dueño pida el primer cambio; sugerencias en [[pendientes]].
