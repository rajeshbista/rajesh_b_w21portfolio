import React from 'react';

import NoteBook from '../components/note-book/note-book.component';
// groups
import capThumb from '../assets/group-projects/cap-thumb.png';
import gymThumb from '../assets/group-projects/gym-thumb.png';
import wadThumb from '../assets/group-projects/wad-thumb.png';
import agileThumb from '../assets/group-projects/agile-thumb.png';

// individual
import libraryThumb from '../assets/individual-projects/library-thumb.png';
import weatherThumb from '../assets/individual-projects/weather-thumb.png';
import chatThumb from '../assets/individual-projects/socket-chat-thumb.png';

import './screens.styles.css';

const AcademicWork = () => {
    
    return(

        <div>
            <h3 className="p-3 text-left text-muted">Academic Work Experiences</h3>
            {/* THUMBNAIL VIEW */}
            <NoteBook>
                <div id="scroll-group"style={{minHeight:'900px'}}>
                    <div className="d-flex justify-content-between">
                        <h3 id="scrollup-group">Group Projects</h3>
                        <a href="#scroll-individual"><p>Individual Projects</p></a>
                    </div>
                    <div className="d-flex m-auto p-3 justify-content-between flex-wrap">
                        <div className="project-box bg-success">
                            <h5 className="text-white bg-success text-center">Capstone Poject</h5>
                            <a href="#capston"><img className="image-layout" src={capThumb} alt="" /></a>
                        </div>

                        <div className="project-box bg-primary">
                        <h5 className="text-white bg-primary text-center">Gym Application</h5>
                            <a href="#gym"><img className="image-layout" src={gymThumb} alt="" /></a>
                        </div>
                        <div className="project-box bg-danger">
                            <h5 className="text-white bg-danger text-center">Client Management</h5>
                            <a href="#usermgt"><img className="image-layout" src={wadThumb} alt="" /></a>
                        </div>
                        <div className="project-box bg-info">
                            <h5 className="text-white bg-info text-center">Online System</h5>
                            <a href="#agile"><img className="image-layout" src={agileThumb} alt="" /></a>
                        </div>
                    </div>
                </div>
            </NoteBook>

            <NoteBook>
                <div style={{minHeight:'900px'}}>
                    <div id="scroll-individual" className="d-flex justify-content-between">
                        <h3 id="scrollup-individual">Individual Projects</h3>
                        <a href="#scroll-group"><p>Group Projects</p></a>
                    </div>
                    <div className="d-flex m-auto p-3 justify-content-between flex-wrap">
                        <div className="project-box bg-dark">
                            <h5 className="text-white bg-dark text-center">Library Mgt System</h5>
                            <a href="#library"><img className="image-layout" src={libraryThumb} alt="" /></a>
                        </div>

                        <div className="project-box bg-info">
                            <h5 className="text-white bg-info text-center">Weather App</h5>
                            <a href="#weather"><img className="image-layout" src={weatherThumb} alt="" /></a>
                        </div>
                        <div className="project-box bg-warning">
                            <h5 className="text-white bg-warning text-center">Chat App</h5>
                            <a href="#chat"><img className="image-layout" src={chatThumb} alt="" /></a>
                        </div>
                    </div>
                </div>
            </NoteBook>
            
            {/* DETAILS VIEW GROUP PROJECTS*/}
            {/* CAPSTONE */}
            <NoteBook>
                <div >
                    <div id="capston" className="d-flex justify-content-between">
                        <h5>Capstone Project</h5>
                       
                        <a href="#scrollup-group"><h5>&#9650; Group Projects</h5></a>
                    </div>
                    <hr />
                    <div style={{fontSize:'12px'}}>
                        <p>Capstone project is designed to be completed in two phases. The first phase
                            comprises the research part and the second phase is the implementation.
                            The following slides provide the overview of the project.</p>
                        <ul>
                            <li>Created web-based project using react-redux, nodejs, express,
                                firebase, mongodb.
                            </li>
                            <li>Group members: 5</li>
                            <li><strong>My Contribution:</strong> worked in a team to prepare and deliver the required project
                                deliveries. Designed prototype and created UI for the project. 
                            </li>
                            <li>Status: project to be launched in April 2021</li>
                        </ul>
                    </div>
                    <div style={{height:'700px', overflow:'auto'}} className="m-auto p-3">
                        <div className="bg-success" >
                            <h6 className="text-white bg-success text-center">Project Summary</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/capstone/cap-summary-doc.png"  
                                alt="summary" />
                        </div>

                        <div className="bg-info" >
                            <h6 className="text-white bg-info text-center">Project Vision</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/capstone/cap-vision-img.png"  
                                alt="vision" />
                        </div>

                        <div className="bg-dark" >
                            <h6 className="text-white bg-dark text-center">Functional Requirement</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/capstone/cap-func-req-img.png"  
                                alt="funcreq" />
                        </div>
                        <div className="bg-success" >
                            <h6 className="text-white bg-success text-center">High Level Requirement</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/capstone/cap-high-req-img.png"  
                                alt="highlevel" />
                        </div>
                        <div className="bg-primary" >
                            <h6 className="text-white bg-primary text-center">Use Case Diagram</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/capstone/cap-usecase-img.png"  
                                alt="usecase" />
                        </div>
                
                        <div className="bg-light" >
                            <h6 className="text-white bg-light text-center">EER diagram</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/capstone/cap-eer-img.png"  
                                alt="eer" />
                        </div>
                        <div className="bg-warning" >
                            <h6 className="text-white bg-warning text-center">Demo 1</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/capstone/cap-imple-img1.png"  
                                alt="demo1" />
                        </div>
                        <div className="bg-warning" >
                            <h6 className="text-white bg-warning text-center">Demo 2</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/capstone/cap-imple-img2.png"  
                                alt="demo" />
                        </div>
                        <div>
                            <a href="https://www.figma.com/file/qHgWmUL14kWdFiBGaXhslW/Prototype">Prototype Link</a>
                        </div>
                        
                    </div>
                </div>
            </NoteBook>

            {/* FIND YOUR GYM MOBILE APPLICATION */}
            <NoteBook>
                <div>
                    <div id="gym" className="d-flex justify-content-between">
                        <h5>Gym Mobile Application</h5>
                       
                        <a href="#scrollup-group"><h5>&#9650; Group Projects</h5></a>
                    </div>
                    <hr />
                    <div style={{fontSize:'12px'}}>
                        <p>'Find My Gym', an application designed to help users to find
                            gyms of their need. The admin in the app is allowed to perform the CRUD
                            operations while users can find and view nearby gyms and are able
                            to use google map for the location. Rating of gym is another feature
                            available for users.</p>
                        <ul>
                            <li>Android based mobile application. The database is managed by MySQL.
                            </li>
                            <li>Group members: 5</li>
                            <li><strong>My Contribution:</strong> performed various roles to complete the project
                                deliveries such as writing document, creating wireframes and implementation. 
                                Designed several wireframes and created login component. 
                            </li>
                            <li>Status: completed in December 2020.</li>
                        </ul>
                    </div>
                    <div style={{height:'700px', overflow:'scroll'}} className="m-auto p-3">
                        <div className="bg-success" >
                            <h6 className="text-white bg-success text-center">Search Gym User</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/gym/gym1.png"  
                                alt="search" />
                        </div>
                        <div className="bg-primary" >
                            <h6 className="text-white bg-primary text-center">Rate Gym</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/gym/gym2.png"  
                                alt="rating" />
                        </div>
                        <div className="bg-danger" >
                            <h6 className="text-white bg-danger text-center">Add Gym Admin</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/gym/gym3.png"  
                                alt="addgym" />
                        </div>
                        <div className="bg-info" >
                            <h6 className="text-white bg-info text-center">Login User</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/gym/gym4.png"  
                                alt="login" />
                        </div>
                    </div>
                </div>
            </NoteBook>

            {/* CLIENT MANAGEMENT WEB APPLICATION */}
            <NoteBook>
                <div>
                    <div id="usermgt" className="d-flex justify-content-between">
                        <h5>Client Management Web App</h5>
                       
                        <a href="#scrollup-group"><h5>&#9650; Group Projects</h5></a>
                    </div>
                    <hr />
                    <div style={{fontSize:'12px'}}>
                        <p>Application is designed to help companies to track
                            thier clients. The app has several features such as 
                            login for admin and client, add and update details,
                            send notifications</p>
                        <ul>
                            <li>Web-based application created using Spring Boot, ThymeLeaf, 
                                H2 database.</li>
                            <li>Group members: 3</li>
                            <li><strong>My Contribution:</strong> helped team members during 
                             coding and testing.</li>
                            <li>Status: completed in 2020.</li>
                        </ul>
                    </div>
                    <div style={{height:'700px', overflow:'scroll'}} className="m-auto p-3">
                        <div className="bg-primary" >
                            <h6 className="text-white bg-primary text-center">User Login</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/user-mgt/userlogin1.png"  
                                alt="userlogin" />
                        </div>
                        <div className="bg-dark" >
                            <h6 className="text-white bg-dark text-center">User Dashboard</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/user-mgt/userdashboard2.png"  
                                alt="dashboard" />
                        </div>
                        <div className="bg-danger" >
                            <h6 className="text-white bg-danger text-center">Support Ticket</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/user-mgt/userticket3.png"  
                                alt="ticket" />
                        </div>
                        <div className="bg-success" >
                            <h6 className="text-white bg-success text-center">Profile AddUpdate</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/user-mgt/addupdate4.png"  
                                alt="addupdate" />
                        </div>
                    </div>
                </div>
            </NoteBook>

            {/* ONLINE IS SYSTEM-COMMUNITY HUB APPLICATION */}
            <NoteBook>
                <div>
                    <div id="agile" className="d-flex justify-content-between">
                        <h5>Online IS System</h5>
                       
                        <a href="#scrollup-group"><h5>&#9650; Group Projects</h5></a>
                    </div>
                    <hr />
                    <div style={{fontSize:'12px'}}>
                        <p>This project was done under agile software development course
                            with a purpose of developing and designing online information 
                            system including implementaion. Project was divided into two 
                            phases, first documentation and the second prototype creation.</p>
                        <ul>
                            <li>Created web-based prototypes for online information system</li>
                            <li>Group members: 5</li>
                            <li><strong>My Contribution:</strong> helped team members to prepare the
                            project deliveries and created all web-based prototypes.</li>
                            <li>Status: completed in 2019.</li>
                        </ul>
                    </div>
                    <div style={{height:'700px', overflow:'scroll'}} className="m-auto p-3">
                        <div className="bg-primary" >
                            <h6 className="text-white bg-primary text-center">Project Summary</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/agile/summary1.png"  
                                alt="summary" />
                        </div>
                        <div className="bg-dark" >
                            <h6 className="text-white bg-dark text-center">Project Vision</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/agile/vision2.png"  
                                alt="vision" />
                        </div>
                        <div className="bg-danger" >
                            <h6 className="text-white bg-danger text-center">Template-login</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/agile/login3.png"  
                                alt="login" />
                        </div>
                        <div className="bg-success" >
                            <h6 className="text-white bg-success text-center">Template-booking</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/agile/booking4.png"  
                                alt="booking" />
                        </div>
                    </div>
                </div>
            </NoteBook>

            {/* DETAILS VIEW INDIVIDUAL PROJECTS*/}
            {/* LIBRARY MANAGEMENT SYSTEM */}
            <NoteBook>
                <div style={{minHeight:'900px'}}>
                    <div id="library" className="d-flex justify-content-between">
                        <h5>Library Management System</h5>
                        <a href="#scrollup-individual"><h5>&#9650; Individual Projects</h5></a>
                    </div>
                    <hr />
                    <div style={{fontSize:'12px'}}>
                        <ul>
                            <li>Created web-based application for library management,
                                using python, Tkinter for GUI and MySQL database.</li>
                            <li>Features: add/update member, book, view/search member/book, 
                                issue/return book and transaction tracking including fines.</li>
                            <li>Status: completed in 2019.</li>
                        </ul>
                    </div>
                    <div style={{height:'700px', overflow:'scroll'}} className="m-auto p-3">
                        <div className="bg-success" >
                            <h6 className="text-white bg-success text-center">Login</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/library/login1.png"  
                                alt="login" />
                        </div>
                        <div className="bg-dark" >
                            <h6 className="text-white bg-dark text-center">Home</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/library/home2.png"  
                                alt="vision" />
                        </div>
                        <div className="bg-info" >
                            <h6 className="text-white bg-info text-center">View Window</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/library/view3.png"  
                                alt="view" />
                        </div>
                        <div className="bg-primary" >
                            <h6 className="text-white bg-primary text-center">Transaction Window</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/library/transaction4.png"  
                                alt="booking" />
                        </div>
                    </div>
                </div>
            </NoteBook>

            {/* WEATHER APPLICATION*/}
            <NoteBook>
                <div style={{minHeight:'900px'}}>
                    <div id="weather" className="d-flex justify-content-between">
                        <h5>Weather Application</h5>
                        <a href="#scrollup-individual"><h5>&#9650; Individual Projects</h5></a>
                    </div>
                    <hr />
                    <div style={{fontSize:'12px'}}>
                        <ul>
                            <li>Created simple web-based weather application,
                                using react, nodejs, mongo database.</li>
                            <li>Features: upades weather based on city name.</li>
                            <li>Status: completed in 2020.</li>
                        </ul>
                    </div>
                    <div style={{height:'700px', overflow:'scroll'}} className="m-auto p-3">
                        <div className="bg-danger" >
                            <h6 className="text-white bg-danger text-center">Login</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/weather/home1.png"  
                                alt="home" />
                        </div>
                        <div className="bg-primary" >
                            <h6 className="text-white bg-primary text-center">Weather Summary</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/weather/display2.png"  
                                alt="dispaly" />
                        </div>
                    </div>
                </div>
            </NoteBook>

            {/* CHAT APPLICATION*/}
            <NoteBook>
                <div style={{minHeight:'900px'}}>
                    <div id="chat" className="d-flex justify-content-between">
                        <h5>Chat Application</h5>
                        <a href="#scrollup-individual"><h5>&#9650; Individual Projects</h5></a>
                    </div>
                    <hr />
                    <div style={{fontSize:'12px'}}>
                        <ul>
                            <li>Created web-based chat application
                                using socket.io and mongodb.</li>
                            <li>Features: live chat with having features of different chat rooms</li>
                            <li>Status: completed in 2021.</li>
                        </ul>
                    </div>
                    <div style={{height:'700px', overflow:'scroll'}} className="m-auto p-3">
                        <div className="bg-warning" >
                            <h6 className="text-white bg-warning text-center">Join Room</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/chat/join1.png"  
                                alt="join" />
                        </div>
                        <div className="bg-danger" >
                            <h6 className="text-white bg-danger text-center">Chat Screen</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/chat/home2.png"  
                                alt="home" />
                        </div>
                        <div className="bg-success" >
                            <h6 className="text-white bg-success text-center">Live Chat</h6>
                            <img 
                                className="toggle-image-view-reverse"
                                src="../images/chat/chat3.png"  
                                alt="chat" />
                        </div>
                    </div>
                </div>
            </NoteBook>
        </div>
    );
}
export default AcademicWork;