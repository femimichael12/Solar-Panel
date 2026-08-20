import { CalculatorAppliance } from '../types';

export const DEFAULT_CALCULATOR_APPLIANCES: CalculatorAppliance[] = [
  {
    id: 'led-bulbs',
    name: 'LED Light Bulbs (Energy Saving)',
    category: 'lighting',
    icon: 'Lightbulb',
    defaultWatts: 10,
    defaultHours: 10,
    count: 10,
    hours: 8
  },
  {
    id: 'fans',
    name: 'Ceiling / Standing Fans',
    category: 'cooling',
    icon: 'Fan',
    defaultWatts: 65,
    defaultHours: 12,
    count: 3,
    hours: 10
  },
  {
    id: 'tv-standard',
    name: 'Smart TV 43" - 55" & Soundbar',
    category: 'entertainment',
    icon: 'Tv',
    defaultWatts: 120,
    defaultHours: 6,
    count: 1,
    hours: 6
  },
  {
    id: 'decoder-wifi',
    name: 'Wi-Fi Router / Starlink & Decoder',
    category: 'entertainment',
    icon: 'Wifi',
    defaultWatts: 45,
    defaultHours: 24,
    count: 1,
    hours: 24
  },
  {
    id: 'inverter-fridge',
    name: 'Inverter Refrigerator (A+ Rating)',
    category: 'kitchen',
    icon: 'Refrigerator',
    defaultWatts: 150,
    defaultHours: 18,
    count: 1,
    hours: 18
  },
  {
    id: 'deep-freezer',
    name: 'Chest Deep Freezer',
    category: 'kitchen',
    icon: 'IceCream',
    defaultWatts: 220,
    defaultHours: 12,
    count: 0,
    hours: 10
  },
  {
    id: 'ac-1hp-inverter',
    name: '1.0 HP Inverter Air Conditioner',
    category: 'cooling',
    icon: 'Wind',
    defaultWatts: 850,
    defaultHours: 6,
    count: 0,
    hours: 6
  },
  {
    id: 'ac-15hp-inverter',
    name: '1.5 HP Inverter Air Conditioner',
    category: 'cooling',
    icon: 'Wind',
    defaultWatts: 1250,
    defaultHours: 6,
    count: 0,
    hours: 6
  },
  {
    id: 'water-pump-1hp',
    name: '1.0 HP Water Pumping Machine',
    category: 'pumps',
    icon: 'Droplet',
    defaultWatts: 750,
    defaultHours: 1,
    count: 0,
    hours: 1
  },
  {
    id: 'laptops-phones',
    name: 'Laptops & Phone Charging Stations',
    category: 'work',
    icon: 'Laptop',
    defaultWatts: 75,
    defaultHours: 8,
    count: 2,
    hours: 8
  },
  {
    id: 'desktop-pc',
    name: 'Desktop Workstation / Monitor',
    category: 'work',
    icon: 'Monitor',
    defaultWatts: 200,
    defaultHours: 8,
    count: 0,
    hours: 8
  },
  {
    id: 'washing-machine',
    name: 'Automatic Washing Machine',
    category: 'heavy',
    icon: 'Shirt',
    defaultWatts: 500,
    defaultHours: 1,
    count: 0,
    hours: 1
  },
  {
    id: 'microwave',
    name: 'Microwave Oven (Short run)',
    category: 'kitchen',
    icon: 'Flame',
    defaultWatts: 1000,
    defaultHours: 0.5,
    count: 0,
    hours: 0.5
  }
];
