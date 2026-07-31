import { ABOUT_HIGHLIGHTS } from '../../../data/business';
import { Container } from '../../ui/Container';
import { Icon, type IconName } from '../../ui/Icon';

const HIGHLIGHT_ICON_BY_ID: Record<string, IconName> = {
  established: 'calendar',
  'private-corporate': 'users',
  'guest-capacity': 'people',
  registration: 'badge',
};

export function HighlightsGrid() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2" data-testid="about-highlights">
      {ABOUT_HIGHLIGHTS.map((highlight) => (
        <article className="rounded-2xl border border-cream-300 bg-cream-50 p-4 shadow-sm" key={highlight.id}>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-200 text-burgundy-800">
              <Icon name={HIGHLIGHT_ICON_BY_ID[highlight.id] ?? 'sparkle'} size={24} />
            </span>
            <div>
              <h3 className="font-body text-sm font-bold leading-5 text-burgundy-900">{highlight.title}</h3>
              <p className="mt-1 text-xs leading-5 text-ink-700">{highlight.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
