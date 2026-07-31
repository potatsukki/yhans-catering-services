import { CUSTOMIZATION_NOTE } from '../../../data/services';
import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';

export function CustomizationNote() {
  return (
    <section aria-labelledby="customization-note-title" className="bg-cream-100 py-8 sm:py-10" id="customization-note">
      <Container>
        <div className="flex flex-col gap-4 rounded-2xl border border-cream-300 bg-cream-50 p-5 shadow-sm sm:flex-row sm:items-start sm:p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-200 text-burgundy-900">
            <Icon name="sparkle" size={22} />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-burgundy-900" id="customization-note-title">Menu customization</h2>
            <p className="mt-2 text-sm leading-6 text-ink-700">{CUSTOMIZATION_NOTE}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
