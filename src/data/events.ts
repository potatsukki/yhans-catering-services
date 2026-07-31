import type { EventType } from '../types/content';

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

