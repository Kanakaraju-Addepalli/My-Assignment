import styled from "styled-components";

export const TotalTransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  padding: 5px;
  background: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  gap: 16px;
`;

export const TransactionItemHeadings = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
`;

export const TransactionUsernameHeadings = styled.p`
  color: #343c6a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 30%;
  margin-left: 25px;
`;

export const NameCategoryDateAmountHeadings = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;

export const TransactionNameHeading = styled(TransactionUsernameHeadings)`
  width: 174px;
  margin-right: 80px;
`;

export const TransactionCategoryHeading = styled(TransactionUsernameHeadings)`
  //   color: #718ebf;
  //   font-family: Inter;
  //   font-size: 16px;
  //   font-style: normal;
  //   font-weight: 400;
  //   line-height: normal;
  //   //   margin-right: 90px;
  width: 80px;
  margin-right: 96px;
`;

export const TransactionDateHeading = styled(TransactionUsernameHeadings)`
  //   color: #718ebf;
  //   font-family: Inter;
  //   font-size: 16px;
  //   font-style: normal;
  //   font-weight: 400;
  //   line-height: normal;
  //   //   margin-right: 90px;
  width: 135px;
  margin-right: 100px;
`;

export const TransactionAmountHeading = styled(TransactionUsernameHeadings)`
  //   color: #343c6a;
  //   font-family: Inter;
  //   font-size: 16px;
  //   font-style: normal;
  //   font-weight: 500;
  //   line-height: normal;
  //   text-align: right;
  width: 80px;
`;
