import React from "react";

import "./repo.scss";

const Repo = () => {
  return (
    <div className="repo">
      <img className="avatar"></img>
      <div className="info">
        <h2>title</h2>
        <p>description bla bla bla</p>
        <div className='stats'>
          <span>nb stars</span>
          <span>nb issuses</span>
          <p>time iterval by owner name</p>
        </div>
      </div>
    </div>
  );
};

export default Repo;
