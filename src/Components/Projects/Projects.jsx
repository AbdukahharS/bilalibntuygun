import React from 'react'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../Styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ListBottom,
} from './ProjectsStyles'

const Projects = () => (
  <Section id='projects'>
    <SectionDivider divider />
    <SectionTitle>Projects</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Shafii.uz</ListTitle>
          <ListParagraph>
            Shafii is a non-profit organization which is specialized to help
            disabled youth to master some sort of skills such as language
            learning, communication, and networking.
          </ListParagraph>
          <ListBottom>05/05/2022 – CURRENT</ListBottom>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
)

export default Projects
