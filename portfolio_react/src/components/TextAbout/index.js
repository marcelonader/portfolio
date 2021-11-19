import "./style.scss";


const TextAbout = ({textContent, textTitle}) =>(
    <div className="textabout-div">  
      <h1 data-aos="fade-in" className="textabout-h1">{textTitle}</h1>
      <h2 data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="textabout-h2">{textContent}</h2>
    </div>
)

export default TextAbout;