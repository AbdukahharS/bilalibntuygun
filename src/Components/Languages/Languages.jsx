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
  ProgressContainer,
  ProgressWrapper,
} from './LanguagesStyles'

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './custom.css'

import { languages, langScore } from '../../Constants/constants'

const Languages = () => (
  <Section id='languages'>
    <SectionDivider divider />
    <SectionTitle>Languages</SectionTitle>
    <List>
      {languages.map((lang, i) => (
        <ListItem key={i}>
          <ListTitle>{lang.title}</ListTitle>
          <ListContainer>
            {!lang.isNative ? (
              <>
                <ProgressWrapper>
                  <ProgressContainer>
                    <CircularProgressbar
                      value={langScore[lang.listening]}
                      text={lang.listening}
                      counterClockwise
                    />
                  </ProgressContainer>
                  <ListParagraph>Listening</ListParagraph>
                </ProgressWrapper>
                <ProgressWrapper>
                  <ProgressContainer>
                    <CircularProgressbar
                      value={langScore[lang.reading]}
                      text={lang.reading}
                      counterClockwise
                    />
                  </ProgressContainer>
                  <ListParagraph>Reading </ListParagraph>
                </ProgressWrapper>
                <ProgressWrapper>
                  <ProgressContainer>
                    <CircularProgressbar
                      value={langScore[lang.spokenProduction]}
                      text={lang.spokenProduction}
                      counterClockwise
                    />
                  </ProgressContainer>
                  <ListParagraph>Spoken production</ListParagraph>
                </ProgressWrapper>
                <ProgressWrapper>
                  <ProgressContainer>
                    <CircularProgressbar
                      value={langScore[lang.spokenInteraction]}
                      text={lang.spokenInteraction}
                      counterClockwise
                    />
                  </ProgressContainer>
                  <ListParagraph>Spoken interaction</ListParagraph>
                </ProgressWrapper>
                <ProgressWrapper>
                  <ProgressContainer>
                    <CircularProgressbar
                      value={langScore[lang.writing]}
                      text={lang.writing}
                      counterClockwise
                    />
                  </ProgressContainer>
                  <ListParagraph>Writing</ListParagraph>
                </ProgressWrapper>
              </>
            ) : (
              <div className='native-wrapper'>
                <CircularProgressbar
                  value={100}
                  text='Native'
                  counterClockwise
                />
              </div>
            )}
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
)

export default Languages
