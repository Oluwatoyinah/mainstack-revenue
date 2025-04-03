import { fetchTransactions, fetchUsers, fetchWallet } from "@services/dashboard";

const useReqData = () => {
  async function getUserFn() {
    try {
      const response = await fetchUsers();
      return response?.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async function getWalletInfoFn() {
    try {
      const response = await fetchWallet();
      return response?.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async function getTransactionsFn() {
    try {
      const response = await fetchTransactions();
      return response?.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  return { getUserFn, getWalletInfoFn, getTransactionsFn };
};

export default useReqData;
