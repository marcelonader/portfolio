import "./style.scss";

function SectionTwoColumnsLeftContent ({id, classes, children, styles, stylesColLeftLeft}){ 
    return (
      <section id={id}className="row section-left-content">
        <div style={stylesColLeftLeft} className="col-sm-10 col-md-6 g-0 col-left-left-content">
          <div className="container">
            <div  style={styles} className="content-left row g-5">{children}</div>
          </div> 
        </div>
        
        <div className="col-md-6 g-0 col-right-left-content">
          
        </div>

      </section>
    )
}

export default SectionTwoColumnsLeftContent;


