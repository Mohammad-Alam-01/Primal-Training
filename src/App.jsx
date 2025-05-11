
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

 
  
const App = () => {
  
  return (
    <div>
    <Navbar/>
        <Outlet/>
       <Footer/>
    </div>
  )
}
 

export default App
