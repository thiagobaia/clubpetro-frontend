import {createContext, useEffect, useState, ReactNode} from "react";
import {api, rest} from "./services/api";
import axios from "axios";

interface IFlag {
    name: string;
    flags:{
        png: string;
    };
}
interface ITransaction {
  id: number;
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

interface TransactionContextData{
    transactionFlag: IFlag[]
    transactions:ITransaction[]
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = (createContext<TransactionContextData>({} as TransactionContextData ))

export const TransactionProvider = ({ children }: TransactionsProviderProps ) => {

    const [transactionFlag, setTransactionFlag] = useState<IFlag[]>([]);
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
        rest.get('/').then(response => setTransactionFlag(response.data))
    }, []);

    useEffect(() => {
        api.get('/cards').then(response => setTransactions(response.data))
    }, []);

    const createTransaction = async (transactionInput: TransactionInput) => {

       const response = await api.post('/cards', transactionInput)
        const { transaction } = response.data;

        setTransactions(
           [
               ...transactions,
               transaction
           ]
       );
    }

    return(

            <TransactionContext.Provider value={{ transactionFlag, transactions, createTransaction }}>
                { children }
            </TransactionContext.Provider>
    )

}
