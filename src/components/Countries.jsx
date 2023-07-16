import React from "react";
import styled from "styled-components";

const flags = [
  { name: "United States", population: 331002651, capital: "Washington, D.C." },
  { name: "Canada", population: 37742154, capital: "Ottawa" },
  { name: "Brazil", population: 213993437, capital: "Brasília" },
  { name: "Australia", population: 25499884, capital: "Canberra" },
  { name: "Germany", population: 83783942, capital: "Berlin" },
  { name: "India", population: 1393409038, capital: "New Delhi" },
  { name: "China", population: 1444216107, capital: "Beijing" },
  { name: "France", population: 65273511, capital: "Paris" },
  { name: "United Kingdom", population: 67886011, capital: "London" },
  { name: "Japan", population: 126476461, capital: "Tokyo" },
];

const Countries = () => {
  return (
    <County>
      <h2>Countries where we deliver</h2>

      <div>
        {flags.map((country) => {
          return (
            <div>
              <h2>Population: {country.population}</h2>
              <p>{country.name}</p>
            </div>
          );
        })}
      </div>
    </County>
  );
};

export default Countries;

let County = styled.section`
p{
    background-color: var(--green);
    display: inline-block;
    padding: 20px 25px;
    border-radius: 50px;
    color: var(--white);
    font-size: 30px;
}
`
