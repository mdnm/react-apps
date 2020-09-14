import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 28px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #FFF;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${(props) => (props.withError ? '2px solid #F00' : 0)};
  }

  strong {
    margin: 10px 0 0 15px;
    color: #F00;
    display: ${(props) => (props.withError ? 'block' : 'none')};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52D89F;
    }

    &:disabled {
      background: #52D89F;
    }
  }
`;
