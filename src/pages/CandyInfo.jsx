import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CandyInfo() {
  const [candy, setCandy] = useState();
  const params = useParams();
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    let candyMatch = state.candies.find((c) => c.id == params.id);
    setCandy(candyMatch);
  }, [state]);

  return (
    <main>
      {candy && (
        <>
          <h2>{candy.name}</h2>
          <p>{candy.price}</p>
        </>
      )}
    </main>
  );
}

export default CandyInfo;
