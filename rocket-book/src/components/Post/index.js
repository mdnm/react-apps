import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const PostContainer = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 25px;
  margin: 35px auto;
  background-color: #555;
  border-radius: 4px;
`;

const PostText = styled.p`
  color: #fff;
`;

const PostHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #000;
`;

const PostHeaderDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const ProfileName = styled.strong`
  font-size: 16px;
  color: #ddd;
`;

const PostTime = styled.span`
  font-size: 14px;
  color: #eee;
  margin-top: 5px;
`;

const Divider = styled.hr`
  margin: 15px 0px;
`;

const PostHeader = ({ data }) => (
  <>
    <PostHeaderContainer>
      <ProfileImage src={data.profileImage} />
      <PostHeaderDataContainer>
        <ProfileName>{data.profileName}</ProfileName>
        <PostTime>{data.postTime}</PostTime>
      </PostHeaderDataContainer>
    </PostHeaderContainer>
    <Divider />
  </>
);

PostHeader.propTypes = {
  data: PropTypes.object.isRequired,
};

const Post = ({ data }) => (
  <PostContainer>
    <PostHeader data={data} />
    <PostText>
      {data.postText}
    </PostText>
  </PostContainer>
);

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;
