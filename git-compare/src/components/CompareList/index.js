import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories, onClickRefresh, onClickDelete }) => (
  <Container>
    {repositories.map((repository) => (
      <Repository key={repository.id}>

        <div className="icons">
          <i className="fa fa-refresh left blue" onClick={() => onClickRefresh(repository.id)} />
          <i className="fa fa-close right red" onClick={() => onClickDelete(repository.id)} />
        </div>

        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>{repository.stargazers_count} <small>stars</small></li>
          <li>{repository.forks_count} <small>forks</small></li>
          <li>{repository.open_issues_count} <small>issues</small></li>
          <li>{repository.lastCommit} <small>last commit</small></li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    lastCommit: PropTypes.string,
  })).isRequired,
  onClickRefresh: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default CompareList;
