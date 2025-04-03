import DateSelect from "@components/dashboard-view/form/DateSelect";
import { ICONS } from "@constants/index";
import TransactionType from "./TransactionType";
import TransactionStatus from "./TransactionStatus";
import CustomButton from "@components/dashboard-view/shared/CustomButton";
import { useData } from "@context/data-context";
import { useState } from "react";

const FilterDrawer = ({ active, closeDrawer }: { active: boolean; closeDrawer: () => void }) => {
  const { filterData, updateFilter, clearFilter } = useData();
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedTransactionType, setSelectedTransactionType] = useState<string[]>([]);

  const applyFilterFn = (): void => {
    updateFilter("transaction_type", selectedTransactionType);
    updateFilter("transaction_status", selectedStatus);
    closeDrawer();
  };

  function resetFn() {
    clearFilter();
    setSelectedStatus([]);
    setSelectedTransactionType([]);
  }
  return (
    <div className={`filter-box w-screen h-screen p-3 px-5 fixed top-0 left-0 trans z-5  ${active ? "active" : ""}`}>
      <div className="filter-content-box w-[90%] max-w-[456px] bg-white p-5 flex flex-col">
        <div className="flex gap-3 justify-between items-center">
          <h3 className="text-[24px] leading-[120%] font-bold flex-grow">Filter</h3>
          <button onClick={closeDrawer} className="cursor-pointer">
            <img src={ICONS.Close} alt="" />
          </button>
        </div>

        <div className="mt-5 flex-grow">
          <div className="flex gap-2 items-center flex-wrap mb-5">
            {["Today", "Last 7 days", "This month", "Last 3 months"].map((el) => (
              <CustomButton variant="outline" size="sm" className="rounded-full">
                {el}
              </CustomButton>
            ))}
          </div>
          <div className="mb-5">
            <label htmlFor="" className="tracking-[0.3px] mb-1">
              Date Range
            </label>
            <div className="grid grid-cols-2 gap-3">
              <DateSelect type="date_from" filter_date={filterData?.date_from} updateFn={updateFilter} />{" "}
              <DateSelect type="date_to" filter_date={filterData?.date_to} updateFn={updateFilter} />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="" className="tracking-[0.3px] mb-1">
              Transaction Type
            </label>
            <div className="">
              <TransactionType
                selectedTransactionType={selectedTransactionType}
                setSelectedTransactionType={setSelectedTransactionType}
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="" className="tracking-[0.3px] mb-1">
              Transaction Status
            </label>
            <div className="">
              <TransactionStatus selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <CustomButton onClick={resetFn} variant="outline" className="rounded-full w-full">
            Clear
          </CustomButton>
          <CustomButton onClick={() => applyFilterFn()} variant="black" className="rounded-full w-full">
            Apply
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
