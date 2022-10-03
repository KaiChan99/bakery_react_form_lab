import { useState } from "react";
import NewCake from "./NewCake";
import RecipeList from "./RecipeList";
import CakeList from "./CakeList";

const BakeryContainer = () => {
const [cakes, setCakes] = useState([
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
]);

const addNewCake = (newCake) => {
    const updatedCakes = [...cakes, newCake]

    setCakes(updatedCakes);
}

return (
    <>
    <h2>Add a Cake</h2>
    
    <NewCake onSubmit={addNewCake}/>
    {/* <CakeList cakes={cakes} />  */}
    
    </>

)


}

export default BakeryContainer;