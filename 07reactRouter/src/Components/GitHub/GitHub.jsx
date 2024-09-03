import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function GitHub() {
  /* const [data, setData] = React.useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/anupamdandriyal')
      .then((response) => response.json())
    .then( data => setData(data))
  }) */
  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-orange-400 text-white p-4 text-3xl'>{data.login} &nbsp; Followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="pic" />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/anupamdandriyal');
  return response.json();
}