import React, { Component } from 'react'
import LoginImage from './Login Image.png'
import axios from 'axios';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AdminService from '../Services/AdminService'; 

export class AdminLogin extends Component {


    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          errors:{}
        };
        
      }
      changeHandler=(event)=>
      {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        
      }
     
     submitHandler=(e)=>{
      e.preventDefault();
    
      if(this.validate()){

        AdminService.getAdmin(this.state.email,this.state.password).then(res =>{
      
          alert("Logged In Successfully")
          this.redirect()
      })
      alert("Logged in Successfully");
      alert("Welcome Admin :)");
     
      this.redirect()
    //if(this.validate()){
      //  alert("Successful")
    //}
     }
     }
     redirect(){
       window.location.href="/adminView"
     }
     validate(){
        let errors = {};
         let isValid= true;
    
        const { email, password } = this.state;
        if (!email) {
            isValid= false;
            errors["email"] = "Please enter your email Address.";
          
        }
        if (typeof email !== "undefined") {
              
            var pattern = new RegExp("^[A-Za-z]+@(.+)$");
            if (!pattern.test(email)) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
        if (!password ) {
            isValid= false;
            errors["password"] = "Please enter your Password.";
          
        }
    
          this.setState({
            errors: errors
          });
      
          return isValid;
     }
    

    render() {
                return( 
            <div> <br/>  
            <center>
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-6 mx-auto">
                    <div class="card card0 border-0">
                        <div class="row d-flex">
                            <div class="col-lg-6">
                                <div class="card1 pb-5">
                                    <div></div><br /><br />
                                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"><img src={LoginImage} class="image" alt="LoginImage"></img></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <form>
                                    <div class="card2 card border-0 px-4 py-5">
                                        <label><h5><i><b> Welcome back admin, Login here!!</b></i> </h5></label>
                                        <div class="row px-3"><label class="mb-1">
                                            <h5 class="mb-0 text-sm"><EmailIcon/> &nbsp;Email Id</h5>
                
                                        </label><input value={this.state.email} class="mb-4" type="email" name="email" placeholder="Enter a valid email" onChange={this.changeHandler}></input>
                                        </div>
                                        <div className="text-danger">{this.state.errors.email}</div>
                                        <div class="row px-3"><label class="mb-1">
                                            <h5 class="mb-0 text-sm"><VpnKeyIcon/>&nbsp;Password</h5>
                                        </label><input value={this.state.password} class="mb-4" type="password" name="password" placeholder="Enter password" onChange={this.changeHandler}></input>
                                        </div>
                                        <div className="text-danger">{this.state.errors.password}</div>
                                        <div></div>
                                        <div class="row mb-6 px-3"> <button type="submit" class="btn btn-blue text-center" onClick={this.submitHandler}>Login</button></div>
                                        
                                    </div>
                                </form>
                                <div></div>
                                <br />
                            </div>
                        </div>
                        <div class="bg-info py-1">
                            <div class="row px-8"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
            </div > )
    }
}

    export default AdminLogin;







