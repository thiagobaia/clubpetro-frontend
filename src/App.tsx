import { Form } from "./components/Form";
import { Card } from "./components/Card";
import { NewTranslationModal } from "./components/NewTranslationModal";
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from "./TransactionContext";
import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
  useState(false);

function handleOpenNewTransactionModal() {
  setIsNewTransactionModalOpen(true);
}

function handleCloseNewTransactionModal() {
  setIsNewTransactionModalOpen(false);
}
  return (
    <TransactionProvider>
      <Form />
      <Card onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTranslationModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
