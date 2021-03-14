import React from 'react';
import {Tabs, Tab, Image} from 'react-bootstrap';

import NoteBook from '../components/note-book/note-book.component';
import signature from '../assets/signature.png';

import logo from '../logo.jpg';
import './screens.styles.css';

const PersonalData = () => {
    return (
        <div>
            <h3 className="p-3 text-left text-muted">Personal Information</h3>
            <Tabs defaultActiveKey="about" id="tabid" className="tab-container">
                
                {/* ABOUT ME */}
                
                <Tab className="" eventKey="about" title="About Me">
                    <h5 className=""><Image src={logo} width="30px" height="30px" roundedCircle/> About Me</h5>
                    <NoteBook>
                        <p>
                            My name is Rajesh Bista, a final year computer programmer 
                            and analyst student at George Brown College (graduation -April 2021). 
                            I am excited to explore the new career as a software developer 
                            and ready to accept new challenges at work.
                        </p>
                        <p>
                            I moved to Canada 7 years ago and now, I live in Toronto. 
                            I have completed master’s degree in social science from Nepal. 
                            I have worked more than 5 years in social sector in Nepal and 
                            more than 3 years in different places in Canada. That have provided 
                            me an exposure to certain organizational culture, teamwork and 
                            working under pressure. 
                        </p>
                        <p>
                            Troubleshooting of basic computer hardware and network problems 
                            has always been my favourite. The reasons behind choosing a computer
                            programming course is my passion towards the computer along with 
                            the better opportunities and challenges.
                        </p>
                        <p>
                            I have acquired theoretical concepts and practical skills 
                            in various programming languages while in college. 
                            I have also successfully completed few individual and 
                            group projects in web development with HTML, CSS, 
                            Javascript, PHP, react, nodeJS and ASP.Net, and application 
                            development with Python, Java and C# as a part of my college 
                            assignment. All these involvement and participation as 
                            employee and student have helped me develop my interpersonal 
                            skills, as well as manage issues and conflicts. 
                            I am used to working long hours independently or in team 
                            environments to achieve set goals. My classmates and 
                            colleagues appreciate my ability to explain things in 
                            simple terms. 
                        </p>
                    </NoteBook>
                </Tab>

                {/* PHILOOSOPHY */}
                <Tab eventKey="phylosophy" title="Philosophy">
                <h5>Philosophy</h5>
                <NoteBook>
                    <p>
                        Learning is a continuous process, so it is never too late to 
                        start learning. However, effective learning takes time, effort,
                        perseverance and different approaches.
                    </p>

                    <p>
                        I am aware that programming is not easy to learn. 
                        However, I believe that if I keep learning and practicing 
                        intelligently, I will eventually get a good grasp of it. 
                        New trends, new technologies and new languages are constantly 
                        evolving. I keep myself ready to learn new things in order to 
                        update my knowledge and coding skills.    
                    </p>
                    
                </NoteBook>
                </Tab>
                <Tab eventKey="resume" title="Resume">
                <h5>Resume</h5>
                    <NoteBook >
                        <div style={{minHeight:'900px'}}>
                        <div className="text-center" style={{listStyle:'none'}}>
                            <h5>Rajesh Bista</h5>
                            <li>714-240 Wellesley Street East</li>
                            <li>Toronto, Ontario, M4X1G5</li>
                            <li>bistarajesh@outlook.com</li>
                            <li>647 761 9491</li>
                        </div><hr />
                        <div>
                            <h5>HIGHLIGHTS OF QUALIFICATIONS:</h5>
                            <ul className="text-justify">
                                <li>A current student of Computer Programming and Analysts at 
                                    George Brown College (final semester)</li>
                                <li>Over 7 years of experience as a Public Health Training 
                                    Officer (HIV/AIDS) with a year experience as Production/Packaging
                                    Technician in pharmaceutical company</li>
                                <li>Acquiring hands-on experience in all aspects of computer 
                                    programming including computer hardware and networking 
                                    through practical lab sessions, project assignments and 
                                    academic courses</li>
                                <li>Effective at combining creativity and problem-solving skills 
                                    during the project assignments and lab exercises </li>
                                <li>Flexible, calm and able to work independently or in a team 
                                    environment under pressure meeting organizational standards 
                                    and objectives</li>
                                <li>Flexible, calm and able to work independently or in a team 
                                    environment under pressure meeting organizational standards 
                                    and objectives</li>
                            </ul>
                            <h5>TECHNICAL SKILLS:</h5>
                            <ul className="text-justify">
                                <li>Proficient skill at HTML5, CSS, Javascript, C#, MySQL, mongodb</li>
                                <li>Proficient in Java, Python, PHP, ReactJS, Express, NodeJs, Android, System Analysis Design 
                                    including Agile method</li>
                                <li>Knowledge of computer networking and hardware including 
                                    MS Office applications</li>
                            </ul>
                            <h5>EDUCATION:</h5>
                            <div >
                                <p style={{marginBottom:'2px'}} class="d-flex justify-content-between border-bottom border-dark">
                                    Computer Programming Analyst
                                    <span>Expected Graduation April 2021</span>
                                </p>
                                <p  class="d-flex justify-content-between">
                                    George Brown College, Toronto
                                    <span>Dean’s List (Semester 1,2,3,4,5)</span>
                                </p>
                            </div>
                            <p className="font-italic font-weight-bold">Individual class projects/assignments accomplished:</p>
                            <ul>
                                <li>Designed and developed library management system using python-Tkinter and MySQL</li>
                                <li>Designed and developed weather application using reactJS, nodeJS and mongodb</li>
                                <li>Designed and developed chat application using sing socket.io and mongodb</li>
                                <li>Designed and developed two static web pages using HTML and CSS</li>
                                <li>Designed and developed an accounting firm application using both 
                                    flat file data storage and MySQL database in PHP script</li>
                                <li>Developed console-based (object oriented solution) library 
                                    book tracking application using Java language</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-italic font-weight-bold">Group class projects/assignments accomplished:</p>
                            <ul>
                                <li>Designed and developed web-based online workspace rental app using react, redux, node
                                    firebase and mongodb (capstone project-on progress)</li>
                                <li>Developed client management system using spring boot, ThymeLeaf, H2 database</li>
                                <li>Designed and developed find gym application using android and MySQL</li>
                                <li>Developed an Airline Reservation system with a complete graphical 
                                    user interface using C# language</li>
                                <li>Developed an Airline Reservation system with a complete graphical 
                                    user interface using C# language</li>
                                <li>Developed a chess club score board application using Java language</li>
                                <li>Prepared project document including web-based prototypes for a clinic to create clinical management 
                                    system software using object oriented/unified process methodology 
                                    under system analysis and design program</li>
                            </ul>
                        </div>
                        </div>
                    </NoteBook>
                        
                    <NoteBook >
                        <div style={{minHeight:'900px'}}>
                    
                        <div>
                            <p style={{marginBottom:'2px'}} class="d-flex justify-content-between border-bottom border-dark">
                                Pharmaceutical Manufacturing Technology
                                <span>2017</span>
                            </p>
                            <p  class="d-flex justify-content-between ">
                                Toronto Institute of Pharmaceutical Tech, Toronto
                                <span>Distinction</span>
                            </p>
                        </div>

                        <div >
                            <p style={{marginBottom:'2px'}} class="d-flex justify-content-between border-bottom border-dark">
                                Business Management-Post Graduate
                                <span>2012</span>
                            </p>
                            <p  class="d-flex justify-content-between">
                                London College of Business Management, London
                                
                            </p>
                        </div>
                        <div >
                            <p style={{marginBottom:'2px'}} class="d-flex justify-content-between border-bottom border-dark">
                                Masters Degree - Sociology
                                <span>2004</span>
                            </p>
                            <p  class="d-flex justify-content-between">
                                Tribhuvan University, Tri-Chandra Campus , Nepal

                            </p>
                        </div>

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

                        </div>
                    </NoteBook>
                    
                </Tab>
                <Tab eventKey="coverletter" title="Cover Letter">
                <h5>Cover Letter</h5>
                    <NoteBook>

                        <div style={{listStyle:'none'}}>
                            <li>Rajesh Bista</li>
                            <li>714-240 Wellesley Street East</li>
                            <li>Toronto, Ontario, M4X1G5</li>
                            <li>647 761 9491</li>
                            <li>bistarajesh@outlook.com</li>
                        </div><br />
                            <p>10 March 2021</p>
                        <div style={{listStyle:'none'}}>
                            <li>Royal Bank of Canada (RBC)</li>
                            <li>111 Dundas Street East</li>
                            <li>Toronto, Ontario, M5X1G3</li>
                        </div><br />
                            <p>Dear Hiring Manager</p>
                        <div>
                            <p>
                                In response to your  job posting  on 10 March 2021 in 
                                your organization website  www.rbc.com, 
                                I would like to apply for the position of Software Developer, 
                                summer student 2021. I am presently in final semester of Computer 
                                Programming Analyst course at George Brown College and 
                                I will be graduating in this April 2021. The program I am 
                                enrolled in provides extensive theoretical knowledge and practical 
                                experiences in varieties of computer programming languages 
                                including system analysis and design, computer networking and 
                                hardware. I believe that all these knowledge combined with the 
                                practical sessions have prepared me as a competitive applicant 
                                for the posted job.
                            </p>
                        </div>
                        <div>
                            <p>
                                I have acquired hands-on programming skills and experiences 
                                in HTML, CSS, Javascript, C#, Java, PHP, react, nodejs, angular,
                                anodroid and ios mobile app, data structure and algorithms and 
                                agile methods for software development from the class projects, 
                                assignments and regular lab exercises. Throughout my practical 
                                and academic courses at college, I consistently displayed 
                                both an aptitude and an enthusiasm for the task at hand. 
                                I offered a consistent track record of achieving college 
                                Dean list (GPA 3.5 or higher) in all completed semesters. 
                                I am confident that the creativity and problem-solving 
                                skills in addition to theoretical understanding of programming
                                learned from college lectures, projects and assignments will 
                                help me to start my career as a software developer co-op 
                                position in your esteemed organization.
                            </p>
                        </div>
                        <div>
                            <p>
                                Thank you for your time and consideration to review my resume. 
                                I look forward to discussing any aspect of my 
                                potential for making a significant contribution at RBC. 
                                I can be reached at 647-761-9491 Monday through Friday daytime, 
                                and bistarajesh@outlook.com.
                            </p>
                        </div>
                            <p>Respectfully yours</p>
                            <img src={signature} width="100px" height="70px" alt=""/>
                            <p>Rajesh Bista</p>
                    </NoteBook>
                </Tab>
            </Tabs>
        </div>
    )
};

export default PersonalData;