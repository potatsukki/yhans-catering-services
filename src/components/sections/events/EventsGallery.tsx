import { useRef, useState } from 'react';

import { CATERING_EVENTS, type AvailableCateringEvent } from '../../../data/events';
import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { ImageLightbox } from '../../ui/ZoomableImage';
import { SectionHeading } from '../../ui/SectionHeading';

const EVENTS_PER_PAGE = 6;

type PaginationItem = number | 'ellipsis-start' | 'ellipsis-end';

function getPaginationItems(currentPage: number, totalPages: number): PaginationItem[] {
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, index) => index + 1);
  if (currentPage <= 3) return [1, 2, 3, 'ellipsis-end', totalPages];
  if (currentPage >= totalPages - 2) return [1, 'ellipsis-start', totalPages - 2, totalPages - 1, totalPages];
  return [1, 'ellipsis-start', currentPage, 'ellipsis-end', totalPages];
}

type EventCardProps = {
  readonly event: AvailableCateringEvent;
  readonly onOpen: (event: AvailableCateringEvent, trigger: HTMLButtonElement) => void;
};

function EventCard({ event, onOpen }: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-gold-200 bg-cream-50 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 focus-within:shadow-md">
      <button
        aria-label={'Open larger image of ' + event.title}
        className="block w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-focus/60"
        onClick={(clickEvent) => onOpen(event, clickEvent.currentTarget)}
        type="button"
      >
        <div className="aspect-[4/3] overflow-hidden bg-cream-200">
          <ResponsiveImage asset={event.images[0]} className="h-full" />
        </div>
      </button>
    </article>
  );
}

export function EventsGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeAlbum, setActiveAlbum] = useState<{ event: AvailableCateringEvent; trigger: HTMLButtonElement } | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const events = CATERING_EVENTS.filter(
    (event): event is AvailableCateringEvent => event.photoStatus === 'available',
  );
  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const visibleEvents = events.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  const changePage = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.requestAnimationFrame(() => {
      galleryRef.current?.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section aria-labelledby="events-gallery-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14" id="events-gallery">
      <Container>
        <div ref={galleryRef} tabIndex={-1}>
          <SectionHeading
            description="A glimpse at the celebrations, table arrangements, and catering setups prepared by Yhan’s Catering Services."
            id="events-gallery-title"
            title="Celebrations We&apos;ve Prepared"
          />

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {visibleEvents.map((event) => (
              <EventCard
                event={event}
                key={event.id}
                onOpen={(availableEvent, trigger) => setActiveAlbum({ event: availableEvent, trigger })}
              />
            ))}
          </div>

          {totalPages > 1 ? (
            <nav aria-label="Events pagination" className="mt-8 flex items-center justify-center gap-2 pb-2 sm:mt-10">
              <button
                aria-label="Previous page"
                className="flex h-10 w-10 items-center justify-center rounded-full text-burgundy-900 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40 disabled:pointer-events-none disabled:opacity-35"
                disabled={currentPage === 1}
                onClick={() => changePage(currentPage - 1)}
                type="button"
              >
                <Icon className="rotate-180" name="chevronRight" size={18} />
              </button>
              {getPaginationItems(currentPage, totalPages).map((item) => typeof item === 'number' ? (
                <button
                  aria-current={item === currentPage ? 'page' : undefined}
                  aria-label={'Page ' + item}
                  className={'flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40 ' + (item === currentPage ? 'border-burgundy-900 bg-burgundy-900 text-cream-50' : 'border-gold-300 bg-cream-50 text-burgundy-900 hover:bg-cream-100')}
                  key={item}
                  onClick={() => changePage(item)}
                  type="button"
                >
                  {item}
                </button>
              ) : (
                <span aria-hidden="true" className="flex h-10 w-6 items-center justify-center text-sm font-semibold text-ink-500" key={item}>…</span>
              ))}
              <button
                aria-label="Next page"
                className="flex h-10 w-10 items-center justify-center rounded-full text-burgundy-900 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40 disabled:pointer-events-none disabled:opacity-35"
                disabled={currentPage === totalPages}
                onClick={() => changePage(currentPage + 1)}
                type="button"
              >
                <Icon name="chevronRight" size={18} />
              </button>
            </nav>
          ) : null}
        </div>
      </Container>

      {activeAlbum ? (
        <ImageLightbox
          asset={activeAlbum.event.images[0]}
          onClose={() => {
            const trigger = activeAlbum.trigger;
            setActiveAlbum(null);
            window.requestAnimationFrame(() => trigger.focus());
          }}
        />
      ) : null}
    </section>
  );
}

