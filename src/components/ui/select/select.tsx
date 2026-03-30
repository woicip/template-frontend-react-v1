import { useTheme } from "@/context/theme-context";
import { cn } from "@/utils/cn";
import Select, { type OptionProps } from "react-select"

const Option = (props: OptionProps<{ value: string; label: string }>) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      ref={props.innerRef}
      className={cn(
        "w-full py-2.5 px-2.5 rounded-[6px] cursor-pointer hover:text-white", 
        props.isSelected ? "bg-primary-gradient text-white hover:bg-primary" : 
        isDark ? "hover:bg-primary-gradient text-dark-gray" : 
        "hover:bg-primary-gradient text-text hover:text-white"
      )}
      {...props.innerProps}
    >
      {props.children}
    </div>
  )
}

export default function RSelect(){
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
        className="w-[400px] bg-natural-gradient dark:bg-dark-natural-gradient dark:text-dark-gray shadow-primary hover:shadow-hover rounded-[10px] transition-all"
        styles={{
          control: (base, state) => ({
            ...base,
            padding: '10px 12px',
            borderRadius: '10px',
            border: state.isFocused ? '1px solid #5D80EA' : isDark ? '1px solid #303030' : '1px solid #E5E5E5',
          }),
          menuList: (base) => ({
            ...base,
            width: 'full',
            backgroundColor: isDark ? '#1E1E1E' : 'white',
            padding: '4px',  
            borderRadius: '10px',
            border: isDark ? '1px solid #303030' : '1px solid #E5E5E5',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            top: '5px',
          }),
        }}
      />
    </div>
  )
}