import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import Textarea from "@/components/ui/input/textarea";
import { MailIcon, SearchIcon, UserIcon } from "lucide-react";

export default function Index(){
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="w-[500px] grid grid-cols-2 gap-[20px]">
        <Input 
          type="search"
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
        <Input 
          required
          type="email"
          variant="primary" 
          label="Email Address"
          icon={<MailIcon width={18} height={18} />} 
          placeholder="Search" 
          className="w-full"
        />
        <Input 
          type="number"
          variant="primary" 
          label="Input Score"
          placeholder="Score"
          className="w-full no-spinner"
        />
        <Input 
          type="time"
          variant="primary" 
          label="Pick Time"
          placeholder="Search" 
          className="w-full"
        />
        <Input 
          type="date"
          variant="primary" 
          label="Pick Date"
          placeholder="Search" 
          className="w-full"
        />
        <Input 
          type="range"
          variant="primary" 
          label="Range"
          placeholder="Search" 
          className="w-full"
          onChange={(e) => console.log(e.target.value)}
        />
        <Input 
          type="color"
          variant="primary" 
          label="Range"
          placeholder="Search" 
          className="w-full"
          onChange={(e) => console.log(e.target.value)}
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

        <Textarea placeholder="Input description..." />
        <Textarea disabled placeholder="Input description..." />
      </div>

      <Button type="submit" className="mt-[20px]">Submit</Button>
    </form>
  )
}