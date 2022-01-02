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



export const Card: React.FC = () => {
  const { transactionFlag } = useContext(TransactionContext);
  const { transactions } = useContext(TransactionContext);
  const { removeTransaction } = useContext(TransactionContext);

  // Functions App

  const DeleteCard = async (id: any) => {
    console.log(id)

    await removeTransaction(id)
  };

  const UpdateCard = (id: any) => {
    alert(id);
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
                    <i onClick={() => UpdateCard(option.id)}>
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
                <p>Meta: {option.id}</p>
              </div>
            </CardItem>
          ))
      )}
    </Cards>
  );
};
