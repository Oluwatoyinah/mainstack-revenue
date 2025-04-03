export function formatDate(date: string) {
  if (!date) return;
  return new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatTime(date: string) {
  if (!date) return;
  return new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export const removeCharactersAndCapitalize = (str: string) => {
  return str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export function convertFilterDate(dateString: string | Date): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
}

export const filterTransactions = (
  data: any[],
  filters: {
    date_from?: string;
    date_to?: string;
    transaction_type?: string[];
    transaction_status?: string[];
  }
) => {
  return data.filter((transaction) => {
    const transactionDate = new Date(transaction.date);

    if (filters.date_from) {
      const dateFrom = new Date(filters.date_from);
      if (transactionDate < dateFrom) {
        return false;
      }
    }

    if (filters.date_to) {
      const dateTo = new Date(filters.date_to);
      if (transactionDate > dateTo) {
        return false;
      }
    }

    if (filters.transaction_type && filters.transaction_type.length > 0) {
      const mappedTransactionType =
        transaction.type === "deposit" ? "Store Transactions" : transaction.type === "withdrawal" ? "Withdrawals" : "";
      if (!filters.transaction_type.includes(mappedTransactionType)) {
        return false;
      }
    }

    if (filters.transaction_status && filters.transaction_status.length > 0) {
      if (!filters.transaction_status.includes(transaction.status)) {
        return false;
      }
    }

    return true;
  });
};
