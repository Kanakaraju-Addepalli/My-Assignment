import { Component } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

import {
  TotalTransactionsList,
  TransactionItemHeadings,
  TransactionUsernameHeadings,
  NameCategoryDateAmountHeadings,
  TransactionNameHeading,
  TransactionCategoryHeading,
  TransactionDateHeading,
  TransactionAmountHeading,
} from "./styledComponents";

import TransactionAdminListItem from "../TransactionAdminListItem";

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

const apiStatusList = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class TransactionsAdminListContainer extends Component {
  state = { allTransactionsList: [], apiStatus: apiStatusList.initial };

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions = async () => {
    this.setState({ apiStatus: apiStatusList.loading });
    const userId = Cookies.get("user_id");
    const apiUrl = `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=500&offset=0`;
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    if (response.ok) {
      const newTransactions = data.transactions.map((each) => ({
        id: each.id,
        transactionName: each.transaction_name,
        type: each.type,
        category: each.category,
        amount: each.amount,
        date: each.date,
        userId: each.user_id,
      }));
      this.setState({
        allTransactionsList: newTransactions,
        apiStatus: apiStatusList.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusList.failure });
    }
  };

  renderLoading = () => (
    <div data-testid="dots">
      <ThreeDots type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </div>
  );

  renderTransactionAdminContainerFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure pic"
      />
      <h1>Transactions Not Found</h1>
    </>
  );

  renderTransactionAdminContainerSuccess = () => {
    const { filterId } = this.props;
    const { allTransactionsList } = this.state;
    let filteredTransactionsList = null;
    if (filterId > 0) {
      filteredTransactionsList = allTransactionsList.filter(
        (eachTransaction) =>
          eachTransaction.type === transactionFiltersList[filterId].filter
      );
    } else {
      filteredTransactionsList = allTransactionsList;
    }
    const transactionsLength = filteredTransactionsList.length === 0;
    return (
      <>
        {transactionsLength ? (
          <img
            src="https://images.app.goo.gl/1592oD7VdgXKHqbT7"
            alt="no transactions"
          />
        ) : (
          filteredTransactionsList.map((eachTransaction) => (
            <TransactionAdminListItem
              key={eachTransaction.id}
              transactionDetails={eachTransaction}
            />
          ))
        )}
      </>
    );
  };

  renderTransactionAdminContainer = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderTransactionAdminContainerSuccess();
      case apiStatusList.failure:
        return this.renderTransactionAdminContainerFailure();
      case apiStatusList.loading:
        return this.renderLoading();
      default:
        return null;
    }
  };

  render() {
    return (
      <TotalTransactionsList>
        <TransactionItemHeadings>
          <TransactionUsernameHeadings>User Name</TransactionUsernameHeadings>
          <NameCategoryDateAmountHeadings>
            <TransactionNameHeading>Transaction Name</TransactionNameHeading>
            <TransactionCategoryHeading>Category</TransactionCategoryHeading>
            <TransactionDateHeading>Date</TransactionDateHeading>
            <TransactionAmountHeading>Amount</TransactionAmountHeading>
          </NameCategoryDateAmountHeadings>
        </TransactionItemHeadings>
        {this.renderTransactionAdminContainer()}
      </TotalTransactionsList>
    );
  }
}

export default TransactionsAdminListContainer;
