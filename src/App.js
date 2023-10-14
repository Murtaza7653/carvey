import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Chatbot from './Components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/chat' element={<Chatbot />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
