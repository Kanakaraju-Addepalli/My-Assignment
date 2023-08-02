import styled from "styled-components";

export const CreditTile = styled.div`
  display: flex;
  width: 40%;
  height: 130px;
  padding: 25px 36px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-right: 24px;
  margin-bottom: 20px;
`;

export const CreditAndDebitTileMoneyAndName = styled.div`
  display:flex;
  flex-direction: column;
`;

export const CreditMoney = styled.p`
color: #16dbaa;
font-family: Inter;
font-size: 25px;
font-weight: 600;
padding:0px;
margin:0px;
`;

export const Credit = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;


`;
export const LoaderContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-top:30%;
padding-left:100%;
`
export const Image = styled.img`
background:transparent;
width: 170px;
height: 130px;

`