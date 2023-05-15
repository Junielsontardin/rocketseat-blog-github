import { useIssuesListContext } from '../../contexts/IssuesListContext'
import { SearchBarContainer } from './style'

export const SearchBar = () => {
  const { searchIssuesGitHub, fetchIssuesGitHub, issuesList } =
    useIssuesListContext()

  const handleSearchIssuesGithub = (query: string) => {
    if (query) {
      searchIssuesGitHub(query)
    } else {
      fetchIssuesGitHub()
    }
  }

  return (
    <SearchBarContainer>
      <div>
        <span>Publicações</span>
        <span>
          {issuesList.length
            ? `${issuesList.length} publicações`
            : 'Nenhum resultado'}
        </span>
      </div>
      <input
        placeholder="Buscar conteúdo"
        onChange={(e) => handleSearchIssuesGithub(e.target.value)}
      />
    </SearchBarContainer>
  )
}
