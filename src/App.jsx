import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage";
import CandyInfo from "./pages/CandyInfo";
import Cart from "./pages/Cart";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fillStock } from "./actions/candyActions";

function App() {
  const API_URL = 'https://majazocom.github.io/Data/candies.json';
  const dispatch = useDispatch();
  const [candies, setCandies] = useState([]);
  
  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setCandies(data))
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if(candies.length > 0) {
      dispatch(fillStock(candies))
    }
  }, [candies])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="/candyinfo/:id" element={<CandyInfo />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
