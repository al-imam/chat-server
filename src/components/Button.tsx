interface ButtonProps {
  type?: "submit" | "button" | "reset";
  child: React.ReactNode;
}

export default function Button({ type = "submit", child }: ButtonProps) {
  return <button type={type}>{child}</button>;
}
