import "./style.scss";

const Card = ({img, title, link}) => (
    <div data-aos="flip-up" className="col-lg-4 col-md-6 col-sm-12 portfolio-item" data-wow-delay="0.0s">
        <div className="portfolio-wrap">
            <div className="portfolio-img">
                <img src={img} alt={title}/>
            </div>
            <div className="portfolio-text">
                <h3>{title}</h3>
                <a className="btn-card" href={link}>+</a>
            </div>
        </div>
    </div>
)

export default Card;