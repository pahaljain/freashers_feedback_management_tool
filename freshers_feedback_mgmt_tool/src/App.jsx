import './App.css'
import LeftNavbar from './components/LeftNavbar'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='app'> 
      <LeftNavbar />
      <div className='flex-col w-full'>
        <Navbar />
      </div>
    </div>
  )
}

export default App
