import * as React from "react";
import { cn } from "@/utils/cn";
import { EyeIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const input = cva("", {
  variants: {
    variant: {
      primary: "input py-2.5 px-2.5",
      disabled: "input-disabled py-2.5 px-2.5",
    },
    disabled: {
      false: null,
      true: ['cursor-not-allowed'],
    },
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
  const typeFile = type === "file";

  const clsnm = input({ 
    variant, 
    disabled, 
    className: cn(className, icon && "pl-9", isTypePassword && "pr-11", typeFile && "file:bg-primary file:text-white file:py-[7px] file:px-[10px] file:rounded-[10px] file:mr-[17px] file:cursor-pointer hover:file:opacity-95 cursor-pointer transition-all", "dark:bg-dark-natural-gradient dark:text-white")
  })

  if(type === "range"){
    return (
      <input
        id={id}
        type={"range"}
        className="w-full w-[20px] h-[20px] border border-black/20 rounded-[6px] accent-blue-500 bg-white checked:bg-primary disabled:border-gray-350 disabled:bg-gray-200"
        disabled={disabled || undefined}
        {...props}
      />
    )
  }

  if(type === "color"){
    return (
      <input
        id={id}
        type={"color"}
        className="w-full"
        disabled={disabled || undefined}
        {...props}
      />
    )
  }

  if(type === "file"){
    return (
      <label htmlFor={id} className="relative group">
        <input
          id={id}
          type={"file"}
          className={clsnm}
          disabled={disabled || undefined}
          {...props}
        />
      </label>
    )
  }

  if(type === "checkbox"){
    return (
      <label htmlFor={id} className="h-fit select-none w-fit relative flex items-center justify-center gap-[2px]">
        <input
          id={id}
          type={"checkbox"}
          className="peer appearance-none w-[20px] h-[20px] border border-black/20 rounded-[6px] accent-blue-500 bg-white checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 disabled:border-gray-350 disabled:bg-gray-200"
          disabled={disabled || undefined}
          {...props}
        />
        <svg
          className="
            absolute left-[2px] top-0
            w-4 h-4 mt-1
            hidden peer-disabled:text-text/40 peer-checked:block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          color="white"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        {label && <span className="ml-2 text-regular text-[#333333] dark:text-dark-gray">{label}</span>}
      </label>
    )
  }

  if(type === "radio"){
    return (
      <label htmlFor={id} className="select-none w-fit relative flex items-center justify-center gap-[2px]">
        <input
          id={id}
          type={"radio"}
          className="peer appearance-none w-5 h-5 bg-white border border-black/20 rounded-full disabled:border-gray-350 disabled:bg-gray-200"
          disabled={disabled || undefined}
          {...props}
        />
        <div className="absolute left-[4px] w-3 h-3 peer-checked:bg-primary rounded-full" />
        {label && <span className="ml-2 text-regular text-[#333333] dark:text-dark-gray">{label}</span>}
      </label>
    )
  }

  if(type === "search"){
    return (
      <label htmlFor={id} className="relative flex flex-col gap-[4px]">
        {label && <span className="mx-2.5 block text-small text-[#333333] dark:text-dark-gray">{label}</span>}
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

  return (
    <label htmlFor={id} className="relative flex flex-col gap-[4px]">
      {label && <span className="mx-2.5 block text-small text-[#333333] dark:text-dark-gray">{label}</span>}
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