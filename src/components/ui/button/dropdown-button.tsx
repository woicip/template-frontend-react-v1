import { Button } from "@/components/ui/button/button";
import { useContextDropdown } from "@/hooks/use-context-dropdown";
import { cn } from "@/utils/cn";

export type DropdownOptionValue = {
  label: string;
  value: string;
}

export type DropdownButtonProps = {
  children?: React.ReactNode;
  className?: string;
  btnClassName?: string;
  dropdownClassName?: string;
  render?: (props: { isActive: boolean }) => React.ReactNode;
  options: DropdownOptionValue[];
  onChange: (value: DropdownOptionValue) => void;
}

export function DropdownButton(props: DropdownButtonProps){
  const { open, ref, subRef: dropdownRef, closeDropdown } = useContextDropdown();

  const handleOptionClick = (option: DropdownOptionValue) => {
    props.onChange(option);
    closeDropdown()
  }

  return (
    <div ref={ref} className={cn("flex flex-col gap-2 relative", props.className)}>
      {
        props.render ? (
          <>
            {props.render({ isActive: open })}
          </>
        ) : (
          <Button 
            dropdown 
            mode={open ? 'open' : 'closed'} 
            variant={"secondary"} 
            className={cn("w-full focus:shadow-hover", props.btnClassName)}
            // onClick={onClickBtn}
          >
            {props.children}
          </Button>
        )
      }

      { open ? (
          <div 
            ref={dropdownRef} 
            className={cn("w-full max-h-[250px] origin-top absolute top-[48px] flex flex-col rounded-[8px] border border-black/10 dark:border-dark-border left-0 right-0 bg-natural-gradient dark:bg-dark-natural-gradient shadow-primary transition-all overflow-auto custom-scrollbar dark:shadow-2xl z-20", props.dropdownClassName)}
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