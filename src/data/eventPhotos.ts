import type { ImageAsset } from '../types/content';

import event01Url from '../assets/images/events/event-01.png';
import event02Url from '../assets/images/events/event-02.png';
import event03Url from '../assets/images/events/event-03.png';
import event04Url from '../assets/images/events/event-04.png';
import event05Url from '../assets/images/events/event-05.png';
import event06Url from '../assets/images/events/event-06.png';
import event07Url from '../assets/images/events/event-07.png';
import event08Url from '../assets/images/events/event-08.png';
import event09Url from '../assets/images/events/event-09.png';
import event10Url from '../assets/images/events/event-10.png';
import event11Url from '../assets/images/events/event-11.png';
import event12Url from '../assets/images/events/event-12.png';
import event13Url from '../assets/images/events/event-13.png';
import event14Url from '../assets/images/events/event-14.png';
import event15Url from '../assets/images/events/event-15.png';
import event16Url from '../assets/images/events/event-16.png';
import event17Url from '../assets/images/events/event-17.png';
import event18Url from '../assets/images/events/event-18.png';
import event19Url from '../assets/images/events/event-19.png';
import event20Url from '../assets/images/events/event-20.png';
import event21Url from '../assets/images/events/event-21.png';
import event22Url from '../assets/images/events/event-22.png';
import event23Url from '../assets/images/events/event-23.png';
import event24Url from '../assets/images/events/event-24.png';
import event25Url from '../assets/images/events/event-25.png';
import event26Url from '../assets/images/events/event-26.png';
import event27Url from '../assets/images/events/event-27.png';
import event28Url from '../assets/images/events/event-28.png';
import event29Url from '../assets/images/events/event-29.png';
import event30Url from '../assets/images/events/event-30.png';
import event31Url from '../assets/images/events/event-31.png';
import event32Url from '../assets/images/events/event-32.png';
import event33Url from '../assets/images/events/event-33.png';

type EventGalleryPhoto = ImageAsset & {
  readonly category: 'birthdays' | 'weddings' | 'corporate-events' | 'private-celebrations' | 'table-setups' | 'buffet-setups' | 'food';
  readonly title: string;
  readonly description: string;
};

export const SUPPLIED_EVENT_PHOTOS = [
  { src: event01Url, alt: 'Balik Eskwela Recognition Program', width: 1448, height: 1086, category: 'corporate-events', title: 'Balik Eskwela Recognition Program', description: 'A formal school recognition event with a decorated stage, guest tables, and complete banquet service.' },
  { src: event02Url, alt: 'School Recognition Banquet', width: 1448, height: 1086, category: 'corporate-events', title: 'School Recognition Banquet', description: 'A large school function arranged with coordinated burgundy table settings, floral centerpieces, and stage lighting.' },
  { src: event03Url, alt: 'Elegant Gold Buffet Service', width: 1448, height: 1086, category: 'buffet-setups', title: 'Elegant Gold Buffet Service', description: 'A polished buffet line with gold chafing dishes, stacked tableware, and warm decorative lighting.' },
  { src: event04Url, alt: 'Catering Team at the Buffet', width: 1448, height: 1086, category: 'buffet-setups', title: 'Catering Team at the Buffet', description: 'Yhan’s catering team stands beside a neatly arranged gold buffet service ready for guests.' },
  { src: event05Url, alt: 'Professional Banquet Service', width: 1448, height: 1086, category: 'buffet-setups', title: 'Professional Banquet Service', description: 'A full-service buffet setup with the catering team, polished chafing dishes, and organized tableware.' },
  { src: event06Url, alt: 'Pink Birthday Grazing Table', width: 1448, height: 1086, category: 'birthdays', title: 'Pink Birthday Grazing Table', description: 'A colorful birthday spread featuring desserts, fruit, savory bites, and a pink celebration backdrop.' },
  { src: event07Url, alt: 'Bloom’s Birthday Cake', width: 1448, height: 1086, category: 'birthdays', title: 'Bloom’s Birthday Cake', description: 'A pastel birthday cake topped with a little girl figurine, flowers, and a playful cat detail.' },
  { src: event08Url, alt: 'Golden Shrimp Buffet', width: 1448, height: 1086, category: 'food', title: 'Golden Shrimp Buffet', description: 'A close-up of seasoned shrimp served in a stainless buffet tray with rice ready alongside.' },
  { src: event09Url, alt: 'Creamy Pasta Buffet', width: 1448, height: 1086, category: 'food', title: 'Creamy Pasta Buffet', description: 'Creamy mushroom pasta presented in a gold chafing dish as part of a catered buffet.' },
  { src: event10Url, alt: 'Hearty Caldereta Buffet', width: 1448, height: 1086, category: 'food', title: 'Hearty Caldereta Buffet', description: 'A rich Filipino-style meat and vegetable stew with potatoes, carrots, and peppers in a serving pan.' },
  { src: event11Url, alt: 'Formal Gold Buffet Team', width: 1402, height: 1122, category: 'buffet-setups', title: 'Formal Gold Buffet Team', description: 'Catering staff pose behind a gold buffet spread styled with ornate white panels and warm lighting.' },
  { src: event12Url, alt: 'Banquet Buffet Team Portrait', width: 1448, height: 1086, category: 'buffet-setups', title: 'Banquet Buffet Team Portrait', description: 'Yhan’s catering team poses behind an elegant gold-and-black buffet arrangement prepared for a formal gathering.' },
  { src: event13Url, alt: 'Full Dessert and Savory Buffet', width: 1448, height: 1086, category: 'buffet-setups', title: 'Full Dessert and Savory Buffet', description: 'A long buffet table filled with pastries, sandwiches, fruit, grilled bites, desserts, and chilled treats.' },
  { src: event14Url, alt: 'Freshly Baked Celebration Treats', width: 1448, height: 1086, category: 'food', title: 'Freshly Baked Celebration Treats', description: 'Large trays of chocolate-chip muffins prepared for a celebration or group order.' },
  { src: event15Url, alt: 'Gold Dessert and Dinner Buffet', width: 1448, height: 1086, category: 'buffet-setups', title: 'Gold Dessert and Dinner Buffet', description: 'A coordinated gold buffet with cake, pastries, wraps, salad, desserts, and hot food service.' },
  { src: event16Url, alt: 'Crispy Spring Roll Tray', width: 1448, height: 1086, category: 'food', title: 'Crispy Spring Roll Tray', description: 'Golden spring rolls and savory bites arranged in a catering tray with serving tongs.' },
  { src: event17Url, alt: 'Pasta and Noodle Buffet', width: 1448, height: 1086, category: 'food', title: 'Pasta and Noodle Buffet', description: 'Creamy pasta and stir-fried noodles with vegetables and meat served side by side.' },
  { src: event18Url, alt: 'Red Dessert Buffet Spread', width: 1448, height: 1086, category: 'buffet-setups', title: 'Red Dessert Buffet Spread', description: 'A festive red-themed buffet featuring pastries, sandwiches, brownies, cookies, and hot dishes.' },
  { src: event19Url, alt: 'Floral Gold Buffet Display', width: 1448, height: 1086, category: 'buffet-setups', title: 'Floral Gold Buffet Display', description: 'Gold chafing dishes arranged beneath a floral decorative backdrop for a formal reception.' },
  { src: event20Url, alt: 'Merry Christmas Dessert Buffet', width: 1448, height: 1086, category: 'private-celebrations', title: 'Merry Christmas Dessert Buffet', description: 'A Christmas gathering with a festive dessert table, red linens, floral styling, and seated guests.' },
  { src: event21Url, alt: 'Christmas Dinner Celebration', width: 1448, height: 1086, category: 'private-celebrations', title: 'Christmas Dinner Celebration', description: 'A Christmas dining setup with decorated tables, a festive tree, entertainment, and a generous buffet.' },
  { src: event22Url, alt: 'Outdoor Catering Team Setup', width: 1448, height: 1086, category: 'buffet-setups', title: 'Outdoor Catering Team Setup', description: 'A catering team poses beside a red-and-white buffet line prepared in an outdoor covered venue.' },
  { src: event23Url, alt: 'Christmas Table Setting at Home', width: 1448, height: 1086, category: 'private-celebrations', title: 'Christmas Table Setting at Home', description: 'An intimate Christmas dining table styled with gold linens, white place settings, and a decorated tree.' },
  { src: event24Url, alt: 'Black Sesame Spring Rolls', width: 1448, height: 1086, category: 'food', title: 'Black Sesame Spring Rolls', description: 'A tray of crispy black sesame spring rolls prepared for a private order or celebration.' },
  { src: event25Url, alt: 'Crispy Lumpia Tray', width: 1448, height: 1086, category: 'food', title: 'Crispy Lumpia Tray', description: 'A generous tray of crisp lumpia served with dipping sauce and fresh parsley garnish.' },
  { src: event26Url, alt: 'Family Gathering on the Terrace', width: 1448, height: 1086, category: 'private-celebrations', title: 'Family Gathering on the Terrace', description: 'A relaxed family gathering with red-covered dining tables and white chair covers in an outdoor space.' },
  { src: event27Url, alt: 'New Year Celebration Buffet', width: 1448, height: 1086, category: 'buffet-setups', title: 'New Year Celebration Buffet', description: 'A colorful buffet with desserts, fruit, savory dishes, and a staff member serving guests.' },
  { src: event28Url, alt: 'Fresh Vegetable Wraps', width: 1448, height: 1086, category: 'food', title: 'Fresh Vegetable Wraps', description: 'Colorful lettuce wraps filled with vegetables, fruit, and surimi arranged on a serving platter.' },
  { src: event29Url, alt: 'Skewered Party Bites', width: 1448, height: 1086, category: 'food', title: 'Skewered Party Bites', description: 'Golden skewered appetizers arranged on wooden risers as part of a festive buffet.' },
  { src: event30Url, alt: 'Complete Filipino Party Spread', width: 1448, height: 1086, category: 'food', title: 'Complete Filipino Party Spread', description: 'A home-style party spread with rice, noodles, barbecue skewers, lumpia, meat dishes, and vegetables.' },
  { src: event31Url, alt: 'Grand Buffet and Dessert Display', width: 1448, height: 1086, category: 'buffet-setups', title: 'Grand Buffet and Dessert Display', description: 'A lavish buffet featuring gold chafing dishes, pastries, fruit, sandwiches, and desserts.' },
  { src: event32Url, alt: 'Celebration Dessert and Sandwich Table', width: 1448, height: 1086, category: 'buffet-setups', title: 'Celebration Dessert and Sandwich Table', description: 'An abundant dessert-and-savory spread with muffins, sandwiches, fruit, skewers, and chilled desserts.' },
  { src: event33Url, alt: 'Grilled Chicken Skewers', width: 1448, height: 1086, category: 'food', title: 'Grilled Chicken Skewers', description: 'Tender chicken skewers with red pepper arranged in a catering tray for a private gathering.' },
] as const satisfies readonly EventGalleryPhoto[];
