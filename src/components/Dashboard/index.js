import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

import {
  DashboardPage,
  DashboardWithHeader,
  DashboardContainer,
  CreditAndDebitContainer,
} from "./styledComponents";

import DashboardDebitCard from "../DashboardDebitCard";
import DashboardCreditCard from "../DashboardCreditCard";
import Header from "../Header";
import SideNavbar from "../Sidebar";
import DashboardLastTransactions from "../DashboardLastTransactions";
import DashboardLastSevenDaysOverview from "../DashboardLastSevenDaysView";

const Dashboard = () => {
  const jwtToken = Cookies.get("user_id");
  console.log(jwtToken);
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardPage>
      <SideNavbar active={"Dashboard"} />
      <DashboardWithHeader>
        <Header heading={"Accounts"} />
        <DashboardContainer>
          <CreditAndDebitContainer>
            <DashboardCreditCard />
            <DashboardDebitCard />
          </CreditAndDebitContainer>
          <DashboardLastTransactions />
          <DashboardLastSevenDaysOverview />
        </DashboardContainer>
      </DashboardWithHeader>
    </DashboardPage>
  );
};

export default Dashboard;
