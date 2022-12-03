import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListLogComponent from './components/ListLogComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
    <div className="container">
    <switch>
    <Route path = "/" exact component = {ListLogComponent}></Route>
    <Route path ="/logs" component={ListLogComponent}></Route>
    <Route path ="/Login" component={ListLogComponent}></Route>
           <ListLogComponent />
           </switch>
    </div>
    <FooterComponent />
   
   
    
    </Router>
    
    </div>
    
  );
}

export default App;
