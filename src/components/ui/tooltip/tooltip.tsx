import { useRef, useState } from "react";
import {arrow, flip, FloatingArrow, offset, shift, useFloating, useHover, useInteractions} from '@floating-ui/react';

export type TooltipProps = {
  message: string;
  children: React.ReactNode;
}

export default function Tooltip(props: TooltipProps){
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'left',
    middleware: [arrow({ element: arrowRef }), offset(10), flip(), shift()]
  })

  const hover = useHover(context);

  const {getReferenceProps, getFloatingProps} = useInteractions([hover]);

  return (
    <div className="w-fit" {...getReferenceProps()}>
      { open && (
          <>
            <div 
              {...getFloatingProps()}
              ref={refs.setFloating} 
              style={floatingStyles}
              className="w-fit text-center whitespace-nowrap py-[5px] px-[10px] rounded-md bg-natural-gradient text-black shadow-primary dark:bg-dark-natural-2-gradient dark:text-dark-gray border border-black/10 dark:border-white/10"
            >
              <span>{props.message}</span>
              <FloatingArrow 
                context={context}
                ref={arrowRef} 
                className="
                  fill-white dark:fill-[#292929]
                  [&>path:first-of-type]:stroke-black/10
                  dark:[&>path:first-of-type]:stroke-white/15
                "
              />
            </div>
          </>
        )
      }

      <div ref={refs.setReference}>
        {props.children}
      </div>
    </div>
  )
}