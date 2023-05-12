import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { InformationsLabelsContainer } from './style'

interface LabelObjectAnchor {
  tag: 'a'
  href: string
  text: string
  icon: IconDefinition
}

interface LabelObjectSpan {
  tag: 'span'
  text: string
  icon: IconDefinition
}

export type LabelObject = LabelObjectAnchor | LabelObjectSpan

interface InformationsLabelsProps {
  labels: LabelObject[]
}

export const InformationsLabels = ({ labels }: InformationsLabelsProps) => {
  return (
    <InformationsLabelsContainer>
      {labels.map((label) => {
        if (label.tag === 'span') {
          return (
            <span key={label.text}>
              <FontAwesomeIcon color="#3A536B" icon={label.icon} /> {label.text}
            </span>
          )
        }

        return (
          <a href={label.href} key={label.text}>
            <FontAwesomeIcon color="#3A536B" icon={label.icon} />
            {label.text}
          </a>
        )
      })}
    </InformationsLabelsContainer>
  )
}
