import { cn } from "@/utils/cn";
import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

function ModalContent(props: PropsWithChildren){
  return (
    <div className='w-[460px] min-h-[260px] p-[25px] flex flex-col items-center justify-between bg-natural-gradient dark:bg-dark-natural-gradient rounded-[20px] border border-black/20 shadow-primary animate-modal-show dark:border-dark-border'>
      {props.children}
    </div>
  )
}

function Icon(props: PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>){
  return (
    <div className={cn("rounded-full flex items-center justify-center", props.className)}>
      {props.children}
    </div>
  )
}

function MessageContainer(props: PropsWithChildren){
  return (
    <div className='flex flex-col items-center justify-center'>
      {props.children}
    </div>
  )
}

function Title(props: PropsWithChildren){
  return (
    <h1 className='text-h5 font-bold dark:text-white'>{props.children}</h1>
  )
}

function Message(props: PropsWithChildren){
  return (
    <p className="dark:text-white">{props.children}</p>
  )
}

ModalContent.Icon = Icon;
ModalContent.Title = Title;
ModalContent.Message = Message;
ModalContent.MessageContainer = MessageContainer;

export { ModalContent }