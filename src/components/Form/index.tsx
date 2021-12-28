
import React, {FormEvent, useContext, useEffect, useState} from "react";
import {ContainerForm, BoxForm, Inputs, Select, Buttons, Input2} from "./styles";
import { TransactionContext} from "../../TransactionContext";

import InputMask from "react-input-mask";


export const Form: React.FC  = () => {

  const {createTransaction} = useContext(TransactionContext);

  const { transactionFlag } = useContext(TransactionContext);

  const [pais, setPais] = useState("");
  const [local, setLocal] = useState("");
  const [meta, setMeta] = useState("");

  const handleCreateNewTransaction = async (e: FormEvent) => {

    e.preventDefault();

    await createTransaction({
      pais,
      local,
      meta

    })

    setPais('')
    setLocal('')
    setMeta('')

  }

  return (
    <ContainerForm>
      <BoxForm onSubmit={(e) => handleCreateNewTransaction(e)}>
      <label>Pais</label>
        <Select
          placeholder="Selecione um Pais"
          value={pais}
          name="pais"
          onChange={(event) => setPais(event.target.value)}
        >
          <option value="">Selecione...</option>

          {transactionFlag.map((paises, key) => (
            <option>{paises.name}</option>
          ))}
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
       
        <Buttons type="submit">Adicionar</Buttons>
      </BoxForm>
    </ContainerForm>
  );
};
