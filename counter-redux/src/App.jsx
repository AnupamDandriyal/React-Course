
import { useSelector } from 'react-redux'
import './App.css'
import Container from './components/Container'
import Controls from './components/Controls'
import DisplayCounter from './components/DisplayCounter'
import Header from './components/Header'
import PrivacyMsg from './components/PrivacyMsg'


function App() {

const privacy = useSelector(store =>store.privacy)
  return (
      <div className="px-4 py-5 my-5 text-center">
        <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMsg /> :  <DisplayCounter />}
            <Controls />
          </div>
          </Container>
      </div>
  )
}

export default App