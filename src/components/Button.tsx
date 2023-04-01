interface ButtonProps {
  type?: "submit" | "button" | "reset";
  child: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  type = "submit",
  child,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="py-3 font-bold text-white rounded outline-none enabled:active:text-fg-300 bg-primary enabled:hover:bg-primary-hover enabled:active:bg-primary-active disabled:bg-primary/50 disabled:cursor-wait outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark dark:focus-visible:outline-transparent focus-visible:ring focus-visible:ring-light"
    >
      {child}
    </button>
  );
}
