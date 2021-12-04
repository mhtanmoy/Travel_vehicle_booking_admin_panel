import './App.css'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screen/HomeScreen'
import AdminScreen from './screen/AdminScreen'
import BookingHistoryScreen from './screen/BookingHistoryScreen'
import CustomerScreen from './screen/CustomerScreen'
import DriAccVerScreen from './screen/DriAccVerScreen'
import DriverScreen from './screen/DriverScreen'
import EditContactScreen from './screen/EditContactScreen'
import ManageBookingScreen from './screen/ManageBookingScreen'
import VehiclesScreen from './screen/VehiclesScreen'


function App() {
  const [inactive, SetInactive] = useState(false);

  return (
    <div>
      <Router>
        <Header onCollapse={(inactive)=>{
          SetInactive(inactive);
        }}/>
        <main className="py-3">
          <div className={`homeSwitch ${inactive ? "inactive" : ""}`}>
            <Switch>
              <Route path={'/'} component={HomeScreen} exact/>
              <Route path={'/users'} component={AdminScreen}/>
              <Route path={'/aftercompleted'} component={BookingHistoryScreen}/>
              <Route path={'/customeruser'} component={CustomerScreen}/>
              <Route path={'/driversverify'} component={DriAccVerScreen}/>
              <Route path={'/driver'} component={DriverScreen}/>
              <Route path={'/editcontact'} component={EditContactScreen}/>
              <Route path={'/bookingrequest'} component={ManageBookingScreen}/>
              <Route path={'/vehicles'} component={VehiclesScreen}/>
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
