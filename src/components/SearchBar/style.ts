import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      &:first-child {
        font-weight: 700;
        font-size: 18px;
        color: ${(props) => props.theme['gray-200']};
      }
      &:last-child {
        font-size: 14px;
        color: ${(props) => props.theme['gray-400']};
      }
    }
  }

  input {
    border-radius: 6px;
    background: ${(props) => props.theme['black-700']};
    border: 1px solid ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-300']};
    padding: 0.75rem 1rem;
    width: 100%;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      border-color: ${(props) => props.theme['blue-500']};
    }
  }
`
