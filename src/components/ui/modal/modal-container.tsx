import type { PropsWithChildren } from "react";

type ModalProps = {
  open: boolean;
}

export function ModalContainer(props: PropsWithChildren & ModalProps){
  if(props.open){
    return (
      <div className="w-screen h-screen bg-black/50 flex items-center justify-center absolute left-0 top-0 z-100 backdrop-blur-[1.5px] transition-all">
        {props.children}
      </div>
    )
  } else return null
}