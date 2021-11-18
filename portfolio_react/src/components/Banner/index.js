import "./style.scss";

function Banner ({children, imageBanner, img, id}){ 
    return (
      <section id={id}  style={{backgroundImage: imageBanner}} className="banner-section">
        <q>Demore o tempo que for para decidir o que você quer da vida, e depois que decidir não recue ante nenhum pretexto, porque o mundo tentará te dissuadir. <br></br>Friedrich Nietzsche</q>
        <h1 data-aos="fade-up" className="banner-h1">Follow Your Dreams</h1>  
        {children}
      </section>
    )
}

export default Banner;