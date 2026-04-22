/**
 * Utility to generate WhatsApp links for MAPS 2.0
 */

interface WhatsAppLinkProps {
  phone: string;
  message?: string;
}

/**
 * Generates a formatted WhatsApp link.
 * @param phone - The phone number (with or without +)
 * @param message - Optional pre-filled message
 */
export const getWhatsAppLink = ({ phone, message }: WhatsAppLinkProps): string => {
  // Limpiar el número de espacios, guiones o símbolos para la URL
  const cleanPhone = phone.replace(/\D/g, '');
  
  const baseUrl = `https://wa.me/${cleanPhone}`;
  
  if (!message) {
    return baseUrl;
  }

  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
};