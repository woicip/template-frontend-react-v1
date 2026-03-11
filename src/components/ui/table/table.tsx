import { cn } from "@/utils/cn";
import type { DetailedHTMLProps, HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export function Table(props: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>){
  const className = cn("w-full border-collapse overflow-hidden rounded-[10px] bg-natural-gradient dark:bg-dark-natural-gradient", props.className)
  return (
    <div className="rounded-[10px] dark:border-dark-border border border-black/10 shadow-primary">
      <table className={className} {...props}>
        {props.children}
      </table>
    </div>
  )
}

export function THead(props: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>){
  return (
    <thead {...props}>
      {props.children}
    </thead>
  )
}

export function Tr(props: DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>){
  return (
    <tr {...props}>{props.children}</tr>
  )
}

export function Th(props: DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>){
  const className = cn("py-[16px] px-[20px] dark:text-white text-left border-b border-black/10 dark:border-white/10", props.className)
  return (
    <th className={className} {...props}>{props.children}</th>
  )
}

export function TBody(props: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>){
  return (
    <tbody {...props}>{props.children}</tbody>
  )
}

export function Td(props: DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>){
  const className = cn("py-[16px] px-[20px] border-b border-black/10 dark:border-white/10", props.className)
  return (<td className={className} {...props}>{props.children}</td>)
}