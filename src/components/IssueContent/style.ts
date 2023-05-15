import styled from 'styled-components'

export const IssueContentStyled = styled.main`
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['gray-300']};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme['gray-200']};
  }

  li {
    list-style: none;
    color: ${(props) => props.theme['gray-300']};
  }

  a {
    color: ${(props) => props.theme['blue-500']};
    text-decoration: underline;
  }

  code {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 0 0.5rem;
    border-radius: 2px;
  }

  img {
    max-width: 100%;
  }
`
