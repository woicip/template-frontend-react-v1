import { cn } from "@/utils/cn"

export default function Textarea(props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>){
  const className = cn("py-[5px] px-[10px] dark:text-white", props.className, props.disabled ? "input-disabled" : "input")
  return (
    <div>
      <textarea className={className} {...props}></textarea>
    </div>
  )
}