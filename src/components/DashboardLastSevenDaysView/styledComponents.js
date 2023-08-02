import styled from "styled-components";

export const OverviewHeadingAndContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
  margin-right: 25px;
`;

export const OverviewHeading = styled.p`
  color: #333b69;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 16px;
`;

export const OverviewContainer = styled.div`
  display: flex;
  //   width: 1110px;
  //   height: 210px;
  //   padding: 12px 25px 8px 24px;
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
`;

export const TotalCreditAndDebitLine = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 30px;
  margin-top: 28px;
`;

export const TotalCreditAndDebitLineValues = styled.span`
  color: #333b69;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const LoaderContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:50vh;
`