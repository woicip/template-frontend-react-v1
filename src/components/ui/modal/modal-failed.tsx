import { createPortal } from 'react-dom';
import { Button } from '../button/button';
import { ModalContainer } from './modal-container';
import { ModalContent } from './modal-content';
import modalFailedIcon from "@/assets/images/modal_failed_icon.webp"

type ModalProps = {
  open: boolean;
  title?: string;
  message?: string;
  btnText?: string;
  onClose: () => void;
}

export function ModalFailed({
  title = "Failed",
  message = "Something went wrong",
  btnText = "Close",
  onClose,
  ...props
}: ModalProps){
  const portalRoot = document.getElementById("portal-root") as HTMLElement;
  
  return (
    createPortal(
      <ModalContainer open={props.open}>
        <ModalContent>
          <ModalContent.Icon className='w-16 h-16'>
            <img src={modalFailedIcon} />
          </ModalContent.Icon>

          <ModalContent.MessageContainer>
            <ModalContent.Title>{title}</ModalContent.Title>
            <ModalContent.Message>{message}</ModalContent.Message>
          </ModalContent.MessageContainer>

          <Button type='button' variant={"danger"} className='w-full' onClick={onClose}>{btnText}</Button>
        </ModalContent>
      </ModalContainer>,
      portalRoot
    )
  )
}