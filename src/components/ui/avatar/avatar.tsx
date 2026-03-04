import type { DetailedHTMLProps, ImgHTMLAttributes } from "react"

type AvatarDivProps = {
  width?: number;
  height?: number;
}
type AvatarProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export function Avatar({
  width = 50,
  height = 50,
  ...props
}: AvatarProps & AvatarDivProps){
  return (
    <div style={{ width, height }} className="rounded-full overflow-hidden">
      <img {...props} />
    </div>
  )
}