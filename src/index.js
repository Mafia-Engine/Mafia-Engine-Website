import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import axios from 'axios';
import Login from './pages/Login';
import VoteCount from './pages/VoteCount'
import RegisterVC from './pages/RegisterVC';
import NoServer from './pages/NoServer'

axios.defaults.baseURL = 'https://api.mafiaengine.com/v1';
axios.defaults.withCredentials = false; // True for no wildcard. Production

function Pages() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path='/mafiascum/votecount' element={<VoteCount />} />
        <Route path='/mafiascum/votecount/register' element={<RegisterVC />} />
         */}

        <Route path='noserver' element={<NoServer/>}/>
        <Route
          path="*"
          element={<Navigate to="/noserver" replace />}
        />
      </Routes>
    </Router>)
}

ReactDOM.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
  , document.getElementById('root')
);
