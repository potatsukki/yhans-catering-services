import type { ImageAsset } from '../types/content';
import logoUrl from '../assets/brand/yhans-logo.png';
import marianneChefUrl from '../assets/images/about/marianne-natanawan-chef.jpg';
import cateringCrewUrl from '../assets/images/about/yhans-catering-crew.jpg';
import buffetHeroUrl from '../assets/images/hero-buffet.png';
import receptionTableUrl from '../assets/images/placeholders/shared/reception-table.webp';
import whyChooseEventUrl from '../assets/images/why-choose-blue-event.png';
import fullCateringUrl from '../assets/images/full-catering-team.png';
import grazingTableCompleteUrl from '../assets/images/grazing-table-complete-spread.png';
import grazingTableUrl from '../assets/images/grazing-table-spread.png';
import grazingPackageAUrl from '../assets/images/grazing-package-a.png';
import grazingPackageBUrl from '../assets/images/grazing-package-b.png';
import grazingPackageCUrl from '../assets/images/grazing-package-c.png';
import popularGrazingTableUrl from '../assets/images/popular-grazing-table.png';
import foodTraysUrl from '../assets/images/food-tray-seafood.png';
import foodTraysFeatureUrl from '../assets/images/food-trays-feature.png';
import packedMealsUrl from '../assets/images/packed-meal-box.png';
import porkMenudoUrl from '../assets/images/pork-menudo-chafing-dish.png';
import beefCalderetaUrl from '../assets/images/beef-caldereta-tray.png';
import regularPackageThreeUrl from '../assets/images/regular-package-three-lumpia.png';
import sampleBuffetUrl from '../assets/images/recent-event-christmas-dinner.png';
import sampleGrazingTableUrl from '../assets/images/recent-event-blue-celebration.png';
import sampleReceptionUrl from '../assets/images/recent-event-evening-buffet.png';
import breakfastPackUrl from '../assets/images/placeholders/meals/breakfast-pack.webp';
import groupMealPackUrl from '../assets/images/placeholders/meals/group-meal-pack.webp';
import imageFallbackUrl from '../assets/images/placeholders/shared/image-fallback.webp';

export type GalleryKey =
  | 'logo'
  | 'marianneChef'
  | 'cateringCrew'
  | 'buffetHero'
  | 'receptionTable'
  | 'whyChooseEvent'
  | 'fullCatering'
  | 'grazingTableComplete'
  | 'grazingTable'
  | 'grazingPackageA'
  | 'grazingPackageB'
  | 'grazingPackageC'
  | 'popularGrazingTable'
  | 'foodTrays'
  | 'foodTraysFeature'
  | 'packedMeals'
  | 'porkMenudo'
  | 'beefCaldereta'
  | 'regularPackageThree'
  | 'sampleBuffet'
  | 'sampleGrazingTable'
  | 'sampleReception'
  | 'breakfastPack'
  | 'groupMealPack'
  | 'imageFallback';

export const RECENT_EVENT_GALLERY_KEYS = [
  'sampleBuffet',
  'sampleGrazingTable',
  'sampleReception',
] as const satisfies readonly GalleryKey[];

export const GALLERY: Record<GalleryKey, ImageAsset> = {
  logo: {
    src: logoUrl,
    alt: "Yhan's Catering Services logo",
    width: 2172,
    height: 724,
  },
  marianneChef: {
    src: marianneChefUrl,
    alt: 'Chef Marianne P. Natanawan in chef uniform in a commercial kitchen',
    width: 549,
    height: 960,
  },
  cateringCrew: {
    src: cateringCrewUrl,
    alt: "Yhan's Catering Services crew standing behind a catered buffet",
    width: 2048,
    height: 1536,
  },
  buffetHero: {
    src: buffetHeroUrl,
    alt: 'Buffet setup with gold chafing dishes and floral decor',
    width: 1916,
    height: 821,
    isPlaceholder: true,
  },
  receptionTable: {
    src: receptionTableUrl,
    alt: 'Sample decorated reception table',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  whyChooseEvent: {
    src: whyChooseEventUrl,
    alt: 'Blue-clothed banquet tables prepared for an event',
    width: 1448,
    height: 1086,
  },
  fullCatering: {
    src: fullCateringUrl,
    alt: "Yhan's Catering Services team standing behind a buffet setup",
    width: 1536,
    height: 1024,
  },
  grazingTableComplete: {
    src: grazingTableCompleteUrl,
    alt: 'Complete grazing table setup with assorted sweet and savory food',
    width: 1672,
    height: 941,
  },
  grazingTable: {
    src: grazingTableUrl,
    alt: 'Grazing table with charcuterie, desserts, and fruit displays',
    width: 1448,
    height: 1086,
  },
  grazingPackageA: {
    src: grazingPackageAUrl,
    alt: 'Birthday grazing table with pastries, fruit, and desserts',
    width: 1448,
    height: 1086,
  },
  grazingPackageB: {
    src: grazingPackageBUrl,
    alt: 'Blue birthday grazing table with cakes, pastries, and fruit',
    width: 1448,
    height: 1086,
  },
  grazingPackageC: {
    src: grazingPackageCUrl,
    alt: 'Grazing table with desserts, spring rolls, and fruit',
    width: 1448,
    height: 1086,
  },
  popularGrazingTable: {
    src: popularGrazingTableUrl,
    alt: 'Overhead grazing table with charcuterie, desserts, and canapes',
    width: 1448,
    height: 1086,
  },
  foodTrays: {
    src: foodTraysUrl,
    alt: 'Food trays with seafood, vegetables, and steamed fish',
    width: 1448,
    height: 1086,
  },
  foodTraysFeature: {
    src: foodTraysFeatureUrl,
    alt: 'Food trays with chicken wings, shrimp, and baked pasta dishes',
    width: 1448,
    height: 1086,
  },
  packedMeals: {
    src: packedMealsUrl,
    alt: 'Packed meal box with fried chicken, rice, vegetables, and a gift-wrapped apple',
    width: 1448,
    height: 1086,
  },
  porkMenudo: {
    src: porkMenudoUrl,
    alt: 'Pork menudo served in a gold chafing dish',
    width: 1448,
    height: 1086,
  },
  beefCaldereta: {
    src: beefCalderetaUrl,
    alt: 'Beef caldereta with potatoes and peppers in a serving tray',
    width: 1448,
    height: 1086,
  },
  regularPackageThree: {
    src: regularPackageThreeUrl,
    alt: 'Lumpiang Shanghai arranged in a serving tray',
    width: 1448,
    height: 1086,
  },
  sampleBuffet: {
    src: sampleBuffetUrl,
    alt: 'Christmas dinner tables with red linens and festive tree decor',
    width: 1448,
    height: 1086,
  },
  sampleGrazingTable: {
    src: sampleGrazingTableUrl,
    alt: 'Blue-and-yellow decorated celebration venue',
    width: 1448,
    height: 1086,
  },
  sampleReception: {
    src: sampleReceptionUrl,
    alt: 'Evening buffet setup with chafing dishes and string lights',
    width: 1448,
    height: 1086,
  },
  breakfastPack: {
    src: breakfastPackUrl,
    alt: 'Sample breakfast food pack',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  groupMealPack: {
    src: groupMealPackUrl,
    alt: 'Sample group meal pack',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  imageFallback: {
    src: imageFallbackUrl,
    alt: '',
    width: 1200,
    height: 800,
    isPlaceholder: true,
  },
};
