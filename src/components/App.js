import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Recipe from "./Recipe";
import recipes from "../recipes";
import Carousel from "./Carousel";

import "bootstrap/dist/css/bootstrap.min.css"; // required stylesheet
import "../styles.css"; // my stylesheet

console.log(recipes);

function App() {
  return (
    <div>
      <Header />
      {recipes.map(recipeDetails => (
        <Recipe
          key={recipeDetails.key}
          title={recipeDetails.title}
          image={recipeDetails.image}
          ingredients={recipeDetails.ingredients}
          description={recipeDetails.description}
        />
      ))}
      <Footer />
      <Carousel />
    </div>
  );
}

export default App;
