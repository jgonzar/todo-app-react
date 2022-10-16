import './TaskList.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function TodoList(props){
    return(
        <section>
            <div className="card-heading-container">
                <h2>Your tasks</h2>
                <i><FontAwesomeIcon icon={faClipboardList} /></i>
                {/* <i><FontAwesomeIcon icon={faChevronUp} /></i> */}
            </div>
            <ul>
                {props.children}
            </ul>
        </section>
    );
};

export { TodoList };