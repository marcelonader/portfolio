import "./style.scss";

const Section = ({children, imageSection, styles, id}) => (
      <section id={id} style={{backgroundImage: imageSection, ...styles}} className="section container-fluid">
          {children}
      </section>
)

export default Section;