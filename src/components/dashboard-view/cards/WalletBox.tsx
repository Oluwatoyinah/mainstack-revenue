import { ICONS } from "@constants/index";

const WalletBox = ({
  title,
  hasInfo = true,
  price_value,
}: {
  title: string;
  hasInfo?: boolean;
  price_value: string | number;
}) => {
  return (
    <div>
      <div className="flex gap-2 justify-between items-center mb-1">
        <p className="tracking-[0.4px] leading-[16px] text-[14px]">{title}</p>
        {hasInfo && (
          <button>
            <img src={ICONS.Info} className="w-[16px]" alt="info" />
          </button>
        )}
      </div>

      <h2 className="font-bold text-[28px] leading-[38px]">
        USD {price_value && Number(price_value)?.toLocaleString("en-US")}
      </h2>
    </div>
  );
};

export default WalletBox;
