import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";
import { IFilterDataType } from "types";

interface IDataContextType {
  filterData: IFilterDataType;
  setFilterData: Dispatch<SetStateAction<IFilterDataType>>;
  updateFilter: (key: string, value: string | string[]) => void;
  clearFilter: () => void;
}

const DataContext = createContext<IDataContextType | undefined>(undefined);

interface IDataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: IDataProviderProps) => {
  const [filterData, setFilterData] = useState<IFilterDataType>({
    date_from: "",
    date_to: "",
    transaction_type: [],
    transaction_status: [],
  });

  function clearFilter() {
    setFilterData({
      date_from: "",
      date_to: "",
      transaction_type: [],
      transaction_status: [],
    });
  }

  function updateFilter(key: string, value: string | string[]) {
    setFilterData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <DataContext.Provider value={{ filterData, setFilterData, updateFilter, clearFilter }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
