import PropTypes from 'prop-types'
const WelcomeMsg = () => {
  return (
    <div className="welcome">
      <h1>There are no posts!</h1>
    </div>
    
  )
}


WelcomeMsg.propTypes = {
  onGetPostsClick:PropTypes.func.isRequired
}
export default WelcomeMsg