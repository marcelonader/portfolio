import "./style.scss";

function SectionTwoColumnsLeftContent ({id, children, styles, stylesColLeftLeft}){ 
    return (
      <section id={id}className="row g-0 section-left-content">
                <div style={stylesColLeftLeft} className="col-sm-10 col-md-6 g-0 col-left-left-content">
          <div  style={styles} className="content-left">{children}</div>
        </div>
        
        <div className="col-md-6 g-0 col-right-left-content">
          
        </div>

      </section>
    )
}

export default SectionTwoColumnsLeftContent;


