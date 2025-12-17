import { useSelector } from "react-redux";

function Customer() {
  const customerFullName = useSelector((store) => store.customer.fullName);
  const customerId = useSelector((store) => store.customer.nationalID);

  return (
    <h2>
      👋 Welcome, {customerFullName} ({customerId})
    </h2>
  );
}

export default Customer;
