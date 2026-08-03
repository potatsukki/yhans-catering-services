import { useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';

import {
  CATERING_EVENTS,
  EVENT_GALLERY_CATEGORIES,
  type AvailableCateringEvent,
  type CateringEvent,
  type EventGalleryCategoryId,
} from '../../../data/events';
import { Badge } from '../../ui/Badge';
import { CatalogPlaceholder } from '../../ui/CatalogCard';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { ImageLightbox } from '../../ui/ZoomableImage';
import { SectionHeading } from '../../ui/SectionHeading';

type EventFilterId = 'all' | EventGalleryCategoryId;
const EVENTS_PER_PAGE = 6;

type PaginationItem = number | 'ellipsis-start' | 'ellipsis-end';

function getPaginationItems(currentPage: number, totalPages: number): PaginationItem[] {
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, index) => index + 1);
  if (currentPage <= 3) return [1, 2, 3, 'ellipsis-end', totalPages];
  if (currentPage >= totalPages - 2) return [1, 'ellipsis-start', totalPages - 2, totalPages - 1, totalPages];
  return [1, 'ellipsis-start', currentPage, 'ellipsis-end', totalPages];
}

function categoryLabel(categoryId: EventGalleryCategoryId) {
  return EVENT_GALLERY_CATEGORIES.find((category) => category.id === categoryId)?.label ?? categoryId;
}

type EventCardProps = {
  readonly event: CateringEvent;
  readonly onOpen: (event: AvailableCateringEvent, trigger: HTMLButtonElement) => void;
};

function EventCard({ event, onOpen }: EventCardProps) {
  const category = categoryLabel(event.category);
  const media = event.photoStatus === 'available'
    ? <ResponsiveImage asset={event.images[0]} className="h-full" />
    : <CatalogPlaceholder alt={`${event.title} photo coming soon`} />;

  const details = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden border-b border-gold-200 bg-cream-200">
        {media}
        {event.photoStatus === 'available' ? (
          <Badge className="absolute bottom-2 right-2 !min-h-0 !rounded-md !bg-cream-50/95 !px-2 !py-1 !text-[0.6rem] !tracking-normal !text-burgundy-900 shadow-sm" tone="neutral">
            {event.images.length} {event.images.length === 1 ? 'Photo' : 'Photos'}
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <p className="text-[0.5rem] font-bold uppercase tracking-[0.11em] text-gold-800 sm:text-[0.65rem] sm:tracking-[0.16em]">{category}</p>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-tight text-burgundy-900 sm:mt-2 sm:text-2xl">{event.title}</h3>
        <p className="mt-2 hidden text-sm leading-6 text-ink-700 sm:block">{event.description}</p>
      </div>
    </>
  );

  if (event.photoStatus === 'coming-soon') {
    return <article className="flex min-h-full flex-col overflow-hidden rounded-xl border border-gold-200 bg-cream-50 shadow-sm">{details}</article>;
  }

  return (
    <article className="overflow-hidden rounded-xl border border-gold-200 bg-cream-50 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 focus-within:shadow-md">
      <button
        aria-label={`Open larger image of ${event.title}`}
        className="block h-full w-full text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-focus/60"
        onClick={(clickEvent) => onOpen(event, clickEvent.currentTarget)}
        type="button"
      >
        {details}
      </button>
    </article>
  );
}

export function EventsGallery() {
  const [selectedFilter, setSelectedFilter] = useState<EventFilterId>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeAlbum, setActiveAlbum] = useState<{ event: AvailableCateringEvent; trigger: HTMLButtonElement } | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const filteredEvents = selectedFilter === 'all'
    ? CATERING_EVENTS
    : CATERING_EVENTS.filter((event) => event.category === selectedFilter);
  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const visibleEvents = filteredEvents.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  const selectFilter = (filter: EventFilterId) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.requestAnimationFrame(() => {
      galleryRef.current?.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleFilterKeyDown = (keyboardEvent: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(keyboardEvent.key)) return;
    const filters = Array.from(keyboardEvent.currentTarget.querySelectorAll<HTMLButtonElement>('button'));
    const activeIndex = filters.indexOf(document.activeElement as HTMLButtonElement);
    if (activeIndex < 0) return;

    const nextIndex = keyboardEvent.key === 'Home'
      ? 0
      : keyboardEvent.key === 'End'
        ? filters.length - 1
        : (activeIndex + (keyboardEvent.key === 'ArrowRight' ? 1 : -1) + filters.length) % filters.length;
    keyboardEvent.preventDefault();
    filters[nextIndex]?.focus();
    filters[nextIndex]?.click();
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
        <DecorativeDivider className="mt-4" />

        <div aria-label="Event categories" className="horizontal-card-scroller -mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" onKeyDown={handleFilterKeyDown} role="toolbar">
          <button
            aria-pressed={selectedFilter === 'all'}
            className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40 ${selectedFilter === 'all' ? 'border-burgundy-900 bg-burgundy-900 text-cream-50' : 'border-gold-300 bg-cream-50 text-burgundy-900 hover:bg-cream-100'}`}
            onClick={() => selectFilter('all')}
            type="button"
          >
            <Icon name="sparkle" size={17} />
            All Events
          </button>
          {EVENT_GALLERY_CATEGORIES.map((category) => (
            <button
              aria-pressed={selectedFilter === category.id}
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40 ${selectedFilter === category.id ? 'border-burgundy-900 bg-burgundy-900 text-cream-50' : 'border-gold-300 bg-cream-50 text-burgundy-900 hover:bg-cream-100'}`}
              key={category.id}
              onClick={() => selectFilter(category.id)}
              type="button"
            >
              <Icon name={category.icon} size={17} />
              {category.label}
            </button>
          ))}
        </div>

        {visibleEvents.length ? (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {visibleEvents.map((event) => <EventCard event={event} key={event.id} onOpen={(availableEvent, trigger) => setActiveAlbum({ event: availableEvent, trigger })} />)}
          </div>
        ) : (
          <p className="mt-6 rounded-xl border border-gold-200 bg-cream-100 px-5 py-4 text-center text-sm text-ink-700">Event photos for this category are coming soon.</p>
        )}
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
                aria-label={`Page ${item}`}
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40 ${item === currentPage ? 'border-burgundy-900 bg-burgundy-900 text-cream-50' : 'border-gold-300 bg-cream-50 text-burgundy-900 hover:bg-cream-100'}`}
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
            const { trigger } = activeAlbum;
            setActiveAlbum(null);
            window.requestAnimationFrame(() => trigger.focus());
          }}
        />
      ) : null}
    </section>
  );
}
