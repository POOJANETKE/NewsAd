import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import HeaderComponent from './Component/HeaderComponent';
import HomeComponent from './Component/HomeComponent';
import viewAdvertisement, { viewAdvertisements } from './AdminComponent/Component/ViewAdvertisements';
import ViewAdvertisementById from './AdminComponent/Component/ViewAdvertisementById';
import AboutComponent from './AboutUs/Component/AboutComponent';
import createAdComponent from './AdminComponent/Component/CreateAdComponent';
import CustomerRegistration from './CustomerComponent/Components/CustomerRegistration'
import CustomerLogin from './CustomerComponent/Components/CustomerLogin';
import AdminLogin from './AdminLogin/Component/AdminLogin';
import AdminView from './AdminLogin/Component/AdminView';
import viewCustomer from './AdminComponent/Component/ViewCustomer';
import CustomerView from './CustomerComponent/Components/CustomerView';
import ContactUsComponent from './Component/ContactUsComponent'
import ViewIssues from './AdminComponent/Component/ViewIssues'
import UpdateCustomer from './CustomerComponent/Components/UpdateCustomer'
import LoginRole from './Component/LoginRole'

function App() {
  return (
      <div className="App">
      <Router>
        <HeaderComponent/>
        <Switch>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/viewAdvertisement" component={viewAdvertisements}/>
        <Route path = "/viewProduct/:eid" component = {ViewAdvertisementById}/>
        <Route path="/aboutUs" component={AboutComponent}/>
        <Route path="/register" exact component={createAdComponent}/>
        {/* <Route path="/add-advertise/:id" component={createAdComponent}></Route>   */}
        <Route path="/customerRegister" exact component={CustomerRegistration}/>
        <Route path="/customerLogin" component={CustomerLogin}/>
        <Route path="/adminLogin" component={AdminLogin}/>
        <Route path="/adminView" component={AdminView}/>
        <Route path="/viewCustomers" component={viewCustomer}/>
        <Route path="/customerView" component={CustomerView}/>
        <Route path="/contactUs" component={ContactUsComponent}/>
        <Route path="/viewIssues" component={ViewIssues}/>
        <Route path="/updateUser" component={UpdateCustomer}/>
        <Route path="/loginrole" component={LoginRole}/>
        
        </Switch>
      </Router>
      </div>
  );
}

export default App;