import React, {Component} from 'react'
import AdvertisementService from '../Service/AdvertisementService';
import '../Css/advertise.css'
export class viewAdvertisements extends Component{
    constructor(props){
        super(props)
        this.state={
            products:[],
            searchInput: ""

        };
        this.handleChange1 = this.handleChange1.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }
    componentDidMount(){
        AdvertisementService.viewAdvertisements().then((res)=>{
            this.setState({products:res.data});
        });
    }
    deleteEmployee(eid) {
      AdvertisementService.deleteAdvertisement(eid).then(res => {
          this.setState({ products: this.state.products.filter(product => product.eid !== eid) });
      });
  }

    viewProduct(eid){
      this.props.history.push(`/viewProduct/${eid}`);
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

    let arrayCopy = [...this.state.products];
    console.log(arrayCopy)
    arrayCopy.sort(this.compareBy(key));
    this.setState({ employees: arrayCopy });
}
handleChange1 = event => {
  this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
  });
};

globalSearch = () => {
  let { searchInput } = this.state;
  let originalData = [...this.state.products];
  let filterData = originalData.filter(value => {
      return (
          value.adTitle.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.adType.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.address.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.companyName.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.amount
              .toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase())
      ) 


  });
  this.setState({ products: filterData });
};

    render(){
        return(
          <div id="main_view">
            <div>
            <div className="position">
              <h2><u>Advertisement Details</u></h2>
        
        
              <label for="category">Search:</label>
                    <input name="searchInput" onChange={this.handleChange1} value={this.state.searchInput} /><br />
                    <br />
            </div>
            <center>
            <div className="tableposition">
              <table class="table table-bordered " >
                <thead class="table-dark">
                  <tr>
                    <th>AdTitle</th>
                    <th>AdType</th>
                    <th>Description</th>
                    <th>BookingDt.</th>
                    <th>ExpiryDt</th>
                    <th>Address</th>
                    <th>PhoneNo.</th>
                    <th>Company</th>
                    <th >Email</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody class="table-light">
                  {
                    this.state.products.map(
                      product =>
                        <tr class="first active-row">
                         <td>{product.adTitle}</td>
                          <td> {product.adType} </td>
                          <td> {product.description}</td>
                          <td> {product.bookingDate}</td>
                          <td> {product.expiryDate}</td>
                          <td> {product.address}</td>
                          <td> {product.phoneNo}</td>
                          <td> {product.companyName}</td>
                          <td> {product.email}</td>
                          <td> {product.amount}</td>
                          <td>
                          <button type="button" class="btn btn-info " onClick={ () => this.viewProduct(product.eid)}>Advertise</button>
                          <button type="button" class="btn btn-danger " onClick={() => this.deleteEmployee(product.eid)} >Delete</button> 
                        </td>
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
export default viewAdvertisements