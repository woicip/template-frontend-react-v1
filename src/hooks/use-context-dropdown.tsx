import { useRef, useState } from "react";
import useOutsideClick from "./use-outside-click";

export function useContextDropdown(){
  const [open, setOpen] = useState(false);

  const subRef = useRef<HTMLDivElement>(null);
  const ref = useOutsideClick((isOutside) => {
    console.log(isOutside)
    if(isOutside){
      closeDropdown()
    } else {
      openDropdown()
    }
  })

  const closeDropdown = () => {
    subRef.current?.classList.remove("animate-popup")
    subRef.current?.classList.add("animate-popup-close")
    const handleClose = () => {
      setOpen(false);
      subRef.current?.removeEventListener('animationend', handleClose);
    }
    subRef.current?.addEventListener("animationend", handleClose)
  }

  const openDropdown = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      subRef.current?.classList.add("animate-popup")
      const handleClose = () => {
        subRef.current?.removeEventListener('animationend', handleClose);
      }
      subRef.current?.addEventListener("animationend", handleClose)
    })
  }

  return { open, ref, subRef, openDropdown, closeDropdown }
}