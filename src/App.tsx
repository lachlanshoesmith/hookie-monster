import { useEffect, useState } from 'react';
import './App.css';

function App() {
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
      {/*
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      */}
      <main className="right">
        <section>
          <h1>Hookie Monster</h1>
          <p>
            This relatively simple Cookie Clicker clone uses the following React
            features to work:
          </p>
          <ul>
            <li>
              The <code>useState</code> hook to track the amount of cookies
              Cookie Monster has eaten
            </li>
            <li>
              The <code>useEffect</code> hook as well as another bit of state to
              detect when 100 cookies have been eaten... but{' '}
              <em>is it necessary?</em>
            </li>
            <li>
              A ternary operator based on the state to determine whether Cookie
              Monster says 'cookie' or 'cookies' based on the amount of cookies
              he's eaten
            </li>
          </ul>
        </section>
        <section>
          <h2>Todo</h2>
          <ul>
            <li>Can we improve the too-many-cookies system?</li>
          </ul>
        </section>
        <section className="levels">
          <div className="active"></div>
          <div></div>
          <div></div>
        </section>
      </main>
    </>
  );
}

export default App;
