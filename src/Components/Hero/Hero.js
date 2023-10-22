import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
  SectionImage,
} from '../../Styles/GlobalComponents'
import Button from '../../Styles/GlobalComponents/Button'
import { LeftSection, RightSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section reverse row nopadding breakLg>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Website
        </SectionTitle>
        <SectionText>
          My name is Biloliddin. Currently, I am a freshman at INTI
          International College Subang where I am majoring in Business,
          Accounting and Finance.
        </SectionText>
        <a target='_blank' href='https://t.me/biloliddinabduvahobov'>
          <Button onClick={props.handleClick}>Learn More</Button>
        </a>
      </LeftSection>
      <RightSection>
        <SectionImage src={require('../../Images/photo.jpg')} />
      </RightSection>
    </Section>
  </>
)

export default Hero
