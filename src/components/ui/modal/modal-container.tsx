import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
}

export function ModalContainer(props: PropsWithChildren & ModalProps){
  const portalRoot = document.getElementById("portal-root") as HTMLElement;
  if(props.open){
    return createPortal(
      <div className="w-screen h-screen bg-black/50 flex items-center justify-center absolute left-0 top-0 z-100 backdrop-blur-[1.5px] transition-all">
        {props.children}
      </div>,
      portalRoot
    )
  } else return null
}