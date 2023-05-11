import styled from 'styled-components'

export const IssueCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 26rem;
  width: 100%;
  padding: 2rem;
  gap: 1.25rem;

  border-radius: 10px;
  border: 2px solid transparent;
  background: ${(props) => props.theme['gray-700']};

  &:hover {
    border: 2px solid ${(props) => props.theme['gray-500']};
    cursor: pointer;
  }

  header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 700;
      font-size: 20px;
      color: ${(props) => props.theme['gray-100']};
    }

    span {
      font-size: 14px;
      color: ${(props) => props.theme['gray-400']};
    }
  }

  p {
    color: ${(props) => props.theme['gray-300']};
  }
`
