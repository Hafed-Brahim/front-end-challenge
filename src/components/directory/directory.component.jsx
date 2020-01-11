import React from "react";

import Repo from "../repo/repo.component";

import "./directory.styles.scss";

const Directory = ({repos}) => {
  return (
    <div className="directory">
      <h1>Github repositories</h1>

      {
      repos.map(item => (
        <Repo key={item.node_id} name={item.name} description={item.description} avatarUrl={item.owner.avatar_url} 
              stars={item.stargazers_count} issuses={item.open_issues} login={item.owner.login}
              createdAt={item.created_at}/>
      ))}

    </div>
  );
};

export default Directory;
