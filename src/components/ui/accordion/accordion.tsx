import { cn } from "@/utils/cn";
import { ChevronDown, ChevronUpIcon } from "lucide-react";
import { useRef, useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
}

function AccordionItem(props: AccordionItemProps){
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setOpen(!open);
    // const value = `max-h-[${panelRef.current?.scrollHeight}px]`;
    // console.log(value)
    // panelRef.current?.classList.add(value);
    // panelRef.current?.classList.remove('max-h-[0px]');
  }

  return (
    <>
      <button
        type="button" 
        className="w-full p-[15px] flex items-center gap-[20px] border-t border-black/10 cursor-pointer hover:bg-black/3"
        onClick={onClick}
      >
        {open ? (
          <ChevronUpIcon width={18} height={18} />
        ) : ( 
          <ChevronDown width={18} height={18} />
        )}
        <p>{props.title}</p>
      </button>
      
      <div 
        id="panel"
        ref={panelRef}
        className={cn("w-full overflow-hidden bg-black/3", open ? `max-h-[${panelRef.current?.scrollHeight}px] border-t border-black/10` : "max-h-[0px]")}
      >
        <p className="w-full p-[15px]">
          {props.content}
        </p>
      </div>
    </>
  )
}

export function Accordion(){
  const data = [
    {
      title: "What makes this product different from competitors?",
      content: "It depends."
    },
    {
      title: "How long does setup take?",
      content: "It depends."
    },
    {
      title: "Can I integrate this with my existing tools?",
      content: "It depends."
    },
    {
      title: "What's included in the free plan?",
      content: "It depends."
    },
  ]

  return (
    <div className="accordion overflow-hidden">
      {
        data.map((item) => (
          <AccordionItem title={item.title} content={item.content} />
        ))
      }
    </div>
  )
}