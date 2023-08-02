import styled from "styled-components";

export const LogoutPopupContainer = styled.div`
  width: 591px;
  height: 188px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;

  /* Shadow / lg */
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const LogoutLogoAndHeadings = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LogoutOuterCircle = styled.div`
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

export const LogoutInnerCircle = styled.div`
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

export const LogoutLogo = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const LogoutTransactionHeadingAndCloseButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  width: 100%;
`;

export const LogoutHeading = styled.p`
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
  //   margin-right: 24px;
  cursor: pointer;
`;

export const LogoutPopupHeadingAndSubline = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

export const LogoutPopupSubline = styled.p`
  ccolor: #505887;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const LogoutPopupButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 112px;
  margin-top: 32px;
`;

export const LogoutPopupButton = styled.button`
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

  /* text-sm / leading-5 / font-medium */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

export const CancelPopupButton = styled.button`
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

  /* text-sm / leading-5 / font-medium */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;
