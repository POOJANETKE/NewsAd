import React,{ Component } from 'react'
import '../Css/menu1.css'
import customers from './customers.png'
import Advert from './Advert.jpg'
import Queries from './Queries.jpg'
import background from './F.jpg'
var sectionStyle = {
    width: '100%',
  height: '650px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover' ,
    backgroundPosition: 'center'
    
  };
export class AdminView extends Component {
    render()
    {
        return (
            
            <div>
                 <section style={ sectionStyle }>  
              <h1>WELCOME! ADMIN</h1>
                <div className="row">
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="flip-card">
                <div>
                <h3>Customers</h3>
                </div>
                <div class="flip-card-inner">
                <div class="flip-card-front">
                     <img  src={customers}/>
                </div>
                <div class="flip-card-back">
                    <br></br>
                    <br></br>
                    
                    <br></br>
                    <a href="/viewCustomers"><button  class="btn btn-danger">View</button></a>
                </div>
                </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                <div class="flip-card">
                <div>
                <h3>Queries</h3>
                </div>
                <div class="flip-card-inner">
                <div class="flip-card-front">
                     <img  src={Queries}/>
                </div>
                <div class="flip-card-back">
                    <br></br>
                    <br></br>
                    
                    <br></br>
                    <a href="/viewIssues"><button  class="btn btn-danger">View</button></a>
                </div>
                </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="flip-card">
                <div>
                <h3>Advertisements</h3>
                </div>
                <div class="flip-card-inner">
                <div class="flip-card-front">
                     <img  src={Advert}/>
                </div>
                <div class="flip-card-back">
                    <br></br>
                    <br></br>
                   
                    <br></br>
                    <a href="/viewAdvertisement"><button  class="btn btn-danger">View</button></a>
                </div>
                </div>
                </div>
                </div>

                
            
            </section>
            </div>
            
        )
    }
    
}

export default AdminView