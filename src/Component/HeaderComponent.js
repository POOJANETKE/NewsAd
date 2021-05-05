import React from 'react'
import { Link } from 'react-router-dom'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import HelpIcon from '@material-ui/icons/Help';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import '../Css/HeaderComponent.css';

const HeaderComponent = () =>
{
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-info">
          <div class="container-fluid">
          <Link to="#" class="navbar-brand" ><b><MenuBookIcon fontSize="large"/>&nbsp;NEWSPAPER-ADVERTISEMENT-SYSTEM</b></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page"><HomeIcon/><b>HOME</b></Link>
        </li>
        <li class="nav-item">
          <Link to="/customerRegister" class="nav-link active" aria-current="page"><CreateIcon/><b>REGISTRATION</b></Link>
        </li><br></br>
        <li class="nav-item">
          <Link to="/aboutUs" class="nav-link active" aria-current="page"><InfoIcon/><b>ABOUTUS</b></Link>
        </li><br></br>
        <li class="nav-item">
          <Link to="/contactUs" class="nav-link active" aria-current="page"><HelpIcon/><b>CONTACT</b></Link>
         
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ul>
          <form class="d-flex">
          <Link to="/loginrole"><button class="btn btn-outline-dark"><b><HowToRegIcon/>Login</b></button></Link>
          </form>
          </div>
          </div>
          </nav>
        </div>
        
    )
}

export default HeaderComponent