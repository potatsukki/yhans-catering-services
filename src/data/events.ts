import { GALLERY } from './gallery';
import { SUPPLIED_EVENT_PHOTOS } from './eventPhotos';
import type { EventType, ImageAsset } from '../types/content';

export const EVENT_TYPES = [
  { id: 'weddings', name: 'Weddings', icon: 'rings' },
  { id: 'debuts', name: 'Debuts', icon: 'crown' },
  { id: 'baptisms', name: 'Baptisms', icon: 'cross' },
  { id: 'graduations', name: 'Graduations', icon: 'graduation-cap' },
  { id: 'seminars', name: 'Seminars', icon: 'presentation' },
  { id: 'inductions', name: 'Inductions', icon: 'badge' },
  { id: 'corporate-events', name: 'Corporate Events', icon: 'building' },
  { id: 'family-gatherings', name: 'Family Gatherings', icon: 'people' },
] as const satisfies readonly EventType[];

export const HOME_EVENT_TYPES = EVENT_TYPES.filter(
  (event) => event.id !== 'inductions',
) as readonly EventType[];

export const EVENT_GALLERY_CATEGORIES = [
  { id: 'birthdays', label: 'Birthdays', icon: 'cake' },
  { id: 'weddings', label: 'Weddings', icon: 'rings' },
  { id: 'corporate-events', label: 'Corporate Events', icon: 'building' },
  { id: 'private-celebrations', label: 'Private Celebrations', icon: 'people' },
  { id: 'table-setups', label: 'Table Setups', icon: 'presentation' },
  { id: 'buffet-setups', label: 'Buffet Setups', icon: 'utensils' },
  { id: 'food', label: 'Food', icon: 'utensils' },
] as const;

export type EventGalleryCategoryId = (typeof EVENT_GALLERY_CATEGORIES)[number]['id'];

type CateringEventBase = {
  readonly id: string;
  readonly title: string;
  readonly category: EventGalleryCategoryId;
  readonly description: string;
  readonly featured?: boolean;
  readonly location?: string;
  readonly date?: string;
};

export type AvailableCateringEvent = CateringEventBase & {
  readonly photoStatus: 'available';
  readonly images: readonly [ImageAsset, ...ImageAsset[]];
};

type ComingSoonCateringEvent = CateringEventBase & {
  readonly photoStatus: 'coming-soon';
  readonly images?: never;
};

export type CateringEvent = AvailableCateringEvent | ComingSoonCateringEvent;

const SUPPLIED_CATERING_EVENTS = SUPPLIED_EVENT_PHOTOS.map((photo, index) => ({
  id: `supplied-event-${index + 1}`,
  title: photo.title,
  category: photo.category,
  description: photo.description,
  photoStatus: 'available' as const,
  images: [photo] as const,
}));

const OPENING_EVENT_IDS = [
  'supplied-event-1',
  'supplied-event-5',
  'supplied-event-6',
  'supplied-event-8',
  'supplied-event-21',
  'supplied-event-13',
] as const;

const ORDERED_SUPPLIED_CATERING_EVENTS = [...SUPPLIED_CATERING_EVENTS].sort((firstEvent, secondEvent) => {
  const firstPosition = OPENING_EVENT_IDS.indexOf(firstEvent.id as (typeof OPENING_EVENT_IDS)[number]);
  const secondPosition = OPENING_EVENT_IDS.indexOf(secondEvent.id as (typeof OPENING_EVENT_IDS)[number]);
  const firstRank = firstPosition === -1 ? Number.MAX_SAFE_INTEGER : firstPosition;
  const secondRank = secondPosition === -1 ? Number.MAX_SAFE_INTEGER : secondPosition;
  return firstRank - secondRank;
});

export const CATERING_EVENTS = [
  ...ORDERED_SUPPLIED_CATERING_EVENTS,
  {
    id: 'christmas-dinner-celebration',
    title: 'Christmas Dinner Celebration',
    category: 'private-celebrations',
    description: 'An elegant red, black, and gold dining arrangement prepared for an intimate Christmas gathering.',
    featured: true,
    photoStatus: 'available',
    images: [GALLERY.sampleBuffet],
  },
  {
    id: 'blooms-birthday-celebration',
    title: 'Bloom’s Birthday Celebration',
    category: 'birthdays',
    description: 'A colorful birthday setup featuring coordinated balloons, floral centerpieces, and complete table arrangements.',
    photoStatus: 'available',
    images: [GALLERY.receptionTable],
  },
  {
    id: 'blue-yellow-birthday-setup',
    title: 'Blue and Yellow Birthday Setup',
    category: 'birthdays',
    description: 'A cheerful celebration with coordinated balloon styling, dressed chairs, and formal dining tables.',
    featured: true,
    photoStatus: 'available',
    images: [GALLERY.sampleGrazingTable],
  },
  {
    id: 'outdoor-buffet-dinner',
    title: 'Outdoor Buffet Dinner',
    category: 'buffet-setups',
    description: 'An evening buffet arrangement featuring warm decorative lights and complete food service.',
    featured: true,
    photoStatus: 'available',
    images: [GALLERY.sampleReception],
  },
] as const satisfies readonly CateringEvent[];

export const FEATURED_CATERING_EVENTS = CATERING_EVENTS.filter(
  (event): event is AvailableCateringEvent => event.photoStatus === 'available' && event.featured === true,
);
