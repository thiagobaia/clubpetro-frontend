import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import {FormEvent, useState, useContext} from 'react';
import { TransactionContext } from '../../TransactionContext';
import close from "../../img/icons/close.svg";

interface NewTranslationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTranslationModal = ({
  isOpen,
  onRequestClose,
}: NewTranslationModalProps) => {

  const [pais, setPais] = useState('');
  const [local, setLocal] = useState('');
  const [meta, setMeta] = useState('');

  const { editInfo } = useContext(TransactionContext);

  const handleCreateNewTransaction  = async (event: FormEvent) => {
    event.preventDefault();

    const datas = {pais, local, meta}
    console.log(datas)

    
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
        <input type="text"  value={pais} onChange={event => setPais(event.target.value) }/>
        <input type="text"  value={local} onChange={event => setLocal(event.target.value) }/>
        <input type="text"  value={meta} onChange={event => setMeta(event.target.value) }/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};