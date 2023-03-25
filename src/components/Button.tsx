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
      className="py-3 font-bold text-white rounded bg-my-primary enabled:hover:bg-my-hover enabled:active:bg-my-active disabled:bg-opacity-50 disabled:cursor-wait "
    >
      {child}
    </button>
  );
}
