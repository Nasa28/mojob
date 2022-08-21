import React, {FC} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GetJobListings from './containers/GetJobListings';
import './App.css';
const App: FC = () =>{
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<GetJobListings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
