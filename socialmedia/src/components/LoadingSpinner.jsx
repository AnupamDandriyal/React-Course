

const LoadingSpinner = () => {
  return (
    <center>
      <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading</span>
      </div>
      <h1 style={{ color:'lightgray'}}>Loading</h1>
    </center>
  )
}

export default LoadingSpinner