import React, { Component } from 'react';
import background from '../Image/news1.jpeg';
import AdvertisementService from '../Service/AdvertisementService';


const initialState={
    adTitle:"",
    adType:"",
    description:"",
    bookingDate:"",
    expiryDate:"",
    address:"",
    phoneNo:"",
    companyName:"",
    email:"",
    amount:"",
    detail1:"",
    picture1:"",
    detail2:"",
    picture2:"",
    detail3:"",
    picture3:"",
    adTitleError:"",
    adTypeError:"",
    descriptionError:"",
    bookingDateError:"",
    expiryDateError:"",
    addressError:"",
    phoneNoError:"",
    companyNameError:"",
    emailError:"",
    amountError:"",
   
}

class CreateAdComponent extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            eid: this.props.match.params.eid,
            adTitle:initialState.adTitle,
            adType:initialState.adType,
            description:initialState.description,
            bookingDate:initialState.bookingDate,
            expiryDate:initialState.expiryDate,
            address:initialState.address,
            phoneNo:initialState.phoneNo,
            companyName:initialState.companyName,
            email:initialState.email,
            amount:initialState.amount,
            detail1:initialState.detail1,
            picture1:initialState.picture1,
            detail2:initialState.detail2,
            picture2:initialState.picture2,
            detail3:initialState.detail3,
            picture3:initialState.picture3,
            adTitleError:initialState.adTitleError,
            adTypeError:initialState.adTypeError,
            descriptionError:initialState.descriptionError,
            bookingDateError:initialState.bookingDateError,
            expiryDateError:initialState.expiryDateError,
            addressError:initialState.addressError,
            phoneNoError:initialState.phoneNoError,
            companyNameError:initialState.companyNameError,
            emailError:initialState.emailError,
            amountError:initialState.amountError,
        }

        this.onChangeAdTitle=this.onChangeAdTitle.bind(this);
        this.onChangeAdType=this.onChangeAdType.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeBookingDate=this.onChangeBookingDate.bind(this);
        this.onChangeExpiryDate=this.onChangeExpiryDate.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onChangePhoneNo=this.onChangePhoneNo.bind(this);
        this.onChangecompanyName=this.onChangecompanyName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeAmount=this.onChangeAmount.bind(this);
        this.onChangeDetail1=this.onChangeDetail1.bind(this);
        this.onChangeDetail2=this.onChangeDetail2.bind(this);
        this.onChangeDetail3=this.onChangeDetail3.bind(this);
        this.onChangePicture1=this.onChangePicture1.bind(this);
        this.onChangePicture2=this.onChangePicture2.bind(this);
        this.onChangePicture3=this.onChangePicture3.bind(this);
        this.saveAdvertise=this.saveAdvertise.bind(this);
        this.cancel=this.cancel.bind(this);
    }
   
    onChangeAdTitle=(e)=>{
        this.setState({adTitle:e.target.value});
    }

    onChangeAdType=(e)=>{
        this.setState({adType:e.target.value});
    }
        
    onChangeDescription=(e)=>{
        this.setState({description:e.target.value})
    }

    onChangeBookingDate=(e)=>{
        this.setState({bookingDate:e.target.value})
    }

    onChangeExpiryDate=(e)=>{
        this.setState({expiryDate:e.target.value})
    }

    onChangeAddress=(e)=>{
        this.setState({address:e.target.value})
    }

    onChangePhoneNo=(e)=>{
        this.setState({phoneNo:e.target.value})
    }

    onChangecompanyName=(e)=>{
        this.setState({companyName:e.target.value})
    }

    onChangeEmail=(e)=>{
        this.setState({email:e.target.value})
    }

    onChangeAmount=(e)=>{
        this.setState({amount:e.target.value})
    }
    onChangeDetail1=(e)=>{
        this.setState({detail1:e.target.value})
    }
    onChangeDetail2=(e)=>{
        this.setState({detail2:e.target.value})
    }
    onChangeDetail3=(e)=>{
        this.setState({detail3:e.target.value})
    }
    onChangePicture1=(e)=>{
        this.setState({picture1:e.target.value})
    }
    onChangePicture2=(e)=>{
        this.setState({picture2:e.target.value})
    }
    onChangePicture3=(e)=>{
        this.setState({picture3:e.target.value})
    }

    validate = () => {
        let adTitleError = "";
        let descriptionError = "";
        let addressError = "";
        let phoneNoError = "";
        let companyNameError = "";
        let emailError = "";
        let amountError = "";
        

        if (!this.state.adTitle || this.state.adTitle.length < 3) {
            adTitleError = "Advertise title length should be greater than 2"
        }
        else if (!this.state.adTitle.match(/[A-Za-z]+[ ]*[a-zA-z]*/g)) {
            adTitleError = "Please use alphabet combination"
        }

        if (!this.state.description || this.state.description < 3) {
            descriptionError = "Description length should be greater than 2"
        }
        else if (!this.state.description.match(/[A-Za-z]+[ ]*[a-zA-z]*/g)) {
            descriptionError = "Please Enter Valid Description "
        }

        if (this.state.address < 3) {
            addressError = "Address length should be greater than 2"
        }

        else if (!this.state.address || !this.state.address.match(/[A-Za-z]+/g)) {
            addressError = "Please Enter Valid Address"
        }

        if (!this.state.phoneNo || !this.state.phoneNo.match(/^[0-9]+$/g) || this.state.phoneNo.length < 10) {
            phoneNoError = "Invalid phone number"
        }

        if (!this.state.companyName || !this.state.companyName.match(/[A-Za-z]+[ ]?[A-za-z]*[ ]?[A-za-z]*$/g)) {
            companyNameError = "Please Enter Valid Company-Name"
        }

        if (!this.state.email || !this.state.email.match(/[A-Za-z]+[0-9]*@[a-zA-Z]+.[a-zA-A]+/g)) {
            emailError = "Please Enter Valid Email-ID"
        }

        if (!this.state.amount || !this.state.amount.match(/^[0-9]+$/g)) {
            amountError = "Invalid amount"
        }
        else if(this.state.amount.length > 4 && this.state.amount.length > 9){
            amountError = "Invalid amount"
        }

        
        if (adTitleError || descriptionError  || addressError || phoneNoError|| companyNameError  || emailError || amountError ) {
            this.setState({ adTitleError,descriptionError,addressError,phoneNoError,companyNameError,emailError,amountError })
            return false
        }
        return true
    }


    saveAdvertise = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {

                let advertise = {
                    adTitle:this.state.adTitle,
                    adType:this.state.adType,
                    description:this.state.description,
                    bookingDate:this.state.bookingDate,
                    expiryDate:this.state.expiryDate,
                    address:this.state.address,
                    phoneNo:this.state.phoneNo,
                    companyName:this.state.companyName,
                    email:this.state.email,
                    amount:this.state.amount,
                    detail1:this.state.detail1,
                    detail2:this.state.detail2,
                    detail3:this.state.detail3,
                    picture1:this.state.picture1,
                    picture2:this.state.picture2,
                    picture3:this.state.picture3
                };
                console.log('advertise => ' + JSON.stringify(advertise));
                AdvertisementService.addAdvertise(advertise).then(res => {
                    alert("Inserted Data Successfully!");
                    //this.props.history.push('/customerView');
                    this.props.history.push('/addDetails');
                });
                this.setState(initialState);
            } 

            else{
                alert("Enter valid details!");
            }
    }

    cancel=(e)=>{
        //this.props.history.push('/customerView');
        this.props.history.push('/addDetails');
    }
    render() {
        return (
            <center>
                <br/>
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-8 mx-auto">
                <div class="card card0 border-3">
                    <div >
                        <form>
                        <div class="col-lg-7">
                            <div class="card2 card border-0 px-4 py-5">
                                <label><h3> Post Advertisement </h3></label>
                                <div class="row px-9 mb-9">
                                </div>
                            
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Advertisement Title :</h6></label>
                                    <input value={this.state.adTitle} 
                                    name="fname" className="row px-3" 
                                    placeholder="Enter Advertisement Title " 
                                    onChange={this.onChangeAdTitle} />
                                    <div style={{color:"red"}}>{this.state.adTitleError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Advertisement Type :</h6></label>
                                    <select className="row px-3" value={this.state.value}  style={{marginLeft:"10px"}} onChange={this.onChangeAdType}>
                                            <option value=""></option>
                                            <option value="Real Estate">Real Estate</option>
                                            <option value="Jobs" >Jobs</option>
                                            <option value="Service">Service</option>
                                            <option value="Matrimonial" >Matrimonial</option>
                                            <option value="For Sale">For Sale</option>
                                            <option value="Travels" >Travels</option>
                                            <option value="Education">Education</option>
                                            <option value="Automobiles" >Automobiles</option>
                                            <option value="Smartphone">Phone</option>
                                        </select>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Description :</h6></label>
                                    <input value={this.state.description} 
                                    name="gender" className="row px-3" 
                                    placeholder="Enter Description " 
                                    onChange={this.onChangeDescription}/>
                                    <div style={{color:"red"}}>{this.state.descriptionError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Booking Date :</h6></label>
                                    <input value={this.state.bookingDate} 
                                    name="gender" className="row px-3" 
                                    placeholder="Enter Booking Date " 
                                    onChange={this.onChangeBookingDate}/>
                                    <div style={{color:"red"}}>{this.state.bookingDateError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Expiry Date :</h6></label>
                                    <input value={this.state.expiryDate} 
                                    name="gender" className="row px-3" 
                                    placeholder="Enter Expiry Date " 
                                    onChange={this.onChangeExpiryDate}/>
                                    <div style={{color:"red"}}>{this.state.expiryDateError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> City :</h6></label>
                                    <input value={this.state.address} 
                                    name="city" className="row px-3" 
                                    placeholder="Enter City" 
                                    onChange={this.onChangeAddress}/>
                                    <div style={{color:"red"}}>{this.state.addressError}</div>
                                </div>
                                
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Contact No.: </h6></label>
                                    <input value={this.state.phoneNo} 
                                    name="contact" className="row px-3" 
                                    placeholder="Enter Contact Number" 
                                    onChange={this.onChangePhoneNo}/>
                                    <div style={{color:"red"}}>{this.state.phoneNoError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Company Name :</h6></label>
                                    <input value={this.state.companyName} 
                                    name="password"  className="row px-3" 
                                    placeholder="Enter Company Name" 
                                    onChange={this.onChangecompanyName}/>
                                    <div style={{color:"red"}}>{this.state.companyNameError}</div>
                                </div>
                               
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm">Email :</h6></label>
                                    <input value={this.state.email} 
                                    name="city" className="row px-3" 
                                    placeholder="Enter Email" 
                                    onChange={this.onChangeEmail}/>
                                    <div style={{color:"red"}}>{this.state.emailError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Amount :</h6></label>
                                    <input value={this.state.amount} 
                                    name="password"  className="row px-3" 
                                    placeholder="Enter Amount" 
                                    onChange={this.onChangeAmount}/>
                                    <div style={{color:"red"}}>{this.state.amountError}</div>
                                </div>
                                <div className="row px-3">
                                <label class="mb-1"><h6 class="mb-0 text-sm"> Detail 1 :</h6></label>
                                    <input value={this.state.detail1} 
                                    name="detail1"  className="row px-3" 
                                    placeholder="Enter Detail 1" 
                                    onChange={this.onChangeDetail1}/>
                                </div>
                                <div className="row px-3">
                                <label class="mb-1"><h6 class="mb-0 text-sm"> Picture 1 :</h6></label>
                                    <input value={this.state.picture1} 
                                    name="picture1"  className="row px-3" 
                                    placeholder="Enter Picture 1" 
                                    onChange={this.onChangePicture1}/>
                                </div>
                                <div className="row px-3">
                                <label class="mb-1"><h6 class="mb-0 text-sm"> Detail 2 :</h6></label>
                                    <input value={this.state.detail2} 
                                    name="detail2"  className="row px-3" 
                                    placeholder="Enter Detail 2" 
                                    onChange={this.onChangeDetail2}/>
                                </div>
                                <div className="row px-3">
                                <label class="mb-1"><h6 class="mb-0 text-sm"> Picture 2 :</h6></label>
                                    <input value={this.state.picture2} 
                                    name="picture2"  className="row px-3" 
                                    placeholder="Enter Picture 2" 
                                    onChange={this.onChangePicture2}/>
                                </div>
                                <div className="row px-3">
                                <label class="mb-1"><h6 class="mb-0 text-sm"> Detail 3 :</h6></label>
                                    <input value={this.state.detail3} 
                                    name="detail3"  className="row px-3" 
                                    placeholder="Enter Detail 3" 
                                    onChange={this.onChangeDetail3}/>
                                </div>
                                <div className="row px-3">
                                <label class="mb-1"><h6 class="mb-0 text-sm"> Picture 3 :</h6></label>
                                    <input value={this.state.picture3} 
                                    name="picture3"  className="row px-3" 
                                    placeholder="Enter Picture 3" 
                                    onChange={this.onChangePicture3}/>
                                </div>
                                <p>
                                <button class="btn btn-blue" onClick={this.saveAdvertise}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               <button class="btn btn-primary"onClick={this.cancel.bind(this)}>Cancel</button>       
                                </p>
                                                          
                            </div>
                            
                        </div>
                        </form>
                    </div>
                    
                </div>
                <div class="bg-black py-1">
            <div class="row px-8"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
            </div>
            
            </div>
        </div>
        </center>
        )
    }

}

export default CreateAdComponent;