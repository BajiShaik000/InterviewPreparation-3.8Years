import "./App.css";
import CheckoutStepper from "./components/CheckoutStepper";

function App() {
  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Enter your shipping address.</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Complete payment for your order.</div>,
    },
    {
      name: "Delivered",
      Component: () => <div> Your order has been delivered.</div>,
    },
  ];

  return (
    <div className="container">
      <h1>Checkout</h1>
      <CheckoutStepper config={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;
