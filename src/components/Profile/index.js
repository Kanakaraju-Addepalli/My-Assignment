import { Component } from "react";

import {
  ProfilePage,
  ProfileWithHeader,
  ProfileContainer,
  ProfileCard,
  ProfileImage,
} from "./styledComponents";

import Header from "../Header";
import SideNavbar from "../Sidebar";
import ProfileInfo from "../ProfileInfo";

class Profile extends Component {
  render() {
    return (
      <ProfilePage>
        <SideNavbar active={"Profile"} />
        <ProfileWithHeader>
          <Header heading={"Profile"} />
          <ProfileContainer>
            <ProfileCard>
              <ProfileImage
                src="https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/image/57d3d250790e98129931897251abd3915a931233"
                alt="profile photo"
              />
              <ProfileInfo />
            </ProfileCard>
          </ProfileContainer>
        </ProfileWithHeader>
      </ProfilePage>
    );
  }
}

export default Profile;
