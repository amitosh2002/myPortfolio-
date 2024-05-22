// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <div className=" mt-5 p-5 text-center bg-image rounded-3 ">
        <div className="mask bg-mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Hi, I am Amitosh !</h1>
              <h4 className="mb-3">Front-end-developer</h4>
              <NavLink
                style={{ textDecoration: "none", color: "#fffff" }}
                to="/contact"
              >
                <span>Contact me !</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  span {
    padding: 8px;
    border-radius: 5px;
    height: 5px;
    width: 5px;
    color: #0a0909;
    background-color: #93fdfd;
  }
  span:hover {
    color: black;
    background-color: whitesmoke;
  }
  .bg-image {
    /* background-image: url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp"); */
    background-image: url("https://media.licdn.com/dms/image/D4D16AQGkUo0g7YLL9A/profile-displaybackgroundimage-shrink_350_1400/0/1698422238354?e=1717027200&v=beta&t=x9N2e2flhfqcaNlZId0w5C7V_9hPyawcl8EIEyImg2Q");
    /* background-repeat: none; */
    background-repeat: no-repeat;
    object-fit: contain;
    background-size: cover;
    height: 89%;
    width: 160%;
  }
  .bg-mask {
    padding: 9rem;
    background-color: rgba(0, 0, 0, 0.538);
    height: 96%;
  }
`;

export default Home;
