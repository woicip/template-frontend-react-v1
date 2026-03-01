import { useRef } from "react";
import { cn } from "@/utils/cn";
import { MinusIcon, PlusIcon } from "lucide-react";

type StepperProps = {
  capsule?: boolean;
}
type Stepper = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & StepperProps

export function Stepper({
  step = "1",
  ...props
}: Stepper){
  const inputRef = useRef<HTMLInputElement>(null);

  const btnCapsule = props.capsule ? "w-[30px] h-[30px] p-[6px] flex items-center justify-center bg-transparent hover:bg-primary hover:text-white cursor-pointer transition-all hover:active:bg-primary/80" : 
  "w-[30px] h-[30px] p-[6px] flex items-center justify-center rounded-[8px] border border-black/15 cursor-pointer shadow-primary hover:bg-black/2 hover:active:bg-black/10 transition-all"
  const btnLeft = cn(btnCapsule, props.capsule && "rounded-tl-[9px] rounded-bl-[9px] border-r border-black/15");
  const btnRight = cn(btnCapsule, props.capsule && "rounded-tr-[9px] rounded-br-[9px] border-l border-black/15");

  const onHandleMin = () => {
    inputRef.current?.stepDown();
    // console.log(inputRef.current?.value);
  }

  const onHandleMax = () => {
    inputRef.current?.stepUp();
    // console.log(inputRef.current?.value);
  }

  return (
    <div className={cn("flex items-center gap-4", props.capsule && "natural-gradient border border-black/15 rounded-[10px]")}>
      <div className={"w-fit natural-gradient rounded-[8px] select-none"}>
        <button
          className={btnLeft}
          onClick={onHandleMin}
        >
          <MinusIcon />
        </button>
      </div>
      <input
        step={step}
        ref={inputRef}
        type="number"
        className="no-spinner select-none field-sizing-content focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:rounded-[4px]"
        {...props}
      />
      <div className={"w-fit natural-gradient rounded-[8px] select-none"}>
        <button 
          className={btnRight}
          onClick={onHandleMax}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  )
}