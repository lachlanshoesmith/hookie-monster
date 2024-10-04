import { useEffect, useState } from 'react';
import '../../App.css';
import { CookieRecipe, Recipe } from '../CookieRecipe';
import { ModeContext } from './ModeContext';
import Character from './Character';

function Level5() {
  const [cookiesAte, setCookiesAte] = useState(0);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipe, setRecipe] = useState<Recipe>({
    error: 'no recipe yet',
  });
  const [mode, setMode] = useState('hookie-monster-mode');

  useEffect(() => {
    fetch(
      'http://localhost:3000/secret-recipe?' +
        new URLSearchParams({
          cookies: cookiesAte.toString(),
        })
    ).then((res) => {
      res.json().then((json) => setRecipe(json));
    });
  }, [showRecipe]);

  return (
    <>
      <section className="left level4">
        <div
          onClick={() => {
            if (mode === 'count-von-counterexample-mode') {
              setMode('hookie-monster-mode');
            } else {
              setMode('count-von-counterexample-mode');
            }
          }}
          className={'mode-switcher ' + mode}
        ></div>
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
        <ModeContext.Provider value={mode}>
          <Character />
        </ModeContext.Provider>
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

export default Level5;
