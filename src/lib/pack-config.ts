// Contenido del Pack Tienda — servicio de contenido de bemhe para petshops.
// Presentación separada del contenido: cambiás copy / precios / WhatsApp acá.

export const pack = {
  brand: "bemhe",
  tagline: "Contenido para petshops",

  whatsappNumber: "5493804854517",
  whatsappMessage: "Hola! Vi la propuesta de contenido y quiero mi semana de muestra.",

  nav: [
    { label: "Planes", href: "#planes" },
    { label: "Patitas", href: "/patitas" },
  ],

  hero: {
    eyebrow: "Contenido para petshops · La Rioja",
    title: "Más pedidos para tu tienda.",
    titleAccent: "Sin mover un dedo.",
    subtitle:
      "Me encargo de todo el contenido de tu petshop —posts, historias y carruseles, armados y publicados cada semana—. Vos solo respondés los pedidos que entran por WhatsApp.",
    cta: "Quiero mi semana de muestra",
    trust: ["Sin permanencia", "Mes a mes", "Muestra sin cargo"],
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

  planes: {
    eyebrow: "Planes",
    title: "Un sistema probado, a tu medida.",
    subtitle: "Elegí cuánto querés crecer. Lo demás lo manejo yo.",
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
    items: ["Sin permanencia", "Mes a mes", "Te armo una semana de muestra antes de decidir"],
  },

  ctaFinal: {
    title: "Empecemos por tu semana de muestra.",
    subtitle: "Te la armo con tus productos, sin compromiso. Si te gusta, seguimos.",
    cta: "Escribime por WhatsApp",
    reassure: "Te respondo yo, normalmente en el día.",
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
