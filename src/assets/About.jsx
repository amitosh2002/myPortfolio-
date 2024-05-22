import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/img/IMG_20220916_204253.jpg";
import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/JavaScript-logo.png";
import { MdWidthFull } from "react-icons/md";
import { NavLink } from "react-router-dom";

const About = () => {
  const skill = [
    {
      lang: "Java",
      imgs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquh91BgtG0LKb2yWd3Ufnqq_BOQbc8iiFYw8i0NN1HA&s",
      perce: "Fresher",
      test: "40",
    },
    {
      lang: "JavaScript",
      imgs: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
      perce: "Begineer",
    },
    {
      lang: "Html",
      imgs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HVNHQmF6XqXS0xqpvfcJFY3cQIAQEB3XmJ_edOZdMQ&s",
      perce: "Intermediate",
    },
    {
      lang: "CSS",
      imgs: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      perce: "Intermediate",
    },
    {
      lang: "React",
      imgs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrz4ZutyJzrXg6FitTZwJb73o3Gd-Cvra1MEW0hXJLg&s",
      perce: "begineer",
    },
    {
      lang: "C language",
      imgs: "../../public/1688275415052.png",
      perce: "Intermediate",
    },
  ];
  const [value, setValue] = useState(skill);
  return (
    <Wrapper>
      {/* <section className=" hero-section d-flex">
        <img
          className="about-img"
          src={img}
          alt=""
          style={{ borderRadius: "1.8rem" }}
        />
        <div class="container">
          <div class="row">
            <span class="text1">Hello!</span>
            <span class="text2">I am Amitosh </span>
          </div>
        </div>
      </section> */}

      <section className="skills">
        <div className="language ">
          <h2 className="d-flex m-5">Familier With </h2>
          <div className="  card2 ">
            {value.map((curelem) => {
              return (
                <>
                  <div className="card col-12 col-lg-4  " data-aos="zoom-in-up">
                    <div className=" row g-0" data-aos="zoom-in">
                      <div className="col-md-4">
                        <img
                          src={curelem.imgs}
                          className="img-fluid rounded-start  "
                        ></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{curelem.lang}</h5>

                          <p className="perc ">level : {curelem.perce}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .image {
    border-radius: 20px;
  }
  .container {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    margin: 20px;
  }

  .skill {
    height: 78%;
    width: 120%;
  }

  .container span {
    /* display: block; */
  }

  p,
  h2,
  h5 {
    margin: 15px;
  }

  .text1 {
    color: white;
    font-size: 70px;
    font-weight: 700;
    letter-spacing: 8px;
    margin-bottom: 20px;
    background: #0ca045;
    position: relative;
    animation: text 3s;
  }

  .text2 {
    font-size: 30px;
    color: #ffffff;
    font-family: Georgia, serif;
  }

  @keyframes text {
    0% {
      color: black;
      margin-bottom: -40px;
    }

    30% {
      letter-spacing: 25px;
      margin-bottom: -40px;
    }

    85% {
      letter-spacing: 8px;
      margin-bottom: -40px;
    }
  }

  .card2 {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center;
    align-items: center; */
    margin: 3.5rem;
  }
  .card {
    flex: 1 0 33.333333%; /* explanation below */
    margin: 8px;
    max-width: 440px;
    background-color: #f8f7ff;
    color: #111010;
    box-shadow: 33px 9px 8px -5px rgba(0, 0, 0, 0.1);
  }
  .img-fluid {
    max-height: 110px;
    max-width: 110px;
    margin: 8px;
  }
  .about-img {
    width: 14rem;
    height: 14rem;
    /* aspect-ratio: 4/3; */
  }
  ul {
    text-decoration: none;
  }
  li {
    text-decoration: none;
    color: #ffffff;
  }

  .card-text {
    width: 72%;
    background-color: #10d5f3;
    border-radius: 10px;
  }
  /* .personal {
    display: flex;
    justify-content: space-around;
    position: relative;
    padding: 3.2rem;
  }
  .personal-design {
    flex: 1 0 50%;
    /* justify-content: center; */
  /* } */
  .hero-section {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: space-between;
  }
  /* .bg-body {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  } */

  .language {
    margin: 20px;
    /* background: rgba(255, 255, 255, 0.097); */
    background-color: #fdfffc;
    backdrop-filter: blur(5px);

    border-radius: 15px;
    border: 1px solid rgba(11, 10, 10, 0.418);
  }
`;
