// Contenido de la landing separado de la presentación.
// Cambiás copy / precio / WhatsApp acá, sin tocar el JSX.

export const site = {
  brand: "Patitas",

  whatsappNumber: "5493804854517",
  whatsappMessage: "Hola! Vi la web de Patitas y quiero saber más.",

  // TODO(Renzo): cómo querés firmar (tu nombre).
  founderName: "Renzo",

  nav: [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Precio", href: "#precio" },
  ],

  hero: {
    eyebrow: "Para dueños de petshop · Hecho en Argentina",
    title: "Vos atendé tu local.\nYo cuido a tus clientes.",
    subtitle:
      "El radar que detecta a tu cliente recurrente cuando deja de comprar — y te avisa a tiempo para retenerlo.",
    ctaPrimary: "Quiero verlo con mi local",
    ctaShort: "Escribime",
    ctaSecondary: "Ver cómo funciona",
    trust: [
      "Hablás conmigo, no con un bot",
      "Sin instalar nada",
      "Hecho en Argentina",
    ],
  },

  problema: {
    eyebrow: "El problema",
    title: "Tu mayor ingreso no son los clientes nuevos. Son los que vuelven.",
    body: "El cliente recurrente es tu piso: esas bolsas de alimento que sabés que vendés todos los meses. El tema es que cuando uno deja de venir, no te enterás hasta que ya es tarde. Lo perdés en silencio — y recuperarlo cuesta el triple que cuidarlo.",
    points: [
      {
        icon: "TrendingDown",
        title: "Se van sin avisar",
        text: "Un mes no vino. ¿Te diste cuenta? Casi nunca. Para cuando lo notás, ya compra en otro lado.",
      },
      {
        icon: "Bell",
        title: "No tenés alarma",
        text: "Llevás el negocio de memoria y en papelitos. No hay nada que te avise a tiempo.",
      },
      {
        icon: "Heart",
        title: "Es tu plata más segura",
        text: "Retener a un recurrente es más barato y más rentable que salir a buscar uno nuevo.",
      },
    ],
  },

  comoFunciona: {
    eyebrow: "Cómo funciona",
    title: "Simple. Como tiene que ser.",
    subtitle:
      "No tenés que aprender nada raro ni instalar programas. Funciona con lo que ya usás todos los días: WhatsApp.",
    steps: [
      {
        n: "1",
        icon: "Store",
        title: "Tu tienda toma los pedidos",
        text: "Tus clientes ven tu catálogo y te mandan el pedido por WhatsApp. Esa es la antena del radar.",
      },
      {
        n: "2",
        icon: "Radar",
        title: "Patitas registra quién y cada cuánto",
        text: "Sin que hagas nada, aprende el ritmo de compra de cada cliente recurrente.",
      },
      {
        n: "3",
        icon: "Bell",
        title: "Te avisa antes de perderlo",
        text: "Cuando un cliente se atrasa, el Radar te lo marca para que lo recuperes a tiempo.",
      },
    ],
  },

  porDentro: {
    eyebrow: "Esto es real",
    title: "Mirá Patitas por dentro",
    subtitle:
      "No es una maqueta ni una promesa. Es el sistema funcionando — con tu tienda, tus productos y tus clientes.",
    // TODO(Renzo): /radar-real.png y /dashboard-real.png son capturas con datos REALES (PII).
    // Reemplazar por capturas con datos DEMO antes de commitear/deployar (B-09 / @Legal).
    screens: [
      {
        src: "/radar-real.png",
        w: 1244,
        h: 730,
        alt: "Radar de Recurrentes: clientes a contactar con su producto y el botón para enviar el recordatorio por WhatsApp.",
        tag: "El Radar",
        caption:
          "Patitas te marca quién está por quedarse sin alimento y te arma el WhatsApp con el mensaje listo. Vos solo apretás «Enviar recordatorio».",
      },
      {
        src: "/dashboard-real.png",
        w: 1340,
        h: 852,
        alt: "Panel de inicio de Patitas: ingresos, pedidos, embudo de conversión, stock bajo y más vendidos.",
        tag: "Tu negocio, ordenado",
        caption:
          "Ventas, pedidos, stock y lo que más sale — todo en una pantalla. Esta información es la antena que alimenta el Radar.",
      },
    ],
  },

  comparativa: {
    eyebrow: "Antes / después",
    title: "Lo que cambia el día que prendés el radar",
    rows: [
      {
        dim: "Saber quién dejó de comprar",
        sin: "Te enterás cuando ya es tarde",
        con: "El radar te avisa a tiempo",
      },
      {
        dim: "Tomar pedidos",
        sin: "Mensajes sueltos, anotás a mano",
        con: "Catálogo + pedido ordenado por WhatsApp",
      },
      {
        dim: "Tu piso de ingresos",
        sin: "Lo perdés de a poco, en silencio",
        con: "Lo cuidás y lo hacés crecer",
      },
      {
        dim: "Tu cabeza",
        sin: "Todo de memoria y en papelitos",
        con: "El sistema se acuerda por vos",
      },
    ],
  },

  confianza: {
    eyebrow: "Sin vueltas",
    title: "No es magia ni humo. Es tu negocio, ordenado.",
    founder: {
      title: "Hablás conmigo, no con un bot",
      text: "Te configuro Patitas con los datos de tu local, te lo dejo andando, y te atiendo el WhatsApp cuando lo necesites. Sin call centers, sin letra chica.",
      cta: "Escribime por WhatsApp",
    },
    // Testimonios REALES: agregar acá recién cuando haya clientes felices (T-03).
    // Decisión del consejo (B-04): nunca mostrar prueba social falsa. Hasta tener
    // testimonios verificables, la sección no se renderiza.
    testimonios: [] as { quote: string; name: string; shop: string; city: string }[],
    cues: ["Hecho en Argentina", "Sin instalar nada", "Cancelás cuando quieras"],
  },

  precio: {
    eyebrow: "Precio",
    title: "Un precio claro. Sin sorpresas.",
    subtitle: "Con que retengas una sola bolsa de alimento al mes, ya se pagó.",
    amount: "$20.000",
    period: "/mes",
    features: [
      "Tu tienda online lista",
      "Radar de Recurrentes",
      "Pedidos ordenados por WhatsApp",
      "Soporte directo conmigo",
      "Sin contratos: cancelás cuando quieras",
    ],
    cta: "Quiero verlo con mi local",
    note: "Te lo dejo andando con los datos de tu local antes de que pagues un peso.",
  },

  faq: {
    eyebrow: "Preguntas",
    title: "Lo que todos preguntan",
    items: [
      {
        q: "¿Necesito saber de tecnología?",
        a: "Para nada. Si sabés usar WhatsApp, sabés usar Patitas. Y lo que haya que configurar, lo hago yo.",
      },
      {
        q: "¿Tengo que instalar algún programa?",
        a: "No. Funciona en el navegador y en el celular. Cero instalaciones.",
      },
      {
        q: "¿Mis clientes tienen que bajar una app?",
        a: "No. Te siguen pidiendo por WhatsApp, como ahora. Solo que ahora todo queda ordenado.",
      },
      {
        q: "¿Y si ya llevo todo en un cuaderno?",
        a: "Perfecto, Patitas hace eso mismo pero sin que se te escape nadie. Pasamos tus datos y listo.",
      },
      {
        q: "¿Cómo arranco?",
        a: "Me escribís, lo vemos juntos, y te lo dejo funcionando con los datos de tu local para que lo veas con tus propios ojos.",
      },
    ],
  },

  ctaFinal: {
    title: "Dejá de perder clientes en silencio.",
    subtitle: "Prendé el radar y cuidá el ingreso que ya tenés.",
    cta: "Quiero verlo con mi local",
    reassure: "Te respondo yo, normalmente en el día.",
  },
} as const;

export function whatsappUrl() {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
}
