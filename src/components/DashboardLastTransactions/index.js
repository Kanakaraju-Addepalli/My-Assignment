import { Component } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

import {
  LastTransactionContainer,
  LastTransactionHeading,
  RecentTransactionsContainer,
} from "./styledComponents";

import TransactionListItem from "../TransactionListItem";
import TransactionAdminListItem from "../TransactionAdminListItem";

const apiStatusList = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class DashboardLastTransactions extends Component {
  state = { lastTransactions: [], apiStatus: apiStatusList.initial };

  componentDidMount() {
    this.getLastThreeTransactions();
  }

  getLastThreeTransactions = async () => {
    this.setState({ apiStatus: apiStatusList.loading });
    const userId = Cookies.get("user_id");
    const apiUrl =
      "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3&offset=0";
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
      const newLastTransactions = data.transactions.map((each) => ({
        id: each.id,
        transactionName: each.transaction_name,
        type: each.type,
        category: each.category,
        amount: each.amount,
        date: each.date,
        userId: each.user_id,
      }));
      this.setState({
        lastTransactions: newLastTransactions,
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

  renderLastTransactionsFailure = () => (
    <RecentTransactionsContainer>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure pic"
      />
      <LastTransactionHeading>Transactions Not Found</LastTransactionHeading>
    </RecentTransactionsContainer>
  );

  renderLastTransactionsSuccess = () => {
    const { lastTransactions } = this.state;
    const transactionsLength = lastTransactions.length === 0;
    const userId = Cookies.get("user_id");
    const isUserAdmin = userId === "3";
    return (
      <RecentTransactionsContainer>
        {isUserAdmin ? (
          transactionsLength ? (
            <img
              src="https://images.app.goo.gl/1592oD7VdgXKHqbT7"
              alt="no transactions"
            />
          ) : (
            lastTransactions.map((eachTransaction) => (
              <TransactionAdminListItem
                key={eachTransaction.id}
                transactionDetails={eachTransaction}
              />
            ))
          )
        ) : transactionsLength ? (
          <img
            src="https://images.app.goo.gl/1592oD7VdgXKHqbT7"
            alt="no transactions"
          />
        ) : (
          lastTransactions.map((eachTransaction) => (
            <TransactionListItem
              key={eachTransaction.id}
              transactionDetails={eachTransaction}
            />
          ))
        )}
      </RecentTransactionsContainer>
    );
  };

  renderLastTransactions = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderLastTransactionsSuccess();
      case apiStatusList.failure:
        return this.renderLastTransactionsFailure();
      case apiStatusList.loading:
        return this.renderLoading();
      default:
        return null;
    }
  };

  render() {
    return (
      <LastTransactionContainer>
        <LastTransactionHeading>Last Transaction</LastTransactionHeading>
        {this.renderLastTransactions()}
      </LastTransactionContainer>
    );
  }
}

export default DashboardLastTransactions;
