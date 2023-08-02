import { Component } from "react";
import Cookies from "js-cookie";

import {
  TransactionsPage,
  HeaderAndFilter,
  FilterCreditDebit,
  TransactionsWithHeader,
  TransactionsContainer,
  
} from "./styledComponents";

import Header from "../Header";
import SideNavbar from "../Sidebar";
import TransactionFilters from "../TransactionFilters";
import TransactionsListContainer from "../TransactionsListContainer";
import TransactionsAdminListContainer from "../TransactionsAdminListContainer";

const transactionFiltersList = [
  {
    id: 0,
    displayName: "All Transactions",
    filter: "",
  },
  {
    id: 1,
    displayName: "Credit",
    filter: "credit",
  },
  {
    id: 2,
    displayName: "Debit",
    filter: "debit",
  },
];

class Transactions extends Component {
  state = { filterId: transactionFiltersList[0].id };

  onClickChangeFilter = (id) => {
    this.setState({ filterId: id });
  };

  render() {
    const { filterId } = this.state;
    const userId = Cookies.get("user_id");
    const isUserAdmin = userId === "3";
    return (
      <TransactionsPage>
        <SideNavbar active={"Transactions"} />
        <TransactionsWithHeader>
          <HeaderAndFilter>
            <Header heading={"Transactions"} />
            <FilterCreditDebit>
              {transactionFiltersList.map((eachFilter) => (
                <TransactionFilters
                  key={eachFilter.id}
                  filterDetails={eachFilter}
                  filterId={filterId}
                  onClickChangeFilter={this.onClickChangeFilter}
                />
              ))}
            </FilterCreditDebit>
          </HeaderAndFilter>
          <TransactionsContainer>
            {!isUserAdmin && <TransactionsListContainer filterId={filterId} />}
            {isUserAdmin && (
              <TransactionsAdminListContainer filterId={filterId} />
            )}
          </TransactionsContainer>
        </TransactionsWithHeader>
      </TransactionsPage>
    );
  }
}

export default Transactions;

