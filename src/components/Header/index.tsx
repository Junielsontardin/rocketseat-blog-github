import { HeaderDefault } from './styles'
import FirstEffectHeader from '../../assets/effect-header-first.png'
import SecondEffectHeader from '../../assets/effect-header-second.png'
import LogoBlog from '../../assets/logo-blog.png'

export const Header = () => {
  return (
    <HeaderDefault>
      <img src={FirstEffectHeader} alt="" />
      <img src={LogoBlog} alt="" />
      <img src={SecondEffectHeader} alt="" />
    </HeaderDefault>
  )
}
