import { getCollection } from 'astro:content';

/** Comunicazioni pubblicate (esclude le bozze), dalla più recente */
export async function getComunicazioni(limit?: number) {
  const items = (await getCollection('comunicazioni', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return limit ? items.slice(0, limit) : items;
}
