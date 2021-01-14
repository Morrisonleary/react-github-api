import React, { useState, useEffect } from "react";

import { Form } from "semantic-ui-react";
import "./search-bar.styles.scss";

import ResultsCard from "../results-card/results-card.components";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
        }
      });
  };


  return (
    <div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Github User"
              name="github user"
              onChange={handleSearch}
            />
            <Form.Button content="Search" />
          </Form.Group>
        </Form>
      </div>
      <ResultsCard
        avatar={avatar}
        name={name}
        userName={userName}
        followers={followers}
        repos={repos}
        following={following}
        error={error}
      />
    </div>
  );
};

export default SearchBar;
