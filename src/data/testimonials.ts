export type Testimonial = {
  readonly id: string;
  readonly name: string;
  readonly eventType: string;
  readonly message: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'glydel-anne-dabu',
    name: 'Glydel Anne Dabu',
    eventType: 'School Event',
    message: 'The food was delicious, and the service helped our school event run smoothly. Thank you for making the occasion feel special.',
  },
  {
    id: 'yhen-natanawan',
    name: 'Yhen Natanawan',
    eventType: 'BPO Company',
    message: 'The team handled our company food service efficiently, and everything was prepared and presented well for our group.',
  },
  {
    id: 'jonathan-camara',
    name: 'Jonathan Camara',
    eventType: 'Wedding',
    message: 'The catering helped make our wedding celebration warm and memorable. Our guests enjoyed the food and the beautiful setup.',
  },
  {
    id: 'alexandra-alarcon',
    name: 'Alexandra Alarcon',
    eventType: 'Birthday Celebration',
    message: 'The food, presentation, and service made the birthday celebration easy to enjoy with family and friends.',
  },
] as const;
