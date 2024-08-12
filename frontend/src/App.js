import "./App.css";
import AllRoutes from "./components/AllRoutes.jsx/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <ToastContainer/>
    </div>
  );
}

export default App;
