import { useState } from "react";
import styled from "styled-components";
import { BsXSquare } from "react-icons/bs";

const Outline = styled.div`
  position: absolute;
  top: 100px;
  right: 300px;
  border: 5px solid #ddd;
  height: 650px;
  width: 1200px;
`;

const OutlineTop = styled.div`
  display: flex;
  width: 1190px;
  justify-content: space-between;
  border: 2px solid #ddd;
  height: 25px;
  color: #fff;
  background: blue;
  line-height: 25px;
  padding: 3px;

  BsXSquare {
    display: block;
    padding: 15px 0 0 0;
  }
`;

const Popup = (props) => {
  const { onClose } = props;

  const About = () => {
    return (
      <Outline>
        <OutlineTop>
          About
          <button
            onClick={() => {
              onClose(false);
            }}
          >
            <BsXSquare />
          </button>
        </OutlineTop>
      </Outline>
    );
  };
};
export default About;
