import styled, { keyframes } from "styled-components";

const drop = keyframes`
  from{
    top: -80px;
  }
  to{
    top: 0;
  }
`;

const wind = keyframes`
from {
  left: -300px;
}
to{
  left: 0;
}

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #232323;
  animation: ${drop} 0.6s 1s ease backwards;

  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;

  nav {
    height: 100%;
    display: flex;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        list-style: none;
        width: 100px;

        display: flex;
        align-items: center;
        justify-content: center;

        span {
          color: #ffffff;
        }
      }
    }
  }
`;

export const Menu = styled.aside`
  display: flex;
  background: #232323;
  animation: ${wind} 0.6s 2s ease-in backwards;

  position: fixed;
  left: 0;
  top: 80px;
  width: 300px;
  height: 100%;

  > h1 {
    color: #ffffff;
  }

  nav {
    width: 100%;
    display: flex;

    ul {
      display: flex;
      flex-direction: column;

      li {
        list-style: none;
        display: flex;
        height: 30px;
        width: 100%;

        span {
          font-size: 18pt;
          color: #ffffff;
        }
      }
    }
  }
`;
