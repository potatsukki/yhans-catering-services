import { TESTIMONIALS } from '../../../data/testimonials';
import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14" data-testid="testimonials-section">
      <Container>
        <SectionHeading
          description="Stories from customers who trusted Yhan's Catering Services for their celebrations and group events."
          eyebrow="Customer Stories"
          id="testimonials-title"
          title="Testimonials"
        />
        <div className="horizontal-card-scroller -mx-4 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0" data-testid="testimonials-scroller">
          {TESTIMONIALS.map((testimonial) => (
            <article className="relative flex min-h-[14rem] w-[82vw] max-w-[20rem] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-gold-200 bg-cream-100 p-5 shadow-sm sm:w-[46vw] lg:w-auto lg:max-w-none" key={testimonial.id}>
              <span aria-hidden="true" className="absolute -right-5 -top-7 font-display text-[8rem] leading-none text-gold-200/60">“</span>
              <div className="relative flex items-center">
                <span className="inline-flex min-h-7 items-center rounded-full bg-gold-200 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-burgundy-900">
                  {testimonial.eventType}
                </span>
              </div>
              <h3 className="relative mt-5 font-display text-2xl font-bold leading-tight text-burgundy-900">{testimonial.name}</h3>
              <div className="relative mt-3 flex gap-2 text-sm leading-6 text-ink-700">
                <Icon className="mt-1 shrink-0 text-gold-600" name="message" size={18} />
                <p>{testimonial.message}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
