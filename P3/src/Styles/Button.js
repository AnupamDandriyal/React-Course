import styled from 'styled-components'
export const Button = styled.button`
  width:220px;
  height:44px;
  background:black;
  border-radius:5px;
  color:white;
  border: none;
  font-weight:550;

  &:hover{
    cursor: pointer;
    border:2px solid black;
    color:black;
    background-color: white;
    transition: 0.15s background-color ease-in;
  }
  
`

export const OutlineButton = styled(Button)`
   background:white;
    color:black;
    border: 2px solid Black;

    &:hover{
      border:none;
      color:white;
      background-color: black;
    }
`