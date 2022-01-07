import React, { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";
import {
  Cards,
  CardItem,
  ImgContainer,
  ContainerFlag,
  IconContainer,
} from "./style";
import pen from "../../img/icons/pen.svg";
import close from "../../img/icons/close.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Card = ({onOpenNewTransactionModal}: HeaderProps) => {

  const { transactionFlag } = useContext(TransactionContext);
  const { transactions } = useContext(TransactionContext);
  const { removeTransaction } = useContext(TransactionContext);
  const { editInfo } = useContext(TransactionContext);

  // Functions App

  const DeleteCard = async (id: any) => {
    await removeTransaction(id)
  };

  const EditCard = async (id: any) => {
    onOpenNewTransactionModal()
    await editInfo(id)
  };

  return (
    <Cards>
      {transactions.map((option, key) =>
        transactionFlag
          .filter(({ name }) => name === option.pais)
          .map((flags) => (
            <CardItem key={key}>
              <div>
                <ImgContainer>
                  <img src={flags.flags.png} alt="logo" />
                </ImgContainer>

                <IconContainer>
                  <IconContainer>
                    <i onClick={() => EditCard(option.id)}>
                      <img src={pen} alt="" />
                    </i>
                    <i onClick={() => DeleteCard(option.id)}>
                      <img src={close} alt="" />
                    </i>
                  </IconContainer>
                </IconContainer>
              </div>
              <ContainerFlag>
                <p style={{ color: "green", fontWeight: "bold" }}>
                  {option.pais}
                </p>
              </ContainerFlag>
              <div style={{ display: "block" }}>
                <p>Local: {option.local}</p>
                <p>Meta: {option.meta}</p>
              </div>
            </CardItem>
          ))
      )}
    </Cards>
  );
};
