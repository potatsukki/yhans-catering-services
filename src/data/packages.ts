import type { GalleryKey } from './gallery';

export type MenuCategoryId =
  | 'beef'
  | 'pork'
  | 'chicken'
  | 'vegetables'
  | 'pasta-noodles'
  | 'rice'
  | 'dessert'
  | 'drink';

export type MenuDish = {
  readonly id: string;
  readonly name: string;
  readonly imageKey: GalleryKey;
  readonly imageIsTemporary?: boolean;
  readonly isBestSeller?: boolean;
};

export type MenuCategory = {
  readonly id: MenuCategoryId;
  readonly name: string;
  readonly summaryLabel: string;
  readonly dishes: readonly MenuDish[];
};

export type MenuSelections = Partial<Record<MenuCategoryId, string>>;

export const MENU_CATEGORIES = [
  {
    id: 'beef',
    name: 'Beef',
    summaryLabel: 'Beef',
    dishes: [
      { id: 'beef-with-mushrooms', name: 'Beef with Mushrooms', imageKey: 'foodTraysFeature', imageIsTemporary: true },
      { id: 'beef-caldereta', name: 'Beef Caldereta', imageKey: 'beefCaldereta' },
      { id: 'beef-kare-kare', name: 'Beef Kare-Kare', imageKey: 'foodTrays', imageIsTemporary: true },
      { id: 'roast-beef', name: 'Roast Beef', imageKey: 'packedMeals', imageIsTemporary: true },
    ],
  },
  {
    id: 'pork',
    name: 'Pork',
    summaryLabel: 'Pork',
    dishes: [
      { id: 'menudo', name: 'Menudo', imageKey: 'porkMenudo', isBestSeller: true },
      { id: 'pork-caldereta', name: 'Pork Caldereta', imageKey: 'beefCaldereta', imageIsTemporary: true },
      { id: 'pork-hamonado', name: 'Pork Hamonado', imageKey: 'groupMealPack', imageIsTemporary: true },
      { id: 'lumpiang-shanghai', name: 'Lumpiang Shanghai', imageKey: 'regularPackageThree' },
      { id: 'pork-sisig', name: 'Pork Sisig', imageKey: 'foodTraysFeature', imageIsTemporary: true },
    ],
  },
  {
    id: 'chicken',
    name: 'Chicken',
    summaryLabel: 'Chicken',
    dishes: [
      { id: 'chicken-cordon-bleu', name: 'Chicken Cordon Bleu', imageKey: 'packedMeals', imageIsTemporary: true },
      { id: 'buffalo-chicken-wings', name: 'Buffalo Chicken Wings', imageKey: 'foodTraysFeature', imageIsTemporary: true },
      { id: 'chicken-hamonado', name: 'Chicken Hamonado', imageKey: 'breakfastPack', imageIsTemporary: true },
      { id: 'chicken-pochero', name: 'Chicken Pochero', imageKey: 'groupMealPack', imageIsTemporary: true },
    ],
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    summaryLabel: 'Vegetables',
    dishes: [
      { id: 'chop-suey', name: 'Chop Suey', imageKey: 'foodTrays', imageIsTemporary: true },
      { id: 'mixed-vegetables', name: 'Mixed Vegetables', imageKey: 'grazingTable', imageIsTemporary: true },
      { id: 'broccoli-with-garlic', name: 'Broccoli with Garlic', imageKey: 'grazingPackageA', imageIsTemporary: true },
      { id: 'vegetable-salad', name: 'Vegetable Salad', imageKey: 'popularGrazingTable', imageIsTemporary: true },
      { id: 'lumpiang-hubad', name: 'Lumpiang Hubad', imageKey: 'grazingPackageC', imageIsTemporary: true },
    ],
  },
  {
    id: 'pasta-noodles',
    name: 'Pasta and Noodles',
    summaryLabel: 'Pasta and Noodles',
    dishes: [
      { id: 'spaghetti', name: 'Spaghetti', imageKey: 'foodTraysFeature', imageIsTemporary: true },
      { id: 'carbonara', name: 'Carbonara', imageKey: 'packedMeals', imageIsTemporary: true },
      { id: 'truffle-pasta', name: 'Truffle Pasta', imageKey: 'grazingPackageA', imageIsTemporary: true },
      { id: 'alfredo-pasta', name: 'Alfredo Pasta', imageKey: 'grazingPackageB', imageIsTemporary: true },
      { id: 'cajun-pasta', name: 'Cajun Pasta', imageKey: 'grazingPackageC', imageIsTemporary: true },
      { id: 'baked-macaroni', name: 'Baked Macaroni', imageKey: 'foodTrays', imageIsTemporary: true },
      { id: 'chicken-pesto-pasta', name: 'Chicken Pesto Pasta', imageKey: 'breakfastPack', imageIsTemporary: true },
      { id: 'pancit-canton', name: 'Pancit Canton', imageKey: 'groupMealPack', imageIsTemporary: true },
      { id: 'pancit-sotanghon', name: 'Pancit Sotanghon', imageKey: 'popularGrazingTable', imageIsTemporary: true },
    ],
  },
  {
    id: 'rice',
    name: 'Rice',
    summaryLabel: 'Rice',
    dishes: [
      { id: 'white-rice', name: 'White Rice', imageKey: 'packedMeals', imageIsTemporary: true },
    ],
  },
  {
    id: 'dessert',
    name: 'Desserts',
    summaryLabel: 'Dessert',
    dishes: [
      { id: 'coffee-jelly', name: 'Coffee Jelly', imageKey: 'grazingPackageA', imageIsTemporary: true },
      { id: 'mango-tapioca', name: 'Mango Tapioca', imageKey: 'grazingPackageB', imageIsTemporary: true },
      { id: 'buko-pandan', name: 'Buko Pandan', imageKey: 'grazingPackageC', imageIsTemporary: true },
    ],
  },
  {
    id: 'drink',
    name: 'Drinks',
    summaryLabel: 'Drink',
    dishes: [
      { id: 'lemon-iced-tea', name: 'Lemon Iced Tea', imageKey: 'grazingTable', imageIsTemporary: true },
      { id: 'red-iced-tea', name: 'Red Iced Tea', imageKey: 'popularGrazingTable', imageIsTemporary: true },
    ],
  },
] as const satisfies readonly MenuCategory[];

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

export type GrazingTableOffer = {
  readonly title: string;
  readonly description: string;
  readonly pricePerGuestPhp: 1000;
  readonly minimumGuests: 50;
  readonly totalNote: string;
  readonly setupNote: string;
  readonly imageKey: GalleryKey;
  readonly inclusions: readonly string[];
};

export const GRAZING_TABLE_OFFER = {
  title: 'Grazing Table',
  description:
    'A complete grazing table setup for your event, thoughtfully prepared with a variety of sweet and savory bites.',
  pricePerGuestPhp: 1000,
  minimumGuests: 50,
  totalNote: 'Total depends on confirmed guest count',
  setupNote: 'Includes tables and chairs',
  imageKey: 'grazingTableComplete',
  inclusions: [
    'Muffins',
    'Chicken Empanada',
    'Chicken with Nori',
    'Waffles',
    'Corn Dogs',
    'Clubhouse Sandwiches',
    'Cupcakes',
    'Seasonal Fruits (Grapes, Watermelon, Oranges, and Strawberries)',
    'Cheese Selection (Camembert Cheese, Brie Cheese, and Regular Cheese)',
    'Ham',
    'Salami',
    'Bread Bites',
    'Mini Bread with Sausage',
    'Pepero Chocolate',
    'Pepero Cookies & Cream',
    'Cashew Nuts',
    'Crackers',
    'Cake Bites',
  ],
} as const satisfies GrazingTableOffer;

export const GRAZING_ESTIMATE_DISCLAIMER =
  'Estimate only. Final menu, guest count, location, and event arrangements are confirmed directly.';

export const PACKED_MEAL_PRICE_RANGE = [250, 300] as const;

export type PackedMealDish = {
  readonly id: string;
  readonly name: string;
  readonly imageKey: GalleryKey;
  readonly imageAlt: string;
  readonly imageIsFallback?: boolean;
  readonly badge?: 'Best Seller';
};

export type BreakfastFoodPack = {
  readonly name: string;
  readonly description: string;
  readonly options: readonly PackedMealDish[];
};

export const BREAKFAST_FOOD_PACK = {
  name: 'Breakfast Food Pack',
  description: 'A simple and satisfying start to your day.',
  options: [
    { id: 'hotdog-breakfast', name: 'Hotdog, Egg, Rice', imageKey: 'breakfastPack', imageAlt: 'Breakfast food pack with hotdog, fried egg, and rice' },
    { id: 'corned-beef-breakfast', name: 'Corned Beef, Egg, Rice', imageKey: 'imageFallback', imageAlt: 'Corned Beef breakfast food-pack photo not yet available', imageIsFallback: true },
    { id: 'longganisa-breakfast', name: 'Longganisa, Egg, Rice', imageKey: 'imageFallback', imageAlt: 'Longganisa breakfast food-pack photo not yet available', imageIsFallback: true },
    { id: 'chicken-adobo-breakfast', name: 'Chicken Adobo, Egg, Rice', imageKey: 'imageFallback', imageAlt: 'Chicken Adobo breakfast food-pack photo not yet available', imageIsFallback: true },
    { id: 'tocino-breakfast', name: 'Tocino, Egg, Rice', imageKey: 'imageFallback', imageAlt: 'Tocino breakfast food-pack photo not yet available', imageIsFallback: true },
    { id: 'ham-breakfast', name: 'Ham, Egg, Rice', imageKey: 'imageFallback', imageAlt: 'Ham breakfast food-pack photo not yet available', imageIsFallback: true },
  ],
} as const satisfies BreakfastFoodPack;

export const LUNCH_DINNER_PACKED_MEALS = [
  { id: 'beef-caldereta', name: 'Beef Caldereta', imageKey: 'beefCaldereta', imageAlt: 'Beef Caldereta served in a food tray' },
  { id: 'fried-chicken', name: 'Fried Chicken', imageKey: 'packedMeals', imageAlt: 'Fried Chicken food pack with rice and vegetables' },
  { id: 'fried-bangus', name: 'Fried Bangus', imageKey: 'imageFallback', imageAlt: 'Fried Bangus food-pack photo not yet available', imageIsFallback: true },
  { id: 'pork-adobo', name: 'Pork Adobo', imageKey: 'imageFallback', imageAlt: 'Pork Adobo food-pack photo not yet available', imageIsFallback: true },
  { id: 'menudo', name: 'Menudo', imageKey: 'porkMenudo', imageAlt: 'Menudo served in a chafing dish', badge: 'Best Seller' },
  { id: 'lumpiang-shanghai', name: 'Lumpiang Shanghai', imageKey: 'regularPackageThree', imageAlt: 'Lumpiang Shanghai arranged in a serving tray' },
  { id: 'beef-steak', name: 'Beef Steak', imageKey: 'imageFallback', imageAlt: 'Beef Steak food-pack photo not yet available', imageIsFallback: true },
  { id: 'bicol-express', name: 'Bicol Express', imageKey: 'imageFallback', imageAlt: 'Bicol Express food-pack photo not yet available', imageIsFallback: true },
  { id: 'chicken-hamonado', name: 'Chicken Hamonado', imageKey: 'imageFallback', imageAlt: 'Chicken Hamonado food-pack photo not yet available', imageIsFallback: true },
  { id: 'chicken-afritada', name: 'Chicken Afritada', imageKey: 'imageFallback', imageAlt: 'Chicken Afritada food-pack photo not yet available', imageIsFallback: true },
  { id: 'pork-sisig', name: 'Pork Sisig', imageKey: 'imageFallback', imageAlt: 'Pork Sisig food-pack photo not yet available', imageIsFallback: true },
] as const satisfies readonly PackedMealDish[];

export type FoodTrayCategoryId =
  | 'beef'
  | 'pork'
  | 'chicken'
  | 'vegetables'
  | 'pasta-noodles'
  | 'fish-seafood'
  | 'rice'
  | 'desserts'
  | 'drinks';

export type FoodTrayItem = {
  readonly id: string;
  readonly name: string;
  readonly imageKey: GalleryKey;
  readonly imageAlt: string;
  readonly imageIsFallback?: boolean;
  readonly badge?: 'Best Seller';
};

export type FoodTrayCategory = {
  readonly id: FoodTrayCategoryId;
  readonly name: string;
  readonly items: readonly FoodTrayItem[];
};

export type FoodTrayOffer = {
  readonly id: 'food-trays';
  readonly name: 'Food Trays';
  readonly description: string;
  readonly minimumGuests: 25;
  readonly priceNote: string;
  readonly imageKey: GalleryKey;
};

function unavailableFoodTray(id: string, name: string): FoodTrayItem {
  return {
    id,
    name,
    imageKey: 'imageFallback',
    imageAlt: `${name} food tray photo not yet available`,
    imageIsFallback: true,
  };
}

export const FOOD_TRAY = {
  id: 'food-trays',
  name: 'Food Trays',
  description: 'Choose individual food trays for parties, offices, meetings, seminars, and group events.',
  minimumGuests: 25,
  priceNote: 'Prices vary depending on the selected dish and quantity.',
  imageKey: 'foodTraysFeature',
} as const satisfies FoodTrayOffer;

export const FOOD_TRAY_CATEGORIES = [
  {
    id: 'beef',
    name: 'Beef',
    items: [
      unavailableFoodTray('beef-with-mushrooms', 'Beef with Mushrooms'),
      { id: 'beef-caldereta', name: 'Beef Caldereta', imageKey: 'beefCaldereta', imageAlt: 'Beef Caldereta food tray with potatoes and peppers' },
      unavailableFoodTray('beef-kare-kare', 'Beef Kare-Kare'),
      unavailableFoodTray('roast-beef', 'Roast Beef'),
    ],
  },
  {
    id: 'pork',
    name: 'Pork',
    items: [
      { id: 'menudo', name: 'Menudo', imageKey: 'porkMenudo', imageAlt: 'Menudo served in a gold chafing dish', badge: 'Best Seller' },
      unavailableFoodTray('pork-caldereta', 'Pork Caldereta'),
      unavailableFoodTray('pork-hamonado', 'Pork Hamonado'),
      { id: 'lumpiang-shanghai', name: 'Lumpiang Shanghai', imageKey: 'regularPackageThree', imageAlt: 'Lumpiang Shanghai arranged in a serving tray' },
      unavailableFoodTray('pork-sisig', 'Pork Sisig'),
    ],
  },
  {
    id: 'chicken',
    name: 'Chicken',
    items: [
      unavailableFoodTray('chicken-cordon-bleu', 'Chicken Cordon Bleu'),
      unavailableFoodTray('buffalo-chicken-wings', 'Buffalo Chicken Wings'),
      unavailableFoodTray('chicken-hamonado', 'Chicken Hamonado'),
      unavailableFoodTray('chicken-pochero', 'Chicken Pochero'),
    ],
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    items: [
      unavailableFoodTray('chop-suey', 'Chop Suey'),
      unavailableFoodTray('mixed-vegetables', 'Mixed Vegetables'),
      unavailableFoodTray('broccoli-with-garlic', 'Broccoli with Garlic'),
      unavailableFoodTray('vegetable-salad', 'Vegetable Salad'),
      unavailableFoodTray('lumpiang-hubad', 'Lumpiang Hubad'),
    ],
  },
  {
    id: 'pasta-noodles',
    name: 'Pasta & Noodles',
    items: [
      unavailableFoodTray('spaghetti', 'Spaghetti'),
      unavailableFoodTray('carbonara', 'Carbonara'),
      unavailableFoodTray('truffle-pasta', 'Truffle Pasta'),
      unavailableFoodTray('alfredo-pasta', 'Alfredo Pasta'),
      unavailableFoodTray('cajun-pasta', 'Cajun Pasta'),
      unavailableFoodTray('baked-macaroni', 'Baked Macaroni'),
      unavailableFoodTray('chicken-pesto-pasta', 'Chicken Pesto Pasta'),
      unavailableFoodTray('pancit-canton', 'Pancit Canton'),
      unavailableFoodTray('pancit-sotanghon', 'Pancit Sotanghon'),
    ],
  },
  {
    id: 'fish-seafood',
    name: 'Fish & Seafood',
    items: [
      unavailableFoodTray('salted-egg-shrimp', 'Salted Egg Shrimp'),
      unavailableFoodTray('crabs-in-cajun-sauce', 'Crabs in Cajun Sauce'),
      unavailableFoodTray('shrimp-in-cajun-sauce', 'Shrimp in Cajun Sauce'),
      unavailableFoodTray('cheesy-baked-shrimp', 'Cheesy Baked Shrimp'),
      unavailableFoodTray('steamed-lapu-lapu', 'Steamed Lapu-Lapu'),
      unavailableFoodTray('steamed-pompano', 'Steamed Pompano'),
      unavailableFoodTray('sweet-and-sour-pompano', 'Sweet and Sour Pompano'),
      unavailableFoodTray('cheesy-baked-bangus', 'Cheesy Baked Bangus'),
      unavailableFoodTray('sweet-and-sour-fish-fillet', 'Sweet and Sour Fish Fillet'),
    ],
  },
  {
    id: 'rice',
    name: 'Rice',
    items: [unavailableFoodTray('white-rice', 'White Rice')],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      unavailableFoodTray('coffee-jelly', 'Coffee Jelly'),
      unavailableFoodTray('mango-tapioca', 'Mango Tapioca'),
      unavailableFoodTray('buko-pandan', 'Buko Pandan'),
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      unavailableFoodTray('lemon-iced-tea', 'Lemon Iced Tea'),
      unavailableFoodTray('red-iced-tea', 'Red Iced Tea'),
    ],
  },
] as const satisfies readonly FoodTrayCategory[];

export const PACKED_MEALS_AUDIENCES = [
  'Offices',
  'Call center accounts',
  'Meetings',
  'Seminars',
  'Business events',
  'Group orders',
] as const;

export const PACKED_MEALS_PENDING_DETAILS =
  'Contact Yhan’s Catering Services for available menus, minimum quantities, delivery arrangements, and bulk pricing.';

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
    imageKey: 'popularGrazingTable',
  },
] as const;
