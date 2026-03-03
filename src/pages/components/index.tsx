import { useState } from "react";
import InputComponents from "./input-components";
import ButtonComponents from "./button-components";
import { Button } from "@/components/ui/button/button";
import SelectComponents from "./select-components";
import { Stepper } from "@/components/ui/stepper/stepper";
import { AlertTriangleIcon, ArrowDownIcon, ChevronDownIcon, DiffIcon, Layers2Icon, MousePointer, PencilLineIcon } from "lucide-react";
import { Accordion } from "@/components/ui/accordion/accordion";
import { Alert } from "@/components/ui/alert/alert";
import ModalComponents from "./modal-components";

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
    {
      name: 'Accordion',
      icon: <ChevronDownIcon width={18} height={18} />,
      active: false
    },
    {
      name: 'Alert',
      icon: <AlertTriangleIcon width={18} height={18} />,
      active: false
    },
    {
      name: 'Modal Overlay',
      icon: <Layers2Icon width={18} height={18} />,
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
          <div className="flex items-center gap-10">
            <Stepper value={0} step=".5" onChange={(e) => console.log(e.target)} />
            <Stepper capsule value={0} step=".5" onChange={(e) => console.log(e.target)} />
          </div>
        )
      }

      { tabs[4].active && (
          <Accordion />
        )
      }

      { tabs[5].active && (
        <div className="flex items-center gap-2.5">
          <Alert>Please check for form fields.</Alert>
          <Alert variant={"danger"}>You have reached maximum quota!</Alert>
          <Alert variant={"success"}>Successfully Saved Changes!</Alert>
        </div>
        )
      }

      {
        tabs[6].active && (
          <ModalComponents />
        )
      }
    </div>
  )
}