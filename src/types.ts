export type ProductCategoryType = 
  | 'solar-panels'
  | 'inverters'
  | 'batteries'
  | 'charge-controllers'
  | 'accessories'
  | 'solar-systems';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategoryType;
  powerRating: string;
  price: number; // in NGN
  priceDisplay?: string;
  inStock: boolean;
  featured?: boolean;
  image: string;
  description: string;
  specifications: Record<string, string>;
  keyFeatures: string[];
  warranty: string;
  rating: number;
  reviewsCount: number;
}

export interface SolarPackage {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  capacity: string;
  inverterSpec: string;
  batterySpec: string;
  panelSpec: string;
  estimatedPrice: number; // in NGN
  priceDisplay: string;
  recommendedFor: string;
  popular?: boolean;
  applianceList: {
    name: string;
    qty: string;
  }[];
  components: string[];
  backupHours: string;
  warranty: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  turnaroundTime: string;
  idealFor: string;
}

export interface ProjectPortfolio {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Institutional' | 'Industrial';
  capacity: string;
  location: string;
  clientType: string;
  description: string;
  image: string;
  componentsUsed: string[];
  completionYear: string;
  estimatedSavings: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  systemSize: string;
  verified: boolean;
  date: string;
}

export interface CalculatorAppliance {
  id: string;
  name: string;
  category: 'lighting' | 'cooling' | 'kitchen' | 'entertainment' | 'work' | 'heavy' | 'pumps';
  icon: string;
  defaultWatts: number;
  defaultHours: number;
  count: number;
  hours: number;
  customWatts?: number;
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  locationState: string;
  propertyType: 'Home' | 'Apartment' | 'Shop' | 'Office' | 'School' | 'Business' | 'Hospital' | 'Other';
  solarRequirement: string;
  estimatedBudget: string;
  preferredTimeline: string;
  message: string;
  applianceDetails?: string;
}
