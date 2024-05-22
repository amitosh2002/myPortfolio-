import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import window from "window";
import mypic from "./img/tuxpi.com.1708847157.jpg";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
import { MdDeveloperMode } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { GrResume } from "react-icons/gr";
const Navbarm = () => {
  // const [sticky, setSticky] = useState(false);

  // window.onscroll = () => {
  //   if (window.scroll > 150) {
  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // };

  //   useEffect(() => {
  //     this.window.addEventListener("scroll", () => {
  //       if (this.window.scrollY > 250) {
  //         setSticky(true);
  //       } else {
  //         setSticky(false);
  //       }
  //     });
  //   });

  return (
    <Wrapper>
      <div className="navb">
        <div className="item " content="center">
          <div className="routes">
            <picture>
              <img src={mypic} alt="" />
            </picture>
            {/* <header className={sticky ? "tnav" : ""}> */}
            <ul>
              <li className="page">
                <NavLink
                  style={{ textDecoration: "none", color: "#3772ff" }}
                  to="/"
                >
                  <span>
                    <FaHome color="blue" />
                  </span>{" "}
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="page">
                <NavLink
                  style={{ textDecoration: "none", color: "#3772ff" }}
                  to="/about"
                >
                  <span>
                    <SiAboutdotme color="blue" />
                  </span>{" "}
                  <span>About</span>
                </NavLink>
              </li>
              <li className="page">
                <NavLink
                  style={{ textDecoration: "none", color: "#3772ff" }}
                  to="/contact"
                >
                  <span>
                    <GrContactInfo color="blue" />
                  </span>{" "}
                  <span>Contact</span>
                </NavLink>
              </li>
              <li className="page">
                <NavLink
                  style={{ textDecoration: "none", color: "#3772ff" }}
                  to="/projects"
                >
                  <span>
                    <MdDeveloperMode color="blue" />
                  </span>
                  <span>Project</span>
                </NavLink>
              </li>
              <li className="page">
                <NavLink
                  style={{ textDecoration: "none", color: "#3772ff" }}
                  to="/resume"
                >
                  <span>
                    <GrResume color="blue" />
                  </span>
                  <span>Resume</span>
                </NavLink>
              </li>
            </ul>
            {/* </header> */}
          </div>
          <div className="social">
            <ul className="social-icon">
              <li className="link">
                <a href="https://github.com/amitosh2002/amitosh2002">
                  <TiSocialGithub size={38} />
                </a>
              </li>
              <li className="link">
                <a href="https://www.instagram.com/_mobopedia__/">
                  <TiSocialInstagramCircular size={35} />
                </a>
              </li>
              <li className="link">
                <a href="https://www.facebook.com/amit.gop.33">
                  <TiSocialFacebookCircular size={35} />
                </a>
              </li>
              <li className="link">
                <a href="https://www.linkedin.com/in/amitosh-kumar-647654282/">
                  <TiSocialLinkedinCircular size={35} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  span {
    margin: 7px;
    font-family: "Poetsen One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  a:hover {
    color: #06d6a0;
  }
  .routes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .social {
    display: flex;
    align-items: end;
    margin-top: 55px;
  }
  .social-icon {
    display: flex;
    flex-direction: row;
  }
  .item {
    margin: 15px;
  }
  img {
    height: 8rem;
    width: 8rem;
    border-radius: 60px;
    /* border-style: solid; */
    border-width: 3px;
    /* border-color: #3772ff; */
    box-shadow: 13px -10px 1px -3px rgba(0, 0, 0, 0.1);
  }
  ul {
    text-decoration: none;
    list-style-type: none;
    display: flex;
    /* gap: 3rem; */

    flex-direction: column;
    padding: 5px;
    margin: 15px;
  }
  .page {
    text-decoration: none;
    font-size: 25px;
    padding: 10px;
    list-style-type: none;
    color: #000000;
    display: flex;
    gap: 3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .link {
    text-decoration: none;
    font-size: 25px;
    padding: 10px;
    list-style-type: none;
    color: #000000;
    display: flex;
    gap: 3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .page:hover {
    padding: 0.5rem;
    background-color: #06d6a0;
    border-radius: 30px;
  }

  .navb {
    display: flex;
    /* flex-direction: column; */
    width: 20rem;
    height: 41rem;
    /* padding: 2rem; */
    margin: 2rem;
    background-color: #ffffff;

    border-radius: 5px;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    -webkit-box-shadow: 25px -2px 159px -59px rgba(159, 168, 158, 1);
    -moz-box-shadow: 25px -2px 159px -59px rgba(159, 168, 158, 1);
    box-shadow: 25px -2px 159px -59px rgba(159, 168, 158, 1);
  }
  header {
    background-color: #0fb9f7;
    border-radius: 5px;

    transition: 0.2s ease-in-out;
  }
  .tnav {
    background-color: greenyellow;
    border-radius: 5px;
    position: fixed;
    top: 0;
    transition: 0.2s ease-in-out;
  }
`;
export default Navbarm;
