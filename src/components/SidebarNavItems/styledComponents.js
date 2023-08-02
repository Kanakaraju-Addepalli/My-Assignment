import styled from "styled-components";

export const PageNavigation = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 26px;
  list-style-type: none;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  color: none;
`;

export const ActivePageNavigation = styled.li`
  display: flex;
  width: 189px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 26px;
  flex-shrink: 0;
  color: var(--primary-3, #2d60ff);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  color: none;
  margin-bottom: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-left: 6px solid var(--primary-3, #2d60ff);
  height: 50px;
  list-style-type: none;
`;

export const PageName = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  color: none;
`;

export const PageActiveIcon = styled.div`
`;

export const PageIcon = styled.div`
  margin-left: 50px;
`;
