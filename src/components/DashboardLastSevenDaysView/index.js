import { Component } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  OverviewHeadingAndContainer,
  OverviewHeading,
  OverviewContainer,
  TotalCreditAndDebitLine,
  TotalCreditAndDebitLineValues,
  LoaderContainer,
} from "./styledComponents";

const apiStatusList = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class DashboardLastSevenDaysOverview extends Component {
  state = { overviewData: [], apiStatus: apiStatusList.initial };

  componentDidMount() {
    this.getLastSevenDaysOverview();
  }

  getLastSevenDaysOverview = async () => {
    this.setState({ apiStatus: apiStatusList.loading });
    const userId = Cookies.get("user_id");
    const isUserAdmin = userId === "3";
    const apiUrl = isUserAdmin
      ? "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin"
      : "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days";
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
    // console.log(data.last_7_days_transactions_credit_debit_totals);
    if (response.ok) {
      const gettingOverviewDataList = isUserAdmin
        ? data.last_7_days_transactions_totals_admin
        : data.last_7_days_transactions_credit_debit_totals;
      const newOverviewData = gettingOverviewDataList.map((each) => ({
        sum: each.sum,
        type: each.type,
        date: each.date,
      }));
      this.setState({
        overviewData: newOverviewData,
        apiStatus: apiStatusList.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusList.failure });
    }
  };

  calculateWeeklySums = () => {
    const { overviewData } = this.state;
    const weeklySums = { credit: 0, debit: 0 };
    overviewData.forEach((item) => {
      if (item.type === "credit") {
        weeklySums.credit += item.sum;
      } else if (item.type === "debit") {
        weeklySums.debit += item.sum;
      }
    });
    return weeklySums;
  };

  renderLoading = () => (
    <LoaderContainer data-testid="dots">
      <ThreeDots type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  );

  renderOverviewFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure pic"
      />
      <OverviewHeading>Overview is not available</OverviewHeading>
    </>
  );

  renderOverviewSuccess = () => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const chartData = weekdays.map((day) => ({
      day,
      credit: 0,
      debit: 0,
    }));
    this.state.overviewData.forEach((item) => {
      const dayIndex = new Date(item.date).getDay();
      if (item.type === "credit") {
        chartData[dayIndex].credit += item.sum;
      } else if (item.type === "debit") {
        chartData[dayIndex].debit += item.sum;
      }
    });

    const { credit, debit } = this.calculateWeeklySums();
    return (
      <>
        <TotalCreditAndDebitLine>
          <TotalCreditAndDebitLineValues>
            ${debit}
          </TotalCreditAndDebitLineValues>{" "}
          Debited &{" "}
          <TotalCreditAndDebitLineValues>
            ${credit}
          </TotalCreditAndDebitLineValues>{" "}
          Credited in this Week
        </TotalCreditAndDebitLine>
        <BarChart width={950} height={400} data={chartData}>
          <CartesianGrid stroke="#f5f5f5" vertical={false} />
          <XAxis dataKey="day" axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend verticalAlign="top" align="right" margin={{ bottom: 20 }} />
          <Bar dataKey="debit" fill="#4D78FF" radius={10} />
          <Bar dataKey="credit" fill="#FCAA0B" radius={10} />
        </BarChart>
      </>
    );
  };

  renderOverview = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderOverviewSuccess();
      case apiStatusList.failure:
        return this.renderOverviewFailure();
      case apiStatusList.loading:
        return this.renderLoading();
      default:
        return null;
    }
  };

  render() {
    return (
      <OverviewHeadingAndContainer>
        <OverviewHeading>Debit & Credit Overview</OverviewHeading>
        <OverviewContainer>{this.renderOverview()}</OverviewContainer>
      </OverviewHeadingAndContainer>
    );
  }
}

export default DashboardLastSevenDaysOverview;
