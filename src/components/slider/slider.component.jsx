import React from 'react';
import { useHistory } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './slider.styles.css';



const SectionSlider = ({sections,...settings})=>{

    let history = useHistory();
    return (
        
        <Slider {...settings} > 
            {sections.map((section)=>{
                return(
                    <div className='card-frame'>
                        <div className= 'card-content' onClick={()=>(
                            history.push(`${section.linkUrl}`))}>
                            <h3>{section.title}</h3>
                            <p className="card-description">{section.description}</p>
                        </div>
                    </div>
                    
                )
            })} 
        </Slider> 
    )
}

export default SectionSlider;