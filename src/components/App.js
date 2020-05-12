import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Recipe from "./Recipe";
import recipes from "../recipes";

console.log(recipes);

function App() {
  return (
    <div>
      <Header />
      {recipes.map(recipeDetails => (
        <Recipe
          key={recipeDetails.key}
          title={recipeDetails.title}
          content={recipeDetails.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
