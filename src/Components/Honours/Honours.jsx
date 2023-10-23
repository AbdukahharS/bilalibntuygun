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
} from './HonoursStyles'

const Honours = () => (
  <Section id='honours'>
    <SectionDivider divider />
    <SectionTitle>Honours and awards</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Academic Support</ListTitle>
          <ListParagraph>
            My entire career at RESULT ENGLISH SCHOOL started as a junior
            teacher, having more than 100 successful students.
          </ListParagraph>
          <ListBottom>
            <b>03/2022</b> RESULT ENGLISH SCHOOL
          </ListBottom>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Millat Umidi Scholarship Winner</ListTitle>
          <ListParagraph>
            The winner of one of the 30 scholarships
          </ListParagraph>
          <ListBottom>
            <b>07/2022</b> Millat Umidi University
          </ListBottom>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Certificate of Recognition</ListTitle>
          <ListParagraph>
            Promotion of Academic English learning and supporting Global
            Ambassador English Language Olympiad
          </ListParagraph>
          <ListBottom>
            <b>05/2022</b> Global Ambassador
          </ListBottom>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Certificate of Participation</ListTitle>
          <ListParagraph>
            The honored participant of the project, Ibrat Camp.
          </ListParagraph>
          <ListBottom>
            <b>07/2022</b> Youth Affairs Agency
          </ListBottom>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Certificate of Achievement</ListTitle>
          <ListParagraph>
            The Republican participant of the competition, The Best Essay 2022.
          </ListParagraph>
          <ListBottom>
            <b>05/2022</b> Registan LC
          </ListBottom>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Certificate of Participation</ListTitle>
          <ListParagraph>
            The participant of the masterclass, Mnemonics
          </ListParagraph>
          <ListBottom>
            <b>02/2023</b> Super Miya
          </ListBottom>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Honours
