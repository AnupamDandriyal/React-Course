

import './App.css'
import { AppContext } from './context/contextAPI'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
import Header from './components/Header'
function App() {
  

  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full '>
          <Header />
          <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='searchResult/:searchQuery' element={<SearchResult />} />
          <Route path='video/:id' element={<VideoDetails/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App


/* Youtube API : https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa045NDQyMmhKZXF0TDdxbkx4ZU96dXM1WkdId3xBQ3Jtc0tuUW5Pdm9yY3ZIajctMnNZTVctVGJQWHhsU3V3VVFRc0pqN2YyaXZGcjUxUXp5ZEkzQ0ZUa2RNbnJlZkhPcnN3VjZjS2w1U0hJb3h1MnU4Y1luVkxsWHdURTFtT05KTFRfcnJwY2JNa25WaEEybG1sdw&q=https%3A%2F%2Frapidapi.com%2FGlavier%2Fapi%2Fyoutube138%2F&v=8HTYXNLLLSQ */


/* 
Rapid API : https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnN5WDdvWVJRZk9WVnd5OUI0NHRxMFdHaWE5Z3xBQ3Jtc0trejNOeXNGR01Hc0tLbThKR1h5WkUtakZyNG1zN3NhRE9XVzNKd3hXUVJ6ckJTS0ZsZ1JJNER4RnNjWW9EajQyb29qVHhIZEdTNDJtWjRYNXZrTV8tM29LaXJzblloeHFqbGxBblNXSkx6S0RzT1ZYMA&q=https%3A%2F%2Frapidapi.com%2Fhub&v=8HTYXNLLLSQ */