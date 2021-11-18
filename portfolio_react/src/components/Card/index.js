import "./style.scss";

const Card = ({img, title, link, classes}) => (
    // <div data-aos="flip-up" className="col-lg-4 col-md-6 col-sm-12 portfolio-item" data-wow-delay="0.0s">
    //     <div className="portfolio-wrap">
    //         <div className="portfolio-img">
    //             <a href={link} rel="noreferrer" target="_blank"><img src={img} alt={title}/></a>
    //         </div>
    //         <div className="portfolio-text">
    //             <h3>{title}</h3>
    //             <a className="btn-card" href={link} rel="noreferrer" target="_blank">+</a>
    //         </div>
    //     </div>
    // </div>
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