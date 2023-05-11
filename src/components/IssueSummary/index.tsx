import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IssueSummaryContainer, IssueSummaryContent } from './style'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { InformationsLabels } from '../InformationsLabels'

export const IssueSummary = () => {
  return (
    <IssueSummaryContainer>
      <header>
        <span>voltar</span>
        <a href="/">
          Ver no Github
          <FontAwesomeIcon color="#3294F8" icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <IssueSummaryContent>
        <h3>JavaScript data types and data structures</h3>
        <InformationsLabels />
      </IssueSummaryContent>
    </IssueSummaryContainer>
  )
}
