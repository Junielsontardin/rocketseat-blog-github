import styled from 'styled-components'

export const HeaderDefault = styled.header`
  height: 296px;
  background-image: linear-gradient(
    ${(props) => props.theme['black-500']},
    ${(props) => props.theme['gray-600']}
  );
  position: relative;

  img {
    position: absolute;
    &:first-child {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-child(2) {
      left: 50%;
      top: 15%;
      transform: translateX(-50%);
    }
    &:last-child {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`
