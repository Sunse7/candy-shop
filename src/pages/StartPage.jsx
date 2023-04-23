import { useSelector } from "react-redux";
import CandyCard from "../Components/CandyCard";
import { useEffect, useState } from "react";

function StartPage() {
  const [candies, setCandies] = useState([]);
  const [candiesFromStore, setCandiesFromStore] = useState([]);
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    setCandies(state.candies);
    setCandiesFromStore(state.candies);
  }, [state]);

  function handleSearchInput(input) {
    setCandies(candiesFromStore);
    let candiesCopy = [...candiesFromStore];
    let filteredCandies = candiesCopy.filter((candy) =>
      candy.name.includes(input)
    );
    setCandies(filteredCandies);
  }

  return (
    <main>
      <p>STARTPAGE</p>
      <section>
        <label htmlFor="">Search</label>
        <input
          type="text"
          onChange={(e) => handleSearchInput(e.target.value)}
        />
      </section>
      {candies &&
        candies.map((candy) => <CandyCard key={candy.id} candy={candy} />)}
    </main>
  );
}

export default StartPage;
