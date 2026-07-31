import { GRAZING_INCLUSIONS } from '../../../data/packages';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Accordion } from '../../ui/Accordion';
import { Icon, type IconName } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';

const inclusionGroups = [
  { title: 'Fruits', items: GRAZING_INCLUSIONS.fruits, icon: 'fruit', gridClassName: 'lg:col-span-2', itemGridClassName: 'grid-cols-1 sm:grid-cols-2' },
  { title: 'Fresh items', items: GRAZING_INCLUSIONS.freshItems, icon: 'leaf', gridClassName: 'lg:col-span-2', itemGridClassName: 'grid-cols-1 sm:grid-cols-2' },
  { title: 'Desserts and sweets', items: GRAZING_INCLUSIONS.dessertsAndSweets, icon: 'cake', gridClassName: 'sm:col-span-2 lg:col-span-2', itemGridClassName: 'grid-cols-3' },
  { title: 'Savory items', items: GRAZING_INCLUSIONS.savoryItems, icon: 'utensils', gridClassName: 'sm:col-span-2 lg:col-span-4', itemGridClassName: 'grid-cols-3' },
  { title: 'Beverages', items: GRAZING_INCLUSIONS.beverages, icon: 'drink', gridClassName: 'sm:col-span-2 lg:col-span-2', itemGridClassName: 'grid-cols-2' },
] as const;

export function GrazingInclusions() {
  return (
    <section aria-labelledby="grazing-inclusions-title" className="relative isolate overflow-hidden bg-cream-100 py-11 sm:py-12 lg:py-14" id="grazing-inclusions">
      <span aria-hidden="true" className="absolute -left-28 top-16 -z-10 h-72 w-72 rounded-full border-[3rem] border-gold-200/35" />
      <span aria-hidden="true" className="absolute -right-20 bottom-10 -z-10 h-56 w-56 rounded-full bg-burgundy-900/5" />
      <Container className="relative">
        <SectionHeading
          description="Explore the confirmed fruits, fresh items, sweets, savory bites, and beverages included in the grazing-table setup."
          id="grazing-inclusions-title"
          title="Grazing-table inclusions"
        />
        <DecorativeDivider className="mt-4" />
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6" data-testid="grazing-inclusions-grid">
          {inclusionGroups.map((group) => (
            <Accordion
              buttonClassName="px-3 py-3 sm:px-5 sm:py-4"
              className={`overflow-hidden border-gold-200 bg-cream-50 shadow-sm transition-shadow hover:shadow-md ${group.gridClassName}`}
              defaultOpen
              key={group.title}
              panelClassName="border-gold-200 bg-white/45 px-3 py-4 sm:px-5"
              title={
                <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-burgundy-900 text-gold-200 shadow-sm sm:h-11 sm:w-11">
                    <Icon name={group.icon as IconName} size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-base font-bold leading-tight text-burgundy-900 sm:text-xl">{group.title}</span>
                    <span className="mt-0.5 block text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ink-500 sm:text-xs">
                      {group.items.length} {group.items.length === 1 ? 'item' : 'items'}
                    </span>
                  </span>
                </span>
              }
            >
              <ul className={`grid gap-2 ${group.itemGridClassName}`}>
                {group.items.map((item) => (
                  <li className="flex min-h-10 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-cream-300/80 bg-cream-50 px-2 py-2 text-center text-[0.7rem] leading-4 sm:justify-start sm:gap-2 sm:px-3 sm:text-left sm:text-sm sm:leading-5" key={item}>
                    <span aria-hidden="true" className="hidden h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-200 text-burgundy-900 sm:flex">
                      <Icon name="check" size={13} />
                    </span>
                    <span className="min-w-0 break-words [overflow-wrap:anywhere]">{item}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>
      </Container>
    </section>
  );
}
