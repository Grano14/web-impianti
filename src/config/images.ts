/**
 * ============================================================
 *  IMMAGINI DEL SITO
 * ============================================================
 *
 * Come sostituire un segnaposto con una foto vera:
 *   1. copia la foto in `public/images/` (es. `public/images/hero.jpg`)
 *   2. scrivi il nome del file nel campo `src` qui sotto (es. src: 'hero.jpg')
 *   3. controlla che `alt` descriva bene la foto (serve a chi usa lettori di schermo)
 *
 * Finché `src` è vuoto, sul sito compare un riquadro grigio con l'etichetta `label`.
 * Consiglio: foto in formato .jpg o .webp, larghe circa 1600px, sotto i 300 KB.
 */

export interface SiteImage {
  /** Nome del file dentro public/images/ ('' = mostra il segnaposto) */
  src: string;
  /** Testo alternativo: descrive la foto a chi non la vede */
  alt: string;
  /** Etichetta mostrata nel riquadro segnaposto */
  label: string;
}

export const images = {
  homeHero: {
    src: '',
    alt: 'Tecnico al lavoro su un quadro elettrico',
    label: 'Foto principale: tecnico al lavoro su un quadro elettrico',
  },
  serviceElectrical: {
    src: '',
    alt: 'Quadro elettrico domestico appena installato',
    label: 'Foto quadro elettrico nuovo',
  },
  servicePhotovoltaic: {
    src: '',
    alt: 'Impianto fotovoltaico installato sul tetto di una villetta',
    label: 'Foto impianto fotovoltaico su tetto',
  },
  serviceRenovation: {
    src: '',
    alt: 'Appartamento ristrutturato con nuova illuminazione',
    label: 'Foto appartamento ristrutturato',
  },
  aboutTeam: {
    src: '',
    alt: 'La squadra di tecnici davanti al furgone aziendale',
    label: 'Foto della squadra con il furgone aziendale',
  },
} satisfies Record<string, SiteImage>;
