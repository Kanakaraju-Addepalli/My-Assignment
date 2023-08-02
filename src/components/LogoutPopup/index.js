import { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import {
  LogoutPopupContainer,
  LogoutLogoAndHeadings,
  LogoutOuterCircle,
  LogoutInnerCircle,
  LogoutLogo,
  LogoutTransactionHeadingAndCloseButton,
  LogoutPopupHeadingAndSubline,
  LogoutHeading,
  PopupCloseButton,
  LogoutPopupSubline,
  LogoutPopupButtonsContainer,
  LogoutPopupButton,
  CancelPopupButton,
} from "./styledComponents";

// const DeleteTransactionPopup = (props) => {
class LogoutPopup extends Component {
  onClickLogout = () => {
    const { history } = this.props;
    Cookies.remove("user_id");
    history.replace("/login");
  };

  render() {
    const { close } = this.props;
    return (
      <LogoutPopupContainer>
        <LogoutLogoAndHeadings>
          <LogoutOuterCircle>
            <LogoutInnerCircle>
              <LogoutLogo>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.3333 22.6667L28 16M28 16L21.3333 9.33333M28 16H12M12 4H10.4C8.15979 4 7.03969 4 6.18404 4.43597C5.43139 4.81947 4.81947 5.43139 4.43598 6.18404C4 7.03968 4 8.15979 4 10.4V21.6C4 23.8402 4 24.9603 4.43597 25.816C4.81947 26.5686 5.43139 27.1805 6.18404 27.564C7.03969 28 8.15979 28 10.4 28H12"
                    stroke="#D97706"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </LogoutLogo>
            </LogoutInnerCircle>
          </LogoutOuterCircle>
          <LogoutPopupHeadingAndSubline>
            <LogoutTransactionHeadingAndCloseButton>
              <LogoutHeading>Are you sure you want to Logout?</LogoutHeading>
              <PopupCloseButton onClick={() => close()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="#718EBF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </PopupCloseButton>
            </LogoutTransactionHeadingAndCloseButton>
            <LogoutPopupSubline>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </LogoutPopupSubline>
          </LogoutPopupHeadingAndSubline>
        </LogoutLogoAndHeadings>
        <LogoutPopupButtonsContainer>
          <LogoutPopupButton type="button" onClick={this.onClickLogout}>
            Yes, Logout
          </LogoutPopupButton>
          <CancelPopupButton type="button" onClick={() => close()}>
            Cancel
          </CancelPopupButton>
        </LogoutPopupButtonsContainer>
      </LogoutPopupContainer>
    );
  }
}

export default withRouter(LogoutPopup);
