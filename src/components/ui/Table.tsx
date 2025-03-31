import type { ComponentProps } from "react"

type TableProps = ComponentProps<"table">

export function Table(props: TableProps) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full caption-bottom text-sm" {...props}>
        {props.children}
      </table>
    </div>
  )
}

