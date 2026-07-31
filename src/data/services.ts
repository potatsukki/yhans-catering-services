import type { ServiceOffering } from '../types/content';

export const SERVICE_OFFERINGS = [
  {
    id: 'full-catering',
    name: 'Full Catering',
    description: 'Complete food packages with buffet setup, tables, chairs, drinks, and confirmed package inclusions.',
    imageKey: 'fullCatering',
  },
  {
    id: 'grazing-tables',
    name: 'Grazing Tables',
    description: 'Styled grazing-table packages for celebrations and special events.',
    imageKey: 'grazingTable',
  },
  {
    id: 'food-trays',
    name: 'Food Trays',
    description: 'Food trays for parties, offices, and group meals. Request the current menu and prices.',
    imageKey: 'foodTrays',
  },
  {
    id: 'packed-meals',
    name: 'Packed Meals',
    description: 'Breakfast, lunch, and dinner food packs for businesses, meetings, seminars, and group orders.',
    imageKey: 'packedMeals',
  },
] as const satisfies readonly ServiceOffering[];

export const ADDITIONAL_EVENT_SERVICES = [
  {
    id: 'event-styling',
    name: 'Event Styling',
    description: 'Event styling may be arranged through trusted partners.',
    arrangedThroughPartners: true,
  },
  {
    id: 'venue-decoration',
    name: 'Venue Decoration and Backdrop',
    description: 'Venue decoration and backdrop services may be arranged through trusted partners.',
    arrangedThroughPartners: true,
  },
  {
    id: 'sound-system',
    name: 'Sound System',
    description: 'Sound system services may be arranged through trusted partners.',
    arrangedThroughPartners: true,
  },
  {
    id: 'event-host',
    name: 'Event Host',
    description: 'Event host services may be arranged through trusted partners.',
    arrangedThroughPartners: true,
  },
  {
    id: 'photo-video',
    name: 'Photographer / Videographer',
    description: 'Photographer and videographer services may be arranged through trusted partners.',
    arrangedThroughPartners: true,
  },
] as const satisfies readonly ServiceOffering[];

export const ADDITIONAL_SERVICES_NOTE =
  'Additional event services may be arranged through trusted partners. Availability, scope, and pricing will be discussed directly based on your event requirements.';

export const CUSTOMIZATION_NOTE =
  'Selected dishes may be replaced with another option from the same food category. Premium substitutions, additional dishes, and special requests may have additional charges and must be discussed directly.';
