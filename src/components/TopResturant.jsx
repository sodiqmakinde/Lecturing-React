import React from "react";
import styled from "styled-components";
import Resturant from "./Resturant";

const restaurants = [
  {
    restaurant_name: "KFC",
    Visit: 4.5,
    image:
      "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_2.0,h_128,w_128,b_transparent/Stores/u56iguujsgxttvzxpthn",
  },
  {
    restaurant_name: "McDonald's",
    Visit: 3.8,
    image: "https://example.com/mcdonalds.jpg",
  },
  {
    restaurant_name: "Pizza Hut",
    Visit: 4.2,
    image: "https://example.com/pizzahut.jpg",
  },
  // Add more restaurants here...
  {
    restaurant_name: "Subway",
    Visit: 4.1,
    image: "https://example.com/subway.jpg",
  },
  {
    restaurant_name: "Burger King",
    Visit: 3.9,
    image: "https://example.com/burgerking.jpg",
  },
  {
    restaurant_name: "Domino's Pizza",
    Visit: 4.3,
    image: "https://example.com/dominos.jpg",
  },
  // Add more restaurants here...
];

console.log(restaurants);


const TopResturant = () => {
  return (
    <StyleResturant>
      <h2>Top restaurants and more in Glovo</h2>

      <section className="display_flex">
        {restaurants.map((data) => {
          return (
            <Resturant
              visits={data.Visit}
              product_name={data.restaurant_name}
              fawaz={data.image}
            />
          );
        })}
       
      </section>
    </StyleResturant>
  );
};

export default TopResturant;

let StyleResturant = styled.section`
  max-width: 900px;
  margin: 0 auto;
  .display_flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  .each_rest {
    margin: 20px 0;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      font-size: 1.5em;
    }
  }
`;
