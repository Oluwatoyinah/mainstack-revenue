import CustomButton from "@components/dashboard-view/shared/CustomButton";
import { ICONS } from "@constants/index";

const TransactionHeader = ({
  openDrawer,
  length,
  filter_no,
}: {
  openDrawer: () => void;
  length: number;
  filter_no: number;
}) => {
  return (
    <div className="flex gap-3 items-center justify-between">
      <div>
        <h3 className="text-[24px] leading-[32px] font-bold -tracking-[0.2px]">{length} Transactions</h3>
        <p className="text-[14px] leading-[16px] text-[#56616B]">Your transactions for All Time</p>
      </div>
      <div className="flex gap-2 items-center">
        <CustomButton onClick={openDrawer} variant="grey" size="sm" className="flex items-center rounded-full gap-2">
          <span className="flex gap-0.5 items-center">
            <span>Filter </span>

            {filter_no !== 0 && (
              <span className=" text-white p-1 size-4 grid place-content-center text-[12px] leading-[100%] rounded-full bg-black">
                {filter_no}
              </span>
            )}
          </span>
          <span>
            <img src={ICONS.Expand} className="w-[10px]" alt="open" />
          </span>
        </CustomButton>
        <CustomButton variant="grey" size="sm" className="flex items-center rounded-full gap-2">
          <span>Export List</span>
          <span>
            <img src={ICONS.Download} className="w-[10px]" alt="open" />
          </span>
        </CustomButton>
      </div>
    </div>
  );
};

export default TransactionHeader;
