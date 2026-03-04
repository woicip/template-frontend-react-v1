import { cn } from "@/utils/cn";
import type { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes, PropsWithChildren } from "react";

function Card(props: PropsWithChildren){
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

function Title(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
  const className = cn("font-bold text-lg", props.className)
  return (<h1 className={className} {...props}>{props.children}</h1>)
}

function Text(props: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>){
  return (<p {...props}>{props.children}</p>)
}

type ThumbnailProps = {
  width?: number; 
  height?: number;
  src: string;
}

function Thumbnail({
  ...props
}: ThumbnailProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
){
  return (
    <div className="w-full rounded-[10px] overflow-hidden" {...props}>
      <img src={props.src} alt={props.src} className="w-full object-cover" />
    </div>
  )
}

Card.Thumbnail = Thumbnail;
Card.Title = Title;
Card.Text = Text;

export { Card }