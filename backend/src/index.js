const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const recipe = {
  recipe: [
    'ME FINALLY SHARE SECRET!',
    'ME BEEN KEEPING THIS RECIPE IN PRIVATE REPO FOR YEARS... BUT NOW ME THINK WORLD READY FOR MOST REACTIVE COOKIES EVER! NOM NOM NOM!',
    '# Ingredients:',
    '- 2 cups of `useState` flour',
    '- 1 cup of `useEffect` sugar',
    '- 2 large `props` (room temperature)',
    '- 1 tsp of pure `useCallback` extract',
    '- 1/2 cup of `useRef` butter',
    '- 1 cup of recursive chocolate `map()` chips',
    '## Instructions:',
    '*1. Initialize new project with `create-react-app cookie-monster-cookies`',
    '*2. `import` all ingredients into large `<Bowl />` component',
    '*3. Mix `useState` flour and `useEffect` sugar until no errors in console',
    '*4. Add `props` one at a time, mixing after each addition',
    '*5. Fold in `useCallback` extract for optimal performance',
    '*6. Using `useRef`, cream butter until smooth',
    '*7. Combine wet and dry ingredients in development environment',
    '*8. Debug thoroughly, then fold in chocolate `map()` chips',
    '*9. `render()` in preheated 350°F oven for 12-15 minutes',
    '*10. Allow cookies to reach `lazy()` loading state before consuming',
    '## WARNING: ME MUST WARN YOU... THESE COOKIES CAUSE EXTREME DEPENDENCY ON REACT HOOKS! NOM NOM NOM! ME ALREADY ADDICTED! COOKIE GOOD FOR SOUL, BAD FOR TYPESCRIPT!',
    '(thanks for writing this, claude)',
  ],
};

app.get('/secret-recipe', (req, res) => {
  if (!req.query.cookies || parseInt(req.query.cookies) < 100) {
    res.status(400).send({
      error: 'HOOKIE MONSTER STILL HUNGRY!',
    });
  } else {
    res.status(200).send(recipe);
  }
});

app.listen(port, () => {
  console.log(`Hookie monster app listening on port ${port}`);
});
