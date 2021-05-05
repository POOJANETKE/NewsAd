import React, { Component } from 'react';
import contact from '../Component/ContactUs.jpg'
import ContactService from './Service/ContactService';

const initialState={
    email:"",
    name:"",
    phone:"",
    message:"",
    nameError:"",
    emailError:"",
    phoneError:"",
    messageError:"",
}

class ContactUsComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            contactId: this.props.match.params.contactId,
            email:initialState.email,
            name:initialState.name,
            phone:initialState.phone,
            message:initialState.message,
            nameError:initialState.nameError,
            emailError:initialState.emailError,
            phoneError:initialState.phoneError,
            messageError:initialState.messageError,
        }

        
        this.onChangeEmailHandler=this.onChangeEmailHandler.bind(this)
        this.onChangeNameHandler=this.onChangeNameHandler.bind(this)
        this.onChangePhoneHandler=this.onChangePhoneHandler.bind(this)
        this.onChangeMessageHandler=this.onChangeMessageHandler.bind(this)
        this.saveDetails=this.saveDetails.bind(this);
        this.cancel=this.cancel.bind(this);
    }

    // addIssue = (e) =>{
    //     e.preventDefault();
    //     let details={email:this.state.email,name:this.state.name,phone:this.state.phone,message:this.state.message}
    //     console.log('details=>'+ JSON.stringify(details));
    //     ContactService.createIssue(details)
    // }

    onChangeEmailHandler=(e)=>{
        this.setState({email:e.target.value});
    }

    onChangeMessageHandler=(e)=>{
        this.setState({message:e.target.value});
    }

    onChangeNameHandler=(e)=>{
        this.setState({name:e.target.value});
    }

    onChangePhoneHandler=(e)=>{
        this.setState({phone:e.target.value});
    }

    validate=()=>{
    
        let nameError="";
        let emailError="";
        let phoneError="";
        let messageError="";
        
        if(!this.state.name){
            nameError="Name is required"
        }
        if(!this.state.phone){
            phoneError="Contact must be at least 10 digit required"
        }
        else if(!/[6-9]{1}\d{9}/.test(this.state.phone)){
            phoneError = "Contact number is invalid"
        }
        if(!this.state.email){
            emailError="Email is required"
        }
        else if(!/\S+@\S+\.\S+/.test(this.state.email)){
            emailError = "Email address is invalid"
        }
        if(!this.state.message){
            messageError = "Message is required"
        }
        if(nameError || phoneError ||emailError || messageError){
            this.setState({nameError,phoneError,emailError,messageError});
            return false;
        }
        return true;
    };
    saveDetails=(e)=>{

        e.preventDefault();
        const isValid=this.validate();
        if(isValid){

            let details={email:this.state.email,name:this.state.name,phone:this.state.phone,message:this.state.message}
            console.log('Details => ' + JSON.stringify(details));
            ContactService.createIssue(details).then(res=>{
            alert(`Query for email id: ${this.state.email} is submitted successfully .... :)`);
            this.props.history.push('/contactUs');
        });
        this.setState(initialState);
    }
    else{
        alert("Enter valid details!");
    }
}
cancel=(e)=>{
    this.props.history.push('/');
}
    render() {
        return (
            <div>
                <div style={{ backgroundImage:`url(${contact})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",  }}>
                
                    <div className="row">
                        <div className="card ml-6 col-md-4 offset-md-1 offset-md-8 mt-5 mb-6 bg-white"  >
                            <h3 style={{ textAlign: 'center' }}><b><u>Contact Us</u></b></h3>
                            <h5 style={{ textAlign: 'center' }}>Please fill the following details</h5>
                            <div className="card-body">
                                <form>

                                    <div textAlign="center">
                                        <label for="inputEmail">Email address: &nbsp;</label>
                                        <input value={this.state.email} 
                                        type="email" id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"
                                        onChange={this.onChangeEmailHandler}>
                                        </input>
                                    <div style={{color:"red"}}>{this.state.emailError}</div>
                                    </div>

                                    <div>
                                        <label for="exampleInputName">Full Name: &nbsp;</label>
                                        <input value={this.state.name}
                                        type="firstName" id="inputFirstname" 
                                        aria-describedby="fullName" 
                                        placeholder="Enter your full name"
                                        onChange={this.onChangeNameHandler}>
                                        </input>
                                    <div style={{color:"red"}}>{this.state.nameError}</div>

                                    </div>

                                    <label for="exampleInputEmail1">Mobile Number: &nbsp;</label>
                                    <input value={this.state.phone}
                                    type="number" id="inputMobile" 
                                    aria-describedby="mobileNo" 
                                    placeholder="Enter your mobile number"
                                    onChange={this.onChangePhoneHandler}>
                                    </input>
                                    <div style={{color:"red"}}>{this.state.phoneError}</div>


                                    <label for="exampleInputEmail1">Message: &nbsp;</label>
                                    <input value={this.state.message}
                                    type="text" id="inputMessage" 
                                    aria-describedby="message" 
                                    placeholder="Enter your message"
                                    onChange={this.onChangeMessageHandler}>
                                    </input>
                                    <div style={{color:"red"}}>{this.state.messageError}</div>

                                    <br/><br/>
                                    <div>
                                    <p>
                                <button class="btn btn-blue" onClick={this.saveDetails}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               <button class="btn btn-primary"onClick={this.cancel.bind(this)}>Cancel</button>       
                                </p>
                                </div>
                                </form>
                            
                        </div>
                    </div>
                    
                </div>
               </div> 
            </div>





        );
    }
}

export default ContactUsComponent;