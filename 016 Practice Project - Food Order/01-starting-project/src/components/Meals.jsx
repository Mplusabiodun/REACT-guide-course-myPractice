// import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "../hook/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);

  const {
    data: loadedMeals,
    error,
    isLoading,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching the meals....</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        // <li key={meal.id}>{meal.name}</li>
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
