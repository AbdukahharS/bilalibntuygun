import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../Styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './LanguagesStyles'

const Languages = () => (
  <Section id='languages'>
    <SectionDivider divider />
    <SectionTitle>LANGUAGE SKILLS</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Uzbek</ListTitle>
          <ListParagraph>Native speaker</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Russian</ListTitle>
          <ListParagraph>
            Listening C2
            <br /> Reading C2
            <br />
            Spoken interaction C2
            <br />
            Spoken production C2
            <br />
            Writing C2
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>English</ListTitle>
          <ListParagraph>
            Listening C2 <br />
            Reading C1 <br />
            Spoken production C1 <br />
            Spoken interaction C1
            <br />
            Writing C1
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Turkish</ListTitle>
          <ListParagraph>
            Listening B1 <br />
            Reading B2 <br />
            Spoken production B2
            <br />
            Spoken interaction B2
            <br />
            Writing B1
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>English</ListTitle>
          <ListParagraph>
            Listening A1 <br />
            Reading B1 <br />
            Spoken production A2 <br />
            Spoken interaction A2
            <br />
            Writing A1
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Languages
