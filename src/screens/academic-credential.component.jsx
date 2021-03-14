import React from 'react';

import inter from '../assets/credential/certificate-level.png';
import bachelor from '../assets/credential/bachelor-level.png';
import master from '../assets/credential/master-level.png';
import pgd from '../assets/credential/pgd-business.png';
import pharmaceutical from '../assets/credential/pharmaceutical.png';
import NoteBook from '../components/note-book/note-book.component';


const AcademicCredential = () => {
        
    return(
    <>
        <h3 className="p-3 text-left text-muted">Academic Credentials</h3>
        <NoteBook>
        <div style={{width:'100%'}} className="d-flex m-auto p-3 justify-content-between flex-wrap">
            <div className="certificate-box">
                <a href={pharmaceutical} target="_blank" rel="noreferrer"><img className="mw-100" src={pharmaceutical} alt="Max-width 100%" /></a>
            </div>

            <div className="certificate-box">
                <a href={pgd} target="_blank" rel="noreferrer"><img className="mw-100" src={pgd} alt="Max-width 100%" /></a>
            </div>

            <div className="certificate-box">
                <a href={master} target="_blank" rel="noreferrer"><img className="mw-100" src={master} alt="Max-width 100%" /></a>
            </div>

            <div className="certificate-box">
                <a href={bachelor} target="_blank" rel="noreferrer"><img className="mw-100" src={bachelor} alt="Max-width 100%" /></a>
            </div>

            <div className="certificate-box">
                <a href={inter} target="_blank" rel="noreferrer"><img class="mw-100" src={inter} alt="Max-width 100%" /></a>
            </div>
            
        </div>
        </NoteBook>
    </>
    )};

export default AcademicCredential;