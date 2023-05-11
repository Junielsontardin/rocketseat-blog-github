import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -100px;
  z-index: 1;
  position: relative;
  background-color: ${(props) => props.theme['black-300']};
`

export const ProfileCardContent = styled.main`
  display: flex;
  flex-direction: column;
`

export const ProfileCardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 700;
    font-size: 24px;
    line-height: ${(props) => props.theme['line-height-small']};
    color: ${(props) => props.theme['gray-100']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: ${(props) => props.theme['blue-500']};
  }
`

export const ProfileDescription = styled.p`
  margin-top: 0.5rem;
  color: ${(props) => props.theme['gray-300']};
`
