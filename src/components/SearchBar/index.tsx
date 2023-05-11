import { SearchBarContainer } from './style'

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <input placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}
