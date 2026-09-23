/**
 * Collection "comunicazioni": ogni file .md in src/content/comunicazioni/
 * diventa un avviso/novità sul sito. Il nome del file diventa l'indirizzo
 * della pagina (es. chiusura-estiva.md → /comunicazioni/chiusura-estiva/).
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const comunicazioni = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/comunicazioni' }),
  schema: z.object({
    /** Titolo della comunicazione */
    title: z.string(),
    /** Riassunto breve (1-2 frasi): usato negli elenchi e come meta description */
    description: z.string(),
    /** Data di pubblicazione nel formato AAAA-MM-GG */
    date: z.coerce.date(),
    /** Tipo di comunicazione: "Avviso" o "Novità" */
    category: z.enum(['Avviso', 'Novità']).default('Novità'),
    /** true per nascondere la comunicazione senza cancellare il file */
    draft: z.boolean().default(false),
  }),
});

export const collections = { comunicazioni };
