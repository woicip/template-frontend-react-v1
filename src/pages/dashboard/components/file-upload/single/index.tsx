import { valibotResolver } from "@hookform/resolvers/valibot"
import { Controller, useForm } from "react-hook-form"
import { SingleFileSchema, type TSingleFileSchema } from "../schema"
import { Input } from "@/components/ui/input/input"
import { Button } from "@/components/ui/button/button";
import axios from "axios";
import { ModalConfirm } from "@/components/ui/modal/modal-confirm";
import { useState } from "react";
import { ModalSuccess } from "@/components/ui/modal/modal-success";
import { ModalFailed } from "@/components/ui/modal/modal-failed";

export default function Index(){
  const [loading, setLoading] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);

  const form = useForm<TSingleFileSchema>({
    mode: "onChange",
    resolver: valibotResolver(SingleFileSchema),
    defaultValues: { file: undefined }
  })

  const { errors } = form.formState;

  const handleFileChange = (file: File) => {
    form.setValue("file", file, { shouldValidate: true });
  }

  const onRemoveFile = () => {
    form.reset({ file: undefined });
  }

  const onSubmit = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("files[]", form.watch("file") as File);
      await axios.post("https://pomf2.lain.la/upload.php", formData);

      setModalSuccess(true);

    } catch (error) {
      setModalFailed(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form 
      onSubmit={form.handleSubmit(() => setModalConfirm(true))}
      className="w-[430px] flex flex-col gap-3"
    >
      <div className="flex flex-col gap-1">
        <Controller 
          name="file"
          control={form.control}
          render={({ field }) => (
            <div className="w-full flex flex-col gap-2">
              <p>Upload a file</p>
              <Input.SingleFileDrop
                value={field.value}
                onChange={handleFileChange}
                onRemove={onRemoveFile}
                errors={errors}
              />
            </div>
          )}
        />
      </div>

      <Button type="submit" disabled={!form.formState.isValid} variant={form.formState.isValid ? "primary" : "disabled"} className="w-full">Upload</Button>

      <ModalConfirm 
        open={modalConfirm}
        loading={loading}
        onClose={() => setModalConfirm(!modalConfirm)}
        onSubmit={onSubmit}
      />

      <ModalSuccess 
        open={modalSuccess}
        onClose={() => setModalSuccess(!modalSuccess)}
      />

      <ModalFailed 
        open={modalFailed}
        onClose={() => setModalFailed(!modalFailed)}
      />
    </form>
  )
}