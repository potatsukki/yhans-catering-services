import { ABOUT_HIGHLIGHTS } from '../../../data/business';
import { Icon, type IconName } from '../../ui/Icon';

const HIGHLIGHT_ICON_BY_ID: Record<string, IconName> = {
  established: 'calendar',
  'private-corporate': 'users',
  'guest-capacity': 'people',
  registration: 'badge',
};

export function HighlightsGrid() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4" data-testid="about-highlights">
      {ABOUT_HIGHLIGHTS.map((highlight) => (
        <article className="min-h-[8.25rem] rounded-xl border border-cream-300 bg-cream-50 p-3 shadow-sm sm:p-4" key={highlight.id}>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cream-200 text-burgundy-800 sm:h-11 sm:w-11">
              <Icon name={HIGHLIGHT_ICON_BY_ID[highlight.id] ?? 'sparkle'} size={24} />
            </span>
            <div>
              <h3 className="font-body text-xs font-bold leading-5 text-burgundy-900 sm:text-[0.9375rem]">{highlight.title}</h3>
              <p className="mt-1 text-xs leading-5 text-ink-700 sm:mt-1.5 sm:text-sm">{highlight.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
