import React from "react";
import KulaLike from "./KulaLike";
import KulaText from "./KulaText";

export default function Home() {
  return (
    <div>
      <KulaLike />
      <div className="subtitle">
        Le projet {""}
        <KulaText />
        {""} est un projet a but non lucratif qui a pour but de creer des
        opportunites entre les RH, HH, Recruteurs et les Juniors!
      </div>
      <div className="curveArea">
        <div className="mainBox">
          <div className="curveSection">
            <div className="sectionchoice">
              <button className="homebtn left">
                <span>HR, HH ? Clique ici !</span>
              </button>
              <button className="homebtn right">
                <span>Junior? Fais toi connaitre par ici !</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
