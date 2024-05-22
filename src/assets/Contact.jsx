import React from "react";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { useEffect } from "react";
const Contact = () => {
  return (
    <>
      <Wrapper>
        <div className="container" data-aos="zoom-out-left">
          <div className="map">
            <iframe
              className=" "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0708267767404!2d88.369072!3d22.7256087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b9bdbc77613%3A0xe18488e410c73722!2sPK%20Bishwas%20Rd%2C%20Khardaha%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1710326656863!5m2!1sen!2sin"
              width="260"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="form m-5 d-flex justify-content-center">
            <form
              method="POST"
              className="f-body"
              action="https://formspree.io/f/mbjvwjvn"
            >
              <h1 className=" ">
                {" "}
                <IoMdContacts /> Contact me !
              </h1>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <option value="#"></option>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
                required
              />
              <option value="#"></option>
              <textarea
                name="message"
                id=""
                cols="68"
                rows="6"
                placeholder="Enter your message !"
                className="textarea"
              ></textarea>
              <input className="send" type="submit" value="SEND" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
const Wrapper = styled.section`
  /* @media screen and (min-width: 576px) and (max-width: 767.98px) {
    .bg-body {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      flex: 2;
      gap: 30rem;
    }
  } */
  .textarea {
    border-radius: 12px;
  }
  .map {
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 91%;
    background-color: #fafaff;
    margin-top: 30px;
    margin-left: 5px;
    margin-right: 5px;
    margin-inline-start: 70px;
  }
  .map {
    background: rgb(100, 86, 86);
    background: radial-gradient(
      circle,
      rgba(100, 86, 86, 1) 0%,
      rgba(27, 63, 55, 1) 95%,
      rgba(43, 68, 57, 1) 99%
    );
  }
  .form {
    /* margin: 8px; */
    /* background: rgb(100, 86, 86);
    background: radial-gradient(
      circle,
      rgba(100, 86, 86, 1) 0%,
      rgba(27, 63, 55, 1) 95%,
      rgba(43, 68, 57, 1) 99%
    ); */
    color: #000000;
    /* backdrop-filter: blur(5px); */
  }
  .info {
    background: rgb(100, 86, 86);
    background: radial-gradient(
      circle,
      rgba(100, 86, 86, 1) 0%,
      rgba(27, 63, 55, 1) 95%,
      rgba(43, 68, 57, 1) 99%
    );
    padding: 10px;
    color: #ebe1e1;
  }

  h1 h6 {
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    font-weight: 50rem;
    background-color: grey;
  }
  .raw-data {
    padding: 5px;
  }
  input {
    /* border-radius: 10px; */
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    color: black;
    border-radius: 15px;
  }
  /* .bg-body { 
    padding: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25rem;
    flex: 1;
  } */

  .send {
    padding: 15px;
    background-color: #2044ba;
    color: whitesmoke;
    width: 12%;
    height: 12%;
  }
`;
