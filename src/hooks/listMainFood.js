import React from "react";
import {getFoodById} from '../../../selectors/getFoodById';

export const listMainFood = () => {
  const mainFoods = getFoodById (id);
  return (
    <ul>
      {
        mainFoods.map (food => (
          <li key={food.id}>
              {food.mainFoodCode}
          </li>
        ))
      }
    </ul>

  )
};
