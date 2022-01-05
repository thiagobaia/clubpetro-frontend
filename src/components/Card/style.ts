import styled from 'styled-components'

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`
export const CardItem = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid #ABABAB;
  box-shadow: 1px 1px 5px #ABABAB;
  justify-content: space-between;
  margin: 20px;

  div {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #525050;
  }

`
export const ImgContainer = styled.span`
  display: flex;
  width: 56px;
  height: 34px;
  flex-direction: column;
  margin: 1rem 0;
`
export const IconContainer = styled.span`
  margin-top: 15px;
  display: flex;
  width: 45px;
  justify-content: space-between;

  i {
    cursor: pointer;
  }
`
export const ContainerFlag = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #4F9419;
  border-bottom: 2px solid #ABABAB;
`
