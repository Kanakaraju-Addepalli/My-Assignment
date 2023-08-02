import styled from "styled-components";

export const FilterListItem = styled.li`
  list-style-type: none;
  color: #718ebf;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ActiveFilterListItem = styled.li`
  list-style-type: none;
  color: #2d60ff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 3px solid #2d60ff;
`;

export const FilterButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;
