// Genera la tarjeta imprimible con el QR de la encuesta de satisfacción.
// Uso:  node herramientas/generar-qr.mjs <URL-de-la-encuesta> [correo-destino] [mesa]
// Ej.:  node herramientas/generar-qr.mjs https://midominio.com/encuesta.html opiniones@correo.com
// Salida: herramientas/qr-encuesta.html (abrir en el navegador e imprimir; cabe en media carta).
import QRCode from 'qrcode';
import { writeFileSync, readFileSync } from 'node:fs';

const [url, correo, mesa] = process.argv.slice(2);
if (!url) {
  console.error('Falta la URL. Ej.: node herramientas/generar-qr.mjs https://midominio.com/encuesta.html opiniones@correo.com');
  process.exit(1);
}
const u = new URL(url);
if (correo) u.searchParams.set('para', correo);
if (mesa) u.searchParams.set('mesa', mesa);

const svg = await QRCode.toString(u.toString(), { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#502416', light: '#ffffff' } });
const logo = 'data:image/png;base64,' + readFileSync(new URL('../public/logo-caseritos.png', import.meta.url)).toString('base64');

const html = `<!doctype html><html lang="es"><head><meta charset="UTF-8"><title>QR encuesta - Caseritos</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Plus+Jakarta+Sans:wght@500;700&display=swap" rel="stylesheet">
<style>
@page{size:A5;margin:0}
body{margin:0;background:#eee;font-family:"Plus Jakarta Sans",sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.card{width:148mm;height:210mm;margin:0 auto;background:#fff8f6;display:flex;flex-direction:column;align-items:center;text-align:center;overflow:hidden}
.top{background:#502416;width:100%;padding:12mm 8mm 10mm}
.top img{width:26mm;height:26mm;border-radius:2mm}
h1{font-family:"Playfair Display",serif;font-size:11mm;line-height:1.1;margin:8mm 8mm 3mm;color:#502416}
p{margin:0 10mm;color:#52443f;font-size:4.4mm}
.qr{width:78mm;height:78mm;margin:8mm 0 6mm;padding:4mm;background:#fff;border:.6mm solid #fe852c;border-radius:6mm}
.qr svg{width:100%;height:100%;display:block}
.pill{background:#fe852c;color:#321300;font-weight:700;font-size:5mm;padding:3mm 8mm;border-radius:99mm}
small{margin-top:auto;padding:0 0 8mm;color:#85736e;font-size:3.6mm}
</style></head><body><div class="card">
<div class="top"><img src="${logo}" alt="Caseritos"></div>
<h1>¿Cómo te fue hoy?</h1>
<p>Escanea el código con la cámara de tu celular y cuéntanos tu experiencia.</p>
<div class="qr">${svg}</div>
<div class="pill">Toma menos de 1 minuto</div>
<small>Caseritos Valledupar · Comida típica</small>
</div></body></html>`;
writeFileSync(new URL('./qr-encuesta.html', import.meta.url), html);
console.log('Listo: herramientas/qr-encuesta.html\nEl QR apunta a: ' + u.toString());
