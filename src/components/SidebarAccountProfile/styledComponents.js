import styled from "styled-components";

export const AccountProfileCard = styled.div`
  display: flex;
  padding: 24px 32px 0px 24px;
  align-items: center;
  gap: 20px;
  width: 130%;
  margin-top: 230px;
  border-top: 1px solid #eaecf0;
`;

export const ProfileAvatar = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0px;
  // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const ProfileNameAndEmail = styled.p`
  display: flex;
  flex-direction: column;
  padding:0px;
  margin:0px;
`;

export const ProfileNameAndLogout = styled.div`
  display: flex;
  //   flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 0px;
`;

export const ProfileName = styled.h1`
  color: #505887;
  padding:0px;
  margin:0px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const ProfileEmail = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
`;

export const ProfileLogoutIcon = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  margin-left: 50px;
  border: none;
  background: none;
  outline: none;
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
