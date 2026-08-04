import type { GalleryKey } from './gallery';

type MenuCategoryId =
  | 'beef'
  | 'pork'
  | 'chicken'
  | 'vegetables'
  | 'pasta-noodles'
  | 'dessert';

export type MenuDish = {
  readonly id: string;
  readonly name: string;
  readonly imageKey: GalleryKey;
  readonly imageIsTemporary?: boolean;
  readonly imageBadge?: string;
  readonly imageAlt?: string;
  readonly imageIsFallback?: boolean;
  readonly isBestSeller?: boolean;
};

export type MenuCategory = {
  readonly id: MenuCategoryId;
  readonly name: string;
  readonly summaryLabel: string;
  readonly dishes: readonly MenuDish[];
};

export const MENU_CATEGORIES = [
  {
    id: 'beef',
    name: 'Beef',
    summaryLabel: 'Beef',
    dishes: [
      { id: 'beef-with-mushrooms', name: 'Beef with Mushrooms', imageKey: 'beefWithMushrooms' },
      { id: 'beef-caldereta', name: 'Beef Caldereta', imageKey: 'beefCalderetaMenu' },
      { id: 'beef-kare-kare', name: 'Beef Kare-Kare', imageKey: 'beefKareKareMenu' },
      { id: 'roast-beef', name: 'Roast Beef', imageKey: 'roastBeefMenu' },
    ],
  },
  {
    id: 'pork',
    name: 'Pork',
    summaryLabel: 'Pork',
    dishes: [
      { id: 'menudo', name: 'Menudo', imageKey: 'porkMenudoMenu', isBestSeller: true },
      { id: 'pork-caldereta', name: 'Pork Caldereta', imageKey: 'porkCalderetaMenu' },
      { id: 'pork-hamonado', name: 'Pork Hamonado', imageKey: 'porkHamonadoMenu' },
      { id: 'lumpiang-shanghai', name: 'Lumpiang Shanghai', imageKey: 'lumpiangShanghaiMenu' },
      { id: 'pork-sisig', name: 'Pork Sisig', imageKey: 'porkSisigMenu' },
    ],
  },
  {
    id: 'chicken',
    name: 'Chicken',
    summaryLabel: 'Chicken',
    dishes: [
      { id: 'chicken-cordon-bleu', name: 'Chicken Cordon Bleu', imageKey: 'chickenCordonBleuMenu' },
      { id: 'buffalo-chicken-wings', name: 'Buffalo Chicken Wings', imageKey: 'buffaloChickenWingsMenu' },
      { id: 'chicken-hamonado', name: 'Chicken Hamonado', imageKey: 'chickenHamonadoMenu' },
      { id: 'chicken-pochero', name: 'Chicken Pochero', imageKey: 'chickenPocheroMenu' },
    ],
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    summaryLabel: 'Vegetables',
    dishes: [
      { id: 'chop-suey', name: 'Chop Suey', imageKey: 'chopSueyMenu' },
      { id: 'mixed-vegetables', name: 'Mixed Vegetables', imageKey: 'mixedVegetablesMenu' },
      {
        id: 'broccoli-with-garlic',
        name: 'Broccoli with Garlic',
        imageKey: 'broccoliWithGarlicMenu',
      },
      { id: 'vegetable-salad', name: 'Vegetable Salad', imageKey: 'vegetableSaladMenu' },
      { id: 'lumpiang-hubad', name: 'Lumpiang Hubad', imageKey: 'lumpiangHubadMenu' },
    ],
  },
  {
    id: 'pasta-noodles',
    name: 'Pasta and Noodles',
    summaryLabel: 'Pasta and Noodles',
    dishes: [
      { id: 'spaghetti', name: 'Spaghetti', imageKey: 'spaghettiMenu' },
      { id: 'carbonara', name: 'Carbonara', imageKey: 'carbonaraMenu' },
      { id: 'truffle-pasta', name: 'Truffle Pasta', imageKey: 'trufflePastaMenu' },
      {
        id: 'alfredo-pasta',
        name: 'Alfredo Pasta',
        imageKey: 'alfredoPastaMenu',
      },
      {
        id: 'cajun-pasta',
        name: 'Cajun Pasta',
        imageKey: 'cajunPastaMenu',
      },
      { id: 'baked-macaroni', name: 'Baked Macaroni', imageKey: 'bakedMacaroniMenu' },
      { id: 'chicken-pesto-pasta', name: 'Chicken Pesto Pasta', imageKey: 'chickenPestoPastaMenu' },
      { id: 'pancit-canton', name: 'Pancit Canton', imageKey: 'pancitCantonMenu' },
      {
        id: 'pancit-sotanghon',
        name: 'Pancit Sotanghon',
        imageKey: 'pancitSotanghonMenu',
      },
    ],
  },
  {
    id: 'dessert',
    name: 'Desserts',
    summaryLabel: 'Dessert',
    dishes: [
      { id: 'mango-tapioca', name: 'Mango Tapioca', imageKey: 'mangoTapiocaMenu' },
      {
        id: 'coffee-jelly',
        name: 'Coffee Jelly',
        imageKey: 'coffeeJellyMenu',
      },
      {
        id: 'buko-pandan',
        name: 'Buko Pandan',
        imageKey: 'bukoPandanMenu',
      },
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
    'Sushi',
    'Cookies',
    'Lumpia ala Cubana',
    'Nachos',
  ],
} as const satisfies GrazingTableOffer;

export const GRAZING_ESTIMATE_DISCLAIMER =
  'Estimate only. Final menu, guest count, location, and event arrangements are confirmed directly.';

export type PackedMealDish = {
  readonly id: string;
  readonly name: string;
  readonly badge?: 'Best Seller';
};

export type BreakfastFoodPack = {
  readonly name: string;
  readonly description: string;
  readonly options: readonly PackedMealDish[];
};

export const BREAKFAST_FOOD_PACK = {
  name: 'Breakfast Food Packs',
  description: 'A simple and satisfying start to your day.',
  options: [
    { id: 'hotdog-breakfast', name: 'Hotdog, Egg & Rice' },
    { id: 'corned-beef-breakfast', name: 'Corned Beef, Egg & Rice' },
    { id: 'longganisa-breakfast', name: 'Longganisa, Egg & Rice' },
    { id: 'chicken-adobo-breakfast', name: 'Chicken Adobo, Egg & Rice' },
    { id: 'tocino-breakfast', name: 'Tocino, Egg & Rice' },
    { id: 'ham-breakfast', name: 'Ham, Egg & Rice' },
  ],
} as const satisfies BreakfastFoodPack;

export const LUNCH_DINNER_PACKED_MEALS = [
  { id: 'beef-caldereta', name: 'Beef Caldereta' },
  { id: 'fried-chicken', name: 'Fried Chicken' },
  { id: 'fried-bangus', name: 'Fried Bangus' },
  { id: 'pork-adobo', name: 'Pork Adobo' },
  { id: 'menudo', name: 'Menudo', badge: 'Best Seller' },
  { id: 'lumpiang-shanghai', name: 'Lumpiang Shanghai' },
  { id: 'beef-steak', name: 'Beef Steak' },
  { id: 'bicol-express', name: 'Bicol Express' },
  { id: 'chicken-hamonado', name: 'Chicken Hamonado' },
  { id: 'chicken-afritada', name: 'Chicken Afritada' },
  { id: 'pork-sisig', name: 'Pork Sisig' },
] as const satisfies readonly PackedMealDish[];

type FoodTrayCategoryId =
  | 'beef'
  | 'pork'
  | 'chicken'
  | 'vegetables'
  | 'pasta-noodles'
  | 'fish-seafood'
  | 'desserts';

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
      { id: 'beef-with-mushrooms', name: 'Beef with Mushrooms', imageKey: 'beefWithMushroomsTray', imageAlt: 'Beef with mushrooms served in a food tray' },
      { id: 'beef-caldereta', name: 'Beef Caldereta', imageKey: 'beefCaldereta', imageAlt: 'Beef Caldereta food tray with potatoes and peppers' },
      { id: 'beef-kare-kare', name: 'Beef Kare-Kare', imageKey: 'beefKareKareTray', imageAlt: 'Beef kare-kare served in a food tray with vegetables' },
      { id: 'roast-beef', name: 'Roast Beef', imageKey: 'roastBeefTray', imageAlt: 'Roast beef with mashed potatoes and vegetables served in a food tray' },
    ],
  },
  {
    id: 'pork',
    name: 'Pork',
    items: [
      { id: 'menudo', name: 'Menudo', imageKey: 'menudoTray', imageAlt: 'Menudo with vegetables served in a food tray', badge: 'Best Seller' },
      { id: 'pork-caldereta', name: 'Pork Caldereta', imageKey: 'porkCalderetaTray', imageAlt: 'Pork caldereta with potatoes, carrots, and bell peppers served in a food tray' },
      { id: 'pork-hamonado', name: 'Pork Hamonado', imageKey: 'porkHamonadoTray', imageAlt: 'Pork Hamonado with pineapple served in a food tray' },
      { id: 'lumpiang-shanghai', name: 'Lumpiang Shanghai', imageKey: 'lumpiangShanghaiTray', imageAlt: 'Lumpiang Shanghai served in a food tray with lettuce' },
      { id: 'pork-sisig', name: 'Pork Sisig', imageKey: 'porkSisigTray', imageAlt: 'Pork Sisig with peppers served in a food tray' },
    ],
  },
  {
    id: 'chicken',
    name: 'Chicken',
    items: [
      { id: 'chicken-cordon-bleu', name: 'Chicken Cordon Bleu', imageKey: 'chickenCordonBleuTray', imageAlt: 'Chicken Cordon Bleu slices served in a food tray' },
      { id: 'buffalo-chicken-wings', name: 'Buffalo Chicken Wings', imageKey: 'buffaloChickenWingsTray', imageAlt: 'Buffalo chicken wings served in a food tray' },
      { id: 'chicken-hamonado', name: 'Chicken Hamonado', imageKey: 'chickenHamonadoTray', imageAlt: 'Chicken hamonado with pineapple and vegetables served in a food tray' },
      { id: 'chicken-pochero', name: 'Chicken Pochero', imageKey: 'chickenPocheroTray', imageAlt: 'Chicken Pochero with vegetables served in a food tray' },
    ],
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    items: [
      { id: 'chop-suey', name: 'Chop Suey', imageKey: 'chopSueyTray', imageAlt: 'Chop Suey with quail eggs and vegetables served in a food tray' },
      { id: 'mixed-vegetables', name: 'Mixed Vegetables', imageKey: 'mixedVegetablesTray', imageAlt: 'Mixed vegetables baked with cheese in a food tray' },
      { id: 'broccoli-with-garlic', name: 'Broccoli with Garlic', imageKey: 'broccoliWithGarlicTray', imageAlt: 'Broccoli with garlic served in a food tray' },
      { id: 'vegetable-salad', name: 'Vegetable Salad', imageKey: 'vegetableSaladTray', imageAlt: 'Fresh garden salad with lettuce, cucumber, and tomatoes served in a food tray' },
      { id: 'lumpiang-hubad', name: 'Lumpiang Hubad', imageKey: 'lumpiangHubadTray', imageAlt: 'Lumpiang Hubad with vegetables and sauce served in a food tray' },
    ],
  },
  {
    id: 'pasta-noodles',
    name: 'Pasta & Noodles',
    items: [
      { id: 'spaghetti', name: 'Spaghetti', imageKey: 'spaghettiTray', imageAlt: 'Spaghetti with tomato sauce, cheese, and sausage served in a food tray' },
      { id: 'carbonara', name: 'Carbonara', imageKey: 'carbonaraTray', imageAlt: 'Creamy carbonara pasta with sausage served in a food tray' },
      { id: 'truffle-pasta', name: 'Truffle Pasta', imageKey: 'trufflePastaTray', imageAlt: 'Creamy mushroom truffle pasta served in a food tray' },
      { id: 'alfredo-pasta', name: 'Alfredo Pasta', imageKey: 'alfredoPastaTray', imageAlt: 'Creamy Alfredo pasta with mushrooms served in a food tray' },
      { id: 'cajun-pasta', name: 'Cajun Pasta', imageKey: 'cajunPastaTray', imageAlt: 'Cajun pasta with chicken and bell peppers served in a food tray' },
      { id: 'baked-macaroni', name: 'Baked Macaroni', imageKey: 'bakedMacaroniTray', imageAlt: 'Baked macaroni served in a food tray' },
      { id: 'chicken-pesto-pasta', name: 'Chicken Pesto Pasta', imageKey: 'chickenPestoPastaTray', imageAlt: 'Chicken pesto pasta served in a food tray' },
      { id: 'pancit-canton', name: 'Pancit Canton', imageKey: 'pancitCantonTray', imageAlt: 'Pancit Canton served in a food tray' },
      { id: 'pancit-sotanghon', name: 'Pancit Sotanghon', imageKey: 'pancitSotanghonTray', imageAlt: 'Pancit Sotanghon served in a food tray' },
    ],
  },
  {
    id: 'fish-seafood',
    name: 'Fish & Seafood',
    items: [
      {
        id: 'salted-egg-shrimp',
        name: 'Salted Egg Shrimp',
        imageKey: 'saltedEggShrimpTray',
        imageAlt: 'Salted egg shrimp served in a food tray',
      },
      {
        id: 'crabs-in-cajun-sauce',
        name: 'Crabs in Cajun Sauce',
        imageKey: 'crabsInCajunSauceTray',
        imageAlt: 'Crabs in Cajun sauce served in a food tray',
      },
      { id: 'shrimp-in-cajun-sauce', name: 'Shrimp in Cajun Sauce', imageKey: 'shrimpCajunSauceTray', imageAlt: 'Shrimp in Cajun sauce with corn served in a food tray' },
      {
        id: 'cheesy-baked-shrimp',
        name: 'Cheesy Baked Shrimp',
        imageKey: 'cheesyBakedShrimpTray',
        imageAlt: 'Cheesy baked shrimp served in a food tray',
      },
      { id: 'steamed-lapu-lapu', name: 'Steamed Lapu-Lapu', imageKey: 'steamedLapuLapuTray', imageAlt: 'Steamed Lapu-Lapu served in a food tray' },
      { id: 'steamed-pompano', name: 'Steamed Pompano', imageKey: 'steamedPompanoTray', imageAlt: 'Steamed pompano with ginger and scallions served in a food tray' },
      { id: 'sweet-and-sour-pompano', name: 'Sweet and Sour Pompano', imageKey: 'sweetSourPompanoTray', imageAlt: 'Sweet and sour pompano with pineapple and bell peppers served in a food tray' },
      { id: 'cheesy-baked-bangus', name: 'Cheesy Baked Bangus', imageKey: 'cheesyBakedBangusTray', imageAlt: 'Cheesy baked bangus served in a food tray' },
      { id: 'sweet-and-sour-fish-fillet', name: 'Sweet and Sour Fish Fillet', imageKey: 'sweetSourFishFilletTray', imageAlt: 'Sweet and sour fish fillet served in a food tray' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { id: 'mango-tapioca', name: 'Mango Tapioca', imageKey: 'mangoTapiocaMenu', imageAlt: 'Mango tapioca dessert cups with mango chunks' },
      { id: 'coffee-jelly', name: 'Coffee Jelly', imageKey: 'coffeeJellyMenu', imageAlt: 'Coffee jelly dessert cups on a catering tray' },
      { id: 'buko-pandan', name: 'Buko Pandan', imageKey: 'bukoPandanMenu', imageAlt: 'Buko pandan dessert cups on a catering tray' },
    ],
  },
] as const satisfies readonly FoodTrayCategory[];

export const HOME_POPULAR_CHOICES = [
  {
    id: 'pork-menudo',
    name: 'Pork Menudo',
    imageKey: 'menudoTray',
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
