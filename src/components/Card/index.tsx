import {
  Cards,
  CardItem,
  ImgContainer,
  IconContainer,
  ContainerFlag,
} from "./style";

import { useTransactions } from "../../hooks/useTransaction";

export const Card: React.FC = () => {

  const { transactions } = useTransactions();
  const { country } = useTransactions();




  return (
    <Cards>
      {transactions.map((option, key) =>
        country
          .filter(({ name }) => name === option.pais)
          .map((flags) => (
            <CardItem key={key}>
              <div>
                <ImgContainer>
                  <img src={flags.flag} alt="logo" />
                </ImgContainer>

                <IconContainer>
                  <i>
                    <img src='' alt="" />
                  </i>
                  <i>
                    <img src='' alt="" />
                  </i>
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
