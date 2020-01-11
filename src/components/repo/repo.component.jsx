import React from "react";

import "./repo.styles.scss";

const Repo = ({
  name,
  description,
  avatarUrl,
  stars,
  issuses,
  login,
  createdAt
}) => {

  const currentDate = new Date();
  const createdDate = new Date(createdAt.slice(0, 10).replace(/-/g, "/"));
  const diffTime = Math.abs(currentDate - createdDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="repo">
      <img className="avatar" src={avatarUrl}></img>
      <div className="info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="stats">
          <span>stars: {stars}</span>
          <span>Issuses: {issuses}</span>
          <p>
            Created {diffDays} days ago by {login}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Repo;
