import { cn } from "@/utils/cn";
import Select, { type OptionProps } from "react-select"

const Option = (props: OptionProps<{ value: string; label: string }>) => {
  return (
    <div
      ref={props.innerRef}
      className={cn("w-full bg-white py-2.5 px-2.5 rounded-[6px] cursor-pointer", props.isSelected ? "bg-primary text-white hover:bg-primary" : "hover:bg-black/5")}
      {...props.innerProps}
    >
      {props.children}
    </div>
  )
}

export default function RSelect(){
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  
  return (
    <div>
      <Select
        unstyled
        isClearable
        options={options}
        components={{ Option }}
        placeholder="Select an option"
        className="w-[400px] natural-gradient shadow-primary hover:shadow-hover rounded-[10px] transition-all"
        styles={{
          control: (base, state) => ({
            ...base,
            padding: '10px 12px',
            borderRadius: '10px',
            border: state.isFocused ? '1px solid #5D80EA' : '1px solid #E5E5E5',
          }),
          menuList: (base) => ({
            ...base,
            width: 'full',
            backgroundColor: 'white',
            padding: '4px',  
            borderRadius: '10px',
            border: '1px solid #E5E5E5',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            top: '5px',
          }),
        }}
      />
    </div>
  )
}