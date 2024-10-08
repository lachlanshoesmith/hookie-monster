import { useState } from 'react';
import '../App.css';
import { CookieRecipe, Recipe } from './CookieRecipe';

function Level3() {
  const [cookiesAte, setCookiesAte] = useState(0);
  const [showRecipe, setShowRecipe] = useState(false);
  // @ts-ignore
  const [recipe, setRecipe] = useState<Recipe>({
    error: 'no recipe yet',
  });

  /*
  TODO: use this fetch request
  fetch(
    'https://hookie-monster.fly.dev/secret-recipe?' +
      new URLSearchParams({
        cookies: cookiesAte.toString(),
      })
  ).then((res) => {
    res.json().then((json) => setRecipe(json));
  });
  */

  return (
    <>
      <section className="left">
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
      {showRecipe && <CookieRecipe recipe={recipe} />}
    </>
  );
}

export default Level3;
