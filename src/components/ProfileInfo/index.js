import { Component } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

import { ProfileInfoContainer } from "./styledComponents";

import ProfileInfoLabels from "../ProfileInfoLabels";

const apiStatusList = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class ProfileInfo extends Component {
  state = { profileDetails: {}, apiStatus: apiStatusList.initial };

  componentDidMount() {
    this.getProfileDetails();
  }

  getProfileDetails = async () => {
    this.setState({ apiStatus: apiStatusList.loading });
    const userId = Cookies.get("user_id");
    const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/profile";
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
      const dataObject = data.users[0];
      const newProfile = {
        id: dataObject.id,
        name: dataObject.name,
        email: dataObject.email,
        country: dataObject.country,
        dateOfBirth: dataObject.date_of_birth,
        city: dataObject.city,
        permanentAddress: dataObject.permanent_address,
        postalCode: dataObject.postal_code,
        presentAddress: dataObject.present_address,
      };
      this.setState({
        profileDetails: newProfile,
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

  renderProfileFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure pic"
      />
      <h1>Profile is not available</h1>
    </>
  );

  renderProfileSuccess = () => {
    const { profileDetails } = this.state;
    const {
      name,
      email,
      country,
      city,
      dateOfBirth,
      permanentAddress,
      postalCode,
      presentAddress,
    } = profileDetails;
    return (
      <>
        <ProfileInfoLabels label={"Your Name"} info={name} />
        <ProfileInfoLabels label={"User Name"} info={name} />
        <ProfileInfoLabels label={"Email"} info={email} />
        <ProfileInfoLabels label={"Password"} info={"**********"} />
        <ProfileInfoLabels label={"Date of Birth"} info={dateOfBirth} />
        <ProfileInfoLabels label={"Present Address"} info={presentAddress} />
        <ProfileInfoLabels
          label={"Permanent Address"}
          info={permanentAddress}
        />
        <ProfileInfoLabels label={"City"} info={city} />
        <ProfileInfoLabels label={"Postal Code"} info={postalCode} />
        <ProfileInfoLabels label={"Country"} info={country} />
      </>
    );
  };

  renderProfile = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderProfileSuccess();
      case apiStatusList.failure:
        return this.renderProfileFailure();
      case apiStatusList.loading:
        return this.renderLoading();
      default:
        return null;
    }
  };

  render() {
    return <ProfileInfoContainer>{this.renderProfile()};</ProfileInfoContainer>;
  }
}

export default ProfileInfo;
