import { cn } from "@/utils/cn";
import { formatFileSize } from "@/utils/format";
import { CloudUploadIcon, FileTextIcon, TrashIcon, UploadIcon } from "lucide-react";
import * as React from "react";
import type { FieldErrors } from "react-hook-form";

export type InputSingleFileDropProps = {
  value: File | undefined;
  placeholder?: string;
  onChange: (value: File) => void;
  onRemove: () => void;
  errors: FieldErrors<{ file: File }>
}

export function InputFileSingleDrop(props: InputSingleFileDropProps){
  const { value, onChange, onRemove, placeholder = "PDF, JPG or PNG (max. 5 MB)", errors } = props;

  const [isDragging, setIsDragging] = React.useState(false);

  const isFileUploaded = React.useMemo(() => value ? true : false, [value]);
  const isThereError = React.useMemo(() => errors.file?.message ? true : false, [errors]);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files)
    const file = files[files.length-1];
    onChange(file);
  }

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const value = e.target.files;
    const files = Array.from(value as FileList);
    const file = files[files.length-1];
    onChange(file);
  }

  const onRemoveFile = () => {
    onRemove()
  }

  return (
    <div className="flex flex-col gap-1">
      <div 
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative w-[431px] h-[180px] max-h-auto border-2 border-black/15 dark:border-dark-border rounded-[10px] flex items-center justify-center transition-all", 
          isDragging ? "bg-primary/20 border-primary" : "bg-transparent dark:border-dark-border", 
          isFileUploaded ? `py-0 overflow-hidden border-1` : "py-[50px] border-dashed hover:bg-primary/10 hover:border-primary",
          isThereError ? "border-red-600 dark:border-red-900" : "dark:border-dark-border"
        )}
      >
        { !isFileUploaded ? (
            <>
              {
                isDragging ? (
                  <div className="flex flex-col items-center gap-[6px]">
                    <UploadIcon width={30} height={30} className="text-primary" />
                    <span className="font-semibold text-primary">Drop here</span>
                  </div>
                ) : (
                  <>
                    <input 
                      type="file" 
                      multiple={false}
                      className="w-full h-full appearance-none absolute opacity-0 peer border border-red-500 rounded-[10px] cursor-pointer" 
                      onChange={handleUploadFile}
                    />

                    <div className="flex flex-col items-center gap-[8px]">
                      <CloudUploadIcon width={30} height={30} className="text-primary" />

                      <div className="flex flex-col items-center">
                        <div className="flex gap-1.5">
                          <div className="w-fit relative">
                            <button type="button" className="text-primary font-semibold peer-hover:underline peer-hover:cursor-pointer">
                              Upload a file
                            </button>
                          </div>
                          <p>or drag and drop</p>
                        </div>
                        <p className="text-small text-[#9C9C9C]">{placeholder}</p>
                      </div>
                    </div>
                  </>
                )
              }
            </>
          ) : (
            <div className="w-full h-full grid grid-rows-[1fr_50px] grid-cols-1 gap-0 p-0">
              <div className={cn("flex items-center justify-center", isThereError ? "bg-gradient-to-b from-red-500/10 to-transparent" : "bg-gradient-to-b from-primary/10 to-transparent")}>
                <div className="max-w-[80%] flex items-center gap-[12px]">
                  <div className="py-[8px] px-[8px] bg-primary-gradient rounded-[8px] text-white">
                    <FileTextIcon width={20} height={20} />
                  </div>
                  <p className="text-[#333333] font-medium word-break dark:text-dark-gray">{value?.name}</p>
                </div>
              </div>

              <div className={cn("w-full py-[10px] px-[13px] flex items-center justify-between border-t border-black/10", isThereError ? "border-red-600 dark:border-red-900" : "dark:border-dark-border")}>
                <span className="text-small text-[#979797] dark:text-dark-gray">{formatFileSize(Number(value?.size))}</span>

                <div className="flex items-center gap-[5px]">
                  <div className="py-[6px] px-[8px] flex items-center gap-[5px] text-[#A6A6A6] dark:text-dark-gray cursor-pointer hover:bg-black/3 rounded-md hover:bg-red-500 hover:text-white transition-all" onClick={onRemoveFile}>
                    <TrashIcon width={16} height={16} />
                    <span className="text-small leading-none">Remove</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>

      {isThereError ? <p className="text-small text-red-500">{errors.file?.message}</p> : ""}
    </div>
  )
}