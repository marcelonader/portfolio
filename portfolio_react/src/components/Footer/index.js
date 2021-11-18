import "./style.scss";

const Footer = ({children, imageSection, styles, id}) => (
    <section id={id} style={{backgroundImage: imageSection, ...styles}} className="section container-fluid">
        {children}
    </section>
)

export default Footer;