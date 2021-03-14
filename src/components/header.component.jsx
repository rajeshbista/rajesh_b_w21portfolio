import React from 'react';
import { useHistory} from 'react-router-dom';
import {Dropdown, DropdownButton, Button} from 'react-bootstrap'

import logo from '../logo.jpg';

import '../index.css'


const Header = () => {

    let history = useHistory();
   
    return (
        <>
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Hi! I am Rajesh</h2>
                <h5 className="font-italic">A student (final semester) of Computer Programmer and Analyst program</h5>
            </header>
        </div>
        <div style={{marginBottom:'20px'}} className="d-flex">
            <Button className="btn-secondary top-btn-size" onClick={()=>history.push("/")}>Home</Button>
        
            <DropdownButton  variant="secondary" title="Menu">
                <Dropdown.Item href="/personaldata" >Personal data</Dropdown.Item>
                <Dropdown.Item href="/credential">Academic Credential</Dropdown.Item>
                <Dropdown.Item href="/academicwork">Academic Work</Dropdown.Item>
                <Dropdown.Item href="/professionalwork">Professional Work</Dropdown.Item>
            </DropdownButton>  
        </div>
        </> 
    );
}
export default Header;