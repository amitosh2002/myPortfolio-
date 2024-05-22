import React from "react";
import styled from "styled-components";
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <Wrapper>
      <div class="container" data-aos="zoom-in-up">
        <div class="header">
          {/* <div class="full-name">
            <span class="first-name">Amitosh</span>
            <span class="last-name">Doe</span>
          </div>
          <div class="contact-info">
            <span class="email">Email: </span>
            <span class="email-val">john.doe@gmail.com</span>
            <span class="separator"></span>
            <span class="phone">Phone: </span>
            <span class="phone-val">111-222-3333</span>
          </div> */}

          <div class="about">
            <span class="position">Front-End Developer </span>
            <span class="desc">
              Hardworking College Student seeking employment. Bringing forth a
              motivated attitude and a variety of powerful skills. Adept in
              various social media platforms and office technology programs.
              Committed to utilizing my skills to further the mission of a
              company.
            </span>
          </div>
        </div>
        <div class="details">
          <div class="section">
            <div class="section__title">Education</div>
            <div class="section__list">
              <div class="section__list-item">
                <div class="left">
                  <div class="name">Indian Public School Hajipur</div>
                  <div class="addr">Hajipur,Bihar</div>
                  <div class="duration">Mar 2015 - Mar 2015</div>
                </div>
                <div class="right">
                  <div class="name">St Jhon's Academy</div>
                  <div class="addr">Hajipur,Bihar</div>
                  <div class="duration">Mar 2018 - Mar 2020</div>
                </div>
              </div>
              <div class="section__list-item">
                <div class="left">
                  <div class="name">Jis College of Engineering</div>
                  <div class="addr">Kalyani,West Bengal</div>
                  <div class="duration">June 2021 - June 2025</div>
                </div>
                <div class="right">
                  <div class="name">Fr developer</div>
                  <div class="desc">Developing websites usong React js </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="section__title">Interests</div>
            <div class="section__list">
              <div class="section__list-item">
                Football, programming , Mobile Gamming .
              </div>
            </div>
          </div>

          <div className="download">
            <FaFileDownload size={50} color="blue" />

            <a href="https://drive.google.com/file/d/1Ro4vi0bfTuLuGgse7Ffp7nIQuOGjBcJ1/view?usp=sharing">
              Download
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  a {
    padding: 13px;
    background-color: #16da47;
    border-radius: 25px;
    margin: 25px;
  }
  .dowmload {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .container {
    max-width: 87%;
    height: 88%;
    background: #fff;
    margin: 0px auto 0px;
    box-shadow: 1px 1px 2px #dad7d7;
    border-radius: 3px;
    padding: 40px;
    margin-top: 50px;
  }

  .header {
    margin-bottom: 30px;

    .full-name {
      font-size: 40px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    .first-name {
      font-weight: 700;
    }

    .last-name {
      font-weight: 300;
    }

    .contact-info {
      margin-bottom: 20px;
    }

    .email,
    .phone {
      color: #999;
      font-weight: 300;
    }

    .separator {
      height: 10px;
      display: inline-block;
      border-left: 2px solid #999;
      margin: 0px 10px;
    }

    .position {
      font-weight: bold;
      display: inline-block;
      margin-right: 10px;
      text-decoration: underline;
    }
  }

  .details {
    line-height: 20px;

    .section {
      margin-bottom: 40px;
    }

    .section:last-of-type {
      margin-bottom: 0px;
    }

    .section__title {
      letter-spacing: 2px;
      color: #54afe4;
      font-weight: bold;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .section__list-item {
      margin-bottom: 40px;
    }

    .section__list-item:last-of-type {
      margin-bottom: 0;
    }

    .left,
    .right {
      vertical-align: top;
      display: inline-block;
    }

    .left {
      width: 60%;
    }

    .right {
      text-align: right;
      width: 39%;
    }

    .name {
      font-weight: bold;
    }

    a {
      text-decoration: none;
      color: #000;
      font-style: italic;
    }

    a:hover {
      text-decoration: underline;
      color: #000;
    }

    .skills {
    }

    .skills__item {
      margin-bottom: 10px;
    }

    .skills__item .right {
      input {
        display: none;
      }

      label {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #c3def3;
        border-radius: 20px;
        margin-right: 3px;
      }

      input:checked + label {
        background: #79a9ce;
      }
    }
  }
`;
export default Resume;
