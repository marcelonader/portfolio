import "./style.scss";

const Paragrafo = ({content, styles}) => (
    <p style={styles} className='paragrafo'>{content}</p>
)

export default Paragrafo;