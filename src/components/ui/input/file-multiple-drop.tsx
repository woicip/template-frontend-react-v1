import { cn } from "@/utils/cn";
import { formatFileSize } from "@/utils/format";
import { CircleAlertIcon, CloudUploadIcon, FileTextIcon, TrashIcon, UploadIcon } from "lucide-react";
import * as React from "react";
import type { FieldErrors } from "react-hook-form";

export type MultipleFile = { id: string; file: File };

export type InputMultipleFileDropProps = {
  value: MultipleFile[] | null;
  placeholder?: string;
  onChange: (value: MultipleFile[] | null) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
  errors: FieldErrors<{ files: MultipleFile[] }>
}

export function InputMultipleFileDrop(props: InputMultipleFileDropProps){
  const { value, onChange, onRemove, placeholder = "PDF, JPG or PNG (max. 5 MB)", errors } = props;

  const [isDragging, setIsDragging] = React.useState(false);

  const isFileUploaded = React.useMemo(() => Number(value?.length) > 0, [value]);
  const isThereError = React.useMemo(() => errors.files?.length ? true : false, [errors])

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

    const dataTransferFiles = e.dataTransfer.files;
    const newFiles = Array.from(dataTransferFiles).map((file) => ({ id: Math.random().toString(16).slice(2), file  }));
    const mergedFiles = [...(value as MultipleFile[]), ...(newFiles as MultipleFile[])];
    
    onChange(mergedFiles);
  }

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const targetFiles = e.target.files;
    const newFiles = Array.from(targetFiles as FileList).map((file) => ({ id: Math.random().toString(16).slice(2), file }))
    const mergedFiles = [...(value as MultipleFile[]), ...newFiles];

    onChange(mergedFiles);
  }

  const handleRemoveFile = (id: string) => {
    onRemove(id);
  }

  const onRemoveAll = () => {
    props.onRemoveAll();
  }
  
  return (
    <>
      <div 
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn("relative w-[431px] h-[180px] max-h-auto border-2 border-black/15 rounded-[10px] flex items-center justify-center transition-all", isDragging ? "bg-primary/20 border-primary" : "bg-transparent dark:border-dark-border", isFileUploaded ? "py-0 border-1 overflow-hidden dark:border-dark-border" : "py-[50px] border-dashed hover:bg-primary/10 hover:border-primary", isThereError ? "border-red-500 dark:border-red-900" : "dark:border-dark-border")}
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
                      multiple
                      className="w-full h-full appearance-none absolute opacity-0 peer border border-red-500 rounded-[10px] cursor-pointer" 
                      onChange={handleUploadFile}
                    />

                    <div className="flex flex-col items-center gap-[8px]">
                      <CloudUploadIcon width={30} height={30} className="text-primary" />

                      <div className="flex flex-col items-center">
                        <div className="flex gap-1.5">
                          <div className="w-fit relative">
                            <button type="button" className="text-primary font-semibold peer-hover:underline peer-hover:cursor-pointer">
                              Upload files
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
              <div className={cn("overflow-auto", isThereError ? "bg-gradient-to-b from-red-500/5 to-transparent" : "bg-gradient-to-b from-primary/10 to-transparent")}>
                {
                  (value as MultipleFile[]).map((item, i) => (
                    <div key={item.id} className={cn("w-full py-[8px] px-[10px] flex items-center justify-between", errors.files?.[i]?.file ? "bg-red-400/10 dark:bg-red-600/10" : "hover:dark:bg-white/3")}>
                      <div className="flex items-center gap-[12px]">
                        <div className="py-[8px] px-[8px] bg-primary-gradient rounded-[8px] text-white">
                          <FileTextIcon width={20} height={20} />
                        </div>
                        <div>
                          <p className="text-small text-[#333333] font-medium word-break dark:text-dark-gray">{item.file.name}</p>
                          <div className="flex items-center gap-2">
                            <p className="text-very-small text-text dark:text-dark-gray leading-none font-light antialiased">{formatFileSize(Number(item.file.size))}</p>
                            {errors.files?.[i]?.file ? 
                              (
                                <p className="text-very-small text-red-500 dark:text-red-500 leading-none font-medium antialiased">{errors.files?.[i]?.file?.message}</p>
                              ) : null
                            }
                          </div>
                        </div>
                      </div>

                      <button 
                        type="button" 
                        className="p-[10px] text-red-500 hover:bg-red-500/10 cursor-pointer transition-all rounded-[10px]" 
                        onClick={() => handleRemoveFile(item.id)}
                      >
                        <TrashIcon width={16} height={16} />
                      </button>
                    </div>
                  ))
                }
              </div>

              <div className={cn("w-full py-[10px] px-[13px] flex items-center justify-between border-t border-black/10", isThereError ? "border-red-500 dark:border-red-900" : "dark:border-dark-border")}>
                <div className="flex items-center gap-1">
                  {isThereError && <CircleAlertIcon width={18} height={18} className="text-red-600" />}
                  <span className="text-small text-text dark:text-dark-gray leading-none">({value?.length}) {value?.length ? "Files" : "File"}</span>
                </div>

                <div className="flex items-center gap-[5px]">
                  <div className="py-[6px] px-[8px] flex items-center gap-[5px] text-text dark:text-dark-gray cursor-pointer hover:bg-black/3 rounded-md hover:bg-red-500 hover:text-white transition-all" onClick={onRemoveAll}>
                    <span className="text-small leading-none">Remove All ({value?.length})</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}