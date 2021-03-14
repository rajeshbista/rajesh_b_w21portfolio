import React from 'react';
import NoteBook from '../components/note-book/note-book.component';

const ProfessionalWork = () => (
        <div>
            <h3 className="p-3 text-left text-muted">Professional Work Summary</h3>
            <NoteBook>
                <div>
                    <h5>PROFESSIONAL EXPERIENCE:</h5>
                    <p style={{marginBottom:'2px'}} class="d-flex justify-content-between border-bottom border-dark">
                        Production/Packaging Technician
                        <span>December 2018 - September 2019</span>
                    </p>
                    <p  class="d-flex justify-content-between">
                        Apotex Inc, Toronto, Ontario
                    </p>
                    <ul>
                        <li>Achieved daily and monthly target of packaging and delivering 
                            several thousands pharmaceutical products in compliance with 
                            good manufacturing practices, policies and procedures</li>
                        <li>Supported team to accomplish the expected business 
                            results every-quarter with dedication and integrity</li>
                        <li>Worked closely with diverse and cross-functional 
                            teams during production and packaging of pharmaceutical 
                            products which resulted in target achievement within 
                            deadlines</li>
                        <li>Prevented safety incidents/accidents by effectively 
                            communicating the (potential) incidents timely and 
                            following standard work procedures</li>
                    </ul>

                    <p style={{marginBottom:'2px'}} class="d-flex justify-content-between border-bottom border-dark">
                        Security
                        <span>November 2014 to January 2016</span>
                    </p>
                    <p  class="d-flex justify-content-between">
                        Defender, Toronto, Ontario 
                        
                    </p>
                    <ul>
                        <li>Safeguarded people, information and assets several times 
                            through patrolling, monitoring CCTVs, increasing 
                            visibilities at the site</li>
                        <li>Communicated with site 
                            workers and visitors to explain the safety rules.</li>
                    </ul>

                    <p style={{marginBottom:'2px'}} class="d-flex justify-content-between border-bottom border-dark">
                        Training Officer
                        <span>January 2002 to September 2009</span>
                    </p>
                    <p  class="d-flex justify-content-between">
                        Manushi for Sustainable Development, Nepal
                        
                    </p>
                    <ul>
                        <li>Raised awareness on various health related (HIV/AIDS/STI/RH) 
                            issues amongst several thousands armed police forces through 
                            training and orientation programs</li>
                        <li>Designed and developed different 
                            training materials, training technique and reporting formats 
                            related to projects and programs</li>
                        <li>Co-ordinated and provided on-going 
                            technical inputs to more than 30 field offices and staffs to 
                            carry out field activities successfully</li>
                        <li>Successfully implemented 3 HIV/AIDS/STI/RH 
                            related projects as a Training Officer</li>
                    </ul>
                </div>
            </NoteBook>
        </div>
    );

export default ProfessionalWork;