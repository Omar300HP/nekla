import React, { Fragment, useState } from "react";

import HomeScreen from "./HomeScreen";
import SpendMoney from "./SpendMoney";

export default function Home() {
  const [showSpendMoney, setShowSpendMoney] = useState(false);

  return (
    <>
      {showSpendMoney ? (
        <SpendMoney setShowSpendMoney={setShowSpendMoney} />
      ) : (
        <HomeScreen
          showSpendMoney={showSpendMoney}
          setShowSpendMoney={setShowSpendMoney}
        />
      )}
    </>
  );
}
