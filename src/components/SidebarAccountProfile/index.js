import { Component } from "react";
import { withRouter } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import Popup from "reactjs-popup";
import Cookies from "js-cookie";

import {
  AccountProfileCard,
  ProfileNameAndEmail,
  ProfileNameAndLogout,
  ProfileName,
  ProfileEmail,
  ProfileAvatar,
  //   ProfileLogoutIcon,
  PopupBackground,
} from "./styledComponents";

import LogoutPopup from "../LogoutPopup";

class SideNavbarAccountProfile extends Component {
  state = { name: "", email: "" };

  componentDidMount() {
    this.getAccountNameAndEmail();
  }

  getAccountNameAndEmail = async () => {
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
    // console.log(data.users[0]);
    if (response.ok) {
      const name = data.users[0].name;
      const email = data.users[0].email;
      //   console.log(name, email);
      this.setState({ name: name, email: email });
    } else {
      console.log(data);
    }
  };

  render() {
    const { name, email } = this.state;
    return (
      <AccountProfileCard>
        <ProfileAvatar
          src="https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/image/44a76820ebfeb685ad35aeed987e25b0b1da6864"
          alt="profile-avatar"
        />
        <ProfileNameAndEmail>
          <ProfileNameAndLogout>
            <ProfileName>{name}</ProfileName>
            {/* <ProfileLogoutIcon> */}
            <Popup modal trigger={<MdLogout />}>
              {(close) => (
                <PopupBackground>
                  <LogoutPopup close={close} />
                </PopupBackground>
              )}
            </Popup>
            {/* </ProfileLogoutIcon> */}
          </ProfileNameAndLogout>
          <ProfileEmail>{email}</ProfileEmail>
        </ProfileNameAndEmail>
      </AccountProfileCard>
    );
  }
}

export default withRouter(SideNavbarAccountProfile);

