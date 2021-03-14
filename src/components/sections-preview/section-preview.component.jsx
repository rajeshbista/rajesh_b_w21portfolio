import React, { Component } from 'react';

import SectionSlider from '../slider/slider.component';


class PortfolioSectionPreview extends Component {
    constructor(props){
        super(props)
        this.state = {
            sections:[{
                id:1,
                title:'Personal Data',
                description:"This section provides the information about my 'Bio', 'Philosophy', 'Resume' and 'Cover Letter Template'",
                linkUrl:"personaldata"
            },
            {
                id:2,
                title:'Academic Credentials',
                description:"Click here to view some of my academic credentials",
                linkUrl:"credential"
            },
            {
                id:3,
                title:'Academic Work Experience',
                description:"Click here to view the samples of some of my group and individual projects done while at college. Also, this section showcases the progress and overview of the capstone project, which will complete in April 2021. ",
                linkUrl:"academicwork"
            },
            {
                id:4,
                title:'Professional Summary',
                description:"This section only provides the list of my work experiences. The detailed resume is available under 'personal data' section.",
                linkUrl:"professionalwork"
            },
        ]
        }
    }
    

  render () {
    const settings = {
        dots: true,
        infinite: false,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 2,
        className:'slides',
        arrows:true
      };
    const {sections}=this.state
    return (
        <div>
            <SectionSlider sections={sections} {...settings} />
        </div>
    )
  }
}

export default PortfolioSectionPreview 
