import { cva, type VariantProps } from "class-variance-authority";
import { InfoIcon } from "lucide-react";

const alert = cva("select-none p-[15px] flex items-center gap-[10px] rounded-[12px] border border-black/20  shadow-primary hover:shadow-hover", {
  variants: {
    variant: {
      primary: "text-text natural-gradient",
      danger: "text-danger bg-linear-to-b from-[#FFF9F9] to-[#FFDEDE]",
      success: "text-success bg-linear-to-b from-[#F9FFF9] to-[#E5FFE5]"
    }
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