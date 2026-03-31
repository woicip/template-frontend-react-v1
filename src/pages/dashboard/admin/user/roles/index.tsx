import { Button } from "@/components/ui/button/button";
import { DropdownButton } from "@/components/ui/button/dropdown-button";
import { Input } from "@/components/ui/input/input";
import StatusPil from "@/components/ui/status/status-pil";
import { Table, TBody, Td, Th, THead, Tr } from "@/components/ui/table/table";
import { SearchIcon } from "lucide-react";
import React from "react";


const DUMMY_DATA = [
  {
    id: 1,
    name: "Administrator",
    createdAt: "2023-01-01",
  },
  {
    id: 2,
    name: "User",
    createdAt: "2023-01-02",
  },
]

export default function Index(){
  const [status, setStatus] = React.useState<string | null>(null);
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-center justify-between">
        <Input icon={<SearchIcon width={18} height={18} />} type="search" placeholder="Search ..." />

        <div>
          <DropdownButton
            className="w-[250px]"
            options={[
              { label: "This Week", value: "this_week" },
              { label: "Last Week", value: "last_week" },
              { label: "This Month", value: "this_month" },
              { label: "Last Month", value: "last_month" },
              { label: "This Year", value: "this_year" },
              { label: "Last Year", value: "last_year" },
            ]}
            onChange={(option) => {
              setStatus(option.value);
            }}
          >
            {status || "Status"}
          </DropdownButton>
        </div>
      </div>

      <Table>
        <THead>
          <Tr>
            <Th>No</Th>
            <Th>Name</Th>
            <Th>Status</Th>
            <Th>Created At</Th>
            <Th className="w-0 text-left border-b border-black/10 dark:border-dark-border">Action</Th>
          </Tr>
        </THead>
        <TBody>
          {
            DUMMY_DATA.map((user) => (
              <Tr>
                <Td>
                  <div className="px-[5px]">
                    {user.id}
                  </div>
                </Td>
                <Td>{user.name}</Td>
                <Td>
                  <StatusPil theme="success">Active</StatusPil>
                </Td>
                <Td>{user.createdAt}</Td>
                <Td>
                  <div className="flex items-center gap-2">
                    <Button type="button" variant={"secondary"} size={"small"}>View</Button>
                    <Button type="button" variant={"secondary"} size={"small"}>Edit</Button>
                    <Button type="button" variant={"secondary"} size={"small"}>
                      <span className="text-danger">Delete</span>
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))
          }
        </TBody>
      </Table>
      <Table.Pagination />
    </div>
  )
}