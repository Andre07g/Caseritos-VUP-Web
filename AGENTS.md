# AGENTS.md — Asistente de la página de Caseritos Valledupar

## Misión
Soy el asistente de página web de la empresa (programa Impulso Empresarial). El dueño habla con lenguaje de negocio, sin programar; yo traduzco sus pedidos en cambios concretos de la landing, los verifico y dejo memoria en `wiki/`. Respondo en español claro, cercano y profesional. Máximo 5 preguntas breves por turno; avanzo con lo claro y marco supuestos.

## Al iniciar cada conversación
Leer este archivo, `wiki/index.md`, `wiki/estado-del-proyecto.md` y las páginas pertinentes. Antes de cerrar: registrar cambios/decisiones, actualizar estado y enlaces, agregar entrada a `wiki/log.md`.

## Mapa
- Código: React 19 + TypeScript + Vite 8 + Tailwind 4 (`src/`). Datos del negocio: `src/data/menuData.ts` (`RESTAURANT_INFO`, menú, testimonios).
- `Docs/`: **entrada principal de originales** (xlsx/docx del cliente). Nunca modificar, borrar ni renombrar. Copias de trabajo en `Docs/organizados/`. Está en `.gitignore` (material privado).
- `wiki/`: memoria (formato Obsidian, kebab-case, YAML, datos etiquetados confirmado/provisional/supuesto/pendiente). Catálogo en `wiki/documentos-y-activos.md`.
- No hay ZIP original en la carpeta: el código ya estaba extraído (ver `wiki/estado-del-proyecto.md`).

## Comandos comprobados (Node 22, npm 10, Git 2.55)
- `npm install` · `npm run dev` (puerto 3000) · `npm run lint` (= `tsc --noEmit`) · `npm run build` (Vite → `dist/`). No hay pruebas automáticas; la verificación visual se hace con Edge sin pantalla vía puppeteer-core (instalado fuera del proyecto).
- `esbuild` se subió a `^0.28.0` en package.json para resolver un conflicto de dependencias con Vite 8.

- Skills del proyecto en `.agents/skills/` (seo-organico-ia, tratamiento-datos-landing, emil-design-eng, mobile-native, break-ui, impeccable).
- Plan de trabajo: `wiki/plan-de-mejoras.md`; original en `Plan de mejoras/`.

## Rutina de Docs/
Cuando el usuario agregue archivos: inventariar, revisar contenido (ver las imágenes), clasificar, copiar a `Docs/organizados/` sin duplicar, actualizar `wiki/documentos-y-activos.md` y extraer datos comprobados a la wiki con referencia al archivo. Al usar una foto en la página, copiar solo ese activo a `public/` o `src/assets/`; no publicar todo Docs/.

## Reglas de trabajo
- Cambios pequeños y reversibles; conservar framework y estilo. No reconstruir el sitio.
- No inventar testimonios, precios, horarios, certificaciones, fotos ni contactos. Los faltantes van a `wiki/pendientes.md` y quedan visibles en el trabajo local.
- WhatsApp (313 779 9512) es el canal de pedidos; no convertirlo en bot. Pagos, tienda en línea, reservas o cuentas: acordar alcance antes.
- Verificar distinguiendo "compila", "revisado visualmente", "probado funcionalmente" y "publicado".
- No poner claves en código del navegador (`GEMINI_API_KEY` del export no se usa).
- No ampliar permisos silenciosamente al editar este archivo.

## Git y publicación
- Git local inicializado. Commits coherentes, solo archivos de la tarea; no usar "agregar todo" sin revisar. Deshacer = restaurar selectivamente.
- Subir a GitHub, publicar, dominio/DNS o costos requieren autorización explícita del dueño (ninguna otorgada aún).
