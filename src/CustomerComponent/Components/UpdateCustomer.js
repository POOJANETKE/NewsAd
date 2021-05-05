import React, {Component} from 'react'
import CustomerService from '../Services/CustomerService'

class UpdateCustomer extends Component{
    constructor(props){
        super(props)
        this.state = {
            city:'',
            mobile_number:'',
            address:'',
            password:'',
            answer:""
        }
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }
    updateUser = (e) =>{
        e.preventDefault();
        let user={city:this.state.city,mobile_number:this.state.mobile_number,password:this.state.password,address:this.state.address};
        
            CustomerService.updateUser(user)
            .then((response)=>{
                this.setState({answer:response.data})
                console.log(response.data)
                alert(response.data);
            });
            console.log(this.state.answer);
        }
    

    changeCityHandler=(e)=>{
        this.setState({city:e.target.value});
    }
    changePasswordHandler=(e)=>{
        this.setState({password:e.target.value});
    }
    changeAddressHandler=(e)=>{
        this.setState({address:e.target.value});
    }
    changeMobileHandler=(e)=>{
        this.setState({mobile_number:e.target.value});
    }

    render(){
            return (
                <center>
                <div class="container-fluid px-1 px-md-7 px-lg-1 px-xl-5 py-8 mx-auto">
                    <div class="card card0 border-0">
                        <div >
                            <div class="col-lg-7">
                                <div class="card2 card border-0 px-4 py-5">
                                    <label><h3> Update Customer Details </h3></label><br/>
                                    <div class="row px-9 mb-9">
                                    </div>
                            
                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> City : </h6></label>
                                        <input value={this.state.city} name="email" className="row px-3" placeholder="Email Address" onChange={this.changeCityHandler}/>
                                        {/* <div style={{color:"red"}}>{this.state.emailError}</div> */}
                                    </div>

                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> Contact No. </h6></label>
                                        <input value={this.state.mobile_number} name="contact" className="row px-3" placeholder="Enter Contact Number" onChange={this.changeMobileHandler}/>
                                        {/* <div style={{color:"red"}}>{this.state.contactError}</div> */}
                                    </div>

                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> Address </h6></label>
                                        <input value={this.state.address} name="city" className="row px-3" placeholder="Enter city" onChange={this.changeAddressHandler}/>
                                        {/* <div style={{color:"red"}}>{this.state.cityError}</div> */}
                                    </div>

                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> Password </h6></label>
                                        <input value={this.state.password} name="password"  className="row px-3" placeholder="Enter Password" onChange={this.changePasswordHandler}/>
                                        {/* <div style={{color:"red"}}>{this.state.passwordError}</div> */}
                                    </div>
                                   <br/>
                                    <button class="btn btn-blue text-center" onClick={this.updateUser}> Update </button>
    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="bg-info py-1">
                <div class="row px-8"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                </div>
                
                </div>
            </div>
            </center>
            )
        }
}
    export default UpdateCustomer