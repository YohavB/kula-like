import React, { useRef, useState } from "react";
import data from "./userData";
import downarrow from "../icon/down-arrow.svg";
import uparrow from "../icon/up-arrow.svg";
import github from "../icon/github.svg";
import gmail from "../icon/gmail.svg";
import linkedin from "../icon/linkedin.svg";
import globe from "../icon/globe.svg";

import "./Card.css";

export default function Card() {
  const [clicked, setClicked] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const filterHeadline = () => {
    data.filter(
      (data) => data.headline.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  };

  return (
    <div>
      <div className="filterField">
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search"
        />
      </div>
      <div>
        {data.user &&
          data.user.map((user, index) => {
            return (
              <div className="container" key={user.id} ref={ref}>
                <div className="card">
                  {" "}
                  <div className="userinfo">
                    <div className="userpic">
                      <img src={user.pic} alt="user pic" />
                    </div>
                    <div className="userdetails">
                      <div className="username">{user.name}</div>
                      <div className="userheadline">{user.headline}</div>
                      <div className="userstack">{user.stacks}</div>
                    </div>
                    <div className="usercontact">
                      <a
                        href={user.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={linkedin} alt="icon" />
                      </a>
                      <a
                        href={user.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={github} alt="icon" />
                      </a>
                      <a
                        href={user.gmail}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={gmail} alt="icon" />
                      </a>
                      <a
                        href={user.globe}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={globe} alt="icon" />
                      </a>
                    </div>
                  </div>{" "}
                  <div
                    className={`aboutuser ${clicked === index ? "open" : null}`}
                  >
                    {user.about}
                  </div>
                  <div
                    className="extendscard"
                    onClick={() => toggle(index)}
                    key={index}
                  >
                    <img
                      src={clicked === index ? uparrow : downarrow}
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
