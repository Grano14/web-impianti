/**
 * Testi dei servizi: usati nella Home (card di anteprima) e nella pagina Servizi
 * (sezioni dettagliate). Modifica qui per aggiornarli in entrambi i punti.
 */
import type { IconName } from '../components/Icon.astro';
import { images, type SiteImage } from '../config/images';

export interface Service {
  /** Identificativo usato come ancora nella pagina servizi (/servizi/#id) */
  id: string;
  title: string;
  icon: IconName;
  /** Testo breve per la card in Home */
  excerpt: string;
  /** Paragrafi introduttivi della sezione dettagliata */
  description: string[];
  /** Elenco delle attività incluse */
  features: string[];
  /** Riquadro evidenziato in fondo alla sezione */
  highlight: { title: string; text: string };
  /** Una o più foto: la prima è quella principale, le altre compaiono come miniature */
  images: SiteImage[];
}

export const services: Service[] = [
  {
    id: 'impianti-elettrici',
    title: 'Impianti elettrici',
    icon: 'bolt',
    excerpt:
      'Realizzazione, adeguamento e manutenzione di impianti elettrici civili e industriali, con dichiarazione di conformità.',
    description: [
      'Progettiamo e realizziamo impianti elettrici sicuri ed efficienti per abitazioni, uffici, negozi e capannoni. Che si tratti di un impianto nuovo o dell’adeguamento di uno esistente, lavoriamo nel rispetto delle norme CEI e rilasciamo la dichiarazione di conformità prevista dal D.M. 37/2008.',
      'Ci occupiamo anche di domotica, illuminazione a LED, sistemi di sicurezza e punti di ricarica per auto elettriche, per rendere la casa o l’azienda più comoda e ridurre i consumi.',
    ],
    features: [
      'Impianti elettrici nuovi e rifacimenti completi',
      'Adeguamento normativo e messa a norma',
      'Quadri elettrici, salvavita e protezioni',
      'Domotica e automazione di luci e tapparelle',
      'Illuminazione a LED per interni ed esterni',
      'Videocitofoni, antifurto e videosorveglianza',
      'Colonnine di ricarica per veicoli elettrici',
      'Ricerca guasti e pronto intervento',
    ],
    highlight: {
      title: 'Certificazione inclusa',
      text: 'Al termine di ogni lavoro rilasciamo la dichiarazione di conformità (Di.Co.), necessaria per agibilità, compravendite e contratti di fornitura.',
    },
    images: [images.serviceElectrical],
  },
  {
    id: 'fotovoltaico',
    title: 'Impianti fotovoltaici',
    icon: 'sun',
    excerpt:
      'Impianti fotovoltaici chiavi in mano con sistemi di accumulo, per produrre energia pulita e ridurre la bolletta.',
    description: [
      'Installiamo impianti fotovoltaici su misura per famiglie e aziende, dal sopralluogo gratuito alla connessione alla rete. Dimensioniamo l’impianto sui tuoi consumi reali, per ottenere il massimo risparmio senza spese inutili.',
      'Utilizziamo pannelli e inverter di marchi affidabili e proponiamo sistemi di accumulo per usare l’energia prodotta anche la sera. Seguiamo per te tutte le pratiche burocratiche con il distributore e il GSE.',
    ],
    features: [
      'Sopralluogo e studio dei consumi gratuiti',
      'Progettazione e dimensionamento dell’impianto',
      'Installazione di pannelli, inverter e strutture',
      'Batterie di accumulo, anche su impianti esistenti',
      'Pratiche di connessione con distributore e GSE',
      'Supporto per detrazioni fiscali e incentivi vigenti',
      'Monitoraggio della produzione da smartphone',
      'Manutenzione, pulizia pannelli e assistenza',
    ],
    highlight: {
      title: 'Pratiche burocratiche comprese',
      text: 'Ti seguiamo in ogni passaggio: autorizzazioni, connessione alla rete e documentazione per accedere alle agevolazioni fiscali disponibili.',
    },
    images: [images.servicePhotovoltaic],
  },
  {
    id: 'ristrutturazioni',
    title: 'Ristrutturazioni',
    icon: 'home',
    excerpt:
      'Ristrutturazioni di appartamenti, bagni e locali commerciali con un unico referente, dal progetto alla consegna.',
    description: [
      'Ristrutturiamo appartamenti, case indipendenti e locali commerciali coordinando tutte le lavorazioni: impianti, opere murarie, pavimenti, bagni e finiture. Avrai un unico referente che segue il cantiere dall’inizio alla fine.',
      'Concordiamo con te tempi e costi prima di iniziare e ti teniamo aggiornato sull’avanzamento dei lavori, per consegnarti gli ambienti pronti da vivere, puliti e in ordine.',
    ],
    features: [
      'Ristrutturazioni complete chiavi in mano',
      'Rifacimento di bagni e cucine',
      'Impianti elettrici, idraulici e di riscaldamento',
      'Opere murarie, cartongesso e controsoffitti',
      'Pavimenti, rivestimenti e tinteggiature',
      'Interventi di efficientamento energetico',
      'Gestione delle pratiche edilizie con tecnici abilitati',
      'Pulizia finale del cantiere',
    ],
    highlight: {
      title: 'Un unico referente',
      text: 'Coordiniamo noi tutte le squadre: niente telefonate a cinque ditte diverse, un solo preventivo chiaro e un cronoprogramma concordato.',
    },
    images: [images.serviceRenovation],
  },
  {
    id: 'riscaldamento',
    title: 'Riscaldamento',
    icon: 'flame',
    excerpt:
      'Impianti di riscaldamento e impianti di condizionamneto. Installazione di caldaie a gas e pompe di calore.',
    description: [
      "Installiamo impianti di riscaldamento per case ed aziende, impianti di condizionamento per mantenere fresca la casa durante l'estate. Seguiamo per te le pratiche burocratiche per eventuali agevolazioni fiscali e bonus",
      'Scegliamo solo marchi di qualità per garantire un impianto di ottimo livello. Con solare termico e pompe di calore riscaldi ogni spazio risparmiando sulla bolletta del gas.',
    ],
    features: [
      'Installazione di solare termico',
      'Manutenzione caldaie',
      'Installazione pompe di calore',
      'Installazione di caldaie',
      'Interventi di efficientamento energetico',
      'Gestione delle pratiche edilizie con tecnici abilitati',
    ],
    highlight: {
      title: 'Pratiche e certificazioni comprese',
      text: 'Coordiniamo chiaro dei lavori, ci interfacciamo noi per la richiesta di agevolazioni e bonus GSE.',
    },
    images: [images.serviceRiscaldamento],
  },
];

/** Fasi di lavoro mostrate nella pagina servizi */
export const workSteps = [
  {
    title: 'Contatto',
    text: 'Ci racconti di cosa hai bisogno per telefono, WhatsApp o con il modulo online.',
  },
  {
    title: 'Sopralluogo',
    text: 'Un nostro tecnico viene a vedere gli spazi e valuta con te la soluzione migliore.',
  },
  {
    title: 'Preventivo',
    text: 'Ricevi un preventivo gratuito, dettagliato e senza impegno, con tempi certi.',
  },
  {
    title: 'Lavori e certificazione',
    text: 'Eseguiamo i lavori a regola d’arte e consegniamo tutta la documentazione.',
  },
  {
    title: 'Manutenzione',
    text: 'Ci occupiamo della manutenzione ordinaria e straordinaria dei lavori.'
  },
];
