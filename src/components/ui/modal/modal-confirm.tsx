import { Button } from "../button/button";
import { ModalContainer } from "./modal-container";
import { ModalContent } from "./modal-content";
import modalInfoIcon from "@/assets/images/modal_info_icon.webp"

type ModalProps = {
  open: boolean;
  title?: string;
  message?: string;
  btnText?: string;
  onClose: () => void;
  onSubmit: () => void;
}

export function ModalConfirm({
  open,
  title = "Confirm",
  message = "Are you sure want to do this action ?",
  btnText = "Yes, Confirm",
  onClose,
  onSubmit,
  ...props
}: ModalProps){
  return (
    <ModalContainer open={open} {...props}>
      <ModalContent>
        <ModalContent.Icon className="w-16 h-16">
          <img src={modalInfoIcon} />
        </ModalContent.Icon>

        <ModalContent.MessageContainer>
          <ModalContent.Title>{title}</ModalContent.Title>
          <ModalContent.Message>{message}</ModalContent.Message>
        </ModalContent.MessageContainer>

        <div className="w-full grid grid-cols-2 gap-2.5">
          <Button
            type='button'
            variant={"secondary"}
            className='w-full hover:dark:bg-white/10'
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type='button'
            variant={"primary"}
            className='w-full'
            onClick={onClose}
          >
            {btnText}
          </Button>
        </div>
      </ModalContent>
    </ModalContainer>
  )
}