import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { FormSchema, type TFormSchema } from "../schema";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import type { MultipleFile } from "@/components/ui/input/file-multiple-drop";

export default function Index(){
  const form = useForm<TFormSchema>({
    mode: "onChange",
    resolver: valibotResolver(FormSchema),
    values: { files: [] }
  })

  const { errors } = form.formState;

  const handleFileChange = (value: MultipleFile[] | null) => {
    form.setValue("files", value as MultipleFile[], { shouldValidate: true });
  }

  const onRemoveFile = (id: string) => {
    const newFiles = form.watch("files").filter((file) => file.id !== id);
    form.setValue("files", newFiles, { shouldValidate: true });
  }

  const onRemoveAll = () => {
    form.reset({ files: [] });
  }

  const onSubmit = (data: TFormSchema) => {
    console.log('submit', data);
  }

  return (
    <div className="w-full grid grid-cols-2 gap-2">
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="w-[430px] flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <Controller 
            name="files"
            control={form.control}
            render={({ field }) => (
              <div className="w-full flex flex-col gap-2">
                <p>Upload Files</p>
                <Input.MultipleFileDrop
                  value={field.value}
                  onChange={handleFileChange}
                  onRemove={onRemoveFile}
                  onRemoveAll={onRemoveAll}
                  placeholder="PDF, JPG or PNG (max. 5 MB)"
                  errors={errors}
                />
              </div>
            )}
          />

          {errors.files && <p className="text-small text-red-600">{errors.files.message}</p>}
        </div>

        <Button type="submit" disabled={!form.formState.isValid} variant={form.formState.isValid ? "primary" : "disabled"} className="w-full">Upload</Button>
      </form>
    </div>
  )
}