import { IssueCardContainer } from './style'
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueCardProps {
  issueNumber: number
  title: string
  createdAt: string
  content: string
}

export const IssueCard = ({
  issueNumber,
  title,
  createdAt,
  content,
}: IssueCardProps) => {
  const distanceCreatedAtToNow = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <IssueCardContainer to={`/issue-page/${issueNumber}`}>
      <header>
        <h3>{title}</h3>
        <span>{distanceCreatedAtToNow}</span>
      </header>
      <p>
        <ReactMarkdown>{content}</ReactMarkdown>
      </p>
    </IssueCardContainer>
  )
}
