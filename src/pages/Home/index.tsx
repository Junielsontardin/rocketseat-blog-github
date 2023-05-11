import { IssuesList } from '../../components/IssuesList'
import { ProfileCard } from '../../components/ProfileCard'
import { SearchBar } from '../../components/SearchBar'
import { HomeContainer } from './style'

export const Home = () => {
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchBar />
      <IssuesList />
    </HomeContainer>
  )
}
