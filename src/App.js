import React from "react";
import StripeContainer from "./Stripe/StripeContainer";
import { useState } from "react";
import dress from "./dress.jpg"


const App = () => {
  const [showMyImage, setShowMyImage]= useState(false);
  return (

    <div className="App">
      {showMyImage ?  <StripeContainer /> :
      <div>
        <p>DRESS SHOP</p>
        <p>$100</p>
        <img src={dress} alt="" width="300px"/>
        <div>
          <button onClick={()=> setShowMyImage(true)}>Buy this dress</button>
        </div>
      </div>
}
    </div>
  );
};

export default App;