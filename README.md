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
| Nome, telefono, email, indirizzo, P.IVA, orari, zona servita, nome utente Telegram | `src/config/site.ts` |
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

## Richiesta di preventivo (email o Telegram)

Il modulo nella pagina Contatti non usa server né servizi esterni: il visitatore sceglie il
tipo di impianto, scrive il messaggio e sceglie se inviarlo via email o via Telegram. Il sito
apre la sua app (posta o Telegram) con il testo già scritto, e l'invio lo fa lui.

1. Imposta la tua email in `src/config/site.ts` (campo `email`).
2. Su Telegram scegli un nome utente pubblico (Impostazioni → Nome utente) e scrivilo, **senza @**,
   in `src/config/site.ts` nel campo `telegramUsername`. Così il numero di telefono non compare mai.
3. Finché `telegramUsername` resta il segnaposto, il pulsante Telegram è disattivato.

Nota: su computer senza un programma di posta configurato il pulsante email può non aprire nulla;
per questo l'indirizzo email compare anche nei recapiti della pagina e nel messaggio mostrato dopo il clic.

## Privacy

Il sito è progettato per raccogliere il minimo indispensabile:

- nessun cookie, nessuna statistica o strumento di tracciamento → nessun banner cookie;
- font di sistema: nessun collegamento a Google Fonts o altri server esterni;
- la mappa (OpenStreetMap) viene caricata **solo dopo il clic** dell'utente;
- Telegram e Google Maps sono semplici link: nessun dato parte finché l'utente non ci clicca;
- il sito non raccoglie né memorizza nulla: le richieste partono dall'email o da Telegram del visitatore.

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
