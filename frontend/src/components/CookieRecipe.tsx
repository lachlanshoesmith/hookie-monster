export type Recipe = {
  error?: string;
  recipe?: string[];
};

export type CookieRecipeProps = {
  recipe: Recipe;
};

const renderLine = (line: String) => {
  if (line.startsWith('##')) {
    return <h2>{line.slice(3)}</h2>;
  } else if (line.startsWith('#')) {
    return <h1>{line.slice(2)}</h1>;
  } else if (line.startsWith('*') || line.startsWith('-')) {
    return <li>{line.slice(1)}</li>;
  } else {
    return <p>{line}</p>;
  }
};

export function CookieRecipe(props: CookieRecipeProps) {
  return (
    <div className="cookie-recipe">
      <h1>The Secret Recipe</h1>
      <article>
        {props.recipe.error && <p className="error">{props.recipe.error}</p>}
        {props.recipe.recipe &&
          props.recipe.recipe.map((line) => renderLine(line))}
      </article>
    </div>
  );
}
