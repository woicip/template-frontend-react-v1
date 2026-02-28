import { Button } from "@/components/ui/button/button";
import { PlusIcon } from "lucide-react";

export default function ButtonComponents(){
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

    </div>
  )
}