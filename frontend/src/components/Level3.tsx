import { useState } from 'react';
import '../App.css';

function Level3() {
  const [cookiesAte, setCookiesAte] = useState(0);
  const [showRecipe, setShowRecipe] = useState(false);

  return (
    <>
      <section className="left">
        <p>
          <span>
            {cookiesAte} cookie{cookiesAte === 1 ? '' : 's'} is not enough
          </span>
        </p>
        <button
          className="show-recipe-button"
          onClick={() => {
            setShowRecipe(!showRecipe);
          }}
        >
          Show cookie recipe
        </button>
        <div className="cookie-monster"></div>
      </section>
      <section className="middle">
        <p>i yearn for cookies... please feed me...</p>
        <button
          onClick={() => {
            setCookiesAte(cookiesAte + 1);
          }}
          className="cookie"
        ></button>
      </section>
    </>
  );
}

export default Level3;
