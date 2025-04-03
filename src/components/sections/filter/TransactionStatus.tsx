import CustomCheckbox from "@components/dashboard-view/shared/CustomCheckbox";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import { ICONS } from "@constants/index";

const TransactionStatus = ({
  selectedStatus,
  setSelectedStatus,
}: {
  selectedStatus: string[];
  setSelectedStatus: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="py-3.5 bg-[#EFF1F6] w-full border-[3px] border-transparent trans outline-none rounded-[12px] px-4 flex gap-2 items-center text-start justify-between">
          <span>
            {selectedStatus?.map((el) => (
              <span key={`list${el}`}>
                {el}, {""}
              </span>
            ))}
          </span>
          <span>
            <img src={ICONS.Expand} alt="" />
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-[400px] popup-shadow border-0 p-3 radius-[12px]">
        <div className="w-full min-h-25 rounded">
          {["pending", "successful", "failed"].map((status) => (
            <CustomCheckbox
              key={status}
              label={status}
              value={selectedStatus}
              status={status}
              setValue={setSelectedStatus}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TransactionStatus;
