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
import projectMinions from "./imgs/project-minions.png";
import projectToDoList from "./imgs/project-to-do-list.png";
import projectPetinder from "./imgs/project-petinder.png";
import projectCamaraRoll from "./imgs/project-camara-roll.png";
import projectMemoryGame from "./imgs/project-memory-game.png";
import projectCalculadora from "./imgs/project-calculadora.png";
import projectDevDicas from "./imgs/project-dev-dicas.png";
import projectTabelaClassificacao from "./imgs/project-tabela-classificacao.png";
import projectSwitchBtn from "./imgs/project-switch-btn.png";
import Card from './components/Card';
import Technology from './components/Technology';
import TextAbout from './components/TextAbout';
import imgPerfilColorido from "./imgs/perfil1_edited_edited (1).png"
import imgPerfilPretoEBranco from "./imgs/perfil1_edited_edited_edited.png"

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
            
            {/* <TitleTyping arrMessages={["Web Developer", "FullStack Developer"]}/> */}
        </Banner>
        <Hero img={imgPerfilPretoEBranco}>
            {/* <TitleTyping arrMessages={["FRONTEND DEVELOPER", "BACKEND DEVELOPER"]}/> */}
        </Hero>
        <SectionTwoColumnsRightContent id="about">
          <TextAbout textTitle="A passionate software developer student." textContent="I'm currently studying the Certified Tech Developer, which is a complete course, thought and designed by Mercado Livre and Globant together with Digital House, where I'm having the opportunity to learn the most sought after languages ​​in Programming, technical knowledge and a series of skills fundamental to insert myself in the technology market."/>
          
          <TextAbout textTitle="Lawyer in career transition to the technology area." textContent="I'm dedicating myself to becoming a great software developer soon."/>
        </SectionTwoColumnsRightContent>

        <SectionTwoColumnsRightContent  id="about">
          <TextAbout textTitle="I am a" textContent="Musician in his spare time. Financial Market Enthusiast. Podcasts and eletronic games lover. Passionate about learning"/>

          <TextAbout textTitle="I love to ask logical challenges" textContent="I'm always exercising my programming logic on sites like codewars.com. I really love solving challenges involving logical reasoning."/>

          <TextAbout textTitle="I love new experiences and to share and teach what I know." textContent="I trust in the value of each new professional experience and each new challenge, always aiming at respect for people and efficiency in results."/>
        </SectionTwoColumnsRightContent>

        <Section>
          <Technology></Technology>
        </Section>

        <SectionTwoColumnsLeftContent id="projects">
          <Card img={projectMinions} title="Minions" link="https://projeto-minions.vercel.app/"/>
          <Card img={projectMemoryGame} title="Memory Game" link="checkpoint-01-fe-ii.github.io/form/"/>

        </SectionTwoColumnsLeftContent>
        <SectionTwoColumnsLeftContent id="projects">
          <Card img={projectCamaraRoll} title="Camara Roll" link="https://ffsf-filho.github.io/squad12/"/>
          <Card img={projectPetinder} title="Petinder" link="https://projetofinalfrontend.github.io/projetoFinal/"/>
        </SectionTwoColumnsLeftContent>
        <SectionTwoColumnsLeftContent id="projects">
          <Card img={projectToDoList} title="ToDo List" link="https://projetofrontii-to-do.github.io/To-do/lista-tarefas.html"/>
          <Card img={projectSwitchBtn} title="Switch Button" link="https://marcelonader.github.io/switch-btn/"/>
        </SectionTwoColumnsLeftContent>
        <SectionTwoColumnsLeftContent id="projects">
          <Card img={projectCalculadora} title="Calculadora" link=" https://marcelonader.github.io/calculadora/"/>
          <Card img={projectDevDicas} title="Dev dicas" link="https://marcelonader.github.io/frontend1-projeto-01/"/>
        </SectionTwoColumnsLeftContent>
        <SectionTwoColumnsLeftContent styles={{"justify-content": "flex-start"}} id="projects">
          <Card img={projectTabelaClassificacao} title="Tabela de Classificação" link="https://marcelonader.github.io/tabela-de-classificacao/"/>  
        </SectionTwoColumnsLeftContent>
        
          
            </>
  );
};

export default App;
