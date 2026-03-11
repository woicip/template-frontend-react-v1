import { DropdownButton, type DropdownOptionValue } from "@/components/ui/button/dropdown-button";
import { Input } from "@/components/ui/input/input";
import StatusPil from "@/components/ui/status/status-pil";
import { Table, TBody, Td, Th, THead, Tr } from "@/components/ui/table/table";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Index(){
  const [status, setStatus] = useState<DropdownOptionValue>()
  const [sort, setSort] = useState<DropdownOptionValue>()

  const data = [
    { id: 1, phone: "081234567890", command: "/menu", status: "Success", command_level: "Free", timestamp: new Date().toDateString() },
    { id: 2, phone: "081234567890", command: "/menu", status: "Failed", command_level: "Free", timestamp: new Date().toDateString() },
    { id: 3, phone: "081234567890", command: "/menu", status: "Success", command_level: "Free", timestamp: new Date().toDateString() }
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between relative">
        <Input icon={<SearchIcon width={18} height={18} />} type="search" placeholder="Search" />
        
        <div className="flex items-center gap-2">
          <DropdownButton
            options={[
              { label: "Pending", value: "pending" },
              { label: "Success", value: "success" },
              { label: "Failed", value: "failed" },
            ]}
            onChange={(option) => {
              setStatus(option);
            }}
          >
            {status?.label || "Status"}
          </DropdownButton>
          <DropdownButton
            options={[
              { label: "Newest", value: "newest" },
              { label: "Oldest", value: "oldest" },
            ]}
            onChange={(option) => {
              setSort(option);
            }}
          >
            {sort?.label || "Sort"}
          </DropdownButton>
        </div>
      </div>

      <Table>
        <THead>
          <Tr>
            <Th>
              <Input type="checkbox" />
            </Th>
            <Th>No</Th>
            <Th>Phone Number</Th>
            <Th>Command</Th>
            <Th>Status</Th>
            <Th>Command Level</Th>
            <Th>Timestamp</Th>
          </Tr>
        </THead>
        <TBody>
          {
            data.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <Input type="checkbox" />
                </Td>
                <Td className="w-0 py-[16px] px-[20px] border-b border-black/10 dark:border-white/10">
                  {item.id}
                </Td>
                <Td className="py-[16px] px-[20px] border-b border-black/10 dark:border-white/10">
                  {item.phone}
                </Td>
                <Td className="py-[16px] px-[20px] border-b border-black/10 dark:border-white/10">
                  <StatusPil className="font-mono">{item.command}</StatusPil>
                </Td>
                <Td className="py-[16px] px-[20px] border-b border-black/10 dark:border-white/10">
                  {
                    item.status.toLowerCase() === "success" && <StatusPil theme="success">Success</StatusPil>
                    || item.status.toLowerCase() === "failed" && <StatusPil theme="danger">Failed</StatusPil>
                    || item.status.toLowerCase() === "pending" && <StatusPil theme="alert">Pending</StatusPil>
                  }
                </Td>
                <Td className="py-[16px] px-[20px] border-b border-black/10 dark:border-white/10">
                  {item.command_level}
                </Td>
                <Td className="py-[16px] px-[20px] border-b border-black/10 dark:border-white/10">
                  {item.timestamp}
                </Td>
              </Tr>
            ))
          }
        </TBody>
      </Table>

      <div>
        
      </div>
    </div>
  )
}