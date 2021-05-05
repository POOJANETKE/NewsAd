import React, {Component} from 'react'
import AdvertisementService from '../Service/AdvertisementService';
import '../Css/advertise.css'
export class viewCustomer extends Component{
    constructor(props){
        super(props)
        this.state={
            customers:[],
            searchInput: ""

        };
        this.handleChange1 = this.handleChange1.bind(this)
    }
    componentDidMount(){
        AdvertisementService.viewCustomers().then((res)=>{
            this.setState({customers:res.data});
        });
    
  }
    compareBy(key) {
      return function (a, b) {
          if (a[key] < b[key]) {
              return -1;
          }
          if (a[key] > b[key]) {
              return 1;
          }
          return 0;
      };
  }
  sortBy(key) {

    let arrayCopy = [...this.state.customers];
    console.log(arrayCopy)
    arrayCopy.sort(this.compareBy(key));
    this.setState({ customers: arrayCopy });
}
handleChange1 = event => {
  this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
  });
};

globalSearch = () => {
  let { searchInput } = this.state;
  let originalData = [...this.state.customers];
  let filterData = originalData.filter(value => {
      return (
          value.fname.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.address.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.city.toLowerCase().includes(searchInput.toLowerCase())
      ) 


  });
  this.setState({ customers: filterData });
};

    render(){
        return(
          <div id="main_view">
            <div>
            <div className="position">
              <h2><u>Customer Details</u></h2>
        
              <label for="category">Search:</label>
                    <input name="searchInput" onChange={this.handleChange1} value={this.state.searchInput} /><br />
                    <br />
            </div>
            <center>
            <div className="tableposition">
              <table class="table table-bordered " >
                <thead class="table-dark">
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Phone No.</th>
                    <th>Address</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody class="table-light">
                  {
                    this.state.customers.map(
                      customer =>
                        <tr class="first active-row">
                         <td>{customer.fname}</td>
                          <td> {customer.lname} </td>
                          <td> {customer.emailId}</td>
                          <td> {customer.password}</td>
                          <td> {customer.gender}</td>
                          <td> {customer.mobile_number}</td>
                          <td> {customer.address}</td>
                          <td> {customer.city}</td>

                        </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
            </center>
          </div>
          </div>
        )
    }
}
export default viewCustomer