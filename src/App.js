import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/sidebar';
import Topbar from './topbar/topbar';
import Heading from './heading/heading';
import Cards from "./cards/cards"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Dashboard from './dashboardcomp/dashboard'
import Report from "./reports/reports";






function App() {


  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Switch>
              <route path="/dashboard" >
                <Dashboard  />
                </route>
                <route path="/reports" >
              <Report/>
                </route>
            </Switch>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
