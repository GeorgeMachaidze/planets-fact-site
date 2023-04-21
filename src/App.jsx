import './App.css'
import HamburgerMenu from './HamburgerMenu';
import data from "./data.JSON"


function App() {
  

  return (
    <>
    <div className='main'>

    <div className='headerAndNavBar'>
        <h1>THE PLANETS</h1>
        <div className='burgerMenu'>{HamburgerMenu()}</div>
      </div>
      <hr className='mainHr'/>
    </div>
    </>
  )
}

export default App
