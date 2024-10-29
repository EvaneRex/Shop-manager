import { useState, useEffect } from "react";
import ShopInput from "./ShopInput";
import ShopList from "./ShopList";
import "./App.css";

function App() {
  const storedShopItems = JSON.parse(localStorage.getItem("shopItems")) || [];
  const storedShops = JSON.parse(localStorage.getItem("shops")) || []; //|| betyder eller

  const [shopItems, setShopItems] = useState(storedShopItems);
  const [shops, setShops] = useState(storedShops);

  //opdatere localstorage når varer/shopItems ændres
  useEffect(() => {
    localStorage.setItem("shopItems", JSON.stringify(shopItems));
  });

  return ShopInput();
}

export default App;
