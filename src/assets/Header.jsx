import React from "react";
import logo from "./img/tuxpi.com.1708847157.jpg";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="header-section">
          <img className="pic  " src={logo} alt="" />
        </div>
        <div className="nav">
          <Navbar />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .nav {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 121, 97, 1) 74%,
      rgba(0, 255, 141, 1) 100%
    );
    width: 100%;
  }
  .pic {
    width: 100px;
    height: 100px;
    padding: 10px;
    border-radius: 50%;
  }
  .header-section {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(5, 109, 86, 1) 74%,
      rgba(16, 161, 96, 1) 100%
    );
    padding: 10px;
    width: 100%;
    max-height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
export default Header;
