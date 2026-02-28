import { useState } from "react";
import InputComponents from "./input-components";
import ButtonComponents from "./button-components";
import { Button } from "@/components/ui/button/button";

export default function Index(){
  const [tabs, setTabs] = useState([
    {
      name: 'Input',
      active: true,
    },
    {
      name: 'Button',
      active: false
    }
  ])

  return (
    <div className="w-full h-screen text-black flex flex-col items-center justify-center gap-[30px] py-2.5 px-2.5">
      <div className="flex items-center gap-[10px] absolute top-4.5">
        {tabs.map((tab) => (
          <Button 
            key={tab.name} 
            variant={tab.active ? "primary" : "secondary"} 
            onClick={() => setTabs(tabs.map(t => ({...t, active: t.name === tab.name})))}
          >
            {tab.name}
          </Button>
        ))}
      </div>
      
      {
        tabs[0].active && (
          <InputComponents />
        )
      }

      {
        tabs[1].active && (
          <ButtonComponents />
        )
      }
    </div>
  )
}