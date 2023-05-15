import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { IssueSummary } from '../../components/IssueSummary'
import { IssueContainer } from './style'
import { api } from '../../lib/axios'
import { UniqueIssue } from '../../@types/issue'
import { IssueContent } from '../../components/IssueContent'

export const IssuePage = () => {
  const [issue, setIssue] = useState<UniqueIssue>()
  const { issueNumber } = useParams()

  const fetchIssue = useCallback(async () => {
    const response = await api.get(
      `/repos/vtex/faststore/issues/${issueNumber}`,
    )

    const issueResponse: UniqueIssue = response.data

    setIssue(issueResponse)
  }, [issueNumber])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  if (!issue) return <></>

  return (
    <IssueContainer>
      <IssueSummary
        title={issue.title}
        hrefGithub={issue.url}
        author={issue.user.login}
        createdAt={issue.created_at}
        comments={issue.comments}
      />
      <IssueContent issueBody={issue.body} />
    </IssueContainer>
  )
}
