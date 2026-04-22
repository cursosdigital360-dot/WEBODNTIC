import { ImageResponse } from 'next/og'

// Configuración del icono
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      // Estilo visual del favicon (Círculo azul con la "O" de Odontic)
      <div
        style={{
          fontSize: 22,
          background: '#031E72',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3EA0FF',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}
      >
        O
      </div>
    ),
    {
      ...size,
    }
  )
}