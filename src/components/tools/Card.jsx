import React from 'react';
import {Link} from 'react-router-dom'
import {CardBody, CardHeader, WelcomePageCard} from "./cardStyle";

const Card = ({card: {heading, paragraph, path}}) => {
    return (
        <WelcomePageCard>
            <div>
                <CardHeader>
                    <Link to={path}>{heading}</Link>
                </CardHeader>
                <CardBody>
                    <p>{paragraph}</p>
                </CardBody>
            </div>
        </WelcomePageCard>
    )
};

export default Card;