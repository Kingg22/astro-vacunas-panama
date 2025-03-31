import type { ComponentProps } from "react"

type LabelProps = {
  className?: string
} & ComponentProps<"label">

export function Label({ className = "", ...props }: LabelProps) {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    >
      {props.children}
    </label>
  )
}

