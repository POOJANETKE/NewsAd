import React from 'react'
import Background from './NewsPaper.jpg'
import {Link} from 'react-router-dom'
import './HomeComponent.css'

var sectionStyle = {
  width: '100%',
  height: '650px',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover' ,
  backgroundPosition: 'center'
  
};

function HomeComponent() {
    return (
        <div>
        <section style={ sectionStyle }>
        </section>
        </div>
    )
}

export default HomeComponent