import "./style.scss";

const SocialMedia = () => (
  <div className="social-media-div">
    <h1>Let's Talk</h1>
    <div> 
      <a href="https://www.linkedin.com/in/marcelonader" target="_blank"  rel="noreferrer"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin Marcelo Nader" target="_blank"/></a> 
      <a class='redesSociais' href="https://github.com/marcelonader" target="_blank"  rel="noreferrer"><img class='github' src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github Marcelo Nader" target="_blank"/></a> 
      <p className='email'>marcelo.m.nader@gmail.com
      </p>
    </div>
  </div>
)

export default SocialMedia;