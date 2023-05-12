import { IssuesList } from '../../components/IssuesList'
import { ProfileCard } from '../../components/ProfileCard'
import { SearchBar } from '../../components/SearchBar'
import { IssuesListContextProvider } from '../../contexts/IssuesListContext'
import { HomeContainer } from './style'

export const Home = () => {
  return (
    <HomeContainer>
      <ProfileCard />
      <IssuesListContextProvider>
        <SearchBar />
        <IssuesList />
      </IssuesListContextProvider>
    </HomeContainer>
  )
}
