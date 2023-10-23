import React from 'react'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../Styles/GlobalComponents'
import { List, ListDevider, ListItem } from './SkillsStyles'

import { skills } from '../../Constants/constants'

const Technologies = () => (
  <Section id='skills'>
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>

    <List>
      {skills.map((skill, i) => (
        <>
          <ListItem>{skill}</ListItem>
          {i !== skills.length - 1 && <ListDevider />}
        </>
      ))}
    </List>
  </Section>
)

export default Technologies
