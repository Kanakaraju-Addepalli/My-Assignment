import { format } from "date-fns";

import {
  TransactionItem,
  CreditDebitSymbolAndName,
  TransactionItemPhoto,
  TransactionUserName,
  TransactionName,
  NameCategoryDateAmountHeadings,
  TransactionCategory,
  TransactionDate,
  TransactionDebitAmount,
  TransactionCreditAmount,
} from "./styledComponents";

const TransactionAdminListItem = (props) => {
  const { transactionDetails } = props;
  const {
    userId,
    transactionName,
    type,
    category,
    amount,
    date,
  } = transactionDetails;
  const isCredit = type === "credit";
  const myDate = new Date(date);
  const formattedDate = format(myDate, "dd MMM, hh:mm a");
  const userIdAvatar =
    userId % 2 === 0
      ? "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog-pixomatic.s3.appcnt.com%2Fimage%2F22%2F01%2F26%2F61f166e07f452%2F_orig%2Fpixomatic_1572877263963.png&tbnid=ep8YiRkRyhSwEM&vet=1&imgrefurl=https%3A%2F%2Fpixomatic.us%2Fblog%2Fsocial-media%2Ftips-professional-profile-picture-linkedin%2F&docid=yEbRnydunPWjQM&w=853&h=853&hl=en-GB&source=sh%2Fx%2Fim%2F3"
      : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog-pixomatic.s3.appcnt.com%2Fimage%2F22%2F01%2F26%2F61f166e1377d4%2F_orig%2Fpixomatic_1572877223091.png&tbnid=NNt9zccNm0EUWM&vet=1&imgrefurl=https%3A%2F%2Fpixomatic.us%2Fblog%2Fsocial-media%2Ftips-professional-profile-picture-linkedin%2F&docid=yEbRnydunPWjQM&w=498&h=498&hl=en-GB&source=sh%2Fx%2Fim%2F3";

  return (
    <TransactionItem>
      <CreditDebitSymbolAndName>
        {isCredit && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="14" stroke="#16DBAA" stroke-width="2" />
            <path
              d="M15.5303 9.96967C15.2374 9.67678 14.7626 9.67678 14.4697 9.96967L9.6967 14.7426C9.40381 15.0355 9.40381 15.5104 9.6967 15.8033C9.98959 16.0962 10.4645 16.0962 10.7574 15.8033L15 11.5607L19.2426 15.8033C19.5355 16.0962 20.0104 16.0962 20.3033 15.8033C20.5962 15.5104 20.5962 15.0355 20.3033 14.7426L15.5303 9.96967ZM15.75 21L15.75 10.5L14.25 10.5L14.25 21L15.75 21Z"
              fill="#16DBAA"
            />
          </svg>
        )}
        {!isCredit && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="14" stroke="#FE5C73" stroke-width="2" />
            <path
              d="M14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303L20.3033 16.7574C20.5962 16.4645 20.5962 15.9896 20.3033 15.6967C20.0104 15.4038 19.5355 15.4038 19.2426 15.6967L15 19.9393L10.7574 15.6967C10.4645 15.4038 9.98959 15.4038 9.6967 15.6967C9.40381 15.9896 9.40381 16.4645 9.6967 16.7574L14.4697 21.5303ZM14.25 10.5L14.25 21L15.75 21L15.75 10.5L14.25 10.5Z"
              fill="#FE5C73"
            />
          </svg>
        )}
        <TransactionItemPhoto src={userIdAvatar} alt="avatar" />
        <TransactionUserName>{transactionName}</TransactionUserName>
      </CreditDebitSymbolAndName>
      <NameCategoryDateAmountHeadings>
        <TransactionName>{transactionName}</TransactionName>
        <TransactionCategory>{category}</TransactionCategory>
        <TransactionDate>{formattedDate}</TransactionDate>
        {isCredit && (
          <TransactionCreditAmount> +{amount}</TransactionCreditAmount>
        )}
        {!isCredit && (
          <TransactionDebitAmount> -{amount}</TransactionDebitAmount>
        )}
      </NameCategoryDateAmountHeadings>
    </TransactionItem>
  );
};

export default TransactionAdminListItem;
