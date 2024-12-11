interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export const Checkbox = ({
  checked,
  onChange,
  className = "",
}: CheckboxProps) => {
  return (
    <div
      className={`relative h-5 w-5 cursor-pointer rounded border-2 ${
        checked ? "border-blue" : "border-black/30"
      } ${className}`}
      onClick={onChange}
    >
      {checked && (
        <svg
          className="absolute left-1/2 top-1/2 size-[10px] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 5.5L4.5 8.5L10.5 1.5"
            stroke="#23a9f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};
