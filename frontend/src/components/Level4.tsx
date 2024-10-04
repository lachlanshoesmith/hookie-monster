import { useEffect, useState } from 'react';
import '../App.css';
import { CookieRecipe, Recipe } from './CookieRecipe';

function Level4() {
  const [cookiesAte, setCookiesAte] = useState(0);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipe, setRecipe] = useState<Recipe>({
    error: 'no recipe yet',
  });

  return (
    <>
      <section className="left level4">
        <div className="mode-switcher cookie-monster-mode"></div>
        <p>
          {cookiesAte} cookie{cookiesAte === 1 ? '' : 's'} is not enough
          <br />
          <br />
          <button
            className="show-recipe-button"
            onClick={() => {
              setShowRecipe(!showRecipe);
            }}
          >
            Show cookie recipe
          </button>
        </p>
        <div className="cookie-monster level4 count-von-counterexample-mode"></div>
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
      {showRecipe ? <CookieRecipe recipe={recipe} /> : <></>}
    </>
  );
}

export default Level4;
