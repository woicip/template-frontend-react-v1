import { Avatar } from "@/components/ui/avatar/avatar";

export default function Index(){
  return (
    <div className="grid grid-cols-5 gap-8">
      <Avatar src="https://picsum.photos/200?random=1" />
      <Avatar src="https://picsum.photos/200?random=1" />
      <Avatar src="https://picsum.photos/200?random=1" />
      <Avatar src="https://picsum.photos/200?random=1" />
      <Avatar src="https://picsum.photos/200?random=1" />
    </div>
  )
}