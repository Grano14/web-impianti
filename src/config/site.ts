/**
 * ============================================================
 *  DATI DELL'ATTIVITÀ — modifica qui, valgono per tutto il sito
 * ============================================================
 *
 * Tutti i valori qui sotto sono SEGNAPOSTO da sostituire con i dati reali.
 * Sono usati in header, footer, pagina contatti, privacy policy, dati
 * strutturati per Google (Schema.org) e meta tag.
 */

export const site = {
  /** Nome commerciale mostrato nel logo e nei titoli */
  name: 'Rossi Impianti',
  /** Ragione sociale completa (footer, privacy policy) */
  legalName: 'Rossi Impianti S.r.l.',
  /** Breve frase sotto al nome */
  tagline: 'Impianti elettrici · Fotovoltaico · Ristrutturazioni',
  /** Descrizione generale usata come meta description di riserva */
  description:
    'Installazione di impianti elettrici, impianti fotovoltaici e ristrutturazioni chiavi in mano. Tecnici certificati, preventivi gratuiti e assistenza post-vendita.',
  /** Anno di inizio attività: serve a calcolare gli anni di esperienza */
  foundingYear: 2005,

  /** Telefono fisso o principale, come deve essere mostrato */
  phone: '+39 02 1234 5678',
  /** Cellulare (facoltativo: lascia '' per nasconderlo) */
  mobile: '+39 340 123 4567',
  /** Numero WhatsApp in formato internazionale, SOLO cifre, senza + né spazi */
  whatsapp: '393401234567',
  /** Messaggio precompilato quando si apre WhatsApp */
  whatsappMessage: 'Buongiorno, vorrei ricevere informazioni per un preventivo.',
  email: 'info@rossi-impianti.it',
  /** PEC (facoltativa: lascia '' per nasconderla) */
  pec: 'rossi-impianti@pec.it',

  address: {
    street: 'Via dell’Artigianato 12',
    postalCode: '20100',
    city: 'Milano',
    province: 'MI',
    region: 'Lombardia',
    country: 'IT',
  },
  /**
   * Coordinate della sede per la mappa (le trovi su openstreetmap.org:
   * tasto destro sul punto → "Mostra indirizzo").
   */
  geo: {
    lat: 45.4642,
    lng: 9.19,
  },

  /** Partita IVA (solo numero, senza "IT") */
  vatNumber: '01234567890',
  /** Numero REA (facoltativo: lascia '' per nasconderlo) */
  rea: 'MI-1234567',

  /** Zona servita: testo descrittivo + elenco delle località principali */
  serviceArea: {
    description: 'Milano e provincia, Monza e Brianza e comuni limitrofi',
    places: ['Milano', 'Monza', 'Sesto San Giovanni', 'Cinisello Balsamo', 'Rho', 'Legnano'],
  },

  /**
   * Orari di apertura.
   * - `label` e `hours` sono il testo mostrato sul sito
   * - `days`, `opens`, `closes` servono ai dati strutturati per Google
   *   (giorni in inglese: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)
   */
  openingHours: [
    {
      label: 'Lunedì – Venerdì',
      hours: '8:00 – 12:30 · 14:00 – 18:00',
      slots: [
        { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '12:30' },
        { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '14:00', closes: '18:00' },
      ],
    },
    {
      label: 'Sabato',
      hours: '8:30 – 12:00 (su appuntamento)',
      slots: [{ days: ['Saturday'], opens: '08:30', closes: '12:00' }],
    },
    {
      label: 'Domenica',
      hours: 'Chiuso',
      slots: [],
    },
  ],

  /**
   * ID del modulo Formspree (la parte finale dell'indirizzo del form,
   * es. per https://formspree.io/f/xyzabcd l'ID è "xyzabcd").
   * Finché resta il segnaposto, il modulo mostra un avviso.
   */
  formspreeId: 'IL_TUO_ID_FORMSPREE',

  /** Link ai profili social (lascia '' per nasconderli) */
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  /** Dati per la privacy policy */
  privacy: {
    /** Data dell'ultimo aggiornamento della privacy policy */
    lastUpdated: '2026-09-23',
  },
} as const;

/* ------------------------------------------------------------------
 * Valori derivati: non serve modificarli
 * ------------------------------------------------------------------ */

/** Anni di esperienza calcolati dall'anno di fondazione */
export const yearsOfExperience = new Date().getFullYear() - site.foundingYear;

/** Indirizzo completo su una riga */
export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province})`;

/** Trasforma un numero leggibile in un link tel: valido */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

/** Link diretto alla chat WhatsApp con messaggio precompilato */
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

/** Indirizzo del modulo Formspree */
export const formspreeAction = `https://formspree.io/f/${site.formspreeId}`;
export const isFormspreeConfigured = !site.formspreeId.startsWith('IL_TUO');
