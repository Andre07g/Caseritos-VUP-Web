---
tipo: borrador
estado: borrador-no-publicado
creado: 2026-11-13
actualizado: 2026-11-13
tags: [datos-personales, legal]
fuentes: [".agents/skills/tratamiento-datos-landing/SKILL.md", "src/components/CartDrawer.tsx", "src/components/EventQuoteModal.tsx"]
---
# Borrador — Política de tratamiento de datos (NO publicada)
Orientativo: **debe revisarlo un abogado o experto**. No se publica hasta tener los datos marcados `[COMPLETAR]` (regla de la skill).

## Inventario de lo que recoge la página (confirmado en el código)
| Dónde | Datos | Destino |
|---|---|---|
| Carrito de pedido | nombre, dirección/barrio, instrucciones, productos | Mensaje de WhatsApp al 313 779 9512 (la página no lo guarda) |
| Cotizador de eventos | fecha, lugar, notas, paquete | Mensaje de WhatsApp (la página no lo guarda) |
| Botones de WhatsApp | lo que la persona escriba | WhatsApp |
| Terceros | Google Fonts (carga de tipografías) | — |

No hay base de datos, analítica ni cookies propias. El formulario de reseñas (que no guardaba nada) se eliminó.

## Datos de la empresa que faltan
- Razón social / responsable: `[COMPLETAR]`
- NIT o RUT: `[COMPLETAR]` (en Docs solo consta la matrícula mercantil 197363)
- Dirección: CL 6 C 13 A 60, Valledupar (docx)
- Correo para temas de datos: `[COMPLETAR]`
- Teléfono: 313 779 9512

## Texto base
**Responsable:** `[COMPLETAR razón social]`, NIT `[COMPLETAR]`, CL 6 C 13 A 60, Valledupar, correo `[COMPLETAR]`, WhatsApp 313 779 9512.
**Finalidad:** atender y entregar pedidos, cotizar eventos y responder consultas enviadas por WhatsApp.
**Datos:** nombre, dirección o barrio de entrega, fecha y lugar del evento y lo que la persona escriba. No pedimos datos sensibles.
**Cómo se usan:** los datos viajan en el mensaje de WhatsApp; esta página no los almacena.
**Derechos (Ley 1581 de 2012):** conocer, actualizar, rectificar y suprimir sus datos y revocar la autorización escribiendo a `[COMPLETAR correo]`.
**Terceros:** WhatsApp (Meta) y Google Fonts.
**Vigencia:** `[COMPLETAR fecha]`.

## Implementación prevista (cuando haya datos)
Página propia de la política, enlace en el pie y aviso corto junto al carrito y al cotizador, con casilla **sin marcar** por defecto.
