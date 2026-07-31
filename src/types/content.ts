export type ContactLinkKind = 'facebook' | 'email' | 'phone';

export type ContactLink = {
  readonly label: string;
  readonly href: string;
  readonly kind: ContactLinkKind;
  readonly external?: boolean;
};

export type BusinessProfile = {
  readonly name: string;
  readonly facebookDisplayName: string;
  readonly owner: string;
  readonly role: string;
  readonly established: number;
  readonly tagline: string;
  readonly registration: string;
  readonly guestCapacity: readonly [number, number];
  readonly address: string;
  readonly hours: string;
  readonly serviceAreas: readonly string[];
  readonly paymentMethods: readonly string[];
  readonly contacts: readonly ContactLink[];
};

export type NavigationItem = {
  readonly label: string;
  readonly href: string;
};

export type RegularPackage = {
  readonly id: string;
  readonly name: string;
  readonly pricePhp: 30000;
  readonly guestCapacity: 50;
  readonly dishes: readonly string[];
};

export type GrazingPackage = {
  readonly id: string;
  readonly name: string;
  readonly pricePerGuestPhp: 1000;
  readonly minimumGuests: 50;
  readonly dishes: readonly string[];
  readonly bestSellerDish?: string;
  readonly isBestSeller?: boolean;
};

export type PackedMealOffering = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly sampleMenu?: readonly string[];
};

export type FoodTrayOffering = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price?: never;
};

export type ServiceOffering = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly imageKey?: string;
  readonly arrangedThroughPartners?: boolean;
};

export type EventType = {
  readonly id: string;
  readonly name: string;
  readonly icon: string;
};

export type HomeTrustPoint = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

export type AboutHighlight = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
};

export type BookingStep = {
  readonly number: number;
  readonly title: string;
  readonly description: string;
};

export type HelpfulInformationItem = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

export type ImageAsset = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly isPlaceholder?: boolean;
};

export type RouteMeta = {
  readonly title: string;
  readonly description: string;
};
