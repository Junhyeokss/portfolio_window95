import styled from "styled-components";
import { Link, NavLink, Routes } from "react-router-dom";

const Icons = () => {
  const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;

  const LI = styled.li`
    width: 120px;
    margin: 50px 0 0 0;
    align-items: center;
    text-align: center;
    & img {
      width: 50px;
      object-fit: cover;
      padding: 0 0 10px 0;
    }

    & strong {
      display: block;
      color: #fff;
      text-align: center;
    }
  `;

  return (
    <header>
      <div className="inner">
        <UL>
          <LI>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/mycomputer.png"}
                  alt={""}
                />
              </div>
              <strong>ABOUT ME</strong>
            </Link>
          </LI>

          <LI>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <div className="network">
                <img
                  src={process.env.PUBLIC_URL + "/assets/network.png"}
                  alt={""}
                />
                <strong>PORT FOLIO</strong>
              </div>
            </Link>
          </LI>

          <LI>
            <Link to="/skill" style={{ textDecoration: "none" }}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/folder.png"}
                  alt={""}
                />
                <strong>SKILLS</strong>
              </div>
            </Link>
          </LI>

          <LI>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/trashbin.png"}
                  alt={""}
                />
                <strong>CONTACT </strong>
              </div>
            </Link>
          </LI>
        </UL>
      </div>
    </header>
  );
};

export default Icons;
