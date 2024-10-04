import { useEffect, useState } from 'react';
import '../App.css';

function Level4() {
  const [cookiesAte, setCookiesAte] = useState(0);
  const [enough, setEnough] = useState(false);

  return (
    <>
      <section className="left level4">
        <div className="count-von-counterexample"></div>
        <p>
          {enough ? (
            <span className="enough">I'M GONNA THROW UP!! ENOUGH!!!</span>
          ) : (
            <span>
              {cookiesAte} cookie{cookiesAte === 1 ? '' : 's'} is not enough
            </span>
          )}
        </p>
        <div className="cookie-monster level4"></div>
      </section>
      <section className="middle">
        {!enough ? <p>i yearn for cookies... please feed me...</p> : <></>}
        <button
          onClick={() => {
            if (cookiesAte + 1 === 100) {
              setEnough(true);
            }
            setCookiesAte(cookiesAte + 1);
          }}
          className="cookie"
        ></button>
      </section>
    </>
  );
}

export default Level4;
