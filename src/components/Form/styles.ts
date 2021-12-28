import styled from 'styled-components'

export const ContainerForm = styled.div`
  @media (max-width: 540px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  }
  @media (max-width: 999px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  }
  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    padding: 8rem 0 ;
  }

  background: #4F9419;
`

export const BoxForm = styled.form`
  @media (max-width: 540px) {
    margin:  1.2rem;
  }
  @media (max-width: 999px) {
    margin:  1.2rem;
    
    label{
    color: var(--shape);
    position: relative;
    top: 8px;
    left: 5px;
  }
  }
  @media (min-width: 1000px) {
    display: flex;
    max-width: 1295px;
    justify-content: space-between;
    flex: 1;
    margin: 0 2rem;
  

    label{
    color: var(--shape);
    position: relative;
    top: -28px;
    left: 40px;
  }
  
  }

 
`

export const Select = styled.select`
  @media (max-width: 540px) {
    margin: 1rem 0;
  }

  @media (max-width: 999px) {
    margin: 1rem 0;
  }
  @media (min-width: 1000px) {
   max-width: 20rem;
   
  }
  padding-left: 10px;
  height: 48px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 7px;
  background: var(--shape);
`



export const Inputs = styled.input`
 @media (max-width: 540px) {
  margin: 1rem 0;
  }
  @media (max-width: 999px) {
    margin: 1rem 0;
  }
  @media (min-width: 1000px) {
   max-width: 40rem;
   
  }
  padding-left: 10px;
  height: 48px;
  border: none;
  outline: none;
  border-radius: 7px;
  width:100%;
`
export const Input2 = styled.input`
 @media (max-width: 540px) {
  margin: 1rem 0;
}
@media (max-width: 999px) {
    margin: 1rem 0;
  }
  @media (min-width: 1000px) {
   max-width: 15rem;
   
  }
  padding-left: 10px;
  height: 48px;
  padding-left: 10px;
  border: none;
  outline: none;
  border-radius: 7px;
  width:100%;
`
export const Buttons = styled.button`
 @media (max-width: 540px) {
  margin: 1rem 0;
}
@media (max-width: 999px) {
    margin: 1rem 0;
  }
  @media (min-width: 1000px) {
   max-width: 10rem;
   margin-left: 1.5rem;
   
  }
  width: 100%;
  height: 49px;
  color: white;
  border: none;
  background: #006C18;
  border-radius: 7px;
  
`