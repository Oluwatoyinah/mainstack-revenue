import { Calendar } from "@components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import { ICONS } from "@constants/index";
import { convertFilterDate } from "@utils/index";
import { useState } from "react";
const DateSelect = ({
  type,
  updateFn,
  filter_date,
}: {
  type: string;
  updateFn: (key: string, value: string | string[]) => void;
  filter_date: string;
}) => {
  const [date, setDate] = useState<Date>();

  function chooseDate(val: Date | any) {
    setDate(val);
    let filter_date = convertFilterDate(val);
    updateFn(type, filter_date);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="py-3.5 bg-[#EFF1F6] border-[3px] border-transparent trans outline-none rounded-[12px] px-4  flex gap-2 items-center justify-between">
          <span>{filter_date}</span>
          <span>
            <img src={ICONS.Expand} alt="" />
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto popup-shadow border-0 p-8 radius-[16px]">
        <Calendar mode="single" selected={date} onSelect={(vl) => chooseDate(vl)} initialFocus />
      </PopoverContent>
    </Popover>
  );
};

export default DateSelect;
