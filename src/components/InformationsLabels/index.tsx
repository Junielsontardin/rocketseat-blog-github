import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { InformationsLabelsContainer } from './style'

// FAZER DESSE COMPONENTE TODO DINAMICO

export const InformationsLabels = () => {
  return (
    <InformationsLabelsContainer>
      <a href="/">
        <FontAwesomeIcon color="#3A536B" icon={faStar} />
        cameronwll
      </a>
      <a href="/">
        <FontAwesomeIcon color="#3A536B" icon={faBuilding} />
        cameronwll
      </a>
      <span>
        <FontAwesomeIcon color="#3A536B" icon={faUserGroup} /> 32 seguidores
      </span>
    </InformationsLabelsContainer>
  )
}
