import { Button } from "@/components/ui/button/button";
import { ModalConfirm } from "@/components/ui/modal/modal-confirm";
import { ModalDelete } from "@/components/ui/modal/modal-delete";
import { ModalFailed } from "@/components/ui/modal/modal-failed";
import { ModalSuccess } from "@/components/ui/modal/modal-success";
import { useState } from "react"

export default function ModalComponents(){
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-2.5">
        <Button variant={"primary"} onClick={() => setModalSuccess(true)}>Modal Success</Button>
        <Button variant={"primary"} onClick={() => setModalFailed(true)}>Modal Failed</Button>
        <Button variant={"primary"} onClick={() => setModalConfirm(true)}>Modal Confirm</Button>
        <Button variant={"primary"} onClick={() => setModalDelete(true)}>Modal Delete</Button>
      </div>

      <ModalSuccess open={modalSuccess} onClose={() => setModalSuccess(false)} />
      <ModalFailed open={modalFailed} onClose={() => setModalFailed(false)} />
      <ModalConfirm open={modalConfirm} onClose={() => setModalConfirm(false)} onSubmit={() => setModalConfirm(false)} />
      <ModalDelete open={modalDelete} onClose={() => setModalDelete(false)} onSubmit={() => setModalDelete(false)} />
    </div>
  )
}