import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <>
      <h1>Full stack</h1>
      <h2>Jokes</h2>
      <p>JOKES: {jokes.length}</p>
       <div>
          {jokes.map((each)=>(
            <div key={each.id}>
              <h2>{each.title}</h2>
              <p>{each.content}</p>
            </div>
          ))}
       </div>
    </>
  )
}

export default App
