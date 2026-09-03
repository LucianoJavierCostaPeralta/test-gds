import type { ButtonHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function CTAButton({
  children,
  className = "",
  type = "button",
  ...props
}: CTAButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex cursor-pointer rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
