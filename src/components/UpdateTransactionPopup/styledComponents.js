import styled from "styled-components";

export const PopupContainer = styled.form`
  width: 466px;
  height: 700px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;
`;

export const UpdateTransactionHeadingAndCloseButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const UpdateTransactionHeading = styled.h1`
  color: #333b69;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin-left: 24px;
`;

export const PopupCloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-right: 24px;
  cursor: pointer;
`;

export const PopupHeadingSubline = styled.p`
  color: #505887;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 24px;
  margin-top: 8px;
`;

export const PopupLabelAndInput = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const PopupInputLabels = styled.label`
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PopupInputs = styled.input`
  width: 418px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #dfeaf2;
  background: #fff;
  color: #718ebf;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 16px 20px;
`;

export const PopupSelectInput = styled.select`
  width: 418px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #dfeaf2;
  background: #fff;
  color: #718ebf;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 16px 20px;
`;

export const PopupUpdateTransactionButton = styled.button`
  display: flex;
  width: 418px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: var(--primary-3, #2d60ff);
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 32px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; 
`;
