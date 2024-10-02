
import './App.css'
import CreatePost from './components/CreatePost'
import Footer from './components/Footer'
import Header from './components/Header'
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <div className="app-container">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Header />
        <div className="content">
          <CreatePost />
          <PostList />
        </div>
        <Footer />
      </div>    
    </div>    
  )
}

export default App
