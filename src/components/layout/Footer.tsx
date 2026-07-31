import { BUSINESS, EMAIL_ADDRESS, FACEBOOK_URL, PHONE_NUMBERS } from '../../data/business';
import { GALLERY } from '../../data/gallery';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { ResponsiveImage } from '../ui/ResponsiveImage';

function phoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `tel:+63${digits.slice(1)}`;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-200 bg-cream-100" data-site-footer>
      <Container className="grid gap-8 py-9 md:grid-cols-2 lg:grid-cols-[1.15fr_1.25fr_0.8fr_0.9fr] lg:gap-6 lg:[&>*+*]:border-l lg:[&>*+*]:border-cream-300 lg:[&>*+*]:pl-6">
        <div className="flex flex-col gap-4">
          <ResponsiveImage
            alt={GALLERY.logo.alt}
            className="h-20 w-auto max-w-[240px]"
            height={GALLERY.logo.height}
            objectFit="contain"
            src={GALLERY.logo.src}
            width={GALLERY.logo.width}
          />
          <div>
            <p className="font-display text-xl font-bold text-burgundy-900">{BUSINESS.name}</p>
            <p className="whitespace-nowrap font-script text-xl leading-none text-burgundy-800 xl:text-2xl">{BUSINESS.tagline}</p>
          </div>
          <a
            className="inline-flex min-h-11 items-center gap-2 self-start font-body text-sm font-semibold text-burgundy-900 hover:text-burgundy-700"
            href={FACEBOOK_URL}
            rel="noreferrer noopener"
            target="_blank"
          >
            <Icon name="facebook" size={20} />
            <span>Follow us on Facebook</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-burgundy-900">Contact Us</h2>
          <div className="mt-3 grid gap-2 text-sm leading-5 text-ink-700">
            {PHONE_NUMBERS.map((phone) => (
              <a className="flex min-h-11 items-start gap-2 hover:text-burgundy-900 lg:min-h-10" href={phoneHref(phone)} key={phone}>
                <Icon className="mt-1 shrink-0 text-burgundy-800" name="phone" size={18} />
                <span>{phone}</span>
              </a>
            ))}
            <a className="flex min-h-11 items-start gap-2 break-all hover:text-burgundy-900 lg:min-h-10" href={`mailto:${EMAIL_ADDRESS}`}>
              <Icon className="mt-1 shrink-0 text-burgundy-800" name="email" size={18} />
              <span>{EMAIL_ADDRESS}</span>
            </a>
            <p className="flex items-start gap-2">
              <Icon className="mt-1 shrink-0 text-burgundy-800" name="location" size={18} />
              <span>{BUSINESS.address}</span>
            </p>
            <p className="flex items-start gap-2">
              <Icon className="mt-1 shrink-0 text-burgundy-800" name="clock" size={18} />
              <span>{BUSINESS.hours}</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-burgundy-900">Quick Links</h2>
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="grid gap-0.5">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link className="flex min-h-11 items-center text-sm text-ink-700 hover:text-burgundy-900 lg:min-h-10" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-burgundy-900">Service Areas</h2>
          <ul className="mt-3 grid gap-1.5 text-sm leading-5 text-ink-700">
            {BUSINESS.serviceAreas.map((area) => (
              <li className="flex items-start gap-2" key={area}>
                <Icon className="mt-1 shrink-0 text-gold-600" name="location" size={18} />
                <span>{area}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-5 font-display text-xl font-bold text-burgundy-900">Payment Methods</h2>
          <ul className="mt-3 grid gap-1.5 text-sm text-ink-700">
            {BUSINESS.paymentMethods.map((method) => (
              <li className="flex items-center gap-2" key={method}>
                <Icon className="text-gold-600" name={method === 'Cash' ? 'cash' : method === 'GCash' ? 'gcash' : 'bank'} size={18} />
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="bg-burgundy-950 px-4 py-3 text-center font-body text-xs text-cream-100 sm:text-sm">
        © {currentYear} {BUSINESS.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
