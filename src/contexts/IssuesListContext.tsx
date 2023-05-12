import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { Issue } from '../@types/issue'

interface IssuesListContextProviderProps {
  children: ReactNode
}

interface IssuesListContextValues {
  issuesList: Issue[]
  fetchIssuesGitHub: () => void
  searchIssuesGitHub: (query: string) => void
}

const IssuesListContext = createContext({} as IssuesListContextValues)

export const IssuesListContextProvider = ({
  children,
}: IssuesListContextProviderProps) => {
  const [issuesList, setIssuesList] = useState<Issue[]>([])

  useEffect(() => {
    fetchIssuesGitHub()
  }, [])

  const fetchIssuesGitHub = async () => {
    const response = await api.get('/search/issues?q=repo:vtex/faststore')

    const issuesListResponse: Issue[] = response.data.items

    setIssuesList(issuesListResponse)
  }

  const searchIssuesGitHub = async (query: string) => {
    const encondedQuery = encodeURIComponent(query)

    const response = await api.get(
      `/search/issues?q=${encondedQuery}repo:vtex/faststore`,
    )

    const issuesListResponse: Issue[] = response.data.items

    setIssuesList(issuesListResponse)
  }

  return (
    <IssuesListContext.Provider
      value={{
        issuesList,
        fetchIssuesGitHub,
        searchIssuesGitHub,
      }}
    >
      {children}
    </IssuesListContext.Provider>
  )
}

export const useIssuesListContext = () => useContext(IssuesListContext)
