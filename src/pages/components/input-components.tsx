import { Input } from "@/components/ui/input/input";
import { SearchIcon, UserIcon } from "lucide-react";

export default function InputComponents(){
  return (
    <div className="w-[500px] grid grid-cols-2 gap-[20px]">
      <Input 
        variant="primary" 
        label="Search username"
        icon={<SearchIcon className="w-[18px] h-[18px]" />} 
        placeholder="Search" 
        className="w-full"
      />
      <Input 
        disabled 
        variant="disabled" 
        label="Username"
        icon={<UserIcon className="w-[18px] h-[18px]" />} 
        placeholder="@bluelighter22" 
        className="w-full"
      />
      <Input 
        type="password"
        variant="primary" 
        label="Password"
        placeholder="Insert password"
        className="w-full" 
      />
      <Input 
        disabled
        type="password"
        variant="disabled" 
        label="Password"
        placeholder="Insert password"
        className="w-full" 
      />
    </div>
  )
}