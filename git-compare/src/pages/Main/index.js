import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  constructor(props) {
    super(props);

    const persistedRepositories = typeof (Storage) !== 'undefined' && localStorage.getItem('repositories') !== null ? JSON.parse(localStorage.getItem('repositories')) : [];

    this.state = {
      loading: false,
      repositories: persistedRepositories,
      repositoryInput: '',
      repositoryError: false,
    };
  }

  handleAddRepository = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });

    try {
      const { repositories, repositoryInput } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.pushedAt).fromNow();

      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('repositories', JSON.stringify([...repositories, repository]));
      }

      this.setState({
        repositories: [...repositories, repository],
        repositoryInput: '',
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleChange = (event) => {
    this.setState({ repositoryInput: event.target.value });
  }


  handleDelete = (id) => {
    const { repositories } = this.state;
    const filteredRepositories = repositories.filter((repository) => repository.id !== id);
    this.setState({ repositories: filteredRepositories });
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem('repositories', JSON.stringify(filteredRepositories));
    }
  };

  handleRefresh = async (id) => {
    const { repositories } = this.state;

    const refreshedRepository = repositories.find((repository) => repository.id === id);
    const { data: repository } = await api.get(`/repos/${refreshedRepository.full_name}`);
    repository.lastCommit = moment(repository.pushedAt).fromNow();

    this.setState({ repositories: repositories.map((repo) => (repo.id === repository.id ? repository : repo)) });

    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  };

  render() {
    const {
      loading, repositories, repositoryInput, repositoryError,
    } = this.state;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
          <strong>Erro! Tente novamente.</strong>
        </Form>

        <CompareList repositories={repositories} onClickRefresh={this.handleRefresh} onClickDelete={this.handleDelete} />
      </Container>
    );
  }
}
