/**
 * Costruisce un link interno tenendo conto della sottocartella di pubblicazione
 * (`base` in astro.config.mjs). Su GitHub Pages il sito vive spesso in
 * https://utente.github.io/nome-repo/, quindi i link non possono iniziare con "/".
 *
 * Esempi: url('/') → '/nome-repo/'   url('/servizi/') → '/nome-repo/servizi/'
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Rimuove la sottocartella da un percorso, per confrontare la pagina corrente */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return path || '/';
}

/** Data in formato italiano esteso, es. "12 settembre 2026" */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Rome',
  }).format(date);
}
