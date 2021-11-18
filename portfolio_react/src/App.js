import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import TitleTyping from './components/TitleTyping';
import Banner from './components/Banner';
import bannerBackground from './imgs/banner-background.png'
import bannerBackground1 from './imgs/banner-background1.png'
import bannerBackground3 from './imgs/banner-background3.png'
import Section from './components/Section';
import SectionTwoColumnsRightContent from './components/SectionTwoColumnsRightContent';
import SectionTwoColumnsLeftContent from './components/SectionTwoColumnsLeftContent';
// import TitleTyping from "./components/TitleTyping"
// import projectMinions from "./imgs/project-minions.png";
// import projectToDoList from "./imgs/project-to-do-list.png";
// import projectPetinder from "./imgs/project-petinder.png";
// import projectCamaraRoll from "./imgs/project-camara-roll.png";
// import projectMemoryGame from "./imgs/project-memory-game.png";
// import projectCalculadora from "./imgs/project-calculadora.png";
// import projectDevDicas from "./imgs/project-dev-dicas.png";
// import projectTabelaClassificacao from "./imgs/project-tabela-classificacao.png";
// import projectSwitchBtn from "./imgs/project-switch-btn.png";
import Card from './components/Card';
import Technology from './components/Technologies';
import TextAbout from './components/TextAbout';
// import imgPerfilColorido from "./imgs/perfil1_edited_edited (1).png"
import imgPerfilPretoEBranco from "./imgs/perfil1_edited_edited_edited.png"
import Paragrafo from "./components/Paragrafo";
import ParagrafoFooter from "./components/ParagrafoFooter"
import ImgSection from "./components/ImgSection"
import { projects } from './data/projects';
import { aboutMe } from './data/about-me';

const App = () => {

  // const arrImgInterna = [imgInterna3, imgInterna4]
  // const [image, setImage] = useState(arrImgInterna[0])

  // const [colorBorderButton, setColor] = useState("#7c50a0")
  // const change = ()=>{
  //     setImage(image === arrImgInterna[0] ? arrImgInterna[1]: arrImgInterna[0])
  //     setColor(image === arrImgInterna[0] ? "#e9c61a" : "#7c50a0")
  // }

  // const particlesInit = (main) => {
  //   console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
      <>
        <Header>
            <Navbar/>
        </Header> 
        <Banner 
            id='home' 
            imageBanner={`url(${bannerBackground3})`}
            >
        </Banner>
        <Hero 
          img={imgPerfilPretoEBranco}>
            <TitleTyping 
              arrMessages={["FRONTEND DEVELOPER", "BACKEND DEVELOPER"]}/>
        </Hero>
        <SectionTwoColumnsRightContent 
          id="about">
          {aboutMe.map(({title, content}) => <TextAbout textTitle={title} textContent={content}/>
          )}
        </SectionTwoColumnsRightContent>

        <Section>
          <Technology></Technology>
        </Section>

        <SectionTwoColumnsLeftContent 
          classes="row" id="projects">
          {projects.map(({img, title, link}) => <Card classes="col-6" img={img} title={title} link={link}/>)}
        </SectionTwoColumnsLeftContent>
        <Section 
          id='section3' 
          styles={{
            transform: 'scale(1.1)', 
            height: '80vh', 
            'max-width': '100vw'
            }} 
        >
          <Paragrafo 
            styles={{
              color: '#fff', 
              'font-size': 'clamp(1rem, 1vw, 2rem)', 'text-align': 'center', 
              'text-shadow': '1px 1px 2px black'
            }} 
            content={"Site Desenvolvido por Marcelo Massayuki Nader."}
          />
          <ParagrafoFooter 
            styles={{
              color: '#fff', 
              'font-size': 'clamp(.8rem, 1vw, 1.8rem)', 'text-align': 'center'
            }}
          />
        </Section>

          
            </>
  );
};

export default App;
