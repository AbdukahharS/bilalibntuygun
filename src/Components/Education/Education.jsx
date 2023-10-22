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
  ListImage,
  ListLink,
} from './EducationStyles'
import { BiChevronRight } from 'react-icons/bi'

const Education = () => (
  <Section id='education'>
    <SectionDivider divider />
    <SectionTitle>Education and Training</SectionTitle>

    <List>
      <ListItem>
        <ListImage src={require('../../Images/ielts.jpg')} />
        <ListContainer>
          <ListTitle>IELTS</ListTitle>
          <ListParagraph>IDP</ListParagraph>
          <ListLink href='/'>
            Visit website <BiChevronRight />
          </ListLink>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListImage src={require('../../Images/SAT.png')} />
        <ListContainer>
          <ListTitle>SAT</ListTitle>
          <ListParagraph>CollegeBoard</ListParagraph>
          <ListLink href='/'>
            Visit website <BiChevronRight />
          </ListLink>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListImage src={require('../../Images/tesol.png')} />
        <ListContainer>
          <ListTitle>TESOL/TEFL </ListTitle>
          <ListParagraph>World Tesol Academy</ListParagraph>
          <ListLink href='/'>
            Visit website <BiChevronRight />
          </ListLink>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Education
