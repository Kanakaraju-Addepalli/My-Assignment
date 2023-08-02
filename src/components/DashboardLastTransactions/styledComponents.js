import styled from "styled-components";

export const LastTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
  margin-right: 25px;
`;

export const LastTransactionHeading = styled.p`
  color: #333b69;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 16px;
`;

export const RecentTransactionsContainer = styled.div`
  display: flex;
  
  width: 100%;
  height: 100%;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-bottom: 24px;
`;
