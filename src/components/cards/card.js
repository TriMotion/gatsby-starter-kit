import React from 'react';
// import {useTransition, animated} from 'react-spring';

const Card = ({
    title = "", 
    fase = "", 
    desc = "", 
    num_person = "", 
    kind = "", 
    est_time = ""
}) => {
    return (
        <div className="column">
            <div className="card pl-m pt-l pb-l">
                <span>{fase}</span>
                {title}
                {desc}
                <div>
                {num_person}
                {kind}
                {est_time}
                </div>
            </div>
        </div>
    );
}

export default Card;