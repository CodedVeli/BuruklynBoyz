import { useState  } from 'react'
import NavBar from './components/NavBar'
import Video from './components/Video'
import MerchList from './components/MerchList'
import Events from './components/Events'
import Booking from './components/Booking'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() { 
  const [ count, setCount] = useState(0)

  const merchClick = () => setCount(count +1)
 
  return (
    <Router>
      <NavBar count={count} />  
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/events" element={<Events  merchClick={merchClick} />} />
        <Route path="/merch" element={<MerchList merchClick={merchClick}  />} />
        <Route path="/booking" element={<Booking />} />
      </Routes> 

     
    </Router>
  )
}

export default App
