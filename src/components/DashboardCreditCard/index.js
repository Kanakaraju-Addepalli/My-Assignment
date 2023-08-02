import { Component } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

import {
  Credit,
  CreditTile,
  CreditAndDebitTileMoneyAndName,
  CreditMoney,
  LoaderContainer,
  Image,
} from "./styledComponents";

const apiStatusList = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class DashboardCreditCard extends Component {
  state = { credit: 0, apiStatus: apiStatusList.initial };

  componentDidMount() {
    this.getCreditAmounts();
  }

  getCreditAmounts = async () => {
    this.setState({ apiStatus: apiStatusList.loading });
    const userId = Cookies.get("user_id");
    const isUserAdmin = userId === "3";
    const apiUrl = isUserAdmin
      ? "https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin"
      : "https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals";
    const options = isUserAdmin
      ? {
          headers: {
            "content-type": "application/json",
            "x-hasura-admin-secret":
              "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-role": "admin",
          },
          method: "GET",
        }
      : {
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
  
    const getCreditData = isUserAdmin
      ? data.transaction_totals_admin[0]
      : data.totals_credit_debit_transactions[1];
    const getCreditDataSum = getCreditData.sum;
    if (response.ok) {
      this.setState({
        credit: getCreditDataSum,
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

  renderCreditFailure = () => (
    <>
      <CreditMoney>Error</CreditMoney>
      <Credit>Credit</Credit>
      
    
    </>
  );

  renderCreditSuccess = () => {
    const { credit } = this.state;
    return (
      <>
        <CreditMoney>${credit}</CreditMoney>
        <Credit>Credit</Credit>
      </>
    );
  };

  renderCreditMoney = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderCreditSuccess();
      case apiStatusList.failure:
        return this.renderCreditFailure();
      case apiStatusList.loading:
        return this.renderLoading();
      default:
        return null;
    }
  };

  render() {
    return (
      <CreditTile>
        <CreditAndDebitTileMoneyAndName>
          {this.renderCreditMoney()}
        </CreditAndDebitTileMoneyAndName>
        <Image src="https://res.cloudinary.com/dbavgpzve/image/upload/v1690952882/Group_zwz17y.jpg" alt="icon" />
      </CreditTile>
    );
  }
}

export default DashboardCreditCard;
