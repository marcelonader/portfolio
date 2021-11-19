import "./style.scss";

function Banner ({children, imageBanner, img, id}){ 
    return (
      <section id="home" className="banner-section">
        <q>Take your time to decide what you want from life, and after you decide, do not back down under any pretext, because the world will try to dissuade you. <br></br>Friedrich Nietzsche</q>
        <h1 data-aos="fade-up" className="banner-h1">Follow Your Dreams</h1>  
        {children}
      </section>
    )
}

export default Banner;