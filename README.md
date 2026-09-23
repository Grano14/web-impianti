# Sito vetrina – Impianti elettrici, fotovoltaico e ristrutturazioni

Sito statico realizzato con [Astro](https://astro.build) e [Tailwind CSS](https://tailwindcss.com),
pensato per essere pubblicato gratuitamente su **GitHub Pages**.

## Requisiti

- [Node.js](https://nodejs.org) 22.12 o superiore

## Comandi

| Comando           | Cosa fa                                                      |
| ----------------- | ------------------------------------------------------------ |
| `npm install`     | Installa le dipendenze (solo la prima volta)                 |
| `npm run dev`     | Avvia il sito in locale su http://localhost:4321             |
| `npm run build`   | Crea la versione pubblicabile nella cartella `dist/`         |
| `npm run preview` | Mostra in locale la versione creata con `build`              |

## Dove modificare cosa

| Cosa                                   | File                                         |
| -------------------------------------- | -------------------------------------------- |
| Nome, telefono, email, indirizzo, P.IVA, orari, zona servita, WhatsApp, ID Formspree | `src/config/site.ts` |
| Colori (palette arancione / antracite) | `src/styles/global.css` (blocco `@theme`)    |
| Immagini                               | `public/images/` + `src/config/images.ts`    |
| Testi dei servizi                      | `src/data/services.ts`                       |
| Voci del menu                          | `src/config/navigation.ts`                   |
| Comunicazioni / avvisi                 | `src/content/comunicazioni/*.md`             |
| Testi delle pagine                     | `src/pages/*.astro`                          |

### Aggiungere una comunicazione

Crea un nuovo file in `src/content/comunicazioni/`, ad esempio `nuovi-orari.md`
(il nome del file diventa l'indirizzo: `/comunicazioni/nuovi-orari/`):

```markdown
---
title: Nuovi orari di apertura
description: Da ottobre cambiano gli orari del sabato.
date: 2026-10-01
category: Avviso      # "Avviso" oppure "Novità"
draft: false          # true per nasconderla senza cancellarla
---

Testo della comunicazione in **Markdown**.
```

La Home mostra automaticamente le 3 comunicazioni più recenti.

### Sostituire un'immagine segnaposto

1. Copia la foto in `public/images/` (es. `public/images/hero.jpg`).
2. In `src/config/images.ts` scrivi il nome del file nel campo `src` (es. `src: 'hero.jpg'`).
3. Verifica che il testo `alt` descriva la foto.

### Cambiare i colori

In `src/styles/global.css` modifica le variabili `--color-primary-*` (arancione) e
`--color-ink-*` (grigi/antracite). Mantieni tonalità scure per `primary-600/700`,
perché ospitano testo bianco e link: verifica il contrasto su
https://webaim.org/resources/contrastchecker/.

## Modulo contatti (Formspree)

1. Crea un account gratuito su https://formspree.io e un nuovo form.
2. Copia l'ID del form (la parte finale dell'indirizzo, es. `xyzabcd` in `https://formspree.io/f/xyzabcd`).
3. Incollalo in `src/config/site.ts` nel campo `formspreeId`.
4. Nelle impostazioni del form su Formspree **disattiva reCAPTCHA**: il sito ha già un
   campo anti-spam invisibile, e reCAPTCHA caricherebbe servizi Google (meno privacy);
   inoltre l'invio senza ricaricare la pagina funziona al meglio con reCAPTCHA disattivato.
5. Se possibile, imposta su Formspree la cancellazione automatica dei messaggi dopo un
   certo periodo, coerente con quanto scritto nella privacy policy.

## Privacy

Il sito è progettato per raccogliere il minimo indispensabile:

- nessun cookie, nessuna statistica o strumento di tracciamento → nessun banner cookie;
- font di sistema: nessun collegamento a Google Fonts o altri server esterni;
- la mappa (OpenStreetMap) viene caricata **solo dopo il clic** dell'utente;
- WhatsApp e Google Maps sono semplici link: nessun dato parte finché l'utente non ci clicca;
- l'unico dato raccolto è quello inviato volontariamente con il modulo di contatto.

La pagina `src/pages/privacy.astro` è un **modello di partenza**: falla verificare
da un consulente prima della pubblicazione definitiva. Se in futuro aggiungi
statistiche, video di YouTube o altri servizi esterni, andrà aggiornata.

## Pubblicazione su GitHub Pages

L'indirizzo pubblico e la sottocartella vengono letti dalle variabili d'ambiente
`SITE_URL` e `BASE_PATH` (vedi `astro.config.mjs`), così non serve modificare il codice:

| Tipo di pubblicazione          | `SITE_URL`                  | `BASE_PATH`  |
| ------------------------------ | --------------------------- | ------------ |
| `https://utente.github.io/repo/` | `https://utente.github.io`  | `/repo`      |
| Dominio personalizzato         | `https://www.tuodominio.it` | `/`          |

Tutti i link interni passano dalla funzione `url()` in `src/utils/url.ts`, che aggiunge
automaticamente la sottocartella. Se aggiungi link a mano nelle pagine, usa sempre
`url('/percorso/')` invece di `/percorso/`.

Per provare in locale una build “come su GitHub”:

```bash
SITE_URL=https://utente.github.io BASE_PATH=/repo npm run build
```

## Struttura del progetto

```
public/                  file copiati così come sono (favicon, immagini)
src/
  config/                dati dell'attività, immagini, menu
  content/comunicazioni/ comunicazioni in Markdown
  components/            componenti riutilizzabili (header, footer, card, modulo…)
  data/                  testi dei servizi
  layouts/               struttura comune delle pagine (head, SEO, header, footer)
  pages/                 una pagina per file (index = Home)
  styles/global.css      Tailwind e palette colori
  utils/                 funzioni di supporto (link, date, comunicazioni)
```
