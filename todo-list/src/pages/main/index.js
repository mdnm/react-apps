import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositoryInput: '',
    };
  }

  handleAddRepository = (event) => {
    event.preventDefault();

    const { addFavoriteRequest } = this.props;
    const { repositoryInput } = this.state;
    addFavoriteRequest(repositoryInput);

    this.setState({ repositoryInput: '' });
  };

  render() {
    const { favorites } = this.props;
    const { repositoryInput } = this.state;

    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="user/repository"
            value={repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Add</button>

          {favorites.loading && <span>Loading...</span>}

          {!!favorites.error && (
            <span style={{ color: '#F00' }}>{favorites.error}</span>
          )}
        </form>

        <ul>
          {favorites.data.map((favorite) => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Main.propTypes = {
  addFavoriteRequest: PropTypes.func.isRequired,
  favorites: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([null, PropTypes.string]),
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
