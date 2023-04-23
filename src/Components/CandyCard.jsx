import { useDispatch } from "react-redux";
import Button from "./Button";
import { buyCandy } from "../actions/candyActions";
import { Link } from "react-router-dom";

function CandyCard({ candy }) {
  const dispatch = useDispatch();

  function addCandyToCart() {
    dispatch(buyCandy(candy));
  }

  function navigateToCandyInfo() {
    console.log(candy);
  }

  return (
    <article className="card">
      <Link to={'/candyinfo/' + candy.id}>
        <img
          className="card__image"
          src={`/images/candy-${candy.id}.png`}
          alt="Candy"
          width="200px"
          height="200px"
        />
      </Link>
      <section className="card__info--firstrow">
        <h3>{candy.name}</h3>
        <p>{candy.price}:-</p>
      </section>
      <section className="card__info--secondrow">
        <Button title="+" action={addCandyToCart} />
      </section>
    </article>
  );
}

export default CandyCard;
