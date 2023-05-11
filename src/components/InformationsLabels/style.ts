import styled from 'styled-components'

export const InformationsLabelsContainer = styled.footer`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  align-items: flex-end;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme['gray-200']};
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme['gray-200']};
  }
`
