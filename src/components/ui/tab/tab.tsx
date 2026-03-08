import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

const tabButton = cva("py-[8px] px-[20px] rounded-t-[10px] border-b border-black/10", {
  variants: {
    variant: {
      active: "bg-primary-gradient text-white cursor-pointer",
      secondary: "dark:text-white cursor-pointer dark:border-dark-border hover:natural-gradient hover:bg-primary-gradient hover:text-white transition-all",
      activeDisabled: "bg-disabled-gradient dark:bg-dark-natural-gradient dark:text-white/30 text-black/30 border border-b-0 border-t border-l border-r dark:border-dark-border",
      disabled: "text-black/30 dark:text-white/30 dark:border-dark-border",
    },
    disabled: {
      true: ["cursor-default"],
      false: null
    }
  },
  defaultVariants: {
    variant: "active",
    disabled: false
  }
})

type TabButtonVarianProps = VariantProps<typeof tabButton>;
type TabButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & TabButtonVarianProps & { active?: boolean; disabled?: boolean; }

function TabButton({
  active,
  variant,
  disabled,
  ...props
}: TabButtonProps){
  const className = tabButton({
    variant: disabled && active ? "activeDisabled" :disabled ? "disabled" : !active ? "secondary" : "active",
    disabled
  })

  return (
    <button
      type="button"
      className={className}>
      {props.children}
    </button>
  )
}

type TabProps = {
  options: { name: string; active?: boolean; disabled?: boolean; onClick?: () => void }[]
}

function Tab(props: TabProps){
  return (
    <div className="flex items-center">
      {
        props.options.map((option) => (
          <Tab.Button 
            key={option.name} 
            active={option.active} 
            disabled={option.disabled}
            onClick={option.onClick}
          >
            {option.name}
          </Tab.Button>
        ))
      }
    </div>
  )
}

Tab.Button = TabButton

export { Tab }