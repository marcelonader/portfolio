import './style.scss';

const ParagrafoFooter = ({styles}) => {
  const generateDateString = () => {
    const creationYear = '2021';
    const currentYear = `${new Date().getFullYear()}`;
    return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
  }

  return(
      <p style={styles}>&copy;Copyright {generateDateString()}</p>
  )
}

export default ParagrafoFooter;