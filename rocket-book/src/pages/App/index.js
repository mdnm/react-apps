import React, { Component } from 'react';

import styled from 'styled-components';
import GlobalStyle from '../../styles/global';

import Header from '../../components/Header';
import Post from '../../components/Post';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const data = [
  {
    id: 1,
    postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,tempora iure! Expedita maxime dolore doloremque eius quo quidem inventore officiis sequi reiciendis magnam, cupiditate et incidunt nemo ex animi provident?',
    profileImage: 'https://avatars3.githubusercontent.com/u/36714557?s=460&v=4',
    profileName: 'Mateus De Nardo',
    postTime: 'ha 1 min',
  },
  {
    id: 2,
    postText: 'Lorem ipsum quo quidem inventore officiis sequi reiciendis magnam, incidunt nemo ex animi provident?',
    profileImage: 'https://avatars0.githubusercontent.com/u/40965435?s=460&v=4',
    profileName: 'Negroide',
    postTime: 'ha 2 min',
  },
  {
    id: 3,
    postText: 'Dolor,tempora iure! Expedita maxime dolore doloremque eius quo quidem inventore officiis sequi reiciendis magnam.',
    profileImage: 'https://avatars3.githubusercontent.com/u/49489546?s=460&v=4',
    profileName: 'Gustavo Jordao',
    postTime: 'ha 30 min',
  },
  {
    id: 4,
    postText: 'Expedita maxime dolore doloremque eius quo quidem inventore officiis sequi reiciendis magnam, cupiditate et incidunt nemo ex animi provident!',
    profileImage: 'https://avatars1.githubusercontent.com/u/31046316?s=460&v=4',
    profileName: 'Aron Muller',
    postTime: 'ha 100 min',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: data,
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <GlobalStyle />
        <div className="App">
          <Header />
          <PostContainer>
            {posts && posts.map((post) => <Post key={post.id} data={post} />)}
          </PostContainer>
        </div>
      </>
    );
  }
}
