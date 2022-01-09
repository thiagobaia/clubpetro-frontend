import Modal from 'react-modal';
import { Container} from './styles';
import {FormEvent, useState, useContext} from 'react';
import { TransactionContext } from '../../TransactionContext';
import close from "../../img/icons/close.svg";
import React from 'react';

interface NewTranslationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTranslationModal = ({
  isOpen,
  onRequestClose,
}: NewTranslationModalProps) => {


  const { editInfo, itemestado, transactionFlag} = useContext(TransactionContext);


  const [pais, setPais] = useState('');
  const [local, setLocal] = useState('');
  const [meta, setMeta] = useState('');



  const handleCreateNewTransaction  = async (event: FormEvent) => {
    event.preventDefault();

    const datas  = {id: itemestado.id, pais, local, meta}


    await editInfo(datas)


    setPais('');
    setLocal('')
    setMeta('')

    onRequestClose();
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={close} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transações</h2>
        <label>Pais</label>
        <select
          placeholder="Selecione um Pais"
          value={pais}
          onChange={(event) => setPais(event.target.value)}
        >
          <option value="">Selecione...</option>
          {transactionFlag.map((paises, key) => (
            <React.Fragment key={key}>
              <option>{paises.name}</option>
            </React.Fragment>
          ))}
        </select>
        <label>Local</label>
        <input type="text"  value={local} onChange={event => setLocal(event.target.value) }/>
        <label>Meta</label>
        <input type="text"  value={meta} onChange={event => setMeta(event.target.value) }/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};