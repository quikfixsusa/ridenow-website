import { MultiLanguageProp } from "./generals";

export type MultiCurrencyValue = {
  [countryCode: string]: number; // Ej: { US: 1.2, VE: 45, MX: 25 }
};

export type RideCategory = "Economic" | "Comfort" | "Cargo" | "Heavy Duty";

export type VehicleType =
  | "Bike"
  | "Motorbike"
  | "Sedan"
  | "Scooter"
  | "Hatchback"
  | "Coupe"
  | "Standard"
  | "Comfort"
  | "SUV"
  | "Wagon"
  | "Van/Minivan"
  | "Pickup/small"
  | "Pickup/medium"
  | "Pickup/large"
  | "Van/Minivan/small"
  | "Van/Minivan/medium"
  | "Van/Minivan/large";

export type TypeRide =
  | "Comfort"
  | "Delivery"
  | "Packages"
  | "PickupL"
  | "PickupM"
  | "PickupS"
  | "RideMoto"
  | "RidePet"
  | "RideXL"
  | "Standard"
  | "VanL"
  | "VanM"
  | "VanS";

export interface NightMultiplier {
  multiplier: number;
  active: boolean;
  start_hour: number;
  end_hour: number;
}

export type ShLg = {
  short: MultiLanguageProp;
  long: MultiLanguageProp;
};

export interface RideCardContent {
  title: ShLg;
  description: ShLg;
  image: string;
}

export interface BookingFee {
  base: MultiCurrencyValue;
  percentage: number;
  min?: MultiCurrencyValue;
  max?: MultiCurrencyValue;
}

export interface RideType {
  id: string;
  priority: number;
  description: MultiLanguageProp;
  category: RideCategory;
  category_text: MultiLanguageProp;
  vehicle_type: VehicleType[];
  type: TypeRide;
  image: string;
  card: RideCardContent;
  air_conditioning: boolean;
  number_of_passengers: number;

  // --- 🌍 Country Availability ---
  available_countries: string[] | null; // Array of country codes, e.g., ["US", "MX", "VE"]

  // --- 💵 Price Parameters (multi-currency) ---
  base_fee: MultiCurrencyValue;
  min_fee: MultiCurrencyValue;
  price_per_km: MultiCurrencyValue;
  price_per_minute: MultiCurrencyValue;
  booking_fee: BookingFee;
  long_distance_threshold_km: number;
  long_distance_discount: number; // Ej: 0.8 means 20% less after threshold
  remote_pickup_threshold_km: number;
  remote_pickup_fee_per_km: MultiCurrencyValue;
  night_multiplier: NightMultiplier;
}
