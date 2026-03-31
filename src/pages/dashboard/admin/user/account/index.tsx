import { Button } from "@/components/ui/button/button";
import { DropdownButton } from "@/components/ui/button/dropdown-button";
import { Input } from "@/components/ui/input/input";
import StatusPil from "@/components/ui/status/status-pil";
import { Table, TBody, Td, Th, THead, Tr } from "@/components/ui/table/table";
import { CrownIcon, SearchIcon } from "lucide-react";
import React from "react";

const DUMMY_DATA = [
  {
    id: 1,
    name: "John Doe",
    role: "Admin",
    email: "john.doe@example.com",
    avatar: "https://dummyjson.com/icon/abc123/150",
    createdAt: "2023-01-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "User",
    email: "jane.smith@example.com",
    avatar: "https://dummyjson.com/icon/abc123/150",
    createdAt: "2023-01-02",
  },
  {
    id: 3,
    name: "Bob Johnson",
    role: "User",
    email: "bob.johnson@example.com",
    avatar: "https://dummyjson.com/icon/abc123/150",
    createdAt: "2023-01-03",
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
            <Th>Avatar</Th>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>Email</Th>
            <Th>Status</Th>
            <Th>Created At</Th>
            <Th className="w-0 text-left w-0 text-left border-b border-black/10 dark:border-dark-border">Action</Th>
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
                <Td>
                  <img src={user.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                </Td>
                <Td>{user.name}</Td>
                <Td>
                  <StatusPil theme={user.role === "Admin" ? "danger" : "alert"}>{user.role === "Admin" ? <span className="flex items-center gap-2"><CrownIcon width={18} height={18} /> Admin</span> : "User"}</StatusPil>
                </Td>
                <Td>{user.email}</Td>
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