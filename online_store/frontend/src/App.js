import {Routes , Route} from 'react-router-dom';
import Mainpage from './pages/mainpage/mainpage';
import Profilepage from './pages/profilepage/profilepage'
import Loginpage from './pages/loginpage/loginpage'
import Registrationpage from './pages/registrationpage/registrationpage'
import AddProductPage from './pages/addproductpage/addproductpage'


function App(){
  return(
    <>
      <Routes>
        <Route path = "/" element = {<Mainpage/>}/>
        <Route path="/registration" element =  {<Registrationpage/>}/>
        <Route path="/login" element = {<Loginpage/>}/>
        <Route path= "/profile" element = {<Profilepage/>}/>
        <Route path= "/addproduct" element = {<AddProductPage/>}/>
      </Routes>
    </>
  )
}

export default App;