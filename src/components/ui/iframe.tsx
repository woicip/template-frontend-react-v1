import { cn } from "@/utils/cn"

export default function Iframe(props: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>){
  const className = cn(props.className)
  return (
    <iframe 
      className={className}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      {...props}
    />
  )
}