import { Outlet, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const level = parseInt(useLocation().pathname.slice(-1)) - 1;

  const levels = [
    {
      features: [
        'None! As of now, everything in this app could be easily implemented using vanilla JS.',
      ],
      todos: [
        'Which React hook could I use to keep track of how many cookies Cookie Monster is eating?',
        'Bonus: Can you remind me why we would use said hook instead of the similar built-in language feature (variables)?',
      ],
    },
    {
      features: [
        'The useState hook to track the amount of cookies Cookie Monster has eaten.',
        'The useEffect hook as well as another bit of state to detect when 100 cookies have been eaten... but is it necessary?',
        "A ternary operator based on the state to determine whether Cookie Monster says 'cookie' or 'cookies' based on the amount of cookies he's eaten",
      ],
      todos: ['Can we improve the too-many-cookies system?'],
    },
  ];

  return (
    <>
      <Outlet />
      <main className="right">
        <article>
          <section>
            <h1>Hookie Monster</h1>
            <p>
              This relatively simple Cookie Clicker clone uses the following
              React features to work:
            </p>
            <ul>
              {levels[level].features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Todo</h2>
            <ul>
              {levels[level].todos.map((todo) => (
                <li key={todo}>{todo}</li>
              ))}
            </ul>
          </section>
        </article>
        <section className="levels">
          {[0, 1, 2].map((i) => (
            <div key={i} className={i === level ? 'active' : ''} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
