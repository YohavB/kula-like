import React, { useRef, useState } from "react";
import "./Card.css";

export default function Card() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  function toggle(e) {
    setOpen((prev) => !prev);
    console.log(open);
  }

  return (
    <div className="container">
      <div className="card" ref={ref}>
        {" "}
        <div className="userinfo">
          <div className="userpic">
            <img src="" alt="user pic" />
          </div>
          <div className="userdetails">
            <div className="username">Yohav Benoliel</div>
            <div className="userheadline">Freelance Frontend Developer</div>
            <div className="userstack">ReactJs || CSS3 || HTML5 </div>
          </div>
          <div className="usercontact">
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" /> <img src="" alt="icon" />
            <img src="" alt="icon" />
          </div>
        </div>{" "}
        <div className={`aboutuser ${open ? "open" : null}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          maximus felis a turpis commodo, efficitur posuere massa scelerisque.
          Integer nulla justo, sodales sit amet egestas nec, rhoncus ut erat.
          Donec auctor id dui sit amet rutrum. Donec rhoncus nunc in nisl
          commodo pellentesque. Sed fermentum suscipit neque ut vulputate.
          Quisque sit amet magna at orci hendrerit elementum sit amet non sem.
          In sed eros quis mauris dictum pretium ut sed erat. Etiam eget mauris
          turpis. Aenean gravida nisl justo, et maximus lorem semper eget. Etiam
          venenatis blandit mi at eleifend. Ut et arcu consectetur urna
          hendrerit ultricies. Fusce posuere eros ut elit consectetur eleifend.
          Aliquam sit amet mattis nunc. Proin urna felis, rhoncus et nunc eu,
          lacinia faucibus nisi. Sed leo tortor, scelerisque nec iaculis vel,
          blandit et leo. Donec vulputate augue nisi, eget ornare sem faucibus
          non. Aenean efficitur interdum odio id tristique. Phasellus auctor ut
          lorem in ultricies. Suspendisse tincidunt tincidunt dignissim.
          Praesent ut eros ac elit maximus rutrum eget et lectus. Phasellus a
          velit lorem. Sed maximus cursus sapien, vel dictum lacus elementum a.
          Fusce quis risus risus. Nulla magna erat, accumsan vel leo id, finibus
          volutpat elit. Praesent viverra dui at turpis facilisis viverra. Donec
          aliquet.
        </div>
        <div className="extendscard" onClick={toggle}>
          V
        </div>
      </div>
    </div>
  );
}
