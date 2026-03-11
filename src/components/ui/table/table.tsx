import { cn } from "@/utils/cn";
import { useState, type DetailedHTMLProps, type HTMLAttributes, type TableHTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from "react";
import { DropdownButton, type DropdownOptionValue } from "../button/dropdown-button";
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";

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

function TablePagination(){
  const [limit, setLimit] = useState<DropdownOptionValue>()
  
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span>Limit</span>
        <DropdownButton
          className="w-[80px]"
          options={[
            { label: "5", value: "5" },
            { label: "10", value: "10" },
            { label: "15", value: "15" },
            { label: "20", value: "20" },
          ]}
          onChange={(option) => {
            setLimit(option);
          }}
        >
          {limit?.label || "10"}
        </DropdownButton>
      </div>

      <div className="flex items-center gap-2">
        <button type="button" className="w-[36px] h-[36px] p-[8px] bg-dark-natural-gradient border border-black/10 dark:border-dark-border rounded-[10px]">
          <ChevronsLeftIcon width={18} height={18} />
        </button>
        <button type="button" className="w-[36px] h-[36px] p-[8px] bg-dark-natural-gradient border border-black/10 dark:border-dark-border rounded-[10px]">
          <ChevronLeftIcon width={18} height={18} />
        </button>
        <button type="button" className="w-[36px] h-[36px] p-[8px] flex items-center justify-center text-dark-gray bg-primary-gradient border border-black/10 dark:border-dark-border rounded-[10px]">
          1
        </button>
        <button type="button" className="w-[36px] h-[36px] p-[8px] flex items-center justify-center text-dark-gray border border-black/10 dark:border-dark-border rounded-[10px]">
          2
        </button>
        <button type="button" className="w-[36px] h-[36px] p-[8px] flex items-center justify-center text-dark-gray border border-black/10 dark:border-dark-border rounded-[10px]">
          3
        </button>
        <button type="button" className="w-[36px] h-[36px] p-[8px] bg-dark-natural-gradient border border-black/10 dark:border-dark-border rounded-[10px]">
          <ChevronsRightIcon width={18} height={18} />
        </button>
        <button type="button" className="w-[36px] h-[36px] p-[8px] bg-dark-natural-gradient border border-black/10 dark:border-dark-border rounded-[10px]">
          <ChevronRightIcon width={18} height={18} />
        </button>
      </div>
    </div>
  )
}

Table.Pagination = TablePagination

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