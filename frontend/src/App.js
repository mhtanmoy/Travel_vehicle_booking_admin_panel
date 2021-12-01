import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Router>
        <Header />

        {/* <Switch>
          <Route>

          </Route>
        </Switch> */}

        <main className="py-3">
          <Container>
            <h1>Working on proccess..</h1>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
