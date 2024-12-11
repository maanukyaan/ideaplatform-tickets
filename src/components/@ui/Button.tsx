export default function Button({
  children,
  className,
}: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <button
      className={`rounded-md bg-orange px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-orange/80 focus:bg-orange/80 active:bg-orange/80 ${className}`}
    >
      {children}
    </button>
  );
}
