// Dependencies
import { React } from 'react'
import { Section } from '../Styles/GlobalComponents'
// Components
import Hero from '../Components/Hero/Hero'
import Education from '../Components/Education/Education'
import Experience from '../Components/Experience/Experience'
import Languages from '../Components/Languages/Languages'
import Skills from '../Components/Skills/Skills'
import Honours from '../Components/Honours/Honours'
import { Layout } from '../Layout/Layout'
import Projects from '../Components/Projects/Projects'

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Education />
      <Experience />
      <Languages />
      <Skills />
      <Honours />
      <Projects />
    </Layout>
  )
}

export default Home
