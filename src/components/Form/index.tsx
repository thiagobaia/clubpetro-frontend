
import { FormEvent, useState } from "react";
import {ContainerForm, BoxForm, Inputs, Select, Buttons, Input2} from "./styles";
import {api} from "../../services/api";

import InputMask from "react-input-mask";

interface TransactionInput {
  pais: string;
  local: string;
  meta: string;
}

export const Form: React.FC  = () => {


  const [transactions, setTransactions] = useState<TransactionInput[]>([]);

  
  const [pais, setPais] = useState("");
  const [local, setLocal] = useState("");
  const [meta, setMeta] = useState("");


  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    const data =({
      pais,
      local,
      meta,
    });

    const response = await api.post('/cards', data)
    
    const {transaction} = response.data

    setTransactions([
      ...transactions,
      transaction,
  ])

    setPais("");
    setLocal("");
    setMeta("");

  };


  return (
    <ContainerForm>
      <BoxForm onSubmit={handleCreateNewTransaction}>
      <label>Pais</label>
        <Select
          placeholder="Selecione um Pais"
          value={pais}
          name="pais"
          onChange={(event) => setPais(event.target.value)}
        >
          <option value="">Selecione...</option>
        </Select>
        <label>Local</label>
        <Inputs
          placeholder="Digite o local que deseja conhecer"
          value={local}
          onChange={(event) => setLocal(event.target.value)}
        />
        <label >Meta</label>
        <Input2
          as={InputMask}
          placeholder="mês/ano"
          mask="99/9999"
          value={meta}
          onChange={(event: any) => setMeta(event.target.value)}
        />
       
        <Buttons type="submit">Cadastrar</Buttons>
      </BoxForm>
    </ContainerForm>
  );
};
