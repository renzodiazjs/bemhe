// Contenido del Pack Tienda — servicio de contenido de bemhe para petshops.
// Presentación separada del contenido: cambiás copy / precios / WhatsApp acá.

export const pack = {
  brand: "bemhe",
  tagline: "Contenido para petshops",

  whatsappNumber: "5493804854517",
  whatsappMessage: "Hola! Vi la propuesta del Pack Tienda y quiero coordinar para arrancar.",

  nav: [
    { label: "Muestra", href: "#muestra" },
    { label: "Planes", href: "#planes" },
  ],

  hero: {
    eyebrow: "Contenido para petshops · La Rioja",
    title: "Más pedidos para tu tienda.",
    titleAccent: "Sin mover un dedo.",
    subtitle:
      "Me encargo de todo el contenido de tu petshop —posts, historias y carruseles, armados y publicados cada semana—. Vos solo respondés los pedidos que entran por WhatsApp.",
    cta: "Quiero mi semana de muestra",
    trust: ["Sin permanencia", "Mes a mes", "Primera semana sin cargo"],
  },

  problema: {
    eyebrow: "El problema de siempre",
    title: "Tenés el local. Lo que no tenés es tiempo para las redes.",
    body: "Mientras estás atendiendo, los pedidos que podrías estar tomando por Instagram y WhatsApp se te escapan. No porque falten clientes — porque nadie está mostrando tus productos todos los días.",
  },

  hace: {
    eyebrow: "Lo que se publica, solo",
    title: "Tu tienda, activa toda la semana.",
    items: [
      { icon: "ShoppingBag", title: "Productos con precio", text: "Listos para que el cliente pida en el momento." },
      { icon: "MessageCircle", title: "“Estamos tomando pedidos”", text: "Historias que empujan la venta cada semana." },
      { icon: "GraduationCap", title: "Educa y fideliza", text: "Carruseles que te posicionan como referente." },
      { icon: "CalendarCheck", title: "Cero trabajo tuyo", text: "Todo programado y publicado por mí." },
    ],
  },

  muestra: {
    eyebrow: "Una semana real",
    title: "Esto no es promesa. Es lo que se publica.",
    subtitle:
      "Una semana completa de contenido, día por día, con el mismo sistema que voy a usar en tu tienda. Deslizá y mirá lo que recibís.",
    nota: "Trabajo real producido para una tienda. En tu cuenta sale con TUS productos, tu marca y tus precios.",
    semana: [
      {
        dia: "Lunes",
        foco: "Abre la semana: apertura tomando pedidos + 3 productos en 2 formatos.",
        piezas: [
          { src: "/muestra/Historia-EstamosAndiendo.png", formato: "historia", alt: "Historia de apertura: estamos tomando pedidos" },
          { src: "/muestra/EstadoW-Producto01-Lunes.png", formato: "post", alt: "Post de producto con precio" },
          { src: "/muestra/Historia-Producto01-Lunes.png", formato: "historia", alt: "Historia del mismo producto" },
          { src: "/muestra/EstadoW-Producto02-Lunes.png", formato: "post", alt: "Post de producto con precio" },
          { src: "/muestra/Historia-Producto02-Lunes.png", formato: "historia", alt: "Historia del mismo producto" },
          { src: "/muestra/EstadoW-Producto03-Lunes.png", formato: "post", alt: "Post de producto con precio" },
          { src: "/muestra/Historia-Producto03-Lunes.png", formato: "historia", alt: "Historia del mismo producto" },
        ],
      },
      {
        dia: "Miércoles",
        foco: "Tres productos nuevos, cada uno en post e historia.",
        piezas: [
          { src: "/muestra/EstadoW-Producto01-Miercoles.png", formato: "post", alt: "Post de producto con precio" },
          { src: "/muestra/Historia-Producto01-Miercoles.png", formato: "historia", alt: "Historia del mismo producto" },
          { src: "/muestra/EstadoW-Producto02-Miercoles.png", formato: "post", alt: "Post de producto con precio" },
          { src: "/muestra/Historia-Producto02-Miercoles.png", formato: "historia", alt: "Historia del mismo producto" },
          { src: "/muestra/EstadoW-Producto03-Miercoles.png", formato: "post", alt: "Post de producto con precio" },
          { src: "/muestra/Historia-Producto03-Miercoles.png", formato: "historia", alt: "Historia del mismo producto" },
        ],
      },
      {
        dia: "Jueves",
        foco: "Carrusel educativo + historia interactiva para fidelizar.",
        piezas: [
          { src: "/muestra/Carrusel01-.png", formato: "post", alt: "Carrusel educativo, portada" },
          { src: "/muestra/Carrusel02-.png", formato: "post", alt: "Carrusel educativo, slide 2" },
          { src: "/muestra/Carrusel03-.png", formato: "post", alt: "Carrusel educativo, slide 3" },
          { src: "/muestra/Carrusel04-.png", formato: "post", alt: "Carrusel educativo, slide 4" },
          { src: "/muestra/Historia-Interactiva-Jueves.jpg", formato: "historia", alt: "Historia interactiva con encuesta" },
        ],
      },
      {
        dia: "Viernes",
        foco: "Cierre de semana: 3 productos en 2 formatos.",
        piezas: [
          { src: "/muestra/EstadoW-Producto01-Viernes.png", formato: "post", alt: "Post de producto con precio" },
          { src: "/muestra/Historia-Producto01-Viernes.png", formato: "historia", alt: "Historia del mismo producto" },
          { src: "/muestra/EstadoW-Producto02-Viernes.png", formato: "post", alt: "Post de producto con precio" },
          { src: "/muestra/Historia-Producto02-Viernes.png", formato: "historia", alt: "Historia del mismo producto" },
          { src: "/muestra/EstadoW-Producto03-Viernes.png", formato: "post", alt: "Post de producto con precio" },
          { src: "/muestra/Historia-Producto03-Viernes.png", formato: "historia", alt: "Historia del mismo producto" },
        ],
      },
      {
        dia: "Sábado",
        foco: "Historia de entretenimiento que educa y engancha.",
        piezas: [
          { src: "/muestra/H-Informativa.png", formato: "historia", alt: "Historia informativa para la audiencia" },
        ],
      },
    ],
  },

  planes: {
    eyebrow: "Planes",
    title: "Un sistema probado, a tu medida.",
    subtitle:
      "Un pack definido, no un community manager a medida: elegís el plan, yo produzco y publico el contenido con un sistema ya probado. Vos solo respondés los pedidos.",
    items: [
      {
        name: "Arranque",
        desc: "Para empezar a mostrarte y tomar pedidos ya.",
        price: "$80.000",
        period: "/mes",
        features: ["Contenido 1 día por semana", "Historia de apertura semanal", "Publicación programada"],
        featured: false,
        badge: "",
      },
      {
        name: "Crecimiento",
        desc: "Para crecer en serio, semana a semana.",
        price: "$160.000",
        period: "/mes",
        features: [
          "Contenido 3 días por semana",
          "Carrusel educativo semanal",
          "Historias de apertura, conexión y entretenimiento",
          "Publicación programada",
        ],
        featured: true,
        badge: "★ Recomendado",
      },
      {
        name: "Presencia",
        desc: "Presencia constante, sin exagerar.",
        price: "$120.000",
        period: "/mes",
        features: ["Contenido 2 días por semana", "Carrusel cada 15 días", "Historia de apertura semanal"],
        featured: false,
        badge: "",
      },
    ],
    anchor: "Comprado suelto, todo esto te saldría más de $330.000 al mes. En el pack mensual, desde $80.000.",
  },

  riesgo: {
    eyebrow: "Cero riesgo para vos",
    items: ["Sin permanencia", "Mes a mes", "Primera semana de muestra antes de decidir, sin cargo"],
  },

  ctaFinal: {
    title: "¿Arrancamos? Agendemos 15 minutos.",
    subtitle: "Coordinamos por WhatsApp, definimos el plan que te sirve y dejo lista tu primera semana de contenido. Sin permanencia: si no te suma, lo dejás.",
    cta: "Agendemos por WhatsApp",
    reassure: "Te respondo yo —no un bot—, normalmente en el día.",
  },

  patitasLink: {
    eyebrow: "¿Ya vendés online?",
    text: "Patitas es mi otra herramienta: el radar que detecta a tu cliente recurrente cuando deja de comprar y te avisa para retenerlo a tiempo.",
    cta: "Conocé Patitas",
    href: "/patitas",
  },
} as const;

export function packWhatsapp(message: string = pack.whatsappMessage) {
  return `https://wa.me/${pack.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
