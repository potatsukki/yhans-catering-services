import { describe, expect, it } from 'vitest';

import { BUSINESS, CONTACT_LINKS } from './business';
import { BOOKING_POLICY_NOTE, BOOKING_STEPS } from './booking';
import {
  BREAKFAST_FOOD_PACK,
  FOOD_TRAY,
  FOOD_TRAY_CATEGORIES,
  GRAZING_TABLE_OFFER,
  LUNCH_DINNER_PACKED_MEALS,
  MENU_CATEGORIES,
  REGULAR_SHARED_INCLUSIONS,
} from './packages';

describe('confirmed catering content', () => {
  it('keeps the customizable catering menu complete and free of fixed package prices', () => {
    expect(MENU_CATEGORIES.map((category) => category.id)).toEqual([
      'beef',
      'pork',
      'chicken',
      'vegetables',
      'pasta-noodles',
      'dessert',
    ]);
    expect(MENU_CATEGORIES.flatMap((category) => category.dishes)).toHaveLength(30);
    expect(MENU_CATEGORIES.flatMap((category) => category.dishes.map((dish) => dish.name))).toEqual([
      'Beef with Mushrooms', 'Beef Caldereta', 'Beef Kare-Kare', 'Roast Beef',
      'Menudo', 'Pork Caldereta', 'Pork Hamonado', 'Lumpiang Shanghai', 'Pork Sisig',
      'Creamy Tuscan Chicken', 'Buffalo Chicken Wings', 'Chicken Hamonado', 'Chicken Pochero',
      'Chop Suey', 'Mixed Vegetables', 'Broccoli with Garlic', 'Vegetable Salad', 'Lumpiang Hubad',
      'Spaghetti', 'Carbonara', 'Truffle Pasta', 'Alfredo Pasta', 'Cajun Pasta', 'Baked Macaroni',
      'Chicken Pesto Pasta', 'Pancit Canton', 'Pancit Sotanghon',
      'Mango Tapioca', 'Coffee Jelly', 'Buko Pandan',
    ]);
    expect(MENU_CATEGORIES.flatMap((category) => category.dishes).find((dish) => dish.isBestSeller)?.name).toBe('Menudo');
    expect(JSON.stringify(MENU_CATEGORIES)).not.toMatch(/pricePhp|30000|Package 0/);
  });

  it('keeps one unified grazing table offer with the corrected inclusions', () => {
    expect(GRAZING_TABLE_OFFER.pricePerGuestPhp).toBe(1000);
    expect(GRAZING_TABLE_OFFER.minimumGuests).toBe(50);
    expect(GRAZING_TABLE_OFFER.imageKey).toBe('grazingTableComplete');
    expect(GRAZING_TABLE_OFFER.inclusions).toEqual([
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
    ]);
    expect(JSON.stringify(GRAZING_TABLE_OFFER)).not.toMatch(/Package [A-D]|Pork Menudo|Fish with Creamy Sauce/);
  });

  it('keeps packed meals and food trays free of invented prices', () => {
    expect(BREAKFAST_FOOD_PACK.options.map((meal) => meal.name)).toEqual([
      'Hotdog, Egg & Rice',
      'Corned Beef, Egg & Rice',
      'Longganisa, Egg & Rice',
      'Chicken Adobo, Egg & Rice',
      'Tocino, Egg & Rice',
      'Ham, Egg & Rice',
    ]);
    expect(LUNCH_DINNER_PACKED_MEALS.map((meal) => meal.name)).toEqual([
      'Beef Caldereta',
      'Fried Chicken',
      'Fried Bangus',
      'Pork Adobo',
      'Menudo',
      'Lumpiang Shanghai',
      'Beef Steak',
      'Bicol Express',
      'Chicken Hamonado',
      'Chicken Afritada',
      'Pork Sisig',
    ]);
    expect(LUNCH_DINNER_PACKED_MEALS.find((meal) => meal.badge)?.name).toBe('Menudo');
    expect(JSON.stringify(LUNCH_DINNER_PACKED_MEALS)).not.toMatch(/Chicken Afretada|vegies|veggies/i);
    expect(FOOD_TRAY.minimumGuests).toBe(25);
    expect(FOOD_TRAY.priceNote).toBe('Prices vary depending on the selected dish and quantity.');
    expect(FOOD_TRAY_CATEGORIES.map((category) => category.id)).toEqual([
      'beef', 'pork', 'chicken', 'vegetables', 'pasta-noodles', 'fish-seafood', 'desserts',
    ]);
    expect(FOOD_TRAY_CATEGORIES.flatMap((category) => category.items).map((item) => item.name)).toEqual([
      'Beef with Mushrooms', 'Beef Caldereta', 'Beef Kare-Kare', 'Roast Beef',
      'Menudo', 'Pork Caldereta', 'Pork Hamonado', 'Lumpiang Shanghai', 'Pork Sisig',
      'Chicken Cordon Bleu', 'Buffalo Chicken Wings', 'Chicken Hamonado', 'Chicken Pochero',
      'Chop Suey', 'Mixed Vegetables', 'Broccoli with Garlic', 'Vegetable Salad', 'Lumpiang Hubad',
      'Spaghetti', 'Carbonara', 'Truffle Pasta', 'Alfredo Pasta', 'Cajun Pasta', 'Baked Macaroni',
      'Chicken Pesto Pasta', 'Pancit Canton', 'Pancit Sotanghon',
      'Salted Egg Shrimp', 'Crabs in Cajun Sauce', 'Shrimp in Cajun Sauce', 'Cheesy Baked Shrimp',
      'Steamed Lapu-Lapu', 'Steamed Pompano', 'Sweet and Sour Pompano', 'Cheesy Baked Bangus',
      'Sweet and Sour Fish Fillet', 'Mango Tapioca', 'Coffee Jelly', 'Buko Pandan',
    ]);
    expect(FOOD_TRAY_CATEGORIES.flatMap((category) => category.items)).toHaveLength(39);
    expect(FOOD_TRAY_CATEGORIES.flatMap((category) => category.items).filter((item) => item.imageIsFallback)).toHaveLength(0);
    expect(FOOD_TRAY_CATEGORIES.flatMap((category) => category.items).find((item) => item.badge)?.name).toBe('Menudo');
    expect(JSON.stringify({ FOOD_TRAY, FOOD_TRAY_CATEGORIES })).not.toMatch(/pricePhp|₱\s*\d/);
  });

  it('preserves the regular inclusions and confirmed booking payment values', () => {
    expect(REGULAR_SHARED_INCLUSIONS).toEqual([
      'One dessert',
      'Salad bar',
      'Iced tea',
      'Rice',
      'Soup',
      'Tables and chairs',
      'Buffet setup',
    ]);
    expect(BOOKING_STEPS).toHaveLength(5);
    expect(BOOKING_STEPS[3].description).toContain('70% down payment');
    expect(BOOKING_STEPS[4].description).toContain('three days before the event');
    expect(BOOKING_POLICY_NOTE).toMatch(/signed catering contract/);
  });

  it('preserves the confirmed contact destinations', () => {
    expect(CONTACT_LINKS.map((link) => link.href)).toEqual([
      'https://www.facebook.com/share/1EnpK8EnM1/',
      'mailto:marianne03natanawan@gmail.com',
      'tel:+639566755148',
      'tel:+639671195792',
    ]);
    expect(BUSINESS.serviceAreas).toEqual(['Quezon City', 'Caloocan', 'Manila', 'Nearby Metro Manila areas']);
    expect(BUSINESS.paymentMethods).toEqual(['Cash', 'Bank transfer', 'GCash']);
  });

  it('contains no fake ratings, testimonials, or invented review claims', () => {
    const serializedContent = JSON.stringify({ BUSINESS, MENU_CATEGORIES, GRAZING_TABLE_OFFER, LUNCH_DINNER_PACKED_MEALS, FOOD_TRAY, FOOD_TRAY_CATEGORIES });
    expect(serializedContent).not.toMatch(/testimonial|customer review|rating|five stars|\b[1-5]\.0\s*\/\s*5/i);
  });
});
