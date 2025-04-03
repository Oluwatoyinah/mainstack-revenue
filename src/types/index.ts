export interface IMetadata {
  name: string;
  type: string;
  email: string;
  quantity?: number;
  country: string;
  product_name?: string;
}

export interface ITransactionData {
  amount: number;
  metadata?: IMetadata;
  payment_reference?: string;
  status: "successful" | "failed";
  type: "deposit" | "withdrawal";
  date: string;
}


export interface IFilterDataType {
  date_from: string;
  date_to: string;
  transaction_type: string[];
  transaction_status: string[];
}