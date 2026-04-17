import dayjs from "dayjs";
import { cn } from "@/utils/cn";
import { twMerge } from "tailwind-merge";
import { Button } from "../button/button";
import { useContextDropdown } from "@/hooks/use-context-dropdown";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useMemo, useRef, useState, type ButtonHTMLAttributes, type DetailedHTMLProps } from "react";
import { DropdownButton, type DropdownOptionValue } from "@/components/ui/button/dropdown-button";
import { MONTHS } from "@/constants/date";

interface DateItemProps {
  date?: Date;
  isHoliday?: boolean;
  isCurrentMonth?: boolean;
  isSelectedDate?: boolean;
  isSelectedStart?: boolean;
  isSelectedEnd?: boolean;
  startDate?: Date;
  endDate?: Date;
  threshold?: Date;
  children?: React.ReactNode;
  hide?: boolean;
  onChange?: (date: Date) => void;
  onThresholdChange?: (date: Date) => void;
}

interface DatePickerProps {
  date?: Date;
  format?: string;
  className?: string;
  dateRange?: boolean
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  onChange?: (date: Date) => void;
  onRangeChange?: (props: { startDate: Date | undefined, endDate: Date | undefined }) => void;
}

interface SingleDatePickerProps {
  date?: Date;
  format?: string;
  className?: string;
  onChange?: (date: Date) => void;
}

interface DateRangePickerProps extends DatePickerProps {
  
}

interface MonthPickerProps {
  month: number;
  onChangeMonth: (month: DropdownOptionValue) => void;
}

interface YearPickerProps {
  year: number;
  onChangeYear: (value: number) => void;
}

const CURR_YEAR = new Date().getFullYear();
const CURR_MONTH = new Date().getMonth();
const DAYS = [
  { label: "Su", dayOff: true },
  { label: "Mo", dayOff: false },
  { label: "Tu", dayOff: false },
  { label: "We", dayOff: false },
  { label: "Th", dayOff: false },
  { label: "Fr", dayOff: false },
  { label: "Sa", dayOff: true },
]

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
}

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
}

const getCurrentDate = () => {
  const dt = new Date();
  dt.setHours(0, 0, 0, 0);
  return dt;
}

const getNextDate = () => {
  const dt = new Date();
  dt.setHours(0, 0, 0, 0);
  dt.setMonth(dt.getMonth() + 1);
  return dt;
}

function DateItem({ 
  date,
  isHoliday = false, 
  isCurrentMonth = true, 
  isSelectedDate, 
  isSelectedStart,
  isSelectedEnd,
  startDate,
  endDate,
  children,
  threshold,
  hide,
  onChange,
  onThresholdChange,
}: DateItemProps){
  const ref = useRef<HTMLDivElement>(null);
  if(hide) return <div></div>
  return (
    <div 
      ref={ref}
      className={cn(
        "w-[38px] h-[38px] flex items-center justify-center text-[15px] cursor-pointer text-center rounded-lg",
        isHoliday && "text-[#FF3A3A]",
        !isCurrentMonth ? "opacity-50 cursor-default hover:bg-black/10 hover:dark:bg-white/10" : `hover:bg-black/10 hover:dark:bg-white/10`,
        isSelectedDate && "bg-primary-gradient text-white",
        isSelectedStart && "bg-primary-gradient text-white",
        isSelectedEnd && "bg-primary-gradient text-white",
        date! > startDate! && date! < threshold! && !endDate && "bg-primary/10 dark:bg-primary/15",
        date! > startDate! && date! < endDate! && "bg-primary/10 dark:bg-primary/15",
      )}
      onClick={() => onChange?.(date as Date)}
      onMouseOver={() => onThresholdChange?.(date as Date)}
    >
      {children}
    </div>
  )
}

function YearPicker(props: YearPickerProps){
  const [yearSelected, setYearSelected] = useState(new Date().getFullYear());
  const { open, ref, subRef: dropdownRef, openDropdown, closeDropdown } = useContextDropdown();

  const ButtonPagination = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => (
    <button 
      type="button" 
      className="w-[32px] h-[32px] p-[5px] dark:bg-dark-natural-gradient-2 rounded-[10px] flex items-center justify-center border border-black/10 dark:border-dark-border cursor-pointer hover:bg-black/3 hover:dark:bg-white/5"
      {...props}
    >
      {props.children}
    </button>
  )

  const onChange = (year: number) => {
    props.onChangeYear(year);
    closeDropdown();
  }
  
  const YEARS = useMemo(() => {
    const range = 10;
    const offset = 1;
    const baseYear = Math.floor((yearSelected - offset) / range) * range + offset;
    const years = Array.from({ length: range }, (_, i) => baseYear + i);
    return years;
  }, [yearSelected]);

  const onPrevYear = () => {
    setYearSelected(yearSelected - 10);
  }

  const onNextYear = () => {
    setYearSelected(yearSelected + 10);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => open ? closeDropdown : openDropdown}
        className={cn("py-[4px] px-[8px] font-semibold text-text dark:text-dark-gray rounded-[6px] cursor-pointer transition-all hover:bg-black/5 hover:dark:bg-white/5", open && "bg-black/5 dark:bg-white/5")}
      >
        {props.year || "-"}
      </button>
      
      { open && 
        <div 
          ref={dropdownRef} 
          className="w-[230px] flex flex-col gap-[10px] bg-natural-gradient dark:bg-dark-natural-gradient border border-black/10 dark:border-dark-border py-[10px] px-[11px] rounded-[8px] absolute right-0 top-[38px] shadow-primary z-10 origin-top-right"
        >
          <div className="flex items-center justify-between">
            <ButtonPagination onClick={onPrevYear}>
              <ChevronLeftIcon width={18} height={18} />
            </ButtonPagination>
            <span className="whitespace-nowrap font-semibold">{YEARS[0]} - {YEARS[YEARS.length-1]}</span>
            <ButtonPagination onClick={onNextYear}>
              <ChevronRightIcon width={18} height={18} />
            </ButtonPagination>
          </div>

          <div className="grid grid-cols-2 grid-rows-5 gap-x-[16px] gap-y-[5px]">
            {
              YEARS.map((y) => (
                <button
                  key={y}
                  type="button"
                  className={cn("py-[4px] px-[6px] hover:bg-black hover:text-white hover:dark:bg-background hover:dark:text-[#333333] transition-all rounded-[10px] cursor-pointer", props.year === y && "bg-black text-white dark:bg-background dark:text-[#333333]")}
                  onClick={() => onChange(y)}
                >
                  {y}
                </button>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

function MonthPicker(props: MonthPickerProps){
  const onPrevMonth = () => {
    props.onChangeMonth(MONTHS[props.month - 1 < 0 ? 11 : props.month - 1])
  }

  const onNextMonth = () => {
    props.onChangeMonth(MONTHS[props.month + 1 > 11 ? 0 : props.month + 1])
  }

  return (
    <div className="flex items-center">
      <button 
        type="button" 
        className="hover:bg-black/5 hover:dark:bg-white/5 p-[7px] rounded-[10px] flex items-center justify-center cursor-pointer"
        onClick={onPrevMonth}
      >
        <ChevronLeftIcon width={18} height={18} className="dark:text-dark-gray" />
      </button>
      <DropdownButton
        options={MONTHS}
        onChange={props.onChangeMonth}
        dropdownClassName="w-[200px] top-8 origin-top-left"
        render={({ isActive }) => (
          <button
            type="button"
            className={cn("py-[4px] px-[8px] font-semibold text-text dark:text-dark-gray rounded-[6px] cursor-pointer transition-all", isActive ? "bg-black/5 dark:bg-white/5" : "hover:bg-black/5 hover:dark:bg-white/5")}
          >
            {MONTHS[props.month].label || "-"}
          </button>
        )}
      />
      <button 
        type="button" 
        className="hover:bg-black/5 hover:dark:bg-white/5 p-[7px] rounded-[10px] flex items-center justify-center cursor-pointer"
        onClick={onNextMonth}
      >
        <ChevronRightIcon width={18} height={18} className="dark:text-dark-gray" />
      </button>
    </div>
  )
}

function useCalendarCells(year: number, month: number){
  const getBeforeDates = useMemo(() => {
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const cells = [];

    for (let i = 0; i < firstDay; i++){
      const day = daysInPrevMonth - firstDay + 1 + i;
      const data = { isCurrentMonth: false, isHoliday: false, date: new Date(year, month - 1, day) }
      cells.push(data);
    }

    return cells;
  }, [year, month])

  const dates = useMemo(() => {
    const totalDays = getDaysInMonth(year, month)
    const dates = Array(totalDays)
      .fill(undefined)
      .map((_, i) => ({
        isCurrentMonth: true,
        isHoliday: false,
        date: new Date(year, month, (i+1))
      }))
    return dates
  }, [month, year])

  const getNextDates = useMemo(() => {
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);
    const cellsLength = getBeforeDates.length + dates.length;
    
    const cells = [];

    const totalCells = cellsLength % 7 === 0 ? cellsLength : cellsLength + (7 - cellsLength % 7);

    const trailing = totalCells - firstDay - daysInMonth;
    for (let i = 1; i <= trailing; i++){
      const data = { isCurrentMonth: false, isHoliday: false, date: new Date(year, month+1, i) }
      cells.push(data);
    }

    return cells;
  }, [dates, month, year]);

  const cells = useMemo(() => {
    return [...getBeforeDates, ...dates, ...getNextDates]
  }, [getBeforeDates, dates, getNextDates])

  return {
    cells,
  }
}

function SingleDatePicker(props: SingleDatePickerProps){
  const [month, setMonth] = useState<number>(CURR_MONTH);
  const [year, setYear] = useState<number>(CURR_YEAR);

  const dt = props.date
  dt?.setHours(0, 0, 0, 0);
  const [selectedDate, setSelecteDate] = useState(dt);

  const { cells } = useCalendarCells(year, month);

  const onChangeMonth = (month: DropdownOptionValue) => {
    const MONTH = MONTHS.findIndex((item) => item.value === month.value);
    setMonth(MONTH);
  }

  const onChangeYear = (year: number) => {
    setYear(year);
  }

  const onChange = (date: Date) => {
    setSelecteDate(date)
  }

  const { open, ref, subRef } = useContextDropdown();

  return (
    <div ref={ref} className={cn("w-[280px] flex flex-col gap-2 relative", props.className)}>
      <Button type="button" variant={"secondary"} className="w-full flex items-start justify-start rounded-xl">
        <div className="w-full flex items-center justify-end gap-2">
          <CalendarIcon width={18} height={18} />
          <span>
            {dayjs(selectedDate).format(props.format || 'DD MMM YYYY')}
          </span>
        </div>
      </Button>

      { open ? (
          <div ref={subRef} className="w-[280px] rounded-[10px] bg-natural-gradient dark:bg-dark-natural-gradient border border-black/10 dark:border-dark-border shadow-primary origin-top-left absolute top-[45px] z-10">
            <div className="pt-[10px] px-[10px] border-b border-black/10 dark:border-dark-border">
              <div className="flex items-center justify-between relative">
                <MonthPicker month={month} onChangeMonth={onChangeMonth} />
                <YearPicker year={year} onChangeYear={onChangeYear} />
              </div>

              <div className="grid grid-cols-7 gap-0">
                {
                  DAYS.map((d) => (
                    <div key={d.label} className={twMerge("w-full p-[10px] text-[13.3px] hover:bg-black/3", d.dayOff ? "text-red-600" : "")}>{d.label}</div>
                  ))
                }
              </div>
            </div>

            <div className="p-[10px] grid grid-cols-7 gap-0">
              {
                cells.map((item) => (
                  <DateItem 
                    key={item.date.getTime()}
                    date={item.date}
                    isCurrentMonth={item.isCurrentMonth}
                    isHoliday={item.date.getDay() === 0 || item.date.getDay() === 6}
                    isSelectedDate={item.date.getTime() === selectedDate?.getTime()}
                    onChange={onChange}
                  >
                    {item.date.getDate()}
                  </DateItem>
                ))
              }
            </div>
          </div>
        ) : (null)
      }
    </div>
  )
}

function DateRangePicker(props: DateRangePickerProps){
  const { open, ref, subRef } = useContextDropdown();

  const [firstMonth, setFirstMonth] = useState<Date>(getCurrentDate());
  const [secondMonth, setSecondMonth] = useState<Date>(getNextDate());

  const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(undefined);
  const [threshold, setThreshold] = useState<Date|undefined>(undefined);

  const { cells: startCells } = useCalendarCells(firstMonth?.getFullYear(), firstMonth?.getMonth());
  const { cells: endCells } = useCalendarCells(secondMonth?.getFullYear(), secondMonth?.getMonth());

  const onThresholdChange = (date: Date) => {
    setThreshold(date);
  }

  const onChangeStart = (date: Date) => {
    setSelectedStartDate(date);
  }

  const onChangeEnd = (date: Date | undefined) => {
    if(!date) setSelectedEndDate(undefined);
    if(date! < selectedStartDate!){
      setSelectedStartDate(date);
      setSelectedEndDate(undefined);
      return;
    }
    setSelectedEndDate(date);
  }

  const onChange = (date: Date) => {
    if(!selectedStartDate && !selectedEndDate){
      onChangeStart(date);
      return
    }

    if(selectedStartDate && !selectedEndDate){
      onChangeEnd(date)
      return
    }

    if(!!selectedStartDate && !!selectedEndDate){
      onChangeStart(date);
      onChangeEnd(undefined);
      return
    }
  }

  const onPrevMonth = () => {
    const dtFirst = new Date(firstMonth);
    dtFirst.setMonth(dtFirst.getMonth() - 1);
    setFirstMonth(dtFirst);

    const dtSecond = new Date(secondMonth);
    dtSecond.setMonth(dtSecond.getMonth() - 1);
    setSecondMonth(dtSecond);
  }

  const onNextMonth = () => {
    const dtFirst = new Date(firstMonth);
    dtFirst.setMonth(dtFirst.getMonth() + 1);
    setFirstMonth(dtFirst);

    const dtSecond = new Date(secondMonth);
    dtSecond.setMonth(dtSecond.getMonth() + 1);
    setSecondMonth(dtSecond);
  }

  return (
    <div ref={ref} className={cn("w-fit flex flex-col gap-2 relative", props.className)}>
      <Button type="button" variant={"secondary"} className="w-fit flex items-center justify-between relative">
        <div className="w-full flex items-center justify-end gap-2">
          <CalendarIcon width={18} height={18} />
          <div className="whitespace-nowrap">
            {selectedStartDate ? dayjs(selectedStartDate).format(props.format || 'DD MMM YYYY') : 'Select Date'}
          </div>
        </div>

        <div className="w-fit mx-2 dark:text-white/50">-</div>

        <div className="w-full flex items-center justify-end gap-2">
          <CalendarIcon width={18} height={18} />
          <div className="whitespace-nowrap">
            {selectedEndDate ? dayjs(selectedEndDate).format(props.format || 'DD MMM YYYY') : 'Select Date'}
          </div>
        </div>
      </Button>

      {
        open && (
          <div ref={subRef} className="w-[600px] rounded-[10px] bg-natural-gradient dark:bg-dark-natural-gradient border border-black/10 dark:border-dark-border shadow-primary origin-top-left absolute top-[46px]">
            <div className="flex items-start">
              <div>
                <div className="py-[10px] pb-[0px] px-[20px] flex items-center justify-between">
                  <button 
                    type="button" 
                    className="p-[6px] cursor-pointer border border-transparent hover:border-black/10 dark:hover:border-white/10 rounded-[8px] transition-all hover:bg-black/5 hover:dark:bg-white/5" 
                    onClick={onPrevMonth}
                  >
                    <ChevronLeftIcon width={20} height={20} />
                  </button>
                  <p>{MONTHS[firstMonth?.getMonth()!]?.label} {firstMonth?.getFullYear()!}</p>
                  <div  className="pl-[30px]"></div>
                </div>
                
                <div className="px-[10px] border-b border-black/10 dark:border-dark-border">
                  <div className="grid grid-cols-7 gap-0">
                    {
                      DAYS.map((d) => (
                        <div key={d.label} className={twMerge("w-full p-[10px] text-[13.3px]", d.dayOff ? "text-red-600" : "")}>{d.label}</div>
                      ))
                    }
                  </div>
                </div>

                <div className="p-[10px] grid grid-cols-7 gap-0">
                  {
                    startCells.map((item) => (
                      <DateItem 
                        key={item.date.getTime()}
                        date={item.date}
                        hide={!item.isCurrentMonth}
                        isCurrentMonth={item.isCurrentMonth}
                        isHoliday={item.date.getDay() === 0 || item.date.getDay() === 6}
                        isSelectedStart={selectedStartDate?.getTime() === item.date.getTime()}
                        isSelectedEnd={selectedEndDate?.getTime() === item.date.getTime()}
                        startDate={selectedStartDate}
                        endDate={selectedEndDate}
                        threshold={threshold}
                        onChange={onChange}
                        onThresholdChange={onThresholdChange}
                      >
                        {item.date.getDate()}
                      </DateItem>
                    ))
                  }
                </div>
              </div>

              <div>
                <div className="py-[10px] pb-[0px] px-[20px] flex items-center justify-between">
                  <div  className="pl-[30px]"></div>
                  <p>{MONTHS[secondMonth?.getMonth()!]?.label} {secondMonth?.getFullYear()!}</p>
                  <button 
                    type="button" 
                    className="p-[6px] cursor-pointer border border-transparent hover:border-black/10 dark:hover:border-white/10 rounded-[8px] transition-all hover:bg-black/5 hover:dark:bg-white/5"
                    onClick={onNextMonth}
                  >
                    <ChevronRightIcon width={20} height={20} />
                  </button>
                </div>

                <div className="px-[10px] border-b border-black/10 dark:border-dark-border">
                  <div className="grid grid-cols-7 gap-0">
                    {
                      DAYS.map((d) => (
                        <div key={d.label} className={twMerge("w-full p-[10px] text-[13.3px]", d.dayOff ? "text-red-600" : "")}>{d.label}</div>
                      ))
                    }
                  </div>
                </div>

                <div className="p-[10px] grid grid-cols-7 gap-0">
                  {
                    endCells.map((item) => (
                      <DateItem 
                        key={item.date.getTime()}
                        date={item.date}
                        hide={!item.isCurrentMonth}
                        isCurrentMonth={item.isCurrentMonth}
                        isHoliday={item.date.getDay() === 0 || item.date.getDay() === 6}
                        isSelectedStart={selectedStartDate?.getTime() === item.date.getTime()}
                        isSelectedEnd={selectedEndDate?.getTime() === item.date.getTime()}
                        startDate={selectedStartDate}
                        endDate={selectedEndDate}
                        threshold={threshold}
                        onChange={onChange}
                        onThresholdChange={onThresholdChange}
                      >
                        {item.date.getDate()}
                      </DateItem>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export function DatePicker({ dateRange, ...props }: DatePickerProps){
  if(dateRange){
    return <DateRangePicker {...props} />
  } else {
    return <SingleDatePicker {...props} />
  }
}