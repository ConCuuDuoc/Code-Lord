import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Resetpassword from './pages/Resetpassword/Resetpassword';
import Activate from './pages/Activate/Activate';
import Resetpasswordconfirm from './pages/Resetpasswordconfirm/Resetpasswordconfirm';
import { Provider } from 'react-redux';
import React from 'react';
import store from './Store.js';
import Layout from './layout/Layout.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
        </Routes>
      </div>
    </Router>
  );
}

export function Auth() {
  return (
    <Provider store={store}>
      <Router>
        <div className="Auth">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/activate/:uid/:token" element={<Activate />} />
              <Route path="/reset_password" element={<Resetpassword />} />
              <Route path="/password/reset/confirm/:uid/:token" element={<Resetpasswordconfirm />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
