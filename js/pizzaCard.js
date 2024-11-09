const pizzas = [
    {
        "id": 1,
        "name": "Margherita",
        "description": "Classic Italian pizza with a light flavor.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Basil"]
    },
    {
        "id": 2,
        "name": "Pepperoni",
        "description": "A fan favorite with spicy pepperoni slices.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Pepperoni"]
    },
    {
        "id": 3,
        "name": "Hawaiian",
        "description": "Sweet and savory with a tropical twist.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Ham", "Pineapple"]
    },
    {
        "id": 4,
        "name": "BBQ Chicken",
        "description": "Smoky BBQ flavor with juicy chicken pieces.",
        "ingredients": ["BBQ sauce", "Mozzarella", "Grilled chicken", "Onions", "Cilantro"]
    },
    {
        "id": 5,
        "name": "Veggie Delight",
        "description": "Loaded with fresh vegetables for a healthy choice.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Bell peppers", "Onions", "Mushrooms", "Olives"]
    },
    {
        "id": 6,
        "name": "Four Cheese",
        "description": "Rich blend of cheeses for an indulgent taste.",
        "ingredients": ["Mozzarella", "Cheddar", "Blue cheese", "Parmesan"]
    },
    {
        "id": 7,
        "name": "Meat Lover's",
        "description": "Packed with a variety of meats for hearty flavor.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Pepperoni", "Sausage", "Ham", "Bacon"]
    },
    {
        "id": 8,
        "name": "Buffalo Chicken",
        "description": "Spicy and tangy buffalo chicken with creamy cheese.",
        "ingredients": ["Buffalo sauce", "Mozzarella", "Grilled chicken"]
    },
    {
        "id": 9,
        "name": "Spinach and Feta",
        "description": "A Mediterranean-inspired pizza with a fresh taste.",
        "ingredients": ["Olive oil", "Mozzarella", "Spinach", "Feta cheese", "Garlic"]
    },
    {
        "id": 10,
        "name": "Italian Sausage",
        "description": "Savory sausage with an Italian seasoning blend.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Italian sausage", "Bell peppers", "Onions"]
    },
    {
        "id": 11,
        "name": "Mushroom and Truffle",
        "description": "Earthy flavors with a touch of truffle oil.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Mushrooms", "Truffle oil"]
    },
    {
        "id": 12,
        "name": "White Pizza",
        "description": "A creamy, cheesy delight without the tomato sauce.",
        "ingredients": ["Ricotta", "Mozzarella", "Parmesan", "Garlic", "Spinach"]
    },
    {
        "id": 13,
        "name": "Pesto Chicken",
        "description": "Fresh pesto and tender chicken for a flavorful twist.",
        "ingredients": ["Pesto sauce", "Mozzarella", "Grilled chicken", "Tomatoes"]
    },
    {
        "id": 14,
        "name": "Taco Pizza",
        "description": "Fusion of taco flavors with a pizza base.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Ground beef", "Lettuce", "Tomatoes", "Cheddar cheese", "Sour cream"]
    },
    {
        "id": 15,
        "name": "Shrimp Scampi",
        "description": "Seafood lovers' dream with garlic shrimp.",
        "ingredients": ["Olive oil", "Mozzarella", "Shrimp", "Garlic", "Parsley"]
    },
    {
        "id": 16,
        "name": "Eggplant Parmesan",
        "description": "A hearty veggie pizza with eggplant slices.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Eggplant", "Parmesan"]
    },
    {
        "id": 17,
        "name": "Philly Cheesesteak",
        "description": "Inspired by the classic Philly cheesesteak sandwich.",
        "ingredients": ["Alfredo sauce", "Mozzarella", "Sliced steak", "Bell peppers", "Onions"]
    },
    {
        "id": 18,
        "name": "Greek Pizza",
        "description": "A Mediterranean-inspired pizza with fresh toppings.",
        "ingredients": ["Olive oil", "Mozzarella", "Feta", "Black olives", "Tomatoes", "Red onions"]
    },
    {
        "id": 19,
        "name": "Buffalo Veggie",
        "description": "A spicy veggie pizza for buffalo lovers.",
        "ingredients": ["Buffalo sauce", "Mozzarella", "Bell peppers", "Onions", "Mushrooms"]
    },
    {
        "id": 20,
        "name": "Cheeseburger Pizza",
        "description": "All the flavors of a cheeseburger on a pizza crust.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Ground beef", "Cheddar cheese", "Pickles", "Onions"]
    }
    ,{
        "id": 21,
        "name": "Spicy Jalapeño",
        "description": "A fiery pizza topped with fresh jalapeños.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Jalapeños", "Onions", "Pepperoni"]
    },
    {
        "id": 22,
        "name": "Pineapple BBQ",
        "description": "Sweet pineapple paired with smoky BBQ sauce.",
        "ingredients": ["BBQ sauce", "Mozzarella", "Pineapple", "Bacon"]
    },
    {
        "id": 23,
        "name": "Carbonara Pizza",
        "description": "Creamy carbonara sauce topped with crispy pancetta.",
        "ingredients": ["Carbonara sauce", "Mozzarella", "Pancetta", "Parmesan", "Egg yolk"]
    },
    {
        "id": 24,
        "name": "Capricciosa",
        "description": "Italian-style pizza with a mix of savory toppings.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Ham", "Mushrooms", "Artichokes", "Black olives"]
    },
    {
        "id": 25,
        "name": "Anchovy Lovers",
        "description": "For the true anchovy enthusiast!",
        "ingredients": ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Garlic"]
    },
    {
        "id": 26,
        "name": "Truffle Prosciutto",
        "description": "Luxurious truffle flavor with savory prosciutto.",
        "ingredients": ["Truffle oil", "Mozzarella", "Prosciutto", "Arugula", "Parmesan"]
    },
    {
        "id": 27,
        "name": "Zucchini and Ricotta",
        "description": "Light and fresh pizza with zucchini ribbons.",
        "ingredients": ["Olive oil", "Mozzarella", "Zucchini", "Ricotta", "Lemon zest"]
    },
    {
        "id": 28,
        "name": "Salmon and Cream Cheese",
        "description": "Smoked salmon and cream cheese on a pizza crust.",
        "ingredients": ["Olive oil", "Mozzarella", "Smoked salmon", "Cream cheese", "Dill"]
    },
    {
        "id": 29,
        "name": "Chicken Alfredo",
        "description": "Creamy Alfredo sauce with grilled chicken.",
        "ingredients": ["Alfredo sauce", "Mozzarella", "Grilled chicken", "Parsley"]
    },
    {
        "id": 30,
        "name": "Spinach Artichoke",
        "description": "Inspired by spinach artichoke dip, on a pizza!",
        "ingredients": ["Alfredo sauce", "Mozzarella", "Spinach", "Artichoke hearts", "Garlic"]
    }] 
    
/*
    {
        "id": 31,
        "name": "Prosciutto Arugula",
        "description": "A classic Italian pizza with a fresh arugula topping.",
        "ingredients": ["Olive oil", "Mozzarella", "Prosciutto", "Arugula", "Parmesan"]
    },
    {
        "id": 32,
        "name": "Bacon Cheeseburger",
        "description": "All the flavors of a bacon cheeseburger in pizza form.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Ground beef", "Bacon", "Cheddar", "Pickles"]
    },
    {
        "id": 33,
        "name": "Mediterranean",
        "description": "A mix of Mediterranean flavors on a pizza crust.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Feta", "Olives", "Sun-dried tomatoes", "Spinach"]
    },
    {
        "id": 34,
        "name": "Basil Pesto Veggie",
        "description": "Fresh pesto with a variety of seasonal veggies.",
        "ingredients": ["Pesto sauce", "Mozzarella", "Bell peppers", "Mushrooms", "Tomatoes"]
    },
    {
        "id": 35,
        "name": "Pepperoni Jalapeño",
        "description": "Pepperoni with a kick of jalapeño heat.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Pepperoni", "Jalapeños"]
    },
    {
        "id": 36,
        "name": "Egg and Bacon Breakfast",
        "description": "A breakfast-inspired pizza with egg and bacon.",
        "ingredients": ["Olive oil", "Mozzarella", "Bacon", "Egg", "Parmesan"]
    },
    {
        "id": 37,
        "name": "Tuna Melt",
        "description": "Inspired by the classic tuna melt sandwich.",
        "ingredients": ["Olive oil", "Mozzarella", "Tuna", "Onions", "Capers"]
    },
    {
        "id": 38,
        "name": "Potato and Rosemary",
        "description": "Thin potato slices with rosemary on a light crust.",
        "ingredients": ["Olive oil", "Mozzarella", "Thin potato slices", "Rosemary", "Garlic"]
    },
    {
        "id": 39,
        "name": "Cheesy Garlic",
        "description": "Extra cheesy with a rich garlic flavor.",
        "ingredients": ["Garlic sauce", "Mozzarella", "Parmesan", "Garlic", "Oregano"]
    },
    {
        "id": 40,
        "name": "Artichoke Chicken",
        "description": "Artichoke hearts and grilled chicken for a fresh flavor.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Grilled chicken", "Artichokes", "Basil"]
    },
    {
        "id": 41,
        "name": "Pepperoni and Bacon",
        "description": "Double meat delight with pepperoni and bacon.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Pepperoni", "Bacon"]
    },
    {
        "id": 42,
        "name": "Tomato Basil",
        "description": "Simple, fresh flavors with ripe tomatoes and basil.",
        "ingredients": ["Olive oil", "Mozzarella", "Tomatoes", "Basil", "Garlic"]
    },
    {
        "id": 43,
        "name": "Smoked Salmon",
        "description": "Pizza topped with creamy cheese and smoked salmon.",
        "ingredients": ["Cream cheese", "Mozzarella", "Smoked salmon", "Capers", "Dill"]
    },
    {
        "id": 44,
        "name": "Sweet Corn and Bacon",
        "description": "Savory and sweet combination of corn and bacon.",
        "ingredients": ["Tomato sauce", "Mozzarella", "Bacon", "Sweet corn", "Onions"]
    },
    {
        "id": 45,
        "name": "French Onion",
        "description": "Inspired by French onion soup with caramelized onions.",
        "ingredients": ["Beef broth sauce", "Mozzarella", "Caramelized onions", "Thyme"]
    },
    {
        "id": 46,
        "name": "Buffalo Cauliflower",
        "description": "A vegetarian buffalo-style pizza with cauliflower.",
        "ingredients": ["Buffalo sauce", "Mozzarella", "Cauliflower", "Green onions"]
    },
    {
        "id": 47,
        "name": "Sweet Potato and Spinach",
        "description": "A unique combo with roasted sweet potatoes.",
        "ingredients": ["Olive oil", "Mozzarella", "Sweet potato", "Spinach", "Feta cheese"]
    },
    {
        "id": 48,
        "name": "Garlic Shrimp",
        "description": "Succulent shrimp with garlic and herbs.",
        "ingredients": ["Olive oil", "Mozzarella", "Shrimp", "Garlic", "Parsley"]
    },
    {
        "id": 49,
        "name": "Thai Chicken",
        "description": "A fusion pizza with Thai flavors.",
        "ingredients": ["Peanut sauce", "Mozzarella", "Grilled chicken", "Red onions", "Cilantro"]
    },
    {
        "id": 50,
        "name": "Spinach Ricotta",
        "description": "A creamy spinach and ricotta topping.",
        "ingredients": ["Olive oil", "Mozzarella", "Spinach", "Ricotta", "Garlic"]
    }
]
*/



document.addEventListener("DOMContentLoaded", () => {
    const pizzaWrapper = document.querySelector("#pizza-cards");
    pizzaWrapper.innerHTML = pizzas.map(pizza => {
        return `
        <div class="card">
            <img src="./assets/pizzas/${pizza.name.replaceAll(" ", "_").replaceAll("ñ", "n")}.jpg" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
        </div>`
    }).join("");
});