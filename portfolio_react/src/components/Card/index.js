import "./style.scss";

const Card = ({img, title, link, classes}) => (
    <div data-aos="flip-up" className="col-12 div-img">
        <div className="portfolio-img">
        <a href={link} rel="noreferrer" target="_blank"><img className="img-project" src={img} alt={title}/></a>
        </div>
        <div className="portfolio-text">
            <h3>{title}</h3>
        </div>
    </div>
)

export default Card;