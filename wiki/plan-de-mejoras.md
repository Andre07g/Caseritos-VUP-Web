---
tipo: plan
estado: borrador-por-validar
creado: 2026-11-13
actualizado: 2026-11-13
tags: [plan, mejoras]
fuentes: ["Plan de mejoras/13-caseritos-vup/plan-mejoras.md", "Plan de mejoras/13-caseritos-vup/validacion-con-cliente.md", "Plan de mejoras/13-caseritos-vup/instalar-skills.md", "Plan de mejoras/13-caseritos-vup/mensaje-whatsapp.md"]
---
# Plan de mejoras — Caseritos Valledupar

Adaptación del plan genérico de la carpeta `Plan de mejoras/13-caseritos-vup/` al estado real del sitio (ver [[estado-del-proyecto]]). Los originales de esa carpeta no se modificaron. Un paso por conversación; nada se aplica sin aprobación de la dueña (en los documentos aparece como Mireya, **supuesto**: confirmar que es quien decide).

## Punto de partida real (comprobado en el código y en Docs/)
| Tema | Hoy | Brecha |
|---|---|---|
| Observaciones de la dueña | No hay Word/notas/capturas en `Docs/` | **Falta el insumo del paso 1** |
| Logo | Remoto (Google AI Studio); real en Docs: 200 px | Pedir PNG/SVG de buena calidad |
| Fotos | Hero y populares con URLs remotas de AI Studio (probablemente generadas) | Hay 63 fotos en Docs sin revisar visualmente |
| Catálogo | 12 categorías mezcladas (momento del día + tipo de plato) | Decidir forma con la dueña (paso 4–5) |
| WhatsApp | Ya existe en header, hero, footer, FAQ, CTA, botón flotante y carrito; el mensaje del menú no lleva producto específico | Mensaje por producto; unificar número en un solo lugar |
| Reseñas | Testimonios de ejemplo (nombres no verificados) + formulario que no guarda nada | Quitar ejemplos, usar solo reales |
| Datos personales | El carrito pide nombre y dirección; el cotizador pide fecha y lugar, todo se envía por WhatsApp | Política + aviso (paso 11) |
| SEO | Título/descripción/OG básicos; sin imagen OG, sin favicon, sin datos estructurados de negocio local; alt básicos | Paso 12 |
| Skills | `.agents/skills/` no existe | Paso 0 |

## Pasos (en este orden; nivel de modelo sugerido entre paréntesis)
- [ ] **0 · Skills** (medio). Instalar `seo-organico-ia` y `tratamiento-datos-landing` desde los ZIP, y `emil-design-eng`, `mobile-native`, `break-ui`, `impeccable`. Las de diseño vienen de repositorios externos de terceros: instalarlas requiere descargar código y se hace solo con visto bueno del dueño.
- [ ] **1 · Observaciones** (alto). Bloqueado hasta recibir las anotaciones. Mientras tanto: ya hay revisión técnica en [[pendientes]].
- [ ] **2 · Logo y fotos** (medio). Revisar visualmente las 63 imágenes, proponer foto ↔ producto (el Excel trae nombres), copiar solo las elegidas a `public/`/`src/assets/` optimizadas.
- [ ] **3 · Aplicar observaciones claras** (alto).
- [ ] **4 · Muestra de catálogo** (medio): por momento del día / ocasión / fechas especiales; la dueña elige.
- [ ] **5 · Organizar catálogo** (alto): sin repetidos; cotejar precios del sitio contra el Excel (incluye el "$48.000" fijo en MenuSection).
- [ ] **6 · WhatsApp** (medio): mensaje con el producto, número único en `RESTAURANT_INFO`, probar en celular y escritorio.
- [ ] **7 · Reseñas y referencias** (medio): solo reales y autorizadas; quitar las de ejemplo; proponer ideas de referencias sin aplicarlas.
- [ ] **8 · Acabado** (alto): Emil + Impeccable, sin cambiar fotos/textos/logo.
- [ ] **9 · Celular y casos raros** (medio): mobile-native + break-ui.
- [ ] **10 · Transiciones (opcional)** (medio), respetando "reducir movimiento".
- [ ] **11 · Política de datos** (alto): faltan NIT/RUT y correo; en Docs solo hay matrícula mercantil 197363 y dirección.
- [ ] **12 · SEO local** (medio): no inventar horario/dirección; confirmar los del export.
- [ ] **13 · Revisión final** (medio): celular y escritorio, probar un pedido real por WhatsApp.

Publicar, subir a GitHub o enlazar dominio: solo con autorización expresa (ninguna aún).

## Qué decisiones dependen de la dueña
Forma del catálogo, fotos a cambiar, número y mensaje de WhatsApp, reseñas publicables, horario real y datos legales.
