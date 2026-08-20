/**
 * Formatting utilities for Solara Energy Systems
 */

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(amount).replace('NGN', '₦');
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export function createWhatsAppQuoteLink(options: {
  productOrPackageName?: string;
  capacity?: string;
  totalDailyLoadKwh?: number;
  inverterRecommendation?: string;
  batteryRecommendation?: string;
  customerName?: string;
  location?: string;
  message?: string;
}): string {
  const phone = '2348030009988'; // Official Solara Energy Line
  let text = 'Hello Solara Energy, I would like to inquire about a solar power solution.\n\n';

  if (options.customerName) {
    text += `*Name:* ${options.customerName}\n`;
  }
  if (options.location) {
    text += `*Location:* ${options.location}\n`;
  }
  if (options.productOrPackageName) {
    text += `*Item/Package:* ${options.productOrPackageName}\n`;
  }
  if (options.capacity) {
    text += `*Capacity:* ${options.capacity}\n`;
  }
  if (options.totalDailyLoadKwh) {
    text += `*Estimated Load:* ${options.totalDailyLoadKwh.toFixed(1)} kWh/day\n`;
  }
  if (options.inverterRecommendation) {
    text += `*Inverter Requirement:* ${options.inverterRecommendation}\n`;
  }
  if (options.batteryRecommendation) {
    text += `*Battery Requirement:* ${options.batteryRecommendation}\n`;
  }
  if (options.message) {
    text += `*Notes:* ${options.message}\n`;
  }

  text += '\nPlease provide me with a quotation and assessment details. Thank you.';

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
