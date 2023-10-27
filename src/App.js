import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Resetpassword from './pages/Resetpassword/Resetpassword';
import Activate from './pages/Activate/Activate';
import Resetpasswordconfirm from './pages/Resetpasswordconfirm/Resetpasswordconfirm';
import { Provider } from 'react-redux';
import React from 'react';
import store from './Store';
import Layout from './layout/Layout.js';
import Dashboard from './pages/Dashboard/Dashboard';
// import ProfileSetting from './pages/ProfileSetting/ProfileSetting';

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
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/activate/:uid/:token" element={<Activate />} />
              <Route exact path="/reset_password" element={<Resetpassword />} />
              <Route exact path="/password/reset/confirm/:uid/:token" element={<Resetpasswordconfirm />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              {/* <Route exact path="/setting" element={<ProfileSetting />} />  */}
            </Routes>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
