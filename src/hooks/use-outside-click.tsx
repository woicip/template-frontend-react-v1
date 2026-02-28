import { useEffect, useRef } from "react"

const useOutsideClick = (callback: (isOutside: boolean) => void) => {
  const ref = useRef<any>(null)

  const handler = (e: MouseEvent) => {
    if(ref.current?.contains(e.target)){
      callback(false)
    } else {
      callback(true)
    }
  }

  useEffect(() => {
    window.addEventListener("mouseup", handler)
    return () => window.removeEventListener("mouseup", handler)
  }, [])

  return ref
}

export default useOutsideClick