import React from "react";

import { Card, Icon, Image } from "semantic-ui-react";
import './results-card.styles.scss'

const ResultsCard = ({ avatar, name, userName, followers, repos, following, error }) => (
  
  error ? (
    <h1>{error}</h1>
  ) : 
    <div className="card">
      <Card key={name}>
        <Image src={avatar} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Header>
          <a href={`https://github.com/${userName}`}>
          {userName}
          </a>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <a href={`https://github.com/${userName}`}>
            <Icon name="user" />
            {followers} Followers
          </a>
        </Card.Content>
        <Card.Content extra>
          <a href={`https://github.com/${userName}`}>
            <Icon name="user" />
            {repos} Repos
          </a>
        </Card.Content>
        <Card.Content extra>
          <a href={`https://github.com/${userName}`}>
            <Icon name="user" />
            {following} Following
          </a>
        </Card.Content>
      </Card>
    </div>
);

export default ResultsCard;
