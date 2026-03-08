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
    let current = panelRef.current;

    if(open){
      current?.style.setProperty("max-height", "0px");
    } else {
      current?.style.setProperty("max-height", `${current.scrollHeight}px`);
    }
  }

  return (
    <>
      <button
        type="button" 
        className="w-full p-[15px] flex items-center gap-[20px] border-t border-black/10 dark:border-white/10 cursor-pointer hover:bg-black/3 dark:text-dark-gray"
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
        style={{ maxHeight: '0px' }}
        className={cn("w-full overflow-hidden bg-black/3 dark:bg-white/3", open ? `border-t border-black/10 dark:border-white/10` : "")}
      >
        <p className="w-full p-[15px] dark:text-dark-gray">
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
    <div className="accordion">
      { data.map((item) => (
          <AccordionItem 
            title={item.title} 
            content={item.content} 
          />
        ))
      }
    </div>
  )
}