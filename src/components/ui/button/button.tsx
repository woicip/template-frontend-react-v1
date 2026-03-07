import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const button = cva("w-fit flex items-center active:scale-[.95] transition-all", {
  variants: {
    variant: {
      primary: "bg-primary-gradient border border-black/10 shadow-primary hover:shadow-hover hover:opacity-95 text-white",
      secondary: "bg-natural-gradient dark:bg-dark-natural-gradient dark:text-dark-gray dark:border-dark-border border border-black/10 shadow-primary hover:shadow-hover hover:opacity-95 text-text",
      disabled: "bg-disabled-gradient dark:bg-dark-natural-gradient border border-black/10 shadow-primary text-[#838383]",
      danger: "danger-gradient border border-black/10 shadow-primary hover:shadow-hover hover:opacity-95 text-white transition-all",
    },
    size: {
      large: "text-regular py-[8px] px-[12px] rounded-[8px] gap-[6px]",
      medium: "text-regular py-[6px] px-[12px] rounded-[8px] gap-[6px]",
      small: "text-regular py-[5px] px-[10px] rounded-[8px] gap-[6px]",
    },
    disabled: {
      false: ["cursor-pointer"],
      true: ['cursor-not-allowed']
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "large",
    disabled: false,
  }
})

type CustomInputProps = {
  icon?: React.ReactNode
  dropdown?: boolean;
  mode?: 'open' | 'closed',
}
type InputProps = VariantProps<typeof button>;
type ButtonComponentProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & InputProps & CustomInputProps

function Button({
  className,
  disabled,
  variant,
  size,
  icon,
  dropdown,
  mode,
  ref,
  ...props
}: ButtonComponentProps){
  const clsnm = button({ 
    variant,
    disabled,
    size,
    className: cn(className, dropdown ? "justify-between" : "justify-center")
  })

  return (
    <button
      ref={ref}
      className={clsnm}
      disabled={disabled || undefined}
      {...props}
    > 
      <div className="flex items-center gap-[6px]">
        {icon && <span className="">{icon}</span>}
        <span className="text-left">{props.children}</span>
      </div>

      {dropdown ? mode === 'open' ? (<ChevronUpIcon className="w-[18px] h-[18px]" />) :
        (<ChevronDownIcon className="w-[18px] h-[18px]" />) : (null)
      }
    </button>
  )
}

export { Button }