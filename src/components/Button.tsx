interface ButtonProps {
  type?: "submit" | "button" | "reset";
  child: React.ReactNode;
}

export default function Button({ type = "submit", child }: ButtonProps) {
  return (
    <button
      type={type}
      className="py-3 font-bold text-white rounded bg-my-primary enabled:hover:bg-my-hover enabled:active:bg-my-active disabled:bg-opacity-50 "
    >
      {child}
    </button>
  );
}
