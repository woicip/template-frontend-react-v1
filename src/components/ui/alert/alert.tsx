import { cva, type VariantProps } from "class-variance-authority";
import { InfoIcon } from "lucide-react";

const alert = cva("select-none p-[15px] flex items-center gap-[10px] rounded-[12px] border border-black/20 shadow-primary hover:shadow-hover", {
  variants: {
    variant: {
      primary: "text-text dark:text-white bg-natural-gradient dark:bg-dark-natural-gradient dark:border-dark-border",
      danger: "text-danger bg-alert-danger-gradient dark:bg-alert-danger-dark-gradient dark:border-white/10",
      success: "text-success bg-alert-success-gradient dark:bg-alert-success-dark-gradient dark:border-white/10"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

type AlertCVA = VariantProps<typeof alert>;
type AlertProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & AlertCVA;

export function Alert({
  className,
  variant,
  ...props
}: AlertProps){
  const clsnm = alert({ variant, className })

  return (
    <div className={clsnm} {...props}>
      <InfoIcon />
      <p>{props.children}</p>
    </div>
  )
}