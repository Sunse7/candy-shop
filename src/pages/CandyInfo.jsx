import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { buyCandy } from '../actions/candyActions'; 
import Button from "../Components/Button";

function CandyInfo() {
  const [candy, setCandy] = useState();
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    let candyMatch = state.candies.find((c) => c.id == params.id);
    setCandy(candyMatch);
  }, [state]);

  function addCandyToCart() {
    dispatch(buyCandy(candy))
  }

  return (
    <main>
      {candy && (
        <>
        <img className="card__image" src={`/images/candy-${candy.id}.png`} width='200px' height='200px' alt="Candy" />
          <h2>{candy.name}</h2>
          <p>{candy.price} SEK</p>
          <Button title='ADD TO CART' action={addCandyToCart} />
        </>
      )}
    </main>
  );
}

export default CandyInfo;
