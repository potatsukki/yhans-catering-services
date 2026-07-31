import type { BookingStep, HelpfulInformationItem } from '../types/content';

export const ABOUT_STORY =
  "Established in 2010, Yhan's Catering Services started with a simple setup and limited equipment. Through years of experience, hard work, and continuous investment, the business grew into a more professional catering service with improved equipment, presentation, hygiene standards, and event setup. Today, Yhan's Catering Services serves private celebrations, business functions, and group events with dependable food and service.";

export const FARTHER_LOCATIONS_NOTE =
  'Farther locations may be accommodated. Transportation, travel, accommodation, staffing, and other event arrangements will be discussed directly based on the location and event requirements.';

export const BOOKING_STEPS = [
  {
    number: 1,
    title: 'Inquire with Yhan’s Catering Services',
    description: 'Contact the business through Facebook, phone, Viber, or email.',
  },
  {
    number: 2,
    title: 'Discuss your event requirements',
    description: 'Discuss the date, location, guest count, package, and event requirements.',
  },
  {
    number: 3,
    title: 'Confirm the catering contract',
    description: 'Confirm the details through a catering contract.',
  },
  {
    number: 4,
    title: 'Pay the 70% down payment',
    description: 'A 70% down payment is required to reserve the event date.',
  },
  {
    number: 5,
    title: 'Settle the remaining balance',
    description: 'The remaining balance must be paid three days before the event.',
  },
] as const satisfies readonly BookingStep[];

export const BOOKING_POLICY_NOTE =
  'Cancellation, rescheduling, refund, and other booking conditions are governed by the signed catering contract.';

export const HELPFUL_INFORMATION = [
  {
    id: 'direct-inquiries',
    title: 'Direct Inquiries',
    description: 'Message us on Facebook or contact us by phone, Viber, or email for availability and event details.',
  },
  {
    id: 'custom-quotations',
    title: 'Custom Quotations',
    description: 'Quotations are based on the chosen package, guest count, location, and event requirements.',
  },
  {
    id: 'add-ons-partners',
    title: 'Add-ons and Trusted Partners',
    description: 'Styling, sound systems, hosts, photographers, videographers, and other event services may be arranged through trusted partners.',
  },
  {
    id: 'corporate-orders',
    title: 'Corporate and Large Food Orders',
    description: 'DTI and BIR documentation may be provided when required for large business or corporate food orders.',
  },
] as const satisfies readonly HelpfulInformationItem[];
