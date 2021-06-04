
// import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProduct from './Components/AllProduct/AllProduct';
import ProductDetails from './Components/ProductDetail/ProductDetails';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Router> 
      <Header></Header>
      <Switch>
          <Route exact path="/">
            <AllProduct></AllProduct>
          </Route>
          <Route exact path="/about">
           <About></About>
          </Route>
          <Route path="/product/:productId">
              <ProductDetails></ProductDetails>            
          </Route>
          <Route>
            404 not found
          </Route>
        </Switch>
         </Router>
     
    </div>
  );
}

export default App;
