import { Tab } from "@/components/ui/tab/tab";

export default function Index(){
  return (
    <Tab options={[
      { name: "Apple", active: true },
      { name: "Disabled", active: false, disabled: true },
      { name: "Mango", active: false },
      { name: "Grapefruit", active: true, disabled: true },
    ]} />
  )
}