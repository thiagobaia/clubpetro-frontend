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
  itemestado: ITransaction[];
  getId: (id: number) => void;
  editInfo: (sets: ITransaction) => void;
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
  const [itemestado, setItemestado] = useState<ITransaction[]>([]);

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

  const editInfo = async (sets: ITransaction) => {
    const datas = { pais: sets.pais, local: sets.local, meta: sets.meta };

    await api.put(`/cards/${sets.id}`, datas);

    const transactions = await api.get<ITransaction[]>("/cards");

    setTransactions(transactions.data);
  };

  const getId = async (id: number) => {
    const response = await api.get(`/cards/${id}`);

    setItemestado({ id, ...response.data });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactionFlag,
        transactions,
        createTransaction,
        removeTransaction,
        editInfo,
        getId,
        itemestado,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
