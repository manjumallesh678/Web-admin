import NavBar from './NavigationBar/Navigation';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainKitchenPage from './Kitchen/MainKitchenPage';
import AddKitchenPage from './Kitchen/AddKitchenPage/AddKitchenPage';
import EditKitchen from './Kitchen/EditKitchen/EditKitchen';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Route path="/kitchen" exact render={(props) => <MainKitchenPage value={props}/>}/>
      <Route exact path="/kitchen/addkitchen" render={(props) => <AddKitchenPage value={props}/>} />
      <Route path="/kitchen/edit/:id" exact render={(props) => <EditKitchen value={props}/>} />
      </Router>
      
    </div>
  );
}

export default App;
