import { Button } from "@/components/ui/button/button";
import useOutsideClick from "@/hooks/use-outside-click";
import { cn } from "@/utils/cn";
import { useRef, useState } from "react";

export type DropdownOptionValue = {
  label: string;
  value: string;
}

export type DropdownButtonProps = {
  children: React.ReactNode;
  className?: string;
  options: DropdownOptionValue[];
  onChange: (value: DropdownOptionValue) => void;
}

export function DropdownButton(props: DropdownButtonProps){
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const ref = useOutsideClick((isOutside) => {
    if(isOutside){
      closeDropdown()
    } else {
      openDropdown()
    }
  })

  const closeDropdown = () => {
    dropdownRef.current?.classList.remove("animate-popup")
    dropdownRef.current?.classList.add("animate-popup-close")
    const handleClose = () => {
      setOpen(false);
      dropdownRef.current?.removeEventListener('animationend', handleClose);
    }
    dropdownRef.current?.addEventListener("animationend", handleClose)
  }

  const openDropdown = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      dropdownRef.current?.classList.add("animate-popup")
      const handleClose = () => {
        dropdownRef.current?.removeEventListener('animationend', handleClose);
      }
      dropdownRef.current?.addEventListener("animationend", handleClose)
    })
  }

  const handleOptionClick = (option: DropdownOptionValue) => {
    props.onChange(option);
    closeDropdown()
  }

  return (
    <div ref={ref} className={cn("flex flex-col gap-2 relative", props.className)}>
      <Button 
        dropdown 
        mode={open ? 'open' : 'closed'} 
        variant={"secondary"} 
        className={cn("w-full focus:shadow-hover")}
        // onClick={onClickBtn}
      >
        {props.children}
      </Button>

      { open ? (
          <div 
            ref={dropdownRef} 
            className="w-full max-h-[250px] origin-top absolute top-[48px] flex flex-col rounded-[8px] border border-black/10 dark:border-dark-border left-0 right-0 bg-natural-gradient dark:bg-dark-natural-gradient shadow-primary transition-all overflow-auto custom-scrollbar dark:shadow-2xl"
          >
            {
              props.options.map((option) => (
                <button 
                  key={option.value}
                  type="button" 
                  className="border-b border-black/10 dark:border-dark-border py-[8px] px-[10px] text-regular text-text text-left hover:bg-black/5 cursor-pointer dark:text-dark-gray hover:dark:bg-white/10"
                  onClick={handleOptionClick.bind(null, option)}
                >
                  {option.label}
                </button>
              ))
            }
          </div>
        ) : (null)
      }
    </div>
  )
}