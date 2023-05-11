import Avatar from '../../assets/avatar.png'
import { InformationsLabels } from '../InformationsLabels'
import {
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardHeader,
  ProfileDescription,
} from './style'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <img src={Avatar} alt="" />
      <ProfileCardContent>
        <ProfileCardHeader>
          <span>Cameron Williamson</span>
          <a href="/">
            Github
            <FontAwesomeIcon color="#3294F8" icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileCardHeader>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>
        <InformationsLabels />
      </ProfileCardContent>
    </ProfileCardContainer>
  )
}
