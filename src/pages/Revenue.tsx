import WalletBox from "@components/dashboard-view/cards/WalletBox";
import { DashboardChart } from "@components/dashboard-view/charts/DashboardChart";
import CustomButton from "@components/dashboard-view/shared/CustomButton";
import Spinner from "@components/dashboard-view/shared/Spinner";
import FilterDrawer from "@components/sections/filter/FilterDrawer";
import Transaction from "@components/sections/transactions/Transaction";
import { DataProvider } from "@context/data-context";
import useReqData from "@hooks/data-hook";
import { useQueries } from "@tanstack/react-query";
import { removeCharactersAndCapitalize } from "@utils/index";
import { useState } from "react";

const Revenue = () => {
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);
  const { getWalletInfoFn, getTransactionsFn } = useReqData();

  const REQUESTS_ARR = [
    {
      key: "wallet",
      func: getWalletInfoFn,
    },

    {
      key: "transactions",
      func: getTransactionsFn,
    },
  ];

  const results = useQueries({
    queries: REQUESTS_ARR.map(({ key, func }) => ({
      queryKey: [key],
      queryFn: func,
      staleTime: 5 * 60 * 1000, // 5mins
      cacheTime: 5 * 60 * 1000, // 5mins
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    })),
  });

  const { data: WALLET, isFetching: isFetchingWallet } = results[0] ?? {};
  const { data: ALL_TRANSACTIONS, isFetching: isFetchingTransactions } = results[1] ?? {};

  interface IWallet {
    title: string;
    value: number;
  }

  const WALLET_ARR: IWallet[] =
    !isFetchingWallet &&
    WALLET &&
    Object.entries(WALLET).map(([key, value]) => ({
      title: removeCharactersAndCapitalize(key),
      value: value,
    }));

  const BALANCE_DATA: IWallet =
    !isFetchingWallet && WALLET_ARR
      ? WALLET_ARR.find((el) => el?.title === "Balance") || { title: "Balance", value: 0 }
      : { title: "Balance", value: 0 };

  return (
    <>
      <DataProvider>
        {isFetchingTransactions || isFetchingWallet ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div>
            <div className="w-full flex gap-16 mb-12">
              <div className="w-3/4 flex flex-col gap-5">
                <div className="flex items-center gap-16 flex-wrap">
                  <div>
                    <div className="flex gap-2 justify-between items-center mb-3">
                      <p className="tracking-[0.4px] leading-[16px] text-[14px]">Available Balance</p>
                    </div>

                    <h2 className="font-bold text-[36px] leading-[48px]">USD {BALANCE_DATA?.value || "0.00"}</h2>
                  </div>
                  <div>
                    <CustomButton className="rounded-full">
                      <span className="p-3 text-[13px]">Withdraw</span>
                    </CustomButton>
                  </div>
                </div>

                <div className="min-h-10 flex-grow ">
                  <DashboardChart />
                </div>
              </div>
              <div className="w-1/4">
                {!isFetchingWallet &&
                  WALLET_ARR &&
                  WALLET_ARR?.filter(Boolean)?.length !== 0 &&
                  WALLET_ARR?.filter((_) => _?.title !== "Balance")?.map((el, i) => (
                    <div className="mb-10" key={`${el?.title} ${i}`}>
                      <WalletBox title={el?.title} price_value={el?.value} />
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <Transaction
                data={ALL_TRANSACTIONS}
                isFetchingTransaction={isFetchingTransactions}
                openDrawer={() => setOpenFilterDrawer(true)}
              />
            </div>
          </div>
        )}
        <FilterDrawer active={openFilterDrawer} closeDrawer={() => setOpenFilterDrawer(false)} />
      </DataProvider>
    </>
  );
};

export default Revenue;
