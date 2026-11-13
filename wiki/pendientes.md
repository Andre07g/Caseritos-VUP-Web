---
tipo: pendientes
estado: vigente
creado: 2026-11-12
actualizado: 2026-11-12
tags: [pendientes]
---
# Pendientes
## Datos por confirmar
- Enlace real de Instagram. Confirmar si el horario 7:00–4:00 aplica de lunes a domingo.
- Cotejar el menú del sitio (`src/data/menuData.ts`) con los precios del xlsx: **no cotejado todavía**.
- Precio fijo "$48.000" escrito a mano en `MenuSection.tsx` (~línea 146): verificar.
- **Testimonios**: los del export (p. ej. María Camila Dangond, Andrés Felipe Murgas) parecen generados por la IA; no hay evidencia en Docs/. No presentarlos como reales sin confirmar. El formulario de reseñas solo guarda en memoria del navegador.
- **Fotos del sitio**: usan URLs remotas de AI Studio (probablemente generadas). Ya hay 135 fotos reales de almuerzos y un logo oficial PDF en Docs/ (ver [[documentos-y-activos]]); falta revisarlas, asociarlas a productos y optimizarlas.
- Teléfono 573137799512 repetido a mano en `EventQuoteModal.tsx` y `MenuSection.tsx` en vez de usar `RESTAURANT_INFO`.
- Limpieza técnica: dependencias sin uso (express, dotenv, @google/genai) y README de AI Studio.

## Cambios sugeridos (aún no decididos por el dueño)
1. Cambiar la foto principal del Hero por una foto real.
2. Usar el logo real en Header/Footer.
3. Agrandar botones para uso táctil en celular.

## Bloqueos
- Ninguno.
