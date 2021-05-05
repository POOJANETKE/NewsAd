import React,{ Component } from 'react'
import '../Css/advert.css'
 import background from './F.jpg'
import post from './Post.jpg'
import update1 from './update1.jpg'

var sectionStyle = {
    width: '100%',
  height: '650px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover' ,
    backgroundPosition: 'center'
    
  };
export class CustomerView extends Component {

    
    render()
    {
        return (
            
          <div>
             <section style={ sectionStyle }>  
             
          <br/><br/>
          <h2>Welcome! CUSTOMER</h2>
          <div className="row">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="flip-card">
          <div>
          <h3>Post Advertisement</h3>
          </div>
          <div class="flip-card-inner">
          <div class="flip-card-front">
               <img  src={post}/>
          </div>
          <div class="flip-card-back">
              <br></br>
              <br></br>
           
              <br></br>
              <a  href="/register"><button  class="btn btn-danger">POST</button></a>
          </div>
          </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="flip-card">
          <div>
          <h3>Update Profile</h3>
          </div>
          <div class="flip-card-inner">
          <div class="flip-card-front">
               <img  src={update1}/>
          </div>
          <div class="flip-card-back">
              <br></br>
              <br></br>
             
              <br></br>
              <a href="/updateUser"><button  class="btn btn-danger">UPDATE</button></a>
          </div>
          </div>
          </div>
          </div>
          </section>
      </div>
           
            
        )
    }
    
}

export default CustomerView