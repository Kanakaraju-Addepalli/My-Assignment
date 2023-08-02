import styled from "styled-components";

export const TransactionItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  margin-left: 15px;
`;

export const CreditDebitSymbolAndName = styled.div`
  display: flex;
  //   justify-content: space-between;
  align-items: center;
  width: 30%;
`;

export const TransactionName = styled.p`
  color: #505887;
  font-family:Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 16px;
`;

export const CategoryDateAmount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;

export const TransactionCategory = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  //   margin-right: 90px;
  width: 80px;
`;

export const TransactionDate = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  //   margin-right: 90px;
  width: 150px;
`;

export const TransactionDebitAmount = styled.p`
  color: #fe5c73;
  text-align: right;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80px;
`;

export const TransactionCreditAmount = styled(TransactionDebitAmount)`
  color: #16dbaa;
`;

export const TransactionEditAndDelete = styled.div`
  display: flex;
  //   justify-content: space-between;
  align-items: center;
  width: 10%;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-left: 10px;
`;

export const PopupBackground = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
