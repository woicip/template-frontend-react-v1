import { useState } from "react";
import InputComponents from "./input-components";
import ButtonComponents from "./button-components";
import { Button } from "@/components/ui/button/button";
import SelectComponents from "./select-components";
import { Stepper } from "@/components/ui/stepper/stepper";
import { ArrowDownIcon, DiffIcon, MousePointer, PencilLineIcon } from "lucide-react";

export default function Index(){
  const [tabs, setTabs] = useState([
    {
      name: 'Input',
      icon: <PencilLineIcon width={18} height={18} />,
      active: true,
    },
    {
      name: 'Button',
      icon: <ArrowDownIcon width={18} height={18} />,
      active: false
    },
    {
      name: 'Select',
      icon: <MousePointer width={18} height={18} />,
      active: false
    },
    {
      name: 'Stepper',
      icon: <DiffIcon width={18} height={18} />,
      active: false
    },
  ])

  return (
    <div className="w-full h-screen text-black flex flex-col items-center justify-center gap-[30px] py-2.5 px-2.5">
      <div className="flex items-center gap-[10px] absolute bottom-4.5">
        {tabs.map((tab) => (
          <Button 
            key={tab.name} 
            size={"small"}
            icon={tab.icon}
            variant={tab.active ? "primary" : "secondary"} 
            onClick={() => setTabs(tabs.map(t => ({...t, active: t.name === tab.name})))}
          >
            {tab.name}
          </Button>
        ))}
      </div>
      
      { tabs[0].active && (
          <InputComponents />
        )
      }

      { tabs[1].active && (
          <ButtonComponents />
        )
      }

      { tabs[2].active && (
          <SelectComponents />
        )
      }

      { tabs[3].active && (
          <Stepper value={0} step=".5" onChange={(e) => console.log(e.target)} />
        )
      }
    </div>
  )
}