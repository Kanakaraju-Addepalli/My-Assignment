import Popup from "reactjs-popup";
import Cookies from "js-cookie";

import {
  HeaderStyle,
  HeaderHeading,
  AddTransactionButton,
  AddTransactionContext,
  PopupBackground,
} from "./styledComponents";

import AddTransactionPopup from "../AddTransaction";

const Header = (props) => {
  const { heading } = props;
  const userId = Cookies.get("user_id");
  const isUserAdmin = userId === "3";

  return (
    <HeaderStyle>
      <HeaderHeading>{heading}</HeaderHeading>
      {!isUserAdmin && (
        <Popup
          modal
          trigger={
            <AddTransactionButton type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99984 4.16663V15.8333M4.1665 9.99996H15.8332"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <AddTransactionContext>Add Transaction</AddTransactionContext>
            </AddTransactionButton>
          }
        >
          {(close) => (
            <PopupBackground>
              <AddTransactionPopup close={close} />
            </PopupBackground>
          )}
        </Popup>
      )}
    </HeaderStyle>
  );
};

export default Header;
