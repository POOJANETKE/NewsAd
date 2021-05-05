import React, { Component } from 'react'
import '../Css/regstyle.css'
import { Link } from 'react-router-dom'
import CustomerService from '../Services/CustomerService'
export class CustomerRegistration extends Component {

    constructor(props){
        super(props)
        this.state={
            fname:'',
            lname:'',
            emailId:'',
            password:'',
            gender:'',
            mobile_number:'',
            address:'',
            city:''
        }
        this.changeFnameHandler= this.changeFnameHandler.bind(this)
        this.changeLnameHandler= this.changeLnameHandler.bind(this)
        this.changeEmailHandler= this.changeEmailHandler.bind(this)
        this.changePasswordHandler= this.changePasswordHandler.bind(this)
        this.changeCityHandler= this.changeCityHandler.bind(this)
        this.changeAddressHandler= this.changeAddressHandler.bind(this)
        this.changeGenderHandler= this.changeGenderHandler.bind(this)
        this.changeContactHandler= this.changeContactHandler.bind(this)
    }
    addCustomer = (e) =>{
        e.preventDefault();
        let registerUser={fname:this.state.fname,lname:this.state.lname,emailId:this.state.emailId,password:this.state.password,gender:this.state.gender,mobile_number:this.state.mobile_number,address:this.state.address,city:this.state.city}
        console.log('registerUser=>'+ JSON.stringify(registerUser));
        CustomerService.createCustomer(registerUser)
    }

    changeCityHandler=(e)=>{
        this.setState({city:e.target.value});
    }
    changeFnameHandler=(e)=>{
        this.setState({fname:e.target.value});
    }
    changeLnameHandler=(e)=>{
        this.setState({lname:e.target.value});
    }
    changeGenderHandler=(e)=>{
        this.setState({gender:e.target.value});
    }
    changeCityHandler=(e)=>{
        this.setState({city:e.target.value});
    }
    changePasswordHandler=(e)=>{
        this.setState({password:e.target.value});
    }
    changeEmailHandler=(e)=>{
        this.setState({emailId:e.target.value});
    }
    changeContactHandler=(e)=>{
        this.setState({mobile_number:e.target.value});
    }
    changeAddressHandler=(e)=>{
        this.setState({address:e.target.value});
    }

    validate=()=>{
    
        let fnameError="";
        let lnameError="";
        let genderError="";
        let cityError="";
        let passwordError="";
        let emailError="";
        let contactError="";
        let addressError="";
        
        if(!this.state.fname){
            fnameError="FirstName is required"
        }
        if(!this.state.lname){
            lnameError="LastName is required"
        }
        if(!this.state.gender){
            genderError="Gender is required"
        }
        if(!this.state.password){
            passwordError="Password is required"
        }
        else if(this.state.password.length<6){
            passwordError = "Password needs to be 6 characters or more"
        }
        if(!this.state.city){
            cityError="City is required"
        }
        if(!this.state.mobile_number){
            contactError="Contact must be at least 10 digit required"
        }
        else if(!/[6-9]{1}\d{9}/.test(this.state.mobile_number)){
            contactError = "Contact number is invalid"
        }
        if(!this.state.emailId){
            emailError="Email is required"
        }
        else if(!/\S+@\S+\.\S+/.test(this.state.emailId)){
            emailError = "Email address is invalid"
        }
        if(!this.state.address){
            addressError="Address is required"
        }
        if(fnameError || lnameError || cityError || contactError ||emailError || passwordError || genderError || addressError){
            this.setState({fnameError,lnameError,genderError,passwordError,cityError,contactError,emailError,addressError});
            return false;
        }
        return true;
    };
    onSubmission=(e)=>{
        <div>{`${this.state.fname} ${this.state.lname} ${this.state.emailId} ${this.state.password} ${this.state.gender} 
              ${this.state.mobile_number} ${this.state.address} ${this.state.city} `}
        </div>
        e.preventDefault()
        const isValid=this.validate();
        if(isValid){
            <div>{this.state}</div>
            console.log(this.state)
            if(this.state){

                let registerUser={fname:this.state.fname,lname:this.state.lname,
                    gender:this.state.gender,city:this.state.city,password:this.state.password,emailId:this.state.emailId,
                    contact:this.state.contact,address:this.state.address,mobile_number:this.state.mobile_number}
                    
                CustomerService.createCustomer(registerUser);
                alert(`Registration for email Id: ${this.state.emailId} is successful. :)`);
            }
        }
    
    };
    render() {
        return (
            <center>
                <br/>
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-8 mx-auto">
                <div class="card card0 border-3">
                    <div >
                        <form onSubmit={this.onSubmission.bind(this)}>
                        <div class="col-lg-7">
                            <div class="card2 card border-0 px-4 py-5">
                                <label><h3> Registration Page </h3></label>
                                <div class="row px-9 mb-9">
                                </div>
                            
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> First Name :</h6></label>
                                    <input value={this.state.fname} 
                                    name="fname" className="row px-3" 
                                    placeholder="Enter Firstname " 
                                    onChange={this.changeFnameHandler} />
                                    <div style={{color:"red"}}>{this.state.fnameError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Last Name :</h6></label>
                                    <input value={this.state.lname} 
                                    name="lname" className="row px-3" 
                                    placeholder="Enter Lastname " 
                                    onChange={this.changeLnameHandler}/>
                                    <div style={{color:"red"}}>{this.state.lnameError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Gender :</h6></label>
                                    <input value={this.state.gender} 
                                    name="gender" className="row px-3" 
                                    placeholder="Enter Gender " 
                                    onChange={this.changeGenderHandler}/>
                                    <div style={{color:"red"}}>{this.state.genderError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Email Id : </h6></label>
                                    <input value={this.state.emailId} 
                                    name="email" className="row px-3" 
                                    placeholder="Email Address" 
                                    onChange={this.changeEmailHandler}/>
                                    <div style={{color:"red"}}>{this.state.emailError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Contact No.: </h6></label>
                                    <input value={this.state.mobile_number} 
                                    name="contact" className="row px-3" 
                                    placeholder="Enter Contact Number" 
                                    onChange={this.changeContactHandler}/>
                                    <div style={{color:"red"}}>{this.state.contactError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Address :</h6></label>
                                    <input value={this.state.address} 
                                    name="city" className="row px-3" 
                                    placeholder="Enter Full Address" 
                                    onChange={this.changeAddressHandler}/>
                                    <div style={{color:"red"}}>{this.state.addressError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm">City :</h6></label>
                                    <input value={this.state.city} 
                                    name="city" className="row px-3" 
                                    placeholder="Enter City" 
                                    onChange={this.changeCityHandler}/>
                                    <div style={{color:"red"}}>{this.state.cityError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Password :</h6></label>
                                    <input value={this.state.password} 
                                    name="password"  className="row px-3"  
                                    type="password"
                                    placeholder="Enter Password" 
                                    onChange={this.changePasswordHandler}/>
                                    <div style={{color:"red"}}>{this.state.passwordError}</div>
                                </div>
                               
                                <button class="btn btn-blue text-center" Link to="/customerLogin"> Register </button>
                                <div class="row mb-4 px-3"> <small class="font-weight-bold">Already have an account? <Link class="text-danger " to="/customerLogin">Login</Link></small> </div>
                            </div>
                        </div>
                        </form>
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
export default CustomerRegistration;