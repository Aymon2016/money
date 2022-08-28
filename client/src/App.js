import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/home'
import  Login from '../src/pages/login'
import  Register from '../src/pages/register'
import Dashboard from "./pages/dashboard";
import Navigation from "./component/navigation/navigation";

function App() {
  return (
    <BrowserRouter>
     <div className="container">
        <Navigation></Navigation>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
