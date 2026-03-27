import { Button } from "@/components/ui/button/button";
import { DropdownButton, type DropdownOptionValue } from "@/components/ui/button/dropdown-button";
import { Toggle } from "@/components/ui/button/toggle-button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export default function Index(){
  const [value, setValue] = useState<DropdownOptionValue>()
  
  return (
    <div className="w-auto grid grid-cols-2 gap-[20px]">
      <div className="w-full flex items-center gap-2.5">
        <Button icon={<PlusIcon className="w-[18px] h-[18px]" />}>Create</Button>
        <Button variant={"secondary"} icon={<PlusIcon className="w-[18px] h-[18px]" />}>Create</Button>
        <Button disabled variant={"disabled"} icon={<PlusIcon className="w-[18px] h-[18px]" />}>Create</Button>
      </div>

      <div className="flex items-center gap-2.5">
        <Button>Create</Button>
        <Button variant={"secondary"}>Create</Button>
        <Button disabled variant={"disabled"}>Create</Button>
      </div>

      <div className="flex items-center gap-2.5">
        <Button size={"medium"} icon={<PlusIcon className="w-[18px] h-[18px]" />}>Create</Button>
        <Button size={"medium"} variant={"secondary"} icon={<PlusIcon className="w-[18px] h-[18px]" />}>Create</Button>
        <Button size={"medium"} disabled variant={"disabled"} icon={<PlusIcon className="w-[18px] h-[18px]" />}>Create</Button>
      </div>
      <div className="flex items-center gap-2.5">
        <Button size={"medium"}>Create</Button>
        <Button size={"medium"} variant={"secondary"}>Create</Button>
        <Button size={"medium"} disabled variant={"disabled"}>Create</Button>
      </div>

      <div className="flex items-center gap-2.5">
        <Button size={"small"} icon={<PlusIcon className="w-[18px] h-[18px]" />}>Create</Button>
        <Button size={"small"} variant={"secondary"} icon={<PlusIcon className="w-[18px] h-[18px]" />}>Create</Button>
        <Button size={"small"} disabled variant={"disabled"} icon={<PlusIcon className="w-[18px] h-[18px]" />}>Create</Button>
      </div>
      <div className="flex items-center gap-2.5">
        <Button size={"small"}>Create</Button>
        <Button size={"small"} variant={"danger"}>Delete</Button>
        <Button size={"small"} disabled variant={"disabled"}>Create</Button>
      </div>

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
            setValue(option);
          }}
        >
          {value?.label || "Filter by date"}
        </DropdownButton>
      </div>
      
      <div className="flex items-center gap-2.5">
        <Toggle />
        <Toggle checked />
        <Toggle disabled />
        <Toggle disabled checked />
      </div>
    </div>
  )
}