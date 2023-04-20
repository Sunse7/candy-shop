import Button from './Button';

function CandyCard({ candy }) {
  return (
    <article className="card">
      <img className='card__image' src='./images/wink.png' alt="" width='200px' height='200px' />
      <section className='card__info--firstrow'>
        <h3>{candy.name}</h3>
        <p>{candy.price}:-</p>
      </section>
      <section className='card__info--secondrow'>
        <Button title='+' />
      </section>
    </article>
  );
}

export default CandyCard;
