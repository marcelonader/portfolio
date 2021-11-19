import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import TitleTyping from './components/TitleTyping';
import Banner from './components/Banner';
import bannerBackground3 from './imgs/banner-background3.png'
import Section from './components/Section';
import SectionTwoColumnsRightContent from './components/SectionTwoColumnsRightContent';
import SectionTwoColumnsLeftContent from './components/SectionTwoColumnsLeftContent';
import Card from './components/Card';
import Technology from './components/Technologies';
import TextAbout from './components/TextAbout';
import imgPerfilPretoEBranco from "./imgs/perfil1_edited_edited_edited.png"
import Paragrafo from "./components/Paragrafo";
import ParagrafoFooter from "./components/ParagrafoFooter"
import { projects } from './data/projects';
import { aboutMe } from './data/about-me';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';

const App = () => (
  <>
    <Header>
      <Navbar/>
    </Header> 
    <Banner />
    <Hero 
      img={imgPerfilPretoEBranco}>
        <TitleTyping 
          arrMessages={["FRONTEND DEVELOPER", "BACKEND DEVELOPER"]}/>
    </Hero>
    <SectionTwoColumnsRightContent 
      id="about">
      {aboutMe.map(({title, content}, i) => <TextAbout key={i} textTitle={title} textContent={content}/>
      )}
    </SectionTwoColumnsRightContent>

    <Section>
      <Technology></Technology>
    </Section>

    <SectionTwoColumnsLeftContent 
      id="projects">
      {projects.map(({img, title, link}, i) => <Card key={i} classes="col-6" img={img} title={title} link={link}/>)}
    </SectionTwoColumnsLeftContent>
    <Footer 
      id='section3' 
      styles={{
        transform: 'scale(1.1)', 
        height: '80vh', 
        'width': '90.95vw'
        }} 
    >
      <SocialMedia/>

      <Paragrafo
        styles={{
          color: '#fff', 
          'font-size': 'clamp(1rem, 1vw, 2rem)', 'text-align': 'center', 
          'text-shadow': '1px 1px 2px black'
        }}
        content={"Developed by Marcelo Massayuki Nader."}
      />
      <ParagrafoFooter 
        styles={{
          color: '#fff', 
          'font-size': 'clamp(.8rem, 1vw, 1.8rem)', 'text-align': 'center'
        }}
      />
    </Footer>
  </>
)

export default App;
