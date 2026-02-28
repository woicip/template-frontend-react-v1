import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority"

const button = cva("w-fit flex items-center", {
  variants: {
    variant: {
      primary: "bg-linear-to-b from-accent to-primary border border-black/10 shadow-primary hover:shadow-hover hover:opacity-95 text-white",
      secondary: "bg-linear-to-b from-[#FFFFFF] to-[#FAFAFA] border border-black/10 shadow-primary hover:shadow-hover hover:opacity-95 text-text",
      disabled: "bg-linear-to-b from-[#F5F5F5] to-[#EAEAEA] border border-black/10 shadow-primary text-[#838383]",
      danger: "bg-linear-to-b from-[#FFFFFF] to-[#FAFAFA] border border-black/10 shadow-primary hover:shadow-hover hover:opacity-95 text-[#C51A1A] transition-all",
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
}
type InputProps = VariantProps<typeof button>;
type ButtonComponentProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & InputProps & CustomInputProps

function Button({
  className,
  disabled,
  variant,
  size,
  icon,
  ...props
}: ButtonComponentProps){
  const clsnm = button({ 
    variant,
    disabled,
    size,
    className: cn(className)
  })

  return (
    <button
      className={clsnm}
      disabled={disabled || undefined}
      {...props}
    > 
      {icon && <span className="">{icon}</span>}
      {props.children}
    </button>
  )
}

export { Button }