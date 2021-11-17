import "./style.css";

function Banner ({children, imageBanner, img, id}){ 
    return (
      <section id={id}  style={{backgroundImage: imageBanner}} className="banner-section">
        <h1 data-aos="fade-up" className="banner-h1">Follow Your Dreams</h1>  

        {children}
      </section>
    )
}

export default Banner;