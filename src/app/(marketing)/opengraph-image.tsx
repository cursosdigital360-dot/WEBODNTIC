import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Medidas estándar para Facebook/WhatsApp/LinkedIn
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
export const alt = 'Odontic - Diseño de Sonrisa en Tepic';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#031E72', // El azul institucional
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 'bolder',
            color: 'white',
            letterSpacing: '-0.05em',
            marginBottom: '20px',
          }}
        >
          Odontic
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: '#3EA0FF',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Clínica Integral
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}