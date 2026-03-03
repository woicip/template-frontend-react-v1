import { Button } from "../button/button";
import { ModalContainer } from "./modal-container";
import { ModalContent } from "./modal-content";
import modalDeleteIcon from "@/assets/images/modal_delete_icon.webp"

type ModalProps = {
  open: boolean;
  title?: string;
  message?: string;
  btnText?: string;
  onClose: () => void;
  onSubmit: () => void;
}

export function ModalDelete({
  open,
  title = "Delete",
  message = "Are you sure want to delete data ?",
  btnText = "Yes, Delete",
  onClose,
  onSubmit,
  ...props
}: ModalProps){
  return (
    <ModalContainer open={open} {...props}>
      <ModalContent>
        <ModalContent.Icon className="w-16 h-16">
          <img src={modalDeleteIcon} />
        </ModalContent.Icon>

        <ModalContent.MessageContainer>
          <ModalContent.Title>{title}</ModalContent.Title>
          <ModalContent.Message>{message}</ModalContent.Message>
        </ModalContent.MessageContainer>

        <div className="w-full grid grid-cols-2 gap-2.5">
          <Button
            type='button'
            variant={"secondary"}
            className='w-full'
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type='button'
            variant={"danger"}
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