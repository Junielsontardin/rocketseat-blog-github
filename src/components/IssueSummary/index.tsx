import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IssueSummaryContainer,
  IssueSummaryContent,
  LinkBackHome,
} from './style'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faStar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { InformationsLabels, LabelObject } from '../InformationsLabels'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueSummaryProps {
  title: string
  hrefGithub: string
  author: string
  createdAt: string
  comments: number
}

export const IssueSummary = ({
  title,
  hrefGithub,
  author,
  createdAt,
  comments,
}: IssueSummaryProps) => {
  const distanceCreatedAtToNow = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  const labels: LabelObject[] = [
    {
      tag: 'a',
      href: hrefGithub,
      text: author,
      icon: faStar,
    },
    {
      tag: 'span',
      text: distanceCreatedAtToNow,
      icon: faBuilding,
    },
    {
      tag: 'span',
      text: `${comments} comentários`,
      icon: faUserGroup,
    },
  ]

  return (
    <IssueSummaryContainer>
      <header>
        <LinkBackHome to="/">voltar</LinkBackHome>
        <a href={hrefGithub}>
          Ver no Github
          <FontAwesomeIcon color="#3294F8" icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <IssueSummaryContent>
        <h3>{title}</h3>
        <InformationsLabels labels={labels} />
      </IssueSummaryContent>
    </IssueSummaryContainer>
  )
}
