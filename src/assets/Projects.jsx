import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Projects = () => {
  const data = [
    {
      id: "1",
      pName: "Student Management System",
      link: "https://www.mediafire.com/file/dhxe6ymo63o3jf0/MARKS.cpp/file",
      pic: "../../public/sms.png",
    },
    {
      id: "2",
      pName: "Photography WebPage",
      link: "https://amitosh2002.github.io/its_perfect_pixels/",
      pic: "../../public/perfect.png",
    },
    {
      id: "3",
      pName: "Ecom Express",
      link: "https://core-ecom-express.netlify.app/",
      pic: "../../public/e-com.png",
    },
    {
      id: "4",
      pName: "soon",
      link: "",
      pic: "https://thumbs.dreamstime.com/z/question-mark-question-words-black-39920630.jpg",
    },
  ];

  const [project, setProject] = useState(data);

  return (
    <Wrapper>
      <div className="container">
        <div className="projects p-5 ">
          {/* <Navbar /> */}
          {project.map((cur) => {
            return (
              <>
                <div className="pict p-5" data-aos="fade-left">
                  <div className="div ">
                    <img className="image" src={cur.pic} alt="" />
                  </div>
                  <h3 className="" style={{ color: "black" }}>
                    {cur.pName}
                  </h3>
                  <div className="btn btn-primary mt-3">
                    <a href={cur.link}>check out!</a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
const Wrapper = styled.section`
  .image {
    object-fit: contain;
    max-width: 250px;
    height: 250px;
  }
  a {
    color: #0c0b0b;
    text-decoration: none;
    text-align: center;
  }
  .pict {
    max-width: 430px;
    height: 435px;
    flex: 1 0 25%;
    background-color: #dee2e6;
    backdrop-filter: blur(15px);
    border-radius: 10px;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 45px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: url("https://png.pngtree.com/png-vector/20210120/ourmid/pngtree-boys-and-girls-cooperation-team-connection-puzzle-illustration-png-image_2748427.jpg");
    background-repeat: no-repeat;
    background-size: cover; */
  }
`;
