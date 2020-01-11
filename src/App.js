import React, { useEffect, useState } from "react";

import Directory from "./components/directory/directory.component";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadRepos();

    window.addEventListener("scroll", e => {
      handleScroll(e);
    });

    console.log("mounted");
  }, [page]);

  const loadRepos = () => {

    fetch(
      `https://api.github.com/search/repositories?q=created:>2019-12-11&sort=stars&order=desc&page=${page}`
    )
      .then(resp => resp.json()) 
      .then(data => {
        let items = data.items;
        console.log(repos);
        setRepos([...repos, ...items]);
        setIsLoading(false);
        console.log(repos);
      });
  };

  const loadMore = () => {
    setPage(page+1);
    // loadRepos();
  }

  const handleScroll = () => {
    let reposlist = document.getElementsByClassName("repo");
    let lastRepo = reposlist[reposlist.length-1];
    let lastRepoOffSet = lastRepo.offsetTop + lastRepo.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastRepoOffSet) {
      loadMore();
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className="Spinner-overlay">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <Directory repos={repos} />
      )}
    </div>
  );
}

export default App;
