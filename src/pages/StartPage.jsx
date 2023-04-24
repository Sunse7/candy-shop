import { useSelector } from "react-redux";
import CandyCard from "../Components/CandyCard";
import { useEffect, useState } from "react";
import styles from "./StartPage.module.scss";

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
    <main className={styles.main}>
      <section className={styles.searchContainer}>
        <input
          type="text"
          onChange={(e) => handleSearchInput(e.target.value)}
          placeholder="Search Candy"
        />
      </section>
      <section className={styles.candyCards}>
        {candies &&
          candies.map((candy) => <CandyCard key={candy.id} candy={candy} />)}
      </section>
    </main>
  );
}

export default StartPage;
