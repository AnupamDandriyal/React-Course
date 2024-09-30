

const Time = () => {
  const date = new Date();
  /* console.log(date.getUTCHours()) */
  return (
    <p>This is the curremt time :{date.getDate()}/{date.getMonth()}/{date.getFullYear()} -{date.getHours()}:{date.getMinutes()}:{date.getSeconds()} </p>
  )
}

export default Time