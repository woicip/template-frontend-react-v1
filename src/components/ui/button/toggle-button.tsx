import { cn } from "@/utils/cn"
import { useRef } from "react"

type ToggleButtonProps = {
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void
}

export function Toggle({
  checked = false,
  disabled,
  ...props
}: ToggleButtonProps){
  let ref = useRef<HTMLInputElement>(null);
  let toggleRef = useRef<HTMLDivElement>(null);

  const onToggle = () => {
    if(ref.current){
      ref.current["checked"] = !ref.current?.checked
      if(ref.current.checked){
        toggleRef.current?.classList.remove("toggleOff");
        toggleRef.current?.classList.add("toggleOn");
        props.onChange?.(true);
      } else {
        toggleRef.current?.classList.remove("toggleOn");
        toggleRef.current?.classList.add("toggleOff");
        props.onChange?.(false);
      }
    }
  }

  return (
    <button
      type="button" 
      onClick={disabled ? undefined : onToggle}
      className={cn("toggle-btn relative w-[40px] h-[24px] border border-black/20 rounded-full bg-white has-[:checked]:bg-primary transition-all active:scale-[.95]", disabled ? "bg-[#E8E8E8] cursor-not-allowed" : "cursor-pointer")}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled || undefined}
        className="peer sr-only"
      />
      <div 
        ref={toggleRef} 
        className={cn("toggle-btn-pupil w-[16px] h-[16px] bg-[#E1E1E1] border border-black/0 shadow-primary rounded-full absolute peer-checked:toggleOn peer-checked:bg-white", checked ? "toggleOn" : "toggleOff", disabled && "bg-white border-black/20")}
      ></div>
    </button>
  )
}