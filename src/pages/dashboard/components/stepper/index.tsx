import { Stepper } from "@/components/ui/stepper/stepper";

export default function Index(){
  return (
    <div className="flex items-center gap-10">
      <Stepper value={0} step=".5" onChange={(e) => console.log(e.target)} />
      <Stepper capsule value={0} step=".5" onChange={(e) => console.log(e.target)} />
    </div>
  )
}