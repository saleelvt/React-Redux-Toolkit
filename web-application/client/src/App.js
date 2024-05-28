import './App.css';
import Main from './components/main';
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import AdminLogin from "./components/admin/adminLogin";
import AdminHome from './components/admin/AdminHome';
import UserLogin from "./components/user/userLogin";
import UserRegister from './components/user/userRegister';
import UserHome from './components/user/userHome';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserHome />} />
      <Route path='/adminLogin' element={  <AdminLogin />} />
      <Route path='/adminHome' element={  <AdminHome />} />
      <Route path='/userLogin' element={  <UserLogin />} />
      <Route path='/userRegister' element={  <UserRegister />} />
      <Route path='/userHome' element={  <UserHome />} />

     {/* <Main/>  */}

    </Routes>

     </BrowserRouter>



    </div>
  );
}

export default App;
