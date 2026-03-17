import * as v from "valibot";

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/png", "image/jpeg", "application/pdf"];

export const FileSchema = v.pipe(
  v.instance(File, "File cannot be empty"),
  v.check((file) => file.size > 0, "File cannot be empty"),
  v.check((file) => file.size <= MAX_SIZE, "File size cannot exceed 5 MB"),
  v.check((file) => ALLOWED_TYPES.includes(file.type), "Only PNG, JPG, PDF allowed")
);

export const FormSchema = v.object({
  files: v.pipe(
    v.array(v.object({ id: v.string(), file: FileSchema })),
    v.minLength(1, "At least 1 file required")
  )
})

export const SingleFileSchema = v.object({
  file: FileSchema
})

export type TFormSchema = v.InferOutput<typeof FormSchema>;
export type TFileSchema = v.InferOutput<typeof FileSchema>;
export type TSingleFileSchema = v.InferOutput<typeof SingleFileSchema>;