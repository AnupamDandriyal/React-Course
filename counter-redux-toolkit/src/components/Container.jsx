import PropTypes from 'prop-types';

const Container = ({children}) => {
  return (
    <>
      <div className="card" style={{ width:'50%', margin:' 0 auto'}}>
        <div className="card-body">
          {children}
        </div>
      </div>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired, // or PropTypes.node if optional
};


export default Container

