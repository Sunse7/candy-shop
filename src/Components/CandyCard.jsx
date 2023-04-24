import { useDispatch } from "react-redux";
import Button from "./Button";
import { buyCandy } from "../actions/candyActions";
import { Link } from "react-router-dom";
import styles from './CandyCard.module.scss';

function CandyCard({ candy }) {
  const dispatch = useDispatch();

  function addCandyToCart() {
    dispatch(buyCandy(candy));
  }

  function navigateToCandyInfo() {
    console.log(candy);
  }

  return (
    <article className={styles.card}>
      <Link to={'/candyinfo/' + candy.id}>
        <img
          className={styles.image}
          src={`/images/candy-${candy.id}.png`}
          alt="Candy"
          width="200px"
          height="200px"
        />
      </Link>
      <section className={styles.firstrow}>
        <h3>{candy.name}</h3>
        <p>{candy.price}:-</p>
      </section>
      <section className={styles.secondrow}>
        <Button title="+" action={addCandyToCart} />
      </section>
    </article>
  );
}

export default CandyCard;
