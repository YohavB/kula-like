import React from "react";
import hashtag from "./mock/hashtag.svg";

const KulaLike = () => {
  return (
    <div className="title">
      <div>
        כולא_לייק
        <img
          src={hashtag}
          alt="hashtag"
          className="icon-title"
        />
      </div>
    </div>
  );
};
export default KulaLike;
