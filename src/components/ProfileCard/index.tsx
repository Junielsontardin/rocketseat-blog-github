/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { InformationsLabels, LabelObject } from '../InformationsLabels'
import {
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardHeader,
  ProfileDescription,
} from './style'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface IUserGithub {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company?: string
  blog: string
  location?: string
  email?: string
  hireable: any
  bio?: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export const ProfileCard = () => {
  const [userGithub, setUserGithub] = useState({} as IUserGithub)

  useEffect(() => {
    fetchUserGithub()
  }, [])

  const fetchUserGithub = async () => {
    const response = await api.get('/users/vtex')

    const userResponse: IUserGithub = response.data

    setUserGithub(userResponse)
  }

  const { avatar_url, name, bio, url, followers, twitter_username } = userGithub

  const labels: LabelObject[] = [
    {
      tag: 'a',
      href: url,
      text: name,
      icon: faStar,
    },
    {
      tag: 'a',
      href: url,
      text: twitter_username,
      icon: faBuilding,
    },
    {
      tag: 'span',
      text: `${followers} seguidores`,
      icon: faUserGroup,
    },
  ]

  return (
    <ProfileCardContainer>
      <img src={avatar_url} alt="" height={148} width={148} />
      <ProfileCardContent>
        <ProfileCardHeader>
          <span>{name}</span>
          <a href={url}>
            Github
            <FontAwesomeIcon color="#3294F8" icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileCardHeader>
        <ProfileDescription>{bio}</ProfileDescription>
        <InformationsLabels labels={labels} />
      </ProfileCardContent>
    </ProfileCardContainer>
  )
}
