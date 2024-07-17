
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Land from './pages/Land'
import Watchhistory from './pages/Watchhistory'
import Header from './component/Header'
import Footer from './component/Footer'


function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Land/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchhistory' element={<Watchhistory/>}/>
      </Routes> 
      <Footer/>
      
    </>
  )
}

export default App
