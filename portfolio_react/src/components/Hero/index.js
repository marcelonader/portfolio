import "./style.scss"

const Hero = ({children, img}) => (
  <>
    <div className="hero">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="title-text">Hello. I'm Marcelo Nader, a {children}</div>
                        </div>
                        <img className="perfil-img" src={img} alt="perfil"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>  
)

export default Hero;