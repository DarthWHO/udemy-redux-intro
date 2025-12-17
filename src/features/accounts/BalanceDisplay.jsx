import { useSelector } from "react-redux";

function formatCurrency(value, currency) {
  if (currency === "") currency = "USD";
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);
  const currency = useSelector((store) => store.account.currency);

  return <div className="balance">{formatCurrency(balance, currency)}</div>;
}

export default BalanceDisplay;
