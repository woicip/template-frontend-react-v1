import { Input } from "@/components/ui/input/input";

export default function Index(){
  return (
    <div className="p-[20px] grid grid-cols-2 gap-10">
      <div className="flex flex-col items-start justify-center gap-4">
        <p className="font-semibold">Upload Single File</p>
        <Input type="file" accept=".pdf" />
      </div>

      <div className="flex flex-col items-start justify-center gap-4">
        <p className="font-semibold">Upload Multiple File</p>
        <Input type="file" accept=".pdf, .jpg" multiple />
      </div>
    </div>
  )
}