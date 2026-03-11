import { Button } from "@/components/ui/button/button";
import Tooltip from "@/components/ui/tooltip/tooltip";

export default function Index(){
  return (
    <div className="flex items-center gap-4">
      <Tooltip message="Floating element">
        <Button variant={"secondary"} disabled>Hover here</Button>
      </Tooltip>
      <Tooltip message="Floating element">
        <Button variant={"secondary"} disabled>Hover here</Button>
      </Tooltip>
      <Tooltip message="Floating element">
        <Button variant={"secondary"} disabled>Hover here</Button>
      </Tooltip>
      <Tooltip message="Floating element">
        <Button variant={"secondary"} disabled>Hover here</Button>
      </Tooltip>
    </div>
  )
}