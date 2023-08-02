import { Component } from "react";
import Cookies from "js-cookie";

import {
  PopupContainer,
  UpdateTransactionHeadingAndCloseButton,
  UpdateTransactionHeading,
  PopupCloseButton,
  PopupHeadingSubline,
  PopupLabelAndInput,
  PopupInputLabels,
  PopupInputs,
  PopupSelectInput,
  PopupUpdateTransactionButton,
} from "./styledComponents";

class UpdateTransactionPopup extends Component {
  state = { name: "", type: "", category: "", amount: "", date: "" };

  componentDidMount() {
    const { transactionDetails } = this.props;
    console.log(transactionDetails);
    const {
      transactionName,
      type,
      category,
      amount,
      date,
    } = transactionDetails;
    this.setState({
      name: transactionName,
      type,
      category,
      amount,
      date,
    });
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeType = (event) => {
    this.setState({ type: event.target.value });
  };

  onChangeCategory = (event) => {
    this.setState({ category: event.target.value });
  };

  onChangeAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  closePopup = () => {
    window.location.reload();
    this.onAddedTransaction();
  };

  onClickUpdateTransaction = async (event) => {
    event.preventDefault();
    const userId = Cookies.get("user_id");
    const { name, type, category, amount, date } = this.state;
    console.log(date, "1");
    const { transactionDetails } = this.props;
    const { id } = transactionDetails;
    const apiUrl =
      "https://bursting-gelding-24.hasura.app/api/rest/update-transaction";
    const updateTransactionDetails = {
      id,
      name,
      type,
      category,
      amount,
      date,
    };
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
      },
      method: "POST",
      body: JSON.stringify(updateTransactionDetails),
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      this.setState(
        { name: "", type: "", category: "", amount: "", date: "" },
        this.closePopup()
      );
    }
  };

  render() {
    const { close } = this.props;
    const { name, type, category, amount, date } = this.state;
    return (
      <PopupContainer>
        <UpdateTransactionHeadingAndCloseButton>
          <UpdateTransactionHeading>
            Update Transaction
          </UpdateTransactionHeading>
          <PopupCloseButton></PopupCloseButton>
          <PopupCloseButton type="button" onClick={() => close()}>
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
        </UpdateTransactionHeadingAndCloseButton>
        <PopupHeadingSubline>
          You can update your transaction here
        </PopupHeadingSubline>
        <PopupLabelAndInput>
          <PopupInputLabels id="name">Transaction Name</PopupInputLabels>
          <PopupInputs
            htmlFor="name"
            type="text"
            placeholder="Enter Name"
            required
            maxLength="30"
            onChange={this.onChangeName}
            value={name}
          />
        </PopupLabelAndInput>
        <PopupLabelAndInput>
          <PopupInputLabels id="type">Transaction Type</PopupInputLabels>
          <PopupSelectInput
            htmlFor="type"
            placeholder="Select Transaction Type"
            required
            onChange={this.onChangeType}
            value={type}
          >
            <option value="credit" selected>
              Credit
            </option>
            <option value="debit">Debit</option>
          </PopupSelectInput>
        </PopupLabelAndInput>
        <PopupLabelAndInput>
          <PopupInputLabels id="category">Category</PopupInputLabels>
          <PopupSelectInput
            htmlFor="category"
            onChange={this.onChangeCategory}
            placeholder="Select"
            required
            value={category}
          >
            <option value="Food" selected>
              Food
            </option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transfer">Transfer</option>
            <option value="Shopping">Shopping</option>
            <option value="Service">Service</option>
          </PopupSelectInput>
        </PopupLabelAndInput>
        <PopupLabelAndInput>
          <PopupInputLabels id="amount">Amount</PopupInputLabels>
          <PopupInputs
            htmlFor="amount"
            type="number"
            placeholder="Enter Your Amount"
            required
            min="1"
            onChange={this.onChangeAmount}
            value={amount}
          />
        </PopupLabelAndInput>
        <PopupLabelAndInput>
          <PopupInputLabels id="date">Date</PopupInputLabels>
          <PopupInputs
            htmlFor="date"
            type="date"
            placeholder="Select Date"
            required
            onChange={this.onChangeDate}
            value={date}
          />
        </PopupLabelAndInput>
        <PopupUpdateTransactionButton
          type="submit"
          onClick={this.onClickUpdateTransaction}
        >
          Add Transaction
        </PopupUpdateTransactionButton>
      </PopupContainer>
    );
  }
}

export default UpdateTransactionPopup;
