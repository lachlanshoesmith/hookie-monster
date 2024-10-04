type CookieRecipe = {
  error?: string;
  recipe?: string[];
};

function CookieRecipe(props: CookieRecipe) {
  return (
    <div className="cookie-recipe">
      {props.error && <p className="error">{props.error}</p>}
      {props.recipe && <p>{props.recipe.join('\n')}</p>}
    </div>
  );
}

export default CookieRecipe;
