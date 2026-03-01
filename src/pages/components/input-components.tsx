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

      <div className="flex flex-col gap-2">
        <p className="text-small px-2.5">Select</p>
        <div className="grid grid-cols-2">
          <Input 
            type="checkbox"
            checked={true}
            label="Active"
          />
          <Input 
            type="checkbox"
            label="Inactive"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <p className="text-small px-2.5">Radio</p>
        <div className="grid grid-cols-2">
          <Input
            type="radio"
            name="user"
            label="User 1"
          />
          <Input
            type="radio"
            name="user"
            label="User 2"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-small px-2.5">Select Disabled</p>
        <div className="grid grid-cols-2">
          <Input 
            disabled
            type="checkbox"
            checked={true}
            label="Active"
          />
          <Input 
            disabled
            type="checkbox"
            label="Inactive"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <p className="text-small px-2.5">Radio Disabled</p>
        <div className="grid grid-cols-2">
          <Input
            disabled
            checked={true}
            type="radio"
            name="radio-disabled"
            label="User 1"
          />
          <Input
            disabled
            type="radio"
            name="radio-disabled"
            label="User 2"
          />
        </div>
      </div>
    </div>
  )
}