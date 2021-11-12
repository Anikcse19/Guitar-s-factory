import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Login from './pages/LogIn/LogIn/LogIn';
import Register from './pages/LogIn/Register/Register';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Products from './pages/Products/Products';
import PurchaseOrder from './pages/PurchaseOrder/PurchaseOrder';
import Navigation from './shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/products'>
              <Products></Products>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path='/purchase/:id'>
              <PurchaseOrder></PurchaseOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
