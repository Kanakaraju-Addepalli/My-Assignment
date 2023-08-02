import { Component } from "react";
import Cookies from "js-cookie";

import {
  DeletePopupContainer,
  DangerLogoAndHeadings,
  DangerOuterCircle,
  DangerInnerCircle,
  DangerLogo,
  DeleteTransactionHeadingAndCloseButton,
  DeletePopupHeadingAndSubline,
  DangerHeading,
  PopupCloseButton,
  DeletePopupSubline,
  DeletePopupButtonsContainer,
  DeletePopupButton,
  LeaveItPopupButton,
} from "./styledComponents";

class DeleteTransactionPopup extends Component {
  closePopup = () => {
    window.location.reload();
  };

  onClickDeleteTransaction = async () => {
    const userId = Cookies.get("user_id");
    const { transactionDetails } = this.props;
    const { id } = transactionDetails;
    // console.log(id);
    const apiUrl =
      "https://bursting-gelding-24.hasura.app/api/rest/delete-transaction";
    const deleteTransactionDetails = {
      id,
    };
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
      },
      method: "DELETE",
      body: JSON.stringify(deleteTransactionDetails),
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      console.log(id);
      this.closePopup();
    }
  };

  render() {
    const { close } = this.props;
    return (
      <DeletePopupContainer>
        <DangerLogoAndHeadings>
          <DangerOuterCircle>
            <DangerInnerCircle>
              <DangerLogo>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M16 19.6667C15.4533 19.6667 15 19.2133 15 18.6667V12C15 11.4533 15.4533 11 16 11C16.5467 11 17 11.4533 17 12V18.6667C17 19.2133 16.5467 19.6667 16 19.6667Z"
                    fill="#D97706"
                  />
                  <path
                    d="M16 24C15.92 24 15.8266 23.9867 15.7333 23.9733C15.6533 23.96 15.5733 23.9334 15.4933 23.8934C15.4133 23.8667 15.3333 23.8267 15.2533 23.7734C15.1866 23.72 15.12 23.6667 15.0533 23.6133C14.8133 23.36 14.6666 23.0134 14.6666 22.6667C14.6666 22.32 14.8133 21.9734 15.0533 21.72C15.12 21.6667 15.1866 21.6133 15.2533 21.56C15.3333 21.5067 15.4133 21.4667 15.4933 21.44C15.5733 21.4 15.6533 21.3734 15.7333 21.36C15.9066 21.32 16.0933 21.32 16.2533 21.36C16.3466 21.3734 16.4266 21.4 16.5066 21.44C16.5866 21.4667 16.6666 21.5067 16.7466 21.56C16.8133 21.6133 16.88 21.6667 16.9466 21.72C17.1866 21.9734 17.3333 22.32 17.3333 22.6667C17.3333 23.0134 17.1866 23.36 16.9466 23.6133C16.88 23.6667 16.8133 23.72 16.7466 23.7734C16.6666 23.8267 16.5866 23.8667 16.5066 23.8934C16.4266 23.9334 16.3466 23.96 16.2533 23.9733C16.1733 23.9867 16.08 24 16 24Z"
                    fill="#D97706"
                  />
                  <path
                    d="M24.08 29.5466H7.91997C5.31997 29.5466 3.3333 28.6 2.31997 26.8933C1.31997 25.1866 1.4533 22.9866 2.71997 20.7066L10.8 6.17331C12.1333 3.77331 13.9733 2.45331 16 2.45331C18.0266 2.45331 19.8666 3.77331 21.2 6.17331L29.28 20.72C30.5466 23 30.6933 25.1866 29.68 26.9066C28.6666 28.6 26.68 29.5466 24.08 29.5466ZM16 4.45331C14.7466 4.45331 13.52 5.41331 12.5466 7.14664L4.47997 21.6933C3.5733 23.32 3.42663 24.8133 4.0533 25.8933C4.67997 26.9733 6.06663 27.56 7.9333 27.56H24.0933C25.96 27.56 27.3333 26.9733 27.9733 25.8933C28.6133 24.8133 28.4533 23.3333 27.5466 21.6933L19.4533 7.14664C18.48 5.41331 17.2533 4.45331 16 4.45331Z"
                    fill="#D97706"
                  />
                </svg>
              </DangerLogo>
            </DangerInnerCircle>
          </DangerOuterCircle>
          <DeletePopupHeadingAndSubline>
            <DeleteTransactionHeadingAndCloseButton>
              <DangerHeading>Are you sure you want to Delete?</DangerHeading>
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
            </DeleteTransactionHeadingAndCloseButton>
            <DeletePopupSubline>
              This transaction will be deleted immediately. You can’t undo this
              action.
            </DeletePopupSubline>
          </DeletePopupHeadingAndSubline>
        </DangerLogoAndHeadings>
        <DeletePopupButtonsContainer>
          <DeletePopupButton
            type="button"
            onClick={this.onClickDeleteTransaction}
          >
            Yes, Delete
          </DeletePopupButton>
          <LeaveItPopupButton type="button" onClick={() => close()}>
            No, Leave it
          </LeaveItPopupButton>
        </DeletePopupButtonsContainer>
      </DeletePopupContainer>
    );
  }
}

export default DeleteTransactionPopup;
