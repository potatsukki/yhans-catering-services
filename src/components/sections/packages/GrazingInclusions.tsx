import { GRAZING_INCLUSIONS } from '../../../data/packages';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Accordion } from '../../ui/Accordion';
import { SectionHeading } from '../../ui/SectionHeading';

const inclusionGroups = [
  { title: 'Fruits', items: GRAZING_INCLUSIONS.fruits },
  { title: 'Fresh items', items: GRAZING_INCLUSIONS.freshItems },
  { title: 'Desserts and sweets', items: GRAZING_INCLUSIONS.dessertsAndSweets },
  { title: 'Savory items', items: GRAZING_INCLUSIONS.savoryItems },
  { title: 'Beverages', items: GRAZING_INCLUSIONS.beverages },
] as const;

export function GrazingInclusions() {
  return (
    <section aria-labelledby="grazing-inclusions-title" className="bg-cream-50 py-16 sm:py-20" id="grazing-inclusions">
      <Container>
        <SectionHeading id="grazing-inclusions-title" title="Grazing-table inclusions" />
        <DecorativeDivider className="mt-4" />
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {inclusionGroups.map((group) => (
            <Accordion defaultOpen key={group.title} title={group.title}>
              <ul className="grid gap-2">
                {group.items.map((item) => (
                  <li className="flex items-start gap-2" key={item}>
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span>{item}</span>
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
