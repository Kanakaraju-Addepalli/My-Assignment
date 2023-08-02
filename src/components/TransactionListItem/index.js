import { format } from "date-fns";
import Popup from "reactjs-popup";

import {
  TransactionItem,
  CreditDebitSymbolAndName,
  TransactionName,
  CategoryDateAmount,
  TransactionCategory,
  TransactionDate,
  TransactionDebitAmount,
  TransactionCreditAmount,
  TransactionEditAndDelete,
  PopupBackground,
  EditButton,
  DeleteButton,
} from "./styledComponents";

import UpdateTransactionPopup from "../UpdateTransactionPopup";
import DeleteTransactionPopup from "../DeleteTransaction";

const TransactionListItem = (props) => {
  const { transactionDetails } = props;
  const { transactionName, type, category, amount, date } = transactionDetails;
  const isCredit = type === "credit";
  const myDate = new Date(date);
  const formattedDate = format(myDate, "dd MMM, hh:mm a");

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
        <TransactionName>{transactionName}</TransactionName>
      </CreditDebitSymbolAndName>
      <CategoryDateAmount>
        <TransactionCategory>{category}</TransactionCategory>
        <TransactionDate>{formattedDate}</TransactionDate>
        {isCredit && (
          <TransactionCreditAmount> +{amount}</TransactionCreditAmount>
        )}
        {!isCredit && (
          <TransactionDebitAmount> -{amount}</TransactionDebitAmount>
        )}
      </CategoryDateAmount>
      <TransactionEditAndDelete>
        <Popup
          modal
          trigger={
            <EditButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1510)">
                  <path
                    d="M14.9998 1.66669L18.3332 5.00002M1.6665 
                18.3334L2.73017 14.4332C2.79957 14.1788 2.83426 
                14.0516 2.88753 13.9329C2.93482 13.8276 2.99294 
                13.7274 3.06093 13.6341C3.13752 13.529 3.23076 
                13.4358 3.41726 13.2493L12.0284 4.63809C12.1934 
                4.47308 12.2759 4.39058 12.3711 4.35967C12.4548 
                4.33248 12.5449 4.33248 12.6286 4.35967C12.7237 
                4.39058 12.8062 4.47308 12.9712 4.63809L15.3618 
                7.02862C15.5268 7.19362 15.6093 7.27613 15.6402 
                7.37126C15.6674 7.45495 15.6674 7.54509 15.6402 
                7.62878C15.6093 7.72391 15.5268 7.80642 15.3618 
                7.97143L6.75059 16.5826C6.5641 16.7691 6.47085 
                16.8623 6.36574 16.9389C6.27241 17.0069 6.17227 
                17.065 6.06693 17.1123C5.94829 17.1656 5.82107 
                17.2003 5.56662 17.2697L1.6665 18.3334Z"
                    stroke="#2D60FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1510">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </EditButton>
          }
        >
          {(close) => (
            <PopupBackground>
              <UpdateTransactionPopup
                close={close}
                transactionDetails={transactionDetails}
              />
            </PopupBackground>
          )}
        </Popup>
        <Popup
          modal
          trigger={
            <DeleteButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.3333 5.00002V4.33335C13.3333 3.39993 
              13.3333 2.93322 13.1517 2.5767C12.9919 2.2631 
              12.7369 2.00813 12.4233 1.84834C12.0668 1.66669 
              11.6001 1.66669 10.6667 1.66669H9.33333C8.39991 
              1.66669 7.9332 1.66669 7.57668 1.84834C7.26308 
              2.00813 7.00811 2.2631 6.84832 2.5767C6.66667 
              2.93322 6.66667 3.39993 6.66667 
              4.33335V5.00002M8.33333 9.58335V13.75M11.6667 
              9.58335V13.75M2.5 5.00002H17.5M15.8333 
              5.00002V14.3334C15.8333 15.7335 15.8333 
              16.4336 15.5608 16.9683C15.3212 17.4387 
              14.9387 17.8212 14.4683 18.0609C13.9335 
              18.3334 13.2335 18.3334 11.8333 
              18.3334H8.16667C6.76654 18.3334 6.06647 18.3334 
              5.53169 18.0609C5.06129 17.8212 4.67883 17.4387 
              4.43915 16.9683C4.16667 16.4336 4.16667 15.7335 
              4.16667 14.3334V5.00002"
                  stroke="#FE5C73"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </DeleteButton>
          }
        >
          {(close) => (
            <PopupBackground>
              <DeleteTransactionPopup
                close={close}
                transactionDetails={transactionDetails}
              />
            </PopupBackground>
          )}
        </Popup>
      </TransactionEditAndDelete>
    </TransactionItem>
  );
};

export default TransactionListItem;
