export function normalizePhoneHref(phone: string): string {
  const trimmed = phone.trim();
  const digits = trimmed.replace(/[^\d+]/g, '');

  if (digits.startsWith('+')) {
    return `tel:${digits}`;
  }

  if (digits.startsWith('0')) {
    return `tel:+63${digits.slice(1)}`;
  }

  return `tel:+63${digits}`;
}

export function isSafeExternalHref(href: string): boolean {
  try {
    const url = new URL(href);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}
