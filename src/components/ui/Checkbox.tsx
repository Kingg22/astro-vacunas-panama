import type { ComponentProps } from "react"

type CheckboxProps = ComponentProps<"input">

export function Checkbox(props: CheckboxProps) {
  return (
    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" {...props} />
  )
}

