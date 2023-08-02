import { Component } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

import {
  TotalTransactionsList,
  TransactionItemHeadings,
  TransactionNameHeading,
  CategoryDateAmountHeadings,
  TransactionCategoryHeading,
  TransactionDateHeading,
  TransactionAmountHeading,
  LoaderContainer,
} from "./styledComponents";

import TransactionListItem from "../TransactionListItem";

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

class TransactionsListContainer extends Component {
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
    <LoaderContainer data-testid="dots">
      <ThreeDots type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  );

  renderTransactionContainerFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure pic"
      />
      <h1>Transactions Not Found</h1>
    </>
  );

  renderTransactionContainerSuccess = () => {
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
            <TransactionListItem
              key={eachTransaction.id}
              transactionDetails={eachTransaction}
            />
          ))
        )}
      </>
    );
  };

  renderTransactionContainer = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderTransactionContainerSuccess();
      case apiStatusList.failure:
        return this.renderTransactionContainerFailure();
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
          <TransactionNameHeading>Transaction Name</TransactionNameHeading>
          <CategoryDateAmountHeadings>
            <TransactionCategoryHeading>Category</TransactionCategoryHeading>
            <TransactionDateHeading>Date</TransactionDateHeading>
            <TransactionAmountHeading>Amount</TransactionAmountHeading>
          </CategoryDateAmountHeadings>
        </TransactionItemHeadings>
        {this.renderTransactionContainer()}
      </TotalTransactionsList>
    );
  }
}

export default TransactionsListContainer;
