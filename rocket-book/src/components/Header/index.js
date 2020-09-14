import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0px;
  background-color: #333;
`;

const Text = styled.h1`
  color: #fff;
`;

const Header = () => (
  <Container>
    <Text>RocketBook</Text>
  </Container>
);

export default Header;
