import { Alert } from "@/components/ui/alert/alert";

export default function Index(){
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-2.5">
        <Alert>Please check for form fields.</Alert>
        <Alert variant={"danger"}>You have reached maximum quota!</Alert>
        <Alert variant={"success"}>Successfully Saved Changes!</Alert>
      </div>
    </div>
  )
}