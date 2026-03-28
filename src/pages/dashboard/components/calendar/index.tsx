import { DatePicker } from "@/components/ui/calendar/date-picker";
import { useState } from "react";

export default function Index(){
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <DatePicker 
        date={date}
        format="ddd, DD MMMM YYYY"
        onChange={(date) => setDate(date)}
        className="w-[280px]"
      />
    </div>
  )
}