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

export const TransactionItemPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 24px;
  margin-right: 8px;
`;

export const TransactionUserName = styled.p`
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 30%;
`;

export const NameCategoryDateAmountHeadings = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;

export const TransactionName = styled.p`
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 80px;
  width: 180px;
  margin-left: 15px;
`;

export const TransactionCategory = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 96px;
  width: 80px;
`;

export const TransactionDate = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 100px;
  width: 150px;
`;

export const TransactionDebitAmount = styled.p`
  color: #fe5c73;
  //   text-align: right;
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
