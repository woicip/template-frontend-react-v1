import { useState } from "react";
import InputComponents from "./input-components";
import ButtonComponents from "./button-components";
import { Button } from "@/components/ui/button/button";
import SelectComponents from "./select-components";
import { Stepper } from "@/components/ui/stepper/stepper";
import { AlertTriangleIcon, ArrowDownIcon, BetweenVerticalEnd, Calendar1Icon, ChevronDownIcon, CloudUpload, DiffIcon, InfoIcon, Layers2Icon, MousePointer, PencilLineIcon, RectangleHorizontal, TableIcon, UserIcon } from "lucide-react";
import { Accordion } from "@/components/ui/accordion/accordion";
import { Alert } from "@/components/ui/alert/alert";
import ModalComponents from "./modal-components";
import { Avatar } from "@/components/ui/avatar/avatar";
import { Card } from "@/components/ui/card/card";
import { Input } from "@/components/ui/input/input";
import { Tab } from "@/components/ui/tab/tab";

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
    {
      name: 'Avatar',
      icon: <UserIcon width={18} height={18} />,
      active: false
    },
    {
      name: 'Card',
      icon: <RectangleHorizontal width={18} height={18} />,
      active: false
    },
    {
      name: 'File Upload',
      icon: <CloudUpload width={18} height={18} />,
      active: false
    },
    {
      name: 'Datepicker',
      icon: <Calendar1Icon width={18} height={18} />,
      active: false,
      disable: true,
    },
    {
      name: 'Tabs',
      icon: <BetweenVerticalEnd width={18} height={18} />,
      active: false,
      disable: false,
    },
    {
      name: 'Table',
      icon: <TableIcon width={18} height={18} />,
      active: false,
      disable: true,
    },
    {
      name: 'Tooltip',
      icon: <InfoIcon width={18} height={18} />,
      active: false,
      disable: true,
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
            disabled={tab.disable}
            variant={tab.disable ? "disabled" : tab.active ? "primary" : "secondary"} 
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

      { tabs[7].active && (
        <div className="grid grid-cols-5 gap-8">
          <Avatar src="https://picsum.photos/200?random=1" />
          <Avatar src="https://picsum.photos/200?random=1" />
          <Avatar src="https://picsum.photos/200?random=1" />
          <Avatar src="https://picsum.photos/200?random=1" />
          <Avatar src="https://picsum.photos/200?random=1" />
        </div>
      )}

      { tabs[8].active && (
        <Card>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt assumenda distinctio obcaecati sed cupiditate consequuntur quae dolorum ab ipsa asperiores.
          </Card.Text>
        </Card>
      )}

      { tabs[9].active && (
        <div>
          <Input type="file" />
        </div>
      )}

      { tabs[10].active && (null) }
      { tabs[11].active && (
        <Tab options={[
          { name: "Apple", active: true },
          { name: "Disabled", active: false, disabled: true },
          { name: "Mango", active: false },
          { name: "Grapefruit", active: true, disabled: true },
        ]} />
      )}
    </div>
  )
}