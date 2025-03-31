import type { ComponentProps } from "react";

type CardProps = {
  className?: string;
} & ComponentProps<"div">;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {props.children}
    </div>
  );
}
