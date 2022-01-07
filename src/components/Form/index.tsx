import React, {FormEvent, useContext, useState } from "react";
import {
  ContainerForm,
  BoxForm,
  Inputs,
  Select,
  Buttons,
  Input2,
} from "./styles";


type FormValues = {
  pais: string,
  local: string,
  meta: string
};

// Validate
import {schema} from "./validate";
import { useForm, SubmitHandler } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import { TransactionContext } from "../../TransactionContext";
import InputMask from "react-input-mask";

export const Form: React.FC = () => {
  const { createTransaction } = useContext(TransactionContext);

  const { transactionFlag } = useContext(TransactionContext);

  const [pais, setPais] = useState("");
  const [local, setLocal] = useState("");
  const [meta, setMeta] = useState("");
  const {register, handleSubmit, formState} = useForm<FormValues>({
    resolver: yupResolver(schema)
});

  const {errors} = formState

  const handleCreateNewTransaction: SubmitHandler<FormValues> = async () => {
   

    await createTransaction({
      pais,
      local,
      meta,
    });

    setPais("");
    setLocal("");
    setMeta("");
  };

  return (
    <ContainerForm>
      <BoxForm onSubmit={handleSubmit(handleCreateNewTransaction)}>

        <label>Pais</label>
        <Select
          placeholder="Selecione um Pais"
          value={pais}
          {...register("pais")}
          onChange={(event) => setPais(event.target.value)}
        >
          <option value="">Selecione...</option>

          {transactionFlag.map((paises, key) => (
            <React.Fragment key={key}>
              <option>{paises.name}</option>
            </React.Fragment>
          ))}
        </Select>
        


        <label>Local</label>
        <Inputs
          placeholder="Digite o local que deseja conhecer"
          value={local}
          {...register("local")}
          onChange={(event) => setLocal(event.target.value)}
        />



        <label>Meta</label>
        <InputMask
          placeholder="mês/ano"
          mask="99/9999"
          value={meta}
          {...register("meta")}
          onChange={(event: any) => setMeta(event.target.value)}
        >
          {(inputProps: any) => <Input2 {...inputProps} />}
        </InputMask>

        <Buttons type="submit">Adicionar</Buttons>
      </BoxForm> 
    </ContainerForm>
  );
};
