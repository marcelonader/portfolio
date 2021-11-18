import "./style.scss";

const SectionTwoColumnsRightContent = ({styleContent, id, children, styles, stylesColLeftRight}) => ( 
      <section id={id} style={styles} className="row g-0 section-right-content">  
        <div style={stylesColLeftRight} className="col-md-6 g-0 col-left-right-content">
        </div>
        <div className="col-sm-10 col-md-6 g-0 col-right-right-content">
            <div style={styleContent} className="content">{children}</div>
        </div>  
      </section>
)

export default SectionTwoColumnsRightContent;