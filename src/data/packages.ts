import type {
  FoodTrayOffering,
  GrazingPackage,
  PackedMealOffering,
  RegularPackage,
} from '../types/content';
import type { GalleryKey } from './gallery';

export const REGULAR_PACKAGES = [
  {
    id: 'regular-01',
    name: 'Package 01',
    pricePhp: 30000,
    guestCapacity: 50,
    dishes: ['Menudo', 'Chopsuey', 'Chicken Cordon Bleu', 'Beef with Mushroom', 'Spaghetti'],
  },
  {
    id: 'regular-02',
    name: 'Package 02',
    pricePhp: 30000,
    guestCapacity: 50,
    dishes: ['Beef Caldereta', 'Pork Hamonado', 'Chopsuey', 'Lumpiang Shanghai', 'Spaghetti'],
  },
  {
    id: 'regular-03',
    name: 'Package 03',
    pricePhp: 30000,
    guestCapacity: 50,
    dishes: ['Beef Caldereta', 'Buffalo Chicken', 'Lumpiang Shanghai', 'Menudo', 'Spaghetti'],
  },
] as const satisfies readonly RegularPackage[];

export const REGULAR_SHARED_INCLUSIONS = [
  'One dessert',
  'Salad bar',
  'Iced tea',
  'Rice',
  'Soup',
  'Tables and chairs',
  'Buffet setup',
] as const;

export const REGULAR_OVERFLOW_NOTE =
  "Planning for more than 50 guests? Message Yhan's Catering Services for a custom quotation.";

export const REGULAR_PACKAGE_IMAGE_KEYS = {
  'regular-01': 'porkMenudo',
  'regular-02': 'beefCaldereta',
  'regular-03': 'porkMenudo',
} as const satisfies Record<(typeof REGULAR_PACKAGES)[number]['id'], GalleryKey>;

export const GRAZING_PACKAGES = [
  {
    id: 'grazing-a',
    name: 'Package A',
    pricePerGuestPhp: 1000,
    minimumGuests: 50,
    dishes: [
      'Beef Kare-Kare',
      'Pork Menudo',
      'Chicken Wings',
      'Fish with Tofu',
      'Egg Drop Soup',
      'Rice',
      'Spaghetti',
    ],
  },
  {
    id: 'grazing-b',
    name: 'Package B',
    pricePerGuestPhp: 1000,
    minimumGuests: 50,
    dishes: [
      'Beef Caldereta',
      'Pork Menudo',
      'Buffalo Chicken',
      'Fish with Creamy Sauce',
      'Chicken Chowder Soup',
      'Rice',
      'Pasta Carbonara',
    ],
    bestSellerDish: 'Pork Menudo',
    isBestSeller: true,
  },
  {
    id: 'grazing-c',
    name: 'Package C',
    pricePerGuestPhp: 1000,
    minimumGuests: 50,
    dishes: [
      'Beef with Mushroom',
      'Pork Menudo',
      'Chicken Cordon Bleu',
      'Baked Bangus',
      'Potato Soup',
      'Rice',
      'Chicken Pesto',
    ],
  },
  {
    id: 'grazing-d',
    name: 'Package D',
    pricePerGuestPhp: 1000,
    minimumGuests: 50,
    dishes: [
      'Beef with Broccoli',
      'Bicol Express',
      'Chicken Afritada',
      'Sweet and Sour Fish',
      'Pumpkin Soup',
      'Rice',
      'Pancit Canton',
    ],
  },
] as const satisfies readonly GrazingPackage[];

export const GRAZING_INCLUSIONS = {
  fruits: ['Seasonal fruits', 'Watermelon', 'Grapes', 'Oranges'],
  freshItems: ['Lettuce', 'Cucumber'],
  dessertsAndSweets: ['Mango Tapioca', 'Coffee Jelly', 'Cake Bites', 'Cupcakes', 'Cookies', 'Crinkles'],
  savoryItems: [
    'Chicken Empanada',
    'Lumpiang Shanghai',
    'Nori Chicken',
    'Brie Cheese',
    'Camembert Cheese',
    'Salami',
    'Bacon',
    'Bite-Sized Bread',
  ],
  beverages: ['Lemon Iced Tea', 'Water'],
} as const;

export const GRAZING_PACKAGE_IMAGE_KEYS = {
  'grazing-a': 'grazingTable',
  'grazing-b': 'grazingTable',
  'grazing-c': 'grazingTable',
  'grazing-d': 'grazingTable',
} as const satisfies Record<(typeof GRAZING_PACKAGES)[number]['id'], GalleryKey>;

export const GRAZING_TOTAL_NOTE = 'Total depends on confirmed guest count.';
export const GRAZING_INCLUDED_NOTE = 'Includes tables and chairs.';
export const GRAZING_ESTIMATE_DISCLAIMER =
  'Estimate only. Final menu, guest count, location, and event arrangements are confirmed directly.';

export const PACKED_MEAL_PRICE_RANGE = [250, 300] as const;

export const PACKED_MEALS = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Breakfast food packs for group orders and activities.',
    sampleMenu: ['Rice', 'Egg', 'Hotdog'],
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Lunch food packs for businesses, meetings, and seminars.',
    sampleMenu: ['One piece of chicken', 'Vegetables', 'Pancit'],
  },
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Menu options available upon request.',
  },
] as const satisfies readonly PackedMealOffering[];

export const PACKED_MEAL_IMAGE_KEYS = {
  breakfast: 'breakfastPack',
  lunch: 'lunchPack',
  dinner: 'groupMealPack',
} as const satisfies Record<(typeof PACKED_MEALS)[number]['id'], GalleryKey>;

export const FOOD_TRAY = {
  id: 'food-trays',
  name: 'Food Trays',
  description:
    'Food trays are available for parties, offices, and group meals. Message us to request the current food-tray menu, serving sizes, and prices.',
} as const satisfies FoodTrayOffering;

export const PACKED_MEALS_AUDIENCES = [
  'Call center accounts',
  'Offices',
  'Meetings',
  'Seminars',
  'Business accounts',
  'Group orders',
] as const;

export const PACKED_MEALS_PENDING_DETAILS =
  'Contact us for available menus, minimum quantities, delivery arrangements, and a custom bulk quotation.';

export const HOME_POPULAR_CHOICES = [
  {
    id: 'pork-menudo',
    name: 'Pork Menudo',
    imageKey: 'porkMenudo',
    badge: 'Best choice',
  },
  {
    id: 'beef-caldereta',
    name: 'Beef Caldereta',
    imageKey: 'beefCaldereta',
  },
  {
    id: 'grazing-table',
    name: 'Grazing Table',
    imageKey: 'grazingTable',
  },
] as const;
