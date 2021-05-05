import React from 'react';

import AdminLogin from "../Component/AdminLogin.jpeg";
import CustomerLogin from "../Component/CustomerLogin.jpeg";

import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import Paperbundle from "../Component/Paperbundle.jpeg";
import "../Css/LoginRole.css"
import {Card, CardImg, CardText, CardBody,CardTitle,Button,Row,Col,Container} from 'reactstrap';

  const Example = (props) => {
    return (
      
        
        <div className="pooja">
       
       
        
        <div className="update">
        <img class="img-fluid w-100 h-100"  src={Paperbundle} ></img>
        <div class="content w-100 h-55" style={{position:"absolute", bottom:"-6%",backgroundColor: "rgba(0, 0, 0,0.5)",
        color: "#f1f1f1", height:"100%" }}>
        <div style={{position:"relative", top:"0%",left:"25%"}}></div>
            
        <Container className="pooja11">


                <div style={{position:"relative", top:"100%",left:"0%"}}>
                <h3 className="welcome"><i><b>Hey, Welcome back!  Good to see you again!</b></i></h3>
                </div>


              <br></br>

              <br></br>

             <Row md={3}>
             <Col>
             <Card className="card-container11">
             <CardImg top width="100%" src={CustomerLogin} />
             <CardBody className="cardbody" style={{textalign:"center",color:"black"}}>
             <CardTitle tag="h5" text-align="center"><PeopleIcon fontSize="large"/>&nbsp;<b>Customers</b></CardTitle>
             <CardText>Continue to post and update advertisements</CardText>
             <Button color="dark"  onClick={()=>window.location.href="/customerLogin"} >Continue</Button>{' '}
             </CardBody>
             </Card>
             </Col>
      
             <Col>
             <Card className="card-container22">
             <CardImg top width="100%" src={AdminLogin} />
             <CardBody className="cardbody" style={{textalign:"center",color:"black"}} >
             <CardTitle tag="h5"><PersonIcon fontSize="large"/><b>Admin</b></CardTitle>
             <CardText>Continue to view and delete advertisements</CardText>
             <Button color="dark"  onClick={()=>window.location.href="/adminLogin"}>Continue</Button>{' '}
             </CardBody>
             </Card>
             </Col>
             </Row>
        </Container>




</div>
</div>
</div>
    );
  };
  
  export default Example;