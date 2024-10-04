import { useEffect, useState } from 'react';
import '../App.css';

function Level2() {
  const [cookiesAte, setCookiesAte] = useState(0);
  const [enough, setEnough] = useState(false);

  useEffect(() => {
    if (cookiesAte === 20) {
      setEnough(true);
    }
  }, [cookiesAte]);

  return (
    <>
      <section className="left">
        <p>
          {enough ? (
            <span className="enough">I'M GONNA THROW UP!! ENOUGH!!!</span>
          ) : (
            <span>
              {cookiesAte} cookie{cookiesAte === 1 ? '' : 's'} is not enough
            </span>
          )}
        </p>
        <div className="cookie-monster"></div>
      </section>
      <section className="middle">
        {!enough ? <p>i yearn for cookies... please feed me...</p> : <></>}
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

export default Level2;
