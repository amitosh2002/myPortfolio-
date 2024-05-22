import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav className="nav">
      <ul>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/navbar"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/projects"
          >
            Project
          </NavLink>
        </li>
        <li>Resume</li>
      </ul>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav`
  ul {
    text-decoration: none;
    list-style-type: none;
    display: flex;
    gap: 3rem;

    flex-direction: row;
    padding: 5px;
  }
  li {
    text-decoration: none;
    font-size: 25px;
    padding: 10px;
    list-style-type: none;
    color: white;
    display: flex;
    gap: 3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .nav {
    display: flex;
    /* flex-direction: column; */
    width: 50px;
    height: 80px;
  }
`;

// // Navbar.js
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// const Navbar = () => {
//   const [stickyClass, setStickyClass] = useState("relative");

//   const stickNavbar = () => {
//     const windowHeight = window.scrollY;
//     windowHeight > 500
//       ? setStickyClass("fixed top-0 left-0 z-50")
//       : setStickyClass("relative");
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", stickNavbar);
//     return () => {
//       window.removeEventListener("scroll", stickNavbar);
//     };
//   }, []);

//   return (
//     <Wrapper>
//       <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>
//         <div className="nav">
//           <ul>
//             <li>
//               <NavLink
//                 style={{ textDecoration: "none", color: "white" }}
//                 to="/home"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 style={{ textDecoration: "none", color: "white" }}
//                 to="/"
//               >
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 style={{ textDecoration: "none", color: "white" }}
//                 to="/contact"
//               >
//                 Contact
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 style={{ textDecoration: "none", color: "white" }}
//                 to="/projects"
//               >
//                 Project
//               </NavLink>
//             </li>
//             <li>Resume</li>
//           </ul>
//         </div>
//       </div>
//       ;
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .sticky {
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 50;
//     /* Add any other styling you need */
//   }
//   ul {
//     text-decoration: none;
//     list-style-type: none;
//     display: flex;
//     gap: 3rem;
//     flex-direction: column;
//     padding: 5px;
//   }
//   li {
//     text-decoration: none;
//     font-size: 25px;
//     padding: 10px;
//     list-style-type: none;
//     color: white;
//     display: flex;
//     gap: 3rem;
//     font-family: Verdana, Geneva, Tahoma, sans-serif;
//   }
// `;
// export default Navbar;
