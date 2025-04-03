import { ITransactionData } from "types";
import TransactionHeader from "./TransactionHeader";
import TransactionRow from "./TransactionRow";
import { useData } from "@context/data-context";
import { filterTransactions } from "@utils/index";

interface ITransactionProp {
  data: ITransactionData[];
  isFetchingTransaction: boolean;
  openDrawer: () => void;
}

const Transaction = ({ data, isFetchingTransaction, openDrawer }: ITransactionProp) => {
  const { filterData } = useData();

  const FILTERED_DATA = filterTransactions(data, filterData);

  const number_of_applied_filter = (data: Record<string, any>): number => {
    return Object.values(data).filter((value) => (Array.isArray(value) ? value.length > 0 : value !== "")).length;
  };

  const filter_count: number = number_of_applied_filter(filterData);
  return (
    <div>
      <TransactionHeader openDrawer={openDrawer} length={FILTERED_DATA?.length} filter_no={filter_count} />

      <div className="my-5 bg-neutral-100 h-[1px] w-full"></div>

      <div>
        {!isFetchingTransaction &&
          data &&
          FILTERED_DATA?.filter(Boolean)?.length !== 0 &&
          FILTERED_DATA.map((el, i) => (
            <div key={`${el} ${i}`} className="py-3">
              <TransactionRow transaction={el} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Transaction;
