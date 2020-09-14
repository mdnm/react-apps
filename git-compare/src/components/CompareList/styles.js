import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #FFF;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  div.icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    i {
      padding-top: 15px;
      font-size: 24px;
    }

    i.right {
      padding-right: 30px;
    }

    i.left {
      padding-left: 30px;
    }

    i.red {
      color: #fd5e5e;
    }

    i.blue {
      color: #2e9ffff0;
    }
  }

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #F5F5F5;
      }
    }
  }
`;
