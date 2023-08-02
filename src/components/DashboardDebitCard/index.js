import { Component } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

import {
  CreditAndDebitTileMoneyAndName,
  CreditAndDebitTileName,
  CardContainer,
  DebitTileMoney,
  LoaderContainer,
  Image
} from "./styledComponents";


const apiStatusList = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class DashboardDebitCard extends Component {
  state = { debit: "", apiStatus: apiStatusList.initial };

  componentDidMount() {
    this.getDebitAmounts();
  }

  getDebitAmounts = async () => {
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
    console.log(data);
    
    const getDebitData = isUserAdmin
      ? data.transaction_totals_admin[1]
      : data.totals_credit_debit_transactions[0];
    const getDebitDataSum = getDebitData.sum;
    if (response.ok) {
      this.setState({
        debit: getDebitDataSum,
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

  renderDebitFailure = () => (
    <>
      <DebitTileMoney>Error</DebitTileMoney>
      <CreditAndDebitTileName>Debit</CreditAndDebitTileName>
    </>
  );

  renderDebitSuccess = () => {
    const { debit } = this.state;
    return (
      <>
        <DebitTileMoney>${debit}</DebitTileMoney>
        <CreditAndDebitTileName>Debit</CreditAndDebitTileName>
      </>
    );
  };

  renderDebitMoney = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderDebitSuccess();
      case apiStatusList.failure:
        return this.renderDebitFailure();
      case apiStatusList.loading:
        return this.renderLoading();
      default:
        return null;
    }
  };

  render() {
    const { debit } = this.state;
    console.log(debit);
    return (
      <CardContainer>
        <CreditAndDebitTileMoneyAndName>
          {this.renderDebitMoney()}
        </CreditAndDebitTileMoneyAndName>
        <Image src="https://res.cloudinary.com/dbavgpzve/image/upload/v1690953627/Group_ijl1se.png" alt="card-icon" />
      </CardContainer>
    );
  }
}

export default DashboardDebitCard;
