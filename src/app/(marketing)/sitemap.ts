import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://odontictepic.com'; // Cambia esto por tu dominio real después

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // Si más adelante agregas páginas como /servicios o /contacto, 
    // las agregarías aquí abajo. Por ahora, con la Home basta.
  ];
}