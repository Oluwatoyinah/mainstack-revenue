import { ICONS } from "@constants/index";
import { formatDate } from "@utils/index";
import { ITransactionData } from "types";

const TransactionRow = ({ transaction }: { transaction: ITransactionData }) => {
  const { amount, type, date, metadata, status } = transaction ?? {};
  const { name, product_name, type: metaType } = metadata ?? {};

  const isDeposit = type === "deposit";
  const transactionIcon = isDeposit ? ICONS.Received : ICONS.Outgoing;
  const bgColor = isDeposit ? "bg-[#E3FCF2]" : "bg-[#F9E3E0]";

  const transactionTitle =
    type === "withdrawal" ? "Cash Withdrawal" : metaType === "coffee" ? "Buy me a coffee" : product_name;

  const statusColors: Record<string, string> = {
    successful: "text-[#0EA163]",
    pending: "text-[#A77A07]",
    failed: "text-[#961100]",
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={`size-12 ${bgColor} rounded-full grid place-content-center`}>
        <img src={transactionIcon} className="w-[10px]" alt="" />
      </div>

      <div className="flex-grow flex gap-3 items-center justify-between flex-wrap">
        <div className="flex-grow">
          <p className="text-[16px] leading-[24px] font-medium text-[#131316] tracking-[0.3px] mb-1">
            {transactionTitle}
          </p>
          <p
            className={`text-[14px] leading-[16px] tracking-[0.3px] ${
              type === "withdrawal" ? statusColors[status] || "text-gray-500" : "text-[#56616B]"
            }`}
          >
            {type === "withdrawal" ? status : name}
          </p>
        </div>

        <div className="text-end">
          <p className="font-bold text-[16px] leading-[150%]">USD {amount}</p>
          <p className="text-[14px] leading-[16px] font-medium text-[#56616B]">{formatDate(date)}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionRow;
