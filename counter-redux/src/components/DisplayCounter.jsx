import { useSelector } from "react-redux"


const DisplayCounter = () => {
  const counter = useSelector(store => store.counter)

  return (
    <h4>Counter Current Value: {counter}</h4>
  )
}

export default DisplayCounter