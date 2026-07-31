import type { SVGProps } from 'react';

export type IconName =
  | 'arrowRight'
  | 'bank'
  | 'badge'
  | 'calendar'
  | 'cash'
  | 'check'
  | 'chevronDown'
  | 'chevronRight'
  | 'clock'
  | 'close'
  | 'building'
  | 'crown'
  | 'cross'
  | 'email'
  | 'facebook'
  | 'fruit'
  | 'gcash'
  | 'graduation'
  | 'heart'
  | 'leaf'
  | 'location'
  | 'menu'
  | 'message'
  | 'cake'
  | 'phone'
  | 'people'
  | 'minus'
  | 'plus'
  | 'presentation'
  | 'drink'
  | 'rings'
  | 'sparkle'
  | 'utensils'
  | 'users';

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'name'> & {
  readonly name: IconName;
  readonly size?: number;
  readonly label?: string;
};

const commonPathProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  strokeWidth: 1.8,
};

function IconArtwork({ name }: Pick<IconProps, 'name'>) {
  switch (name) {
    case 'arrowRight':
      return <path {...commonPathProps} d="M4 12h15m-6-6 6 6-6 6" />;
    case 'bank':
      return (
        <>
          <path {...commonPathProps} d="m3 9 9-5 9 5M4 10h16M5 10v7m4-7v7m6-7v7m4-7v7M3 20h18" />
        </>
      );
    case 'badge':
      return (
        <>
          <circle {...commonPathProps} cx="12" cy="10" r="7" />
          <path {...commonPathProps} d="m9 17-1 4 4-2 4 2-1-4M9 10l2 2 4-4" />
        </>
      );
    case 'calendar':
      return (
        <>
          <rect {...commonPathProps} x="3.5" y="5" width="17" height="16" rx="2" />
          <path {...commonPathProps} d="M7 3v4M17 3v4M3.5 9h17M8 13h3m-3 4h3m2-4h3m-3 4h3" />
        </>
      );
    case 'cash':
      return (
        <>
          <rect {...commonPathProps} x="2.5" y="5" width="19" height="14" rx="2" />
          <circle {...commonPathProps} cx="12" cy="12" r="3" />
          <path {...commonPathProps} d="M6 9.5h.01M18 14.5h.01" />
        </>
      );
    case 'check':
      return <path {...commonPathProps} d="m5 12 4 4L19 6" />;
    case 'chevronDown':
      return <path {...commonPathProps} d="m6 9 6 6 6-6" />;
    case 'chevronRight':
      return <path {...commonPathProps} d="m9 5 7 7-7 7" />;
    case 'clock':
      return (
        <>
          <circle {...commonPathProps} cx="12" cy="12" r="9" />
          <path {...commonPathProps} d="M12 7v5l3 2" />
        </>
      );
    case 'close':
      return <path {...commonPathProps} d="m6 6 12 12M18 6 6 18" />;
    case 'building':
      return <path {...commonPathProps} d="M5 21V5h9v16M14 9h5v12M8 8h3M8 12h3M8 16h3M17 13h.01M17 17h.01M3 21h18" />;
    case 'crown':
      return <path {...commonPathProps} d="m4 7 4 4 4-7 4 7 4-4-2 12H6L4 7Zm2 16h12" />;
    case 'cross':
      return <path {...commonPathProps} d="M12 4v10m-4-6h8M8 20h8M10 14h4v6h-4z" />;
    case 'email':
      return (
        <>
          <rect {...commonPathProps} x="3" y="5" width="18" height="14" rx="2" />
          <path {...commonPathProps} d="m4 7 8 6 8-6" />
        </>
      );
    case 'facebook':
      return <path {...commonPathProps} d="M13.5 21v-8h2.75l.5-3h-3.25V8.1c0-.87.25-1.6 1.7-1.6h1.8V3.8c-.32-.04-1.42-.13-2.7-.13-2.67 0-4.5 1.63-4.5 4.62V10H7v3h2.8v8" />;
    case 'fruit':
      return <path {...commonPathProps} d="M12 7c-2-2-6-1.5-7.5 1.5C2.5 12.5 6 20 12 21c6-1 9.5-8.5 7.5-12.5C18 5.5 14 5 12 7Zm0 0c0-2 1-4 3-5m-3 3C10 3 8 3 7 4" />;
    case 'gcash':
      return (
        <>
          <circle {...commonPathProps} cx="12" cy="12" r="9" />
          <path {...commonPathProps} d="M8 12h8m-4-4v8" />
        </>
      );
    case 'graduation':
      return <path {...commonPathProps} d="m3 9 9-5 9 5-9 5-9-5Zm4 3v5c3 2 7 2 10 0v-5M21 9v6" />;
    case 'heart':
      return <path {...commonPathProps} d="M20.8 8.7c0 5.3-8.8 10.3-8.8 10.3S3.2 14 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />;
    case 'leaf':
      return <path {...commonPathProps} d="M20 4C12 4 6 7 5 14c-.5 3.5 2 6 5.5 5.5C17.5 18.5 20 12 20 4ZM5 20c2-5 6-8 11-10" />;
    case 'location':
      return (
        <>
          <path {...commonPathProps} d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle {...commonPathProps} cx="12" cy="10" r="2" />
        </>
      );
    case 'menu':
      return <path {...commonPathProps} d="M4 7h16M4 12h16M4 17h16" />;
    case 'minus':
      return <path {...commonPathProps} d="M5 12h14" />;
    case 'message':
      return <path {...commonPathProps} d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-3-.5L4 20l1.6-3.6A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />;
    case 'cake':
      return <path {...commonPathProps} d="M5 11h14v9H5zM4 15h16M8 11V8m4 3V7m4 4V8M8 5h.01M12 4h.01M16 5h.01" />;
    case 'phone':
      return <path {...commonPathProps} d="M7.5 4.5 5 6c-.8.5-.9 1.6-.6 2.5 1.6 4.8 5.3 8.5 10.1 10.1.9.3 2 0 2.5-.6l1.5-2.5-4-2.5-1.5 1.5a12 12 0 0 1-4-4L10.5 9l-3-4.5Z" />;
    case 'people':
      return (
        <>
          <circle {...commonPathProps} cx="9" cy="8" r="3" />
          <path {...commonPathProps} d="M3 20v-1a6 6 0 0 1 12 0v1m1-9a3 3 0 1 1 2.5 0M18 14a4 4 0 0 1 3 4v2" />
        </>
      );
    case 'presentation':
      return <path {...commonPathProps} d="M4 4h16v11H4zM8 20l4-5 4 5M7 8h10M7 11h6" />;
    case 'drink':
      return <path {...commonPathProps} d="M6 4h12l-1.5 17h-9L6 4Zm1 5h10M14 4l3-2" />;
    case 'plus':
      return <path {...commonPathProps} d="M12 5v14M5 12h14" />;
    case 'rings':
      return <path {...commonPathProps} d="M8 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm8 0a5 5 0 1 1 0-10 5 5 0 0 1 0 10ZM8 5a3 3 0 0 1 4-2 3 3 0 0 1 4 2" />;
    case 'sparkle':
      return <path {...commonPathProps} d="m12 3 1.7 6.3L20 11l-6.3 1.7L12 19l-1.7-6.3L4 11l6.3-1.7L12 3Zm6 14 .7 2.3L21 20l-2.3.7L18 23l-.7-2.3L15 20l2.3-.7L18 17Z" />;
    case 'utensils':
      return <path {...commonPathProps} d="M7 3v7m3-7v7M5 7h6M8 10v11m8-18v18m0-18c2 1.5 3 3.7 3 6h-3" />;
    case 'users':
      return (
        <>
          <circle {...commonPathProps} cx="9" cy="8" r="3" />
          <path {...commonPathProps} d="M3 20v-1a6 6 0 0 1 12 0v1m1-9a3 3 0 1 1 2.5 0M18 14a4 4 0 0 1 3 4v2" />
        </>
      );
  }
}

export function Icon({ name, size = 24, label, className = '', ...props }: IconProps) {
  return (
    <svg
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={className}
      fill="none"
      focusable="false"
      height={size}
      role={label ? 'img' : undefined}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      <IconArtwork name={name} />
    </svg>
  );
}
