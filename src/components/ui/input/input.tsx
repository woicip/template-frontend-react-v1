import * as React from "react";
import { cn } from "@/utils/cn";
import { EyeIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const input = cva("input", {
  variants: {
    variant: {
      primary: "py-2.5 px-2.5",
      disabled: "py-2.5 px-2.5 input-disabled",
    },
    disabled: {
      false: null,
      true: ['cursor-not-allowed'],
    }
  },
  defaultVariants: {
    variant: "primary",
    disabled: false
  }
})

type CustomInputProps = {
  label?: string
  icon?: React.ReactNode
}
type InputProps = VariantProps<typeof input>;
type InputComponentProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputProps & CustomInputProps

function Input({
  id = `input-${Math.random().toString(16).slice(2)}`,
  className,
  disabled,
  label,
  variant,
  type,
  icon,
  ...props
}: InputComponentProps){
  const [showPassword, setShowPassword] = React.useState(false);
  const isTypePassword = React.useMemo(() => type === "password", [type]);
  const typeValue = isTypePassword ? (showPassword ? "text" : "password") : type;

  const clsnm = input({ 
    variant, 
    disabled, 
    className: cn(className, icon && "pl-9", isTypePassword && "pr-11") 
  })

  return (
    <label htmlFor={id} className="relative flex flex-col gap-[4px]">
      {label && <span className="mx-2.5 block text-small text-[#333333]">{label}</span>}
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]">{icon}</span>}

        <input
          id={id}
          type={typeValue}
          className={clsnm}
          disabled={disabled || undefined}
          {...props}
        />

        {isTypePassword && 
          (
            <span 
              className={cn('select-none w-[33px] h-[33px] flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] rounded-[10px] transition-all', !disabled ? 'cursor-pointer hover:bg-black/5' : 'cursor-not-allowed')}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <EyeIcon className="w-[18px] h-[18px]" />
            </span>
          )
        }
      </div>
    </label>
  )
}

export { Input }