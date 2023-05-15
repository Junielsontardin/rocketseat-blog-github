import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const IssueCardContainer = styled(Link)`
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
    align-items: flex-start;
    gap: 1rem;

    h3 {
      font-weight: 700;
      font-size: 20px;
      color: ${(props) => props.theme['gray-100']};
      max-width: 80%;
    }

    span {
      white-space: nowrap;
      margin-top: 6px;
      font-size: 14px;
      color: ${(props) => props.theme['gray-400']};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme['gray-300']};
  }
`
