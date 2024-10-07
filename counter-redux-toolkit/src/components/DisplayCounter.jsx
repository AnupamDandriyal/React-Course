import { useSelector } from "react-redux"


const DisplayCounter = () => {
  const { counterVal } = useSelector(store => store.counter)

  return (
    <h4>Counter Current Value: {counterVal}</h4>
  )
}

export default DisplayCounter