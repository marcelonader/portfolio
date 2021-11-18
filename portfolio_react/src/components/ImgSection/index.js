import "./style.css";

const ImgSection = ({imgInterna, styles, arrImgInterna, src}) => (
    <img  style={styles} className='img-interna' src={imgInterna || src} alt=''/>
)

export default ImgSection;