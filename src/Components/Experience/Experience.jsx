import { Chrono } from 'react-chrono'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../Styles/GlobalComponents'

import { experience as data } from '../../Constants/constants'

import './ExperienceStyles.css'

const Experience = () => (
  <Section id='experience'>
    <SectionDivider divider />
    <SectionTitle>Work Experience</SectionTitle>

    <Chrono
      items={data}
      mode='VERTICAL_ALTERNATING'
      theme={{
        primary: '#00DBD8',
        secondary: '#00DBD8',
        cardBgColor: '#fff',
        titleColor: '#fff',
        titleColorActive: '#06d4d9',
      }}
      hideControls={true}
      fontSizes={{
        cardSubtitle: '1.5rem',
        cardTitle: '2.2rem',
        cardText: '1.4rem',
      }}
      allowDynamicUpdate
      classNames={{
        card: 'my-card',
        cardSubTitle: 'my-card-subtitle',
        cardTitle: 'my-card-title',
      }}
    >
      {data.map((experience) => (
        <div className='card-content'>
          <p className='card-text'>{experience.cardDetailedText}</p>
          <hr />
          <p className='card-bottom'>
            <span>{experience.time}</span> {experience.location}
          </p>
        </div>
      ))}
    </Chrono>
  </Section>
)

export default Experience
