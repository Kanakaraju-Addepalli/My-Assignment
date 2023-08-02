import {
    FilterListItem,
    ActiveFilterListItem,
    FilterButton,
  } from "./styledComponents";
  
  const TransactionFilters = (props) => {
    const { filterDetails, filterId, onClickChangeFilter } = props;
    const { id, displayName } = filterDetails;
    const isFilterActive = filterId === id;
  
    const changeFilter = () => {
      onClickChangeFilter(id);
    };
  
    return (
      <>
        {isFilterActive && (
          <FilterButton onClick={changeFilter} disabled>
            <ActiveFilterListItem>{displayName}</ActiveFilterListItem>
          </FilterButton>
        )}
        {!isFilterActive && (
          <FilterButton onClick={changeFilter}>
            <FilterListItem>{displayName}</FilterListItem>
          </FilterButton>
        )}
      </>
    );
  };
  
  export default TransactionFilters;
  