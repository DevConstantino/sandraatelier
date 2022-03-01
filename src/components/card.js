import imgTest from '../imgs/teste.svg';

const Card = () => {
  return (
      <div class='card d-flex flex-row m-2'>
        <img src={imgTest} class='card-img p-1' alt='...'></img>
        <div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
  );
};

export default Card;
