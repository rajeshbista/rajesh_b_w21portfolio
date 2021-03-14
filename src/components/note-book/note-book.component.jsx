import React from 'react';

import './note-book.styles.css';

const NoteBook = ({children}) => {
    
    return (
        <div className="note-container">
            <div className="text-justify">
                {children}
            </div>
        </div>
    );
}

export default NoteBook;