import {useState ,useEffect} from 'react'

const Time = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearTimeout(intervalId)
    }
  })
  
  return (
    <p>This is the curremt time :
      <span style={{fontWeight:'550'}}>
        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
      </span>
    </p>
  )
}

export default Time