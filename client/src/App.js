import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Edit from './component/Edit';
import Details from './component/Details';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
