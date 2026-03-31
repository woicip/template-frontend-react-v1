// import { CheckCheckIcon } from 'lucide-react';
import { Button } from '../button/button';
import { ModalContainer } from './modal-container';
import { ModalContent } from './modal-content';
import Lottie from "lottie-react";
import successfullyDone from "@/assets/lottie/success.json" with { type: "json" };

type ModalProps = {
  open: boolean;
  title?: string;
  message?: string;
  btnText?: string;
  onClose: () => void;
}

export function ModalSuccess({
  title = "Success",
  message = "Successfully saved changes!",
  btnText = "Close",
  onClose,
  ...props
}: ModalProps){
  return (
    <ModalContainer open={props.open}>
      <ModalContent>
        <ModalContent.Icon>
          <div className='w-[70px] h-[70px] relative'>
            <Lottie
              loop={false}
              width={200}
              height={200}
              className='absolute scale-[2.5] top-[5px]'
              animationData={successfullyDone}
            />
          </div>
        </ModalContent.Icon>

        <ModalContent.MessageContainer>
          <ModalContent.Title>{title}</ModalContent.Title>
          <ModalContent.Message>{message}</ModalContent.Message>
        </ModalContent.MessageContainer>

        <Button type='button' variant={"primary"} className='w-full' onClick={onClose}>{btnText}</Button>
      </ModalContent>
    </ModalContainer>
  )
}