import ReactMarkdown from 'react-markdown'
import { IssueContentStyled } from './style'

interface IssueContentProps {
  issueBody: string
}

export const IssueContent = ({ issueBody }: IssueContentProps) => {
  return (
    <IssueContentStyled>
      <ReactMarkdown>{issueBody}</ReactMarkdown>
    </IssueContentStyled>
  )
}
