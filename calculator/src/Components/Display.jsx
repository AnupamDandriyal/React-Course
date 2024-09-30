import PropTypes from 'prop-types';

const Display = ({value}) => {
  return (
    <span className="d-block p-2 text-bg span">{value}</span>
  )
}

Display.propTypes = {
  value: PropTypes.string.isRequired,  
}

export default Display