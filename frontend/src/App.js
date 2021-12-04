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
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
