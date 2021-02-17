import React from "react";
import hashtag from "./mock/hashtag.svg";

const KulaText = () => {
  return (
    <span className="kulatext">
      כולא_לייק
      <img src={hashtag} alt="hashtag" className="icon-text" />
    </span>
  );
};
export default KulaText;
