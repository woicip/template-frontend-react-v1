import type { PropsWithChildren } from "react";

export default function App(props: PropsWithChildren){
  return (
    <div className="font-display bg-background dark:bg-background-dark">
      {props.children}
    </div>
  )
}