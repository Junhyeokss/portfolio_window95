import styled from "styled-components";
import React, { useState, useEffect } from "react";
import moment from "moment";

const Taskbar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-shadow: 10px;
  background: #c0c0c0;

  & ul {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    padding: 0 10px;
  }
`;

const LI = styled.li`
  & strong {
    box-shadow: 10px;
    border: 3px solid #ddd;
    box-shadow: 150px;
    font-size: 13px;
  }
`;

const Footer = () => {
  let timer: any = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Taskbar>
      <div className="inner">
        <ul>
          <div>
            <LI>
              <strong>시작</strong>
            </LI>
          </div>
          <LI>
            <strong>{time.format("HH-mm-ss")}</strong>
          </LI>
        </ul>
      </div>
    </Taskbar>
  );
};

export default Footer;
