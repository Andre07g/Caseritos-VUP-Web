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

## Actualización 2026-11-13 (paso 2)
- Quedan con imagen remota de AI Studio: las 6+ tarjetas de "Lo más pedido" y las del menú. Las 135 fotos reales son casi todas de almuerzos/bowls (y 6 de arroz paisa con papas, 08119–08137); no hay fotos de desayunos, cayeye, arepas ni bebidas aparte del jugo de corozo. Necesito que la dueña diga qué plato es cada uno.
- Texto del hero "Plato Insignia · Sazón de olla de barro y leña" viene del export: no confirmado.
- Revisar visualmente en navegador (extensión de Chrome no conectada).

## Actualización 2026-11-13 (plan completo)
- **Aprobar con la dueña**: foto del hero (DSC07844); asignación foto→plato de los 6 populares: bowl de pechuga (07859), pollo guisado (07959), carne molida (07799), carne desmechada (07754) y dos "combo bowl" (08119 arroz con pollo, 08060 arroz de cerdo; **estos dos son los más dudosos**, asignados por apariencia). También el catálogo por momentos del día.
- Confirmar si el horario 7:00–4:00 es de lunes a domingo (el JSON-LD usa Mo-Su).
- Testimonios falsos eliminados del código (siguen en el historial de Git, commit `714c134`). Faltan reseñas reales con autorización.
- FAQ reescrita sin cifras: confirmar costo de domicilio, formas de pago y anticipación para eventos.
- Textos del export sin confirmar: "Directo al fogón casero", "Tradición & Fogón Vallenato", texto de Nosotros (abuelas cesarenses, maíz seleccionado), "Banquete criollo" en eventos.
- Datos legales para la política (NIT/RUT, correo). Dominio para canonical y og:image.
- No hay fotos de desayunos, cayeye, arepas ni sancocho en Docs/.
- Instagram del footer apunta a instagram.com genérico.
- Hay fotos con una modelo: confirmar consentimiento de imagen antes de usarlas.
- Skills de GitHub copiadas desde repos de terceros (sin ejecutar scripts).

## Encuesta de satisfacción (2026-11-20)
- Definir el correo que recibirá las respuestas (hoy `CAMBIAR@CORREO.COM`).
- La URL del QR necesita el sitio publicado (dominio). Con `?para=` el correo puede cambiar sin tocar el código, pero el QR impreso debe regenerarse.
- Opcional, con autorización y posible costo: servicio externo de formularios para que la respuesta llegue sola, sin abrir el correo del cliente.
