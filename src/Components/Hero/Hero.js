import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
  SectionImage,
} from '../../Styles/GlobalComponents'
import Button from '../../Styles/GlobalComponents/Button'
import { SecondaryBtn } from '../../Styles/GlobalComponents'
import { LeftSection, RightSection, SectionButtons } from './HeroStyles'

const Hero = () => (
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
        <SectionButtons>
          <Button>
            <a
              href='https://t.me/an_unchosen_one'
              rel='noreferrer'
              target='_blank'
            >
              Learn More
            </a>
          </Button>
          <SecondaryBtn hero>
            <a
              href='/files/Resume.pdf'
              download
              rel='noreferrer'
              target='_blank'
            >
              Download CV
            </a>
          </SecondaryBtn>
        </SectionButtons>
      </LeftSection>
      <RightSection>
        <SectionImage src={require('../../Images/photo.jpg')} />
      </RightSection>
    </Section>
  </>
)

export default Hero
