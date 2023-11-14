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
import Setting from './pages/Setting/Setting';
import ChangePassword from './pages/ChangePassword/ChangePassword';
// import Categories from './pages/Categories/Categories';
import Categories from './pages/Categories/Categories.jsx';
import MyLearning from './pages/MyLearning/MyLearning';
import Overview from './pages/Overview/Overview';
// import CourseItem from './Components/CourseItem/CourseItem'
// import CourseCart from './pages/CourseCart/CourseCart'



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
              <Route exact path="/setting" element={<Setting />} /> 
              <Route exact path="/changepassword" element={<ChangePassword />} />
              <Route exact path="/categories" element={<Categories />} />
              <Route exact path="/mylearning" element={<MyLearning />} />
              <Route exact path="/overview" element={<Overview />} />
              {/* /* <Route exact path="/courseitem" element={<CourseItem />} /> */}
              {/* <Route exact path="/coursecart" element={<CourseCart />} />  */}

            </Routes>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;













