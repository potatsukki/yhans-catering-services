export type DecorativeDividerProps = {
  readonly className?: string;
  readonly label?: string;
};

export function DecorativeDivider({ className = '', label }: DecorativeDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold-600 ${className}`} aria-hidden={label ? undefined : true}>
      <span className="h-px w-12 bg-gold-500 sm:w-20" />
      {label ? (
        <span className="font-display text-lg leading-none">{label}</span>
      ) : (
        <span className="h-2 w-2 rotate-45 border border-gold-600" />
      )}
      <span className="h-px w-12 bg-gold-500 sm:w-20" />
    </div>
  );
}
