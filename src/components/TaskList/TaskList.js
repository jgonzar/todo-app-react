import './TaskList.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function TodoList(props){
    return(
        <section>
            <div className="card-heading-container">
                <h2>Pending Tasks </h2>
                <i><FontAwesomeIcon icon={faChevronUp} /></i>
            </div>
            <ul>
                {props.children}
            </ul>
        </section>
    );
};

export { TodoList };