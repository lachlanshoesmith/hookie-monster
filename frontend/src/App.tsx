import { Link, Outlet, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  let level = parseInt(useLocation().pathname.slice(-1)) - 1;
  if (!level) {
    level = 0;
  }

  const levels = [
    {
      features: [
        'None! As of now, everything in this app could be easily implemented without a line of React, let alone JavaScript.',
      ],
      todos: [
        'Which React hook could I use to keep track of how many cookies Hookie Monster is eating?',
        'Bonus: Can you remind me why we would use said hook instead of the similar built-in language feature (variables)?',
      ],
    },
    {
      features: [
        'The useState hook to track the amount of cookies Hookie Monster has eaten.',
        'The useEffect hook as well as another bit of state to detect when 20 cookies have been eaten... but is it necessary?',
        "A ternary operator based on the state to determine whether Hookie Monster says 'cookie' or 'cookies' based on the amount of cookies he's eaten.",
      ],
      todos: ['Can we improve the too-many-cookies system?'],
    },
    {
      features: [
        'The useState hook to track the amount of cookies Hookie Monster has eaten.',
        "A ternary operator based on the state to determine whether Hookie Monster says 'cookie' or 'cookies' based on the amount of cookies he's eaten.",
        'Hookie Monster shares his secret cookie recipe when you feed him 100 cookies. The recipe is grabbed from an API endpoint - but how?!',
      ],
      todos: [
        "Could we repurpose a hook that we recently removed to help us find Hookie Monster's secret recipe?",
        'If so, what would this hook react to?',
      ],
    },
    {
      features: [
        'The useState hook to track the amount of cookies Hookie Monster has eaten.',
        "A ternary operator based on the state to determine whether Hookie Monster says 'cookie' or 'cookies' based on the amount of cookies he's eaten.",
        'Hookie Monster shares his secret cookie recipe when you feed him 100 cookies. The recipe is grabbed from an API endpoint with `fetch` inside a useEffect hook.',
        'A button at the top of the screen lets the user switch between Count von CounterExample and Hookie Monster modes.',
      ],
      todos: [
        'How can we implement a useContext hook to switch between the Count von CounterExample and Hookie Monster modes?',
      ],
    },
    {
      features: [
        'The useState hook to track the amount of cookies Hookie Monster has eaten.',
        "A ternary operator based on the state to determine whether Hookie Monster says 'cookie' or 'cookies' based on the amount of cookies he's eaten.",
        'Hookie Monster shares his secret cookie recipe when you feed him 100 cookies. The recipe is grabbed from an API endpoint with `fetch` inside a useEffect hook.',
        'A button at the top of the screen lets the user switch between Count von CounterExample and Hookie Monster modes.',
        'The useContext hook to switch between the Count von CounterExample and Hookie Monster modes.',
      ],
      todos: ["None - we're done here! 🥳🍪"],
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
          {levels.map((_, i) => (
            <Link
              to={`level${i + 1}`}
              key={i}
              className={i === level ? 'active level-link' : 'level-link'}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
