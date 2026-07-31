import type { ImageAsset } from '../types/content';
import logoUrl from '../assets/brand/yhans-logo.png';
import buffetHeroUrl from '../assets/images/placeholders/shared/buffet-hero.webp';
import receptionTableUrl from '../assets/images/placeholders/shared/reception-table.webp';
import fullCateringUrl from '../assets/images/placeholders/services/full-catering.webp';
import grazingTableUrl from '../assets/images/placeholders/services/grazing-table.webp';
import foodTraysUrl from '../assets/images/placeholders/services/food-trays.webp';
import packedMealsUrl from '../assets/images/placeholders/services/packed-meals.webp';
import porkMenudoUrl from '../assets/images/placeholders/dishes/pork-menudo.webp';
import beefCalderetaUrl from '../assets/images/placeholders/dishes/beef-caldereta.webp';
import sampleBuffetUrl from '../assets/images/placeholders/events/sample-buffet.webp';
import sampleGrazingTableUrl from '../assets/images/placeholders/events/sample-grazing-table.webp';
import sampleReceptionUrl from '../assets/images/placeholders/events/sample-reception.webp';
import breakfastPackUrl from '../assets/images/placeholders/meals/breakfast-pack.webp';
import lunchPackUrl from '../assets/images/placeholders/meals/lunch-pack.webp';
import groupMealPackUrl from '../assets/images/placeholders/meals/group-meal-pack.webp';
import imageFallbackUrl from '../assets/images/placeholders/shared/image-fallback.webp';

export type GalleryKey =
  | 'logo'
  | 'buffetHero'
  | 'receptionTable'
  | 'fullCatering'
  | 'grazingTable'
  | 'foodTrays'
  | 'packedMeals'
  | 'porkMenudo'
  | 'beefCaldereta'
  | 'sampleBuffet'
  | 'sampleGrazingTable'
  | 'sampleReception'
  | 'breakfastPack'
  | 'lunchPack'
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
  buffetHero: {
    src: buffetHeroUrl,
    alt: 'Sample buffet setup',
    width: 1600,
    height: 900,
    isPlaceholder: true,
  },
  receptionTable: {
    src: receptionTableUrl,
    alt: 'Sample decorated reception table',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  fullCatering: {
    src: fullCateringUrl,
    alt: 'Sample full catering buffet',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  grazingTable: {
    src: grazingTableUrl,
    alt: 'Sample grazing-table presentation',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  foodTrays: {
    src: foodTraysUrl,
    alt: 'Sample food trays',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  packedMeals: {
    src: packedMealsUrl,
    alt: 'Sample packed meals',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  porkMenudo: {
    src: porkMenudoUrl,
    alt: 'Sample Pork Menudo dish',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  beefCaldereta: {
    src: beefCalderetaUrl,
    alt: 'Sample Beef Caldereta dish',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  sampleBuffet: {
    src: sampleBuffetUrl,
    alt: 'Sample buffet setup',
    width: 1200,
    height: 800,
    isPlaceholder: true,
  },
  sampleGrazingTable: {
    src: sampleGrazingTableUrl,
    alt: 'Sample grazing-table presentation',
    width: 1200,
    height: 800,
    isPlaceholder: true,
  },
  sampleReception: {
    src: sampleReceptionUrl,
    alt: 'Sample decorated reception venue',
    width: 1200,
    height: 800,
    isPlaceholder: true,
  },
  breakfastPack: {
    src: breakfastPackUrl,
    alt: 'Sample breakfast food pack',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  lunchPack: {
    src: lunchPackUrl,
    alt: 'Sample lunch food pack',
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
