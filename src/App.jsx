import React from "react";
import CartPage from "./components/cartPage";
import CartPageContext from "./utils/cartPageContextComponent";

function App() {
  return (
    <div>
      {/* Wrapping the CartPage component with the CartPageContext to provide access to the context */}
      <CartPageContext>
        <CartPage />
        {/* Rendering the CartPage component */}
      </CartPageContext>
    </div>
  );
}

export default App;
