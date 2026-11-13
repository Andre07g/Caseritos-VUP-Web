export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
  popular?: boolean;
  tag?: string;
  isSpecialCombo?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'pa-toa-hora', name: "Pa' toa hora", subtitle: "Antojos de la casa" },
  { id: 'arma-tu-desayuno', name: "Arma tu desayuno especial", subtitle: "Combos & Sorpresas" },
  { id: 'pal-desayuno', name: "Pal' desayuno", subtitle: "Mañanas Criollas" },
  { id: 'cayeye', name: "Cayeye", subtitle: "Tradición Costeña" },
  { id: 'deditos-horneados', name: "Deditos horneados", subtitle: "Masa Suave" },
  { id: 'pal-almuerzo', name: "Pal' almuerzo", subtitle: "Guisos & Asados" },
  { id: 'sancocho', name: "Sancocho", subtitle: "Olla Caliente" },
  { id: 'bandeja-vallenata-cat', name: "Bandeja vallenata", subtitle: "El Orgullo Criollo" },
  { id: 'bowl-caseritos', name: "Bowl Caseritos", subtitle: "Práctico & Nutritivo" },
  { id: 'picadas', name: "Picadas", subtitle: "Para Compartir" },
  { id: 'adicionales', name: "Adicionales", subtitle: "Acompañamientos" },
  { id: 'bebidas', name: "Bebidas caseritas", subtitle: "Refrescos del Valle" },
];

export const POPULAR_ITEMS: MenuItem[] = [
  {
    id: 'pop-1',
    name: 'Bowl de pechuga asada',
    price: 19900,
    category: 'bowl-caseritos',
    description: 'Trozos de pechuga dorada, vegetales y arroz',
    image: '/fotos/bowl-pechuga.webp',
    popular: true,
  },
  {
    id: 'pop-2',
    name: 'Bowl de pollo guisado',
    price: 19900,
    category: 'bowl-caseritos',
    description: 'Pollo deshebrado en su salsa con arroz blanco',
    image: '/fotos/bowl-pollo-guisado.webp',
    popular: true,
  },
  {
    id: 'pop-3',
    name: 'Bowl de carne molida',
    price: 19900,
    category: 'bowl-caseritos',
    description: 'Base de arroz, fríjoles, carne molida y tajadas',
    image: '/fotos/bowl-carne-molida.webp',
    popular: true,
  },
  {
    id: 'pop-4',
    name: 'Bowl de carne desmechada',
    price: 19900,
    category: 'bowl-caseritos',
    description: 'Base de arroz, carne desmechada y suero',
    image: '/fotos/bowl-carne-desmechada.webp',
    popular: true,
  },
  {
    id: 'pop-5',
    name: 'Combo bowl arroz con pollo',
    price: 19900,
    category: 'bowl-caseritos',
    description: 'Arroz con pollo desmenuzado, platanitos y ensalada',
    image: '/fotos/combo-arroz-pollo.webp',
    popular: true,
  },
  {
    id: 'pop-6',
    name: 'Combo bowl arroz de cerdo',
    price: 19900,
    category: 'bowl-caseritos',
    description: 'Arroz criollo con cerdo confitado y aguacate',
    image: '/fotos/combo-arroz-cerdo.webp',
    popular: true,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. Pa' toa hora
  { id: 'pth-1', name: 'Arepa de huevo', price: 3500, category: 'pa-toa-hora' },
  { id: 'pth-2', name: 'Arepa de queso', price: 5000, category: 'pa-toa-hora' },
  { id: 'pth-3', name: 'Arepa rellena (carne molida o desmechada)', price: 10000, category: 'pa-toa-hora' },
  { id: 'pth-4', name: 'Arepuela', price: 3500, category: 'pa-toa-hora' },
  { id: 'pth-5', name: 'Arepuela rellena (carne molida o desmechada)', price: 15000, category: 'pa-toa-hora' },
  { id: 'pth-6', name: 'Arepuela rellena de queso', price: 10000, category: 'pa-toa-hora' },
  { id: 'pth-7', name: 'Buñuelo tradicional', price: 2500, category: 'pa-toa-hora' },
  { id: 'pth-8', name: 'Deditos de queso', price: 5500, category: 'pa-toa-hora' },
  { id: 'pth-9', name: 'Cochinito', price: 5500, category: 'pa-toa-hora' },
  { id: 'pth-10', name: 'Rosquete full queso', price: 7000, category: 'pa-toa-hora' },
  { id: 'pth-11', name: 'Empanadas (carne o pollo)', price: 3500, category: 'pa-toa-hora' },

  // 2. Arma tu desayuno especial
  { id: 'atd-1', name: 'Opción 1', price: 65000, category: 'arma-tu-desayuno', description: 'Arepa con queso costeño, carne desmechada suave, huevos pericos, tajadas dulces y jugo natural', isSpecialCombo: true },
  { id: 'atd-2', name: 'Opción 2', price: 60000, category: 'arma-tu-desayuno', description: 'Arepa de maíz amarillo, carne molida en guiso criollo, huevos al gusto y café con leche', isSpecialCombo: true },
  { id: 'atd-3', name: 'Mi persona favorita #1', price: 78900, category: 'arma-tu-desayuno', description: 'Desayuno sorpresa con mensaje cariñoso, bandeja criolla completa, postre artesanal y bebida en termo', isSpecialCombo: true },
  { id: 'atd-4', name: 'Amor del bueno #2', price: 64900, category: 'arma-tu-desayuno', description: 'Variedad de bocados criollos, arepuelas de queso, huevos y refrescante jugo de corozo', isSpecialCombo: true },
  { id: 'atd-5', name: "Pa' las que sea #3", price: 29900, category: 'arma-tu-desayuno', description: 'Huevos al gusto, bollo limpio cesarense, queso fresco y tinto recién colado', isSpecialCombo: true },
  { id: 'atd-6', name: 'Amor Caseritos #4', price: 31900, category: 'arma-tu-desayuno', description: 'Dedito horneado de queso, arepuela dorada y chocolate caliente espumoso', isSpecialCombo: true },

  // 3. Pal' desayuno
  { id: 'pd-1', name: 'Chicharrón personal', price: 36000, category: 'pal-desayuno', description: 'Tocineta crocante carnuda con yuca o bollo y suero' },
  { id: 'pd-2', name: 'Desayuno con carne desmechada', price: 30000, category: 'pal-desayuno', description: 'Carne jugosa sazonada con guiso de la casa, arepa y huevo' },
  { id: 'pd-3', name: 'Desayuno con carne molida', price: 30000, category: 'pal-desayuno', description: 'Carne molida criolla, arepa de maíz y queso costeño' },
  { id: 'pd-4', name: 'Desayuno mixto', price: 36000, category: 'pal-desayuno', description: 'Carne desmechada + carne molida o chicharrón, huevos y arepa' },
  { id: 'pd-5', name: 'Desayuno con huevo frito', price: 12000, category: 'pal-desayuno', description: 'Huevos fritos al punto con arepa caliente y mantequilla' },
  { id: 'pd-6', name: 'Desayuno con huevo, jamón y queso', price: 22000, category: 'pal-desayuno', description: 'Revueltos con jamón y abundante queso costeño derretido' },
  { id: 'pd-7', name: 'Desayuno con huevo perico', price: 18000, category: 'pal-desayuno', description: 'Clásicos huevos pericos con cebollita junca y tomate fresco' },
  { id: 'pd-8', name: 'Arepuela rellena de queso', price: 10000, category: 'pal-desayuno', description: 'Frita al momento con queso costeño hilado' },

  // 4. Cayeye
  { id: 'cy-1', name: 'Cayeye con queso', price: 18000, category: 'cayeye', description: 'Puré de guineo verde con abundante mantequilla y queso costeño rallado' },
  { id: 'cy-2', name: 'Cayeye con carne molida', price: 32000, category: 'cayeye', description: 'Montado con carne molida sazonada al estilo de la abuela' },
  { id: 'cy-3', name: 'Cayeye con carne desmechada', price: 32000, category: 'cayeye', description: 'El favorito de los vallenatos con jugosa carne de res' },
  { id: 'cy-4', name: 'Cayeye con chicharrón', price: 38000, category: 'cayeye', description: 'Con trocitos de chicharrón crocante y hogao' },
  { id: 'cy-5', name: 'Cayeye con huevo frito', price: 19000, category: 'cayeye', description: 'Yema tierna para bañar el guineo verde' },
  { id: 'cy-6', name: 'Cayeye con huevo perico', price: 25000, category: 'cayeye', description: 'Con guiso tradicional de tomate y cebolla' },
  { id: 'cy-7', name: 'Cayeye con huevo, jamón y queso', price: 28000, category: 'cayeye', description: 'Combinación sustanciosa para iniciar el día' },
  { id: 'cy-8', name: 'Cayeye con huevo ranchero', price: 28000, category: 'cayeye', description: 'Con salchicha ranchera, maíz tierno y hogao casero' },

  // 5. Deditos horneados
  { id: 'dh-1', name: 'Dedito horneado de queso', price: 7000, category: 'deditos-horneados', description: 'Masa hojaldrada suave y relleno abundante de queso costeño' },
  { id: 'dh-2', name: 'Dedito horneado de queso y bocadillo', price: 7000, category: 'deditos-horneados', description: 'El toque dulce de bocadillo veleño con queso salado' },

  // 6. Pal' almuerzo
  { id: 'pa-1', name: 'Almuerzo con lomo de cerdo', price: 30000, category: 'pal-almuerzo', description: 'Acompañado de arroz, ensalada, tajadas o patacón y sopa del día' },
  { id: 'pa-2', name: 'Almuerzo con pechuga', price: 30000, category: 'pal-almuerzo', description: 'Pechuga a la plancha dorada con sazón vallenata' },
  { id: 'pa-3', name: 'Almuerzo con carne molida', price: 32000, category: 'pal-almuerzo', description: 'Carne molida casera bien guisada' },
  { id: 'pa-4', name: 'Almuerzo con carne desmechada', price: 32000, category: 'pal-almuerzo', description: 'Desmechada tierna en salsa criolla' },
  { id: 'pa-5', name: 'Almuerzo con chicharrón', price: 45000, category: 'pal-almuerzo', description: 'Tira de chicharrón crocante carnudo' },
  { id: 'pa-6', name: 'Almuerzo con muchacho', price: 35000, category: 'pal-almuerzo', description: 'Muchacho relleno o sudado en jugo de cocción lenta' },
  { id: 'pa-7', name: 'Almuerzo con panza', price: 30000, category: 'pal-almuerzo', description: 'Panza guisada suave con verduras criollas' },
  { id: 'pa-8', name: 'Almuerzo con pollo guisado', price: 30000, category: 'pal-almuerzo', description: 'Presa de pollo tierna bañada en guiso casero' },
  { id: 'pa-9', name: 'Almuerzo con gallina guisada', price: 35000, category: 'pal-almuerzo', description: 'Sabor de campo en olla de barro' },
  { id: 'pa-10', name: 'Almuerzo con rabo guisado', price: 40000, category: 'pal-almuerzo', description: 'Rabo encendido cocido a fuego lento' },
  { id: 'pa-11', name: 'Almuerzo con chivo guisado', price: 40000, category: 'pal-almuerzo', description: 'Chivo auténtico de la provincia con su guiso criollo' },
  { id: 'pa-12', name: 'Arroz de cerdo completo', price: 28000, category: 'pal-almuerzo', description: 'Arroz apastelado con trozos de cerdo y verduras' },
  { id: 'pa-13', name: 'Pastel de cerdo o de pollo', price: 28000, category: 'pal-almuerzo', description: 'Envuelto en hoja de bijao al vapor con alcaparras y hogao' },

  // 7. Sancocho
  { id: 'sc-1', name: 'Medio sancocho de costilla', price: 19000, category: 'sancocho', description: 'Porción personal con bastimento, arroz y aguacate' },
  { id: 'sc-2', name: 'Sancocho de costilla completo', price: 28000, category: 'sancocho', description: 'Olla generosa de costilla de res, plátano, yuca y mazorca' },
  { id: 'sc-3', name: 'Medio sancocho de mondongo', price: 19000, category: 'sancocho', description: 'Mondongo tradicional bien sazonado' },
  { id: 'sc-4', name: 'Sancocho de mondongo completo', price: 28000, category: 'sancocho', description: 'Sustancioso con carne de cerdo, verduras y limón mandarina' },

  // 8. Bandeja vallenata
  {
    id: 'bv-1',
    name: 'Bandeja vallenata completa',
    price: 48000,
    category: 'bandeja-vallenata-cat',
    description: 'Carne, chicharrón crocante, arroz, frijoles, tajadas, huevo y arepa con queso.'
  },

  // 9. Bowl Caseritos
  { id: 'bw-1', name: 'Combo bowl arroz con pollo', price: 19900, category: 'bowl-caseritos', description: 'Arroz con pollo desmenuzado, platanitos y ensalada' },
  { id: 'bw-2', name: 'Combo bowl arroz de cerdo', price: 19900, category: 'bowl-caseritos', description: 'Arroz criollo con cerdo confitado y aguacate' },
  { id: 'bw-3', name: 'Bowl de carne molida', price: 19900, category: 'bowl-caseritos', description: 'Base de arroz, fríjoles, carne molida y tajadas' },
  { id: 'bw-4', name: 'Bowl de carne desmechada', price: 19900, category: 'bowl-caseritos', description: 'Base de arroz, carne desmechada y suero' },
  { id: 'bw-5', name: 'Bowl de pechuga asada', price: 19900, category: 'bowl-caseritos', description: 'Trozos de pechuga dorada, vegetales y arroz' },
  { id: 'bw-6', name: 'Bowl de lomo asado', price: 19900, category: 'bowl-caseritos', description: 'Tiras de lomo tierno con chimichurri criollo' },
  { id: 'bw-7', name: 'Bowl de pollo guisado', price: 19900, category: 'bowl-caseritos', description: 'Pollo deshebrado en su salsa con arroz blanco' },
  { id: 'bw-8', name: 'Bowl paisa', price: 23900, category: 'bowl-caseritos', description: 'Chicharrón picado, carne molida, frijoles, huevo y arroz' },

  // 10. Picadas
  { id: 'pc-1', name: 'Picada para 2', price: 70000, category: 'picadas', description: 'Chicharrón crocante, arepitas y patacones con suero y ají' },
  { id: 'pc-2', name: 'Picada para 5', price: 140000, category: 'picadas', description: 'Generosa ración criolla de chicharrón con complementos familiares' },

  // 11. Adicionales
  { id: 'ad-1', name: 'Dulces típicos', price: 12000, category: 'adicionales' },
  { id: 'ad-2', name: 'Bollo limpio', price: 3000, category: 'adicionales' },
  { id: 'ad-3', name: 'Patacón crocante', price: 3000, category: 'adicionales' },
  { id: 'ad-4', name: 'Arroz con leche casero', price: 12000, category: 'adicionales' },
  { id: 'ad-5', name: 'Queso rallado costeño', price: 8500, category: 'adicionales' },
  { id: 'ad-6', name: 'Queso asado', price: 8500, category: 'adicionales' },
  { id: 'ad-7', name: 'Ahogado criollo', price: 2000, category: 'adicionales' },
  { id: 'ad-8', name: 'Suero Klarens', price: 3000, category: 'adicionales' },
  { id: 'ad-9', name: 'Porción de arroz de coco', price: 7000, category: 'adicionales' },
  { id: 'ad-10', name: 'Porción de arroz blanco', price: 4000, category: 'adicionales' },
  { id: 'ad-11', name: 'Aguacate fresco', price: 4000, category: 'adicionales' },
  { id: 'ad-12', name: 'Plátano asado', price: 5000, category: 'adicionales' },
  { id: 'ad-13', name: 'Caja decorada para regalo', price: 10000, category: 'adicionales' },

  // 12. Bebidas caseritas
  { id: 'bb-1', name: 'Avena casera helada', price: 4500, category: 'bebidas' },
  { id: 'bb-2', name: 'Avenita especial', price: 8000, category: 'bebidas' },
  { id: 'bb-3', name: 'Milo frío', price: 8000, category: 'bebidas' },
  { id: 'bb-4', name: 'Milito', price: 4500, category: 'bebidas' },
  { id: 'bb-5', name: 'Jugo de corozo natural', price: 7000, category: 'bebidas' },
  { id: 'bb-6', name: 'Corocito personal', price: 3500, category: 'bebidas' },
  { id: 'bb-7', name: 'Jugo de corozo litro', price: 15000, category: 'bebidas' },
  { id: 'bb-8', name: 'Chicha kola tradicional', price: 5000, category: 'bebidas' },
  { id: 'bb-9', name: 'Chicha de piña fermentada', price: 5000, category: 'bebidas' },
];

export interface EventPackage {
  id: string;
  name: string;
  price: number;
  icon: string;
  description: string;
  tag?: string;
}

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'evt-1',
    name: 'Menú especial sobre pedido',
    price: 35000,
    icon: 'restaurant_menu',
    description: 'Personalizado al gusto para grupos selectos y reuniones ejecutivas.',
  },
  {
    id: 'evt-2',
    name: 'Cajita vallenata',
    price: 32000,
    icon: 'inventory_2',
    description: 'Combinación criolla empacada individualmente y lista para entregar.',
  },
  {
    id: 'evt-3',
    name: 'Caja opción 1x10',
    price: 60000,
    icon: 'featured_play_list',
    description: 'Diez porciones listas para compartir entre compañeros y amigos.',
  },
  {
    id: 'evt-4',
    name: 'Caja opción 2x10',
    price: 120000,
    icon: 'local_mall',
    description: 'Doble banquete para grupos medianos con fritos y bocados típicos.',
  },
  {
    id: 'evt-5',
    name: 'Mini pasabocas x50',
    price: 85000,
    icon: 'tapas',
    description: 'Bocados surtidos para fiestas familiares: arepitas, deditos y empanaditas.',
  },
  {
    id: 'evt-6',
    name: 'Mini deditos x50',
    price: 90000,
    icon: 'bakery_dining',
    description: 'Crocantes y rellenos de queso de hoja costeño de primera calidad.',
  },
  {
    id: 'evt-7',
    name: 'Combo fiesta x30',
    price: 55000,
    icon: 'festival',
    description: 'Selección ideal para meriendas, cumpleaños infantiles y agasajos.',
  },
  {
    id: 'evt-8',
    name: 'Combo fiesta x50',
    price: 85000,
    icon: 'celebration',
    description: 'La gran mesa festiva para eventos multitudinarios y celebraciones.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Hacen domicilios?',
    answer: 'Sí, atendemos domicilios en Valledupar. El valor depende de tu ubicación y te lo confirmamos por WhatsApp antes de despachar tu pedido.',
  },
  {
    id: 'faq-2',
    question: '¿Con cuánto tiempo debo pedir para un evento?',
    answer: 'Escríbenos por WhatsApp con la fecha, el lugar y la cantidad de personas, y te confirmamos con cuánta anticipación necesitamos tu pedido.',
  },
  {
    id: 'faq-3',
    question: '¿Qué formas de pago aceptan?',
    answer: 'Te confirmamos las formas de pago por WhatsApp cuando hagas tu pedido.',
  },
  {
    id: 'faq-4',
    question: '¿Tienen opciones sin carne?',
    answer: 'En la carta hay arepa de queso, arepuela rellena de queso, cayeye con queso y deditos horneados de queso. Pregúntanos por WhatsApp si necesitas confirmar ingredientes.',
  },
];

export const RESTAURANT_INFO = {
  name: 'Caseritos Valledupar',
  phone: '313 779 9512',
  whatsappRaw: '573137799512',
  address: 'CL 6 C 13 A 60, Valledupar, Cesar',
  instagram: '@caseritosvalledupar',
  hours: 'Lunes a Domingo: 7:00 a.m. - 4:00 p.m.',
  logo: '/logo-caseritos.png',
  heroImage: '/fotos/hero-almuerzo.webp',
};

export function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-CO')}`;
}

export interface MenuMoment {
  id: string;
  name: string;
  categories: string[];
}

// Agrupa las categorías existentes por momento del día (sin repetir ninguna).
export const MENU_MOMENTS: MenuMoment[] = [
  { id: 'desayuno', name: 'Desayunos', categories: ['arma-tu-desayuno', 'pal-desayuno', 'cayeye'] },
  { id: 'almuerzo', name: 'Almuerzos', categories: ['pal-almuerzo', 'sancocho', 'bandeja-vallenata-cat', 'bowl-caseritos'] },
  { id: 'antojos', name: 'Antojos', categories: ['pa-toa-hora', 'deditos-horneados', 'picadas'] },
  { id: 'extras', name: 'Extras y bebidas', categories: ['adicionales', 'bebidas'] },
];
