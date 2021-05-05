import React, {Component} from 'react'
import AdvertisementService from '../Service/AdvertisementService';
import '../Css/advertise.css'
export class viewIssues extends Component{
    constructor(props){
        super(props)
        this.state={
            details:[],
            searchInput: ""

        };
        this.handleChange1 = this.handleChange1.bind(this)
    }
    componentDidMount(){
        AdvertisementService.viewIssues().then((res)=>{
            this.setState({details:res.data});
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

    let arrayCopy = [...this.state.details];
    console.log(arrayCopy)
    arrayCopy.sort(this.compareBy(key));
    this.setState({ details: arrayCopy });
}
handleChange1 = event => {
  this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
  });
};

globalSearch = () => {
  let { searchInput } = this.state;
  let originalData = [...this.state.details];
  let filterData = originalData.filter(value => {
      return (
          value.fname.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.address.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.city.toLowerCase().includes(searchInput.toLowerCase())
      ) 


  });
  this.setState({ details: filterData });
};

    render(){
        return(
          <div id="main_view">
            <div>
            <div className="position">
              <h2><u>Customer Issues</u></h2>
        
              <label for="category">Search:</label>
                    <input name="searchInput" onChange={this.handleChange1} value={this.state.searchInput} /><br />
                    <br />
            </div>
            <center>
            <div className="tableposition">
              <table class="table table-bordered " >
                <thead class="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Phone No.</th>
                  </tr>
                </thead>
                <tbody class="table-light">
                  {
                    this.state.details.map(
                      detail =>
                        <tr class="first active-row">
                         <td>{detail.name}</td>
                          <td> {detail.email} </td>
                          <td> {detail.message}</td>
                          <td> {detail.phone}</td>
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
export default viewIssues