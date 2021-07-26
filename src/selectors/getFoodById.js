import {foods} from '../Data/FoodData';

export const getHeroesById = ({id}) => {
    return foods.filter( food => food.id === id)
}