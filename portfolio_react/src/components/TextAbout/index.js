import "./style.scss";


const TextAbout = ({textContent, textTitle}) =>(
    <div data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="textabout-div">  
      <h1 className="textabout-h1">{textTitle}</h1>
      <h2 className="textabout-h2">{textContent}</h2>
    </div>
)

export default TextAbout;