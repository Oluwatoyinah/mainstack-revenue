import { publicApi } from "@api/axios";

export const fetchUsers = () => {
  return publicApi.get(`/user`);
};

export const fetchWallet = () => {
  return publicApi.get(`/wallet`);
};

export const fetchTransactions = () => {
  return publicApi.get(`/transactions`);
};
