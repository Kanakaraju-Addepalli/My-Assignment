import styled from "styled-components";

export const DeletePopupContainer = styled.div`
  width: 591px;
  height: 188px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const DangerLogoAndHeadings = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DangerOuterCircle = styled.div`
  margin-left: 24px;
  margin-top: 32px;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  color: #fef3c7;
  background-color: #fef3c7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DangerInnerCircle = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  color: #fde68a;
  background-color: #fde68a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DangerLogo = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const DeleteTransactionHeadingAndCloseButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  width: 100%;
`;

export const DangerHeading = styled.p`
  color: #333b69;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
`;

export const PopupCloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const DeletePopupHeadingAndSubline = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

export const DeletePopupSubline = styled.p`
  ccolor: #505887;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const DeletePopupButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 112px;
  margin-top: 32px;
`;

export const DeletePopupButton = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #dc2626;
  color: #fff;
  text-align: center;
  margin-right: 16px;
  border: none;
  cursor: pointer;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; 
`;

export const LeaveItPopupButton = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #333b69;
  text-align: center;
  cursor: pointer;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;`
