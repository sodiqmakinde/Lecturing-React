import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Glovo_logo.svg/2560px-Glovo_logo.svg.png"
          alt="Glovo Logo"
        />
        <div>
          <button>Get Started</button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

let Container = styled.section`
  background: var(--yellow);
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    max-width: 1200px;
    margin: 0 auto;
    img {
      width: 160px;
    }
    button{
      background: var(--green);
      border: 0;
      padding: 15px 25px;
      border-radius: 50px;
      color: var(--white);
    }
  }
`;
