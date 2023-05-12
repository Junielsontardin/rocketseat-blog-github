import { useIssuesListContext } from '../../contexts/IssuesListContext'
import { IssueCard } from '../IssueCard'
import { ListIssuesContainer } from './style'

export const IssuesList = () => {
  const { issuesList } = useIssuesListContext()

  return (
    <ListIssuesContainer>
      {issuesList.map((issue) => {
        return (
          <IssueCard
            key={issue.id}
            issueNumber={issue.number}
            title={issue.title}
            createdAt={issue.created_at}
            content={issue.body}
          />
        )
      })}
    </ListIssuesContainer>
  )
}
