import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 40%;
  height: 130px;
  padding: 25px 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-bottom: 20px;
`;

export const DebitTileMoney = styled.p`
  color: #fe5c73;
  font-family: Inter;
  font-size: 25px;
  font-weight: 600;
  padding:0px;
  margin:0px;
`;

export const CreditAndDebitTileMoneyAndName = styled.div`
  display: flex;
  flex-direction: column;
  margin:0px;
  padding:0px;
`;

export const CreditAndDebitTileName = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
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
width: 160px;
height: 130px;
`