import React, { Component } from 'react'
import AdvertisementService from '../Service/AdvertisementService'
import '../Css/advertise.css'
class ViewAdvertisementById extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eid: this.props.match.params.eid,
            product : {}
        }
    }

    componentDidMount(){
        console.log(this.state.product.detail1);
        console.log(this.state.product.picture1);
        AdvertisementService.getProductById(this.state.eid).then( res => {
            console.log(res.data);
            this.setState({product: res.data});
        })
    }

    render() {
        return (
            <div id="main_view">
            <div class="top-right">
            <div>
                <br/>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"><u>Welcome to {this.state.product.adTitle}</u></h3>
                    <div className = "card-body">
                        <div className = "row">
                            {/* <label><b><i>Description :</i></b> </label> */}
                            <div><h5> <b><i>{ this.state.product.description }</i></b></h5></div>
                        </div><br/>
                        <div className = "row">
                            <label> <b>Address : </b> </label>
                            <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.state.product.address }</div>
                        </div>
                        <div className = "row">
                            <label> <b>Phone No. : </b> </label>
                            <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.state.product.phoneNo }</div>
                        </div>
                        <div className = "row">
                            <label><b> Amount : </b> </label>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.state.product.amount }</div>
                        </div>
                        <div className = "row">
                            <label><b> Booking Date : </b> </label>
                            <div>&nbsp;&nbsp;{ this.state.product.bookingDate }</div>
                        </div>
                        <div className = "row">
                        <label> <b>   Ad Details : </b></label>
                    </div>
                    </div>
                    
                    <div>
                        <label><b> {this.state.product.detail1} </b> </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={this.state.product.picture1} alt="Image related to detail 1" width="100px" height="100px"/><br/>
                        <label><b> {this.state.product.detail2} </b> </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={this.state.product.picture2} alt="Image related to detail 2" width="100px" height="100px"/><br/>
                        <label><b> {this.state.product.detail3} </b> </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={this.state.product.picture3} alt="Image related to detail 3" width="100px" height="100px"/><br/>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default ViewAdvertisementById
