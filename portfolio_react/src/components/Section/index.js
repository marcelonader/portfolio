import "./style.scss";

function Section ({children, imageSection, styles, id}){ 
    return (
      <section id={id} style={{backgroundImage: imageSection, ...styles}} className="section container-fluid">
    
          {children}
        
      </section>
    )
}

export default Section;