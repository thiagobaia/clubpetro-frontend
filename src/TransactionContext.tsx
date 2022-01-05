import { createContext, useEffect, useState, ReactNode } from "react";
import { api, rest } from "./services/api";

interface IFlag {
  name: string;
  flags: {
  png: string;
  };
}
interface ITransaction {
  id?: number;
  pais: string;
  local: string;
  meta: string;
}

interface TransactionInput {
  pais: string;
  local: string;
  meta: string;
}
interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactionFlag: IFlag[];
  transactions: ITransaction[];
  removeTransaction: (id: number) => void;
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionProvider = ({
  children,
}: TransactionsProviderProps): JSX.Element => {
  const [transactionFlag, setTransactionFlag] = useState<IFlag[]>([]);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    rest.get("/").then((response) => setTransactionFlag(response.data));
  }, []);

  useEffect(() => {
    api.get("/cards").then((response) => setTransactions(response.data));
  }, []);

  const createTransaction = async (transactionInput: ITransaction) => {
    await api.post("/cards", transactionInput);
    
    const transactions = await api.get<ITransaction[]>("/cards");

    setTransactions(transactions.data);
  };

  

  const removeTransaction = async (id: number) => {
    const dados = [...transactions];

    await api.delete(`/cards/${id}`);

    const nova = dados.filter((cont) => {
      return cont.id !== id;
    });

    setTransactions(nova);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactionFlag,
        transactions,
        createTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
