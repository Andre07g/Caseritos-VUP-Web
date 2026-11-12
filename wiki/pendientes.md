---
tipo: pendientes
estado: vigente
creado: 2026-11-12
actualizado: 2026-11-12
tags: [pendientes]
---
# Pendientes
## Datos por confirmar
- Horario real y enlace real de Instagram.
- Cotejar el menú del sitio (`src/data/menuData.ts`) con los precios del xlsx: **no cotejado todavía**.
- Precio fijo "$48.000" escrito a mano en `MenuSection.tsx` (~línea 146): verificar.
- **Testimonios**: los del export (p. ej. María Camila Dangond, Andrés Felipe Murgas) parecen generados por la IA; no hay evidencia en Docs/. No presentarlos como reales sin confirmar. El formulario de reseñas solo guarda en memoria del navegador.
- **Fotos del sitio**: usan URLs remotas de Google AI Studio (probablemente generadas, no reales); el logo del sitio también es remoto. Reemplazar por las reales de `Docs/organizados/` (revisión visual pendiente de 30 + 33 imágenes).
- Teléfono 573137799512 repetido a mano en `EventQuoteModal.tsx` y `MenuSection.tsx` en vez de usar `RESTAURANT_INFO`.
- Limpieza técnica: dependencias sin uso (express, dotenv, @google/genai) y README de AI Studio.

## Cambios sugeridos (aún no decididos por el dueño)
1. Cambiar la foto principal del Hero por una foto real.
2. Usar el logo real en Header/Footer.
3. Agrandar botones para uso táctil en celular.

## Bloqueos
- Ninguno.
