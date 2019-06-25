import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';
import {dashboard} from '../common/data/welcomePageData';
import {CardContainer, User, QuickLink} from "./cardStyle";
import heroImage from '../../imgs/Hero Image.png'
import {BottomContent, Image} from '../styles/signInFormStyle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

const WelcomePage = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <Image dashboard src={heroImage} alt='Various Tools' />
            <BottomContent card>
                <User>Welcome Gabriel!</User>
                <div>
                    <QuickLink onClick={()=>setToggle(!toggle)}>Quick Links<FontAwesomeIcon icon={faCaretDown}/></QuickLink>
                    {toggle && <Link to='/add-tool'><QuickLink child>Add a Tool</QuickLink></Link>}
                    {toggle && <Link to='/borrow-tool'><QuickLink child>Borrow a Tool</QuickLink></Link>}
                </div>
                <CardContainer>
                    {dashboard.map((card, i) => <Card card={card} key={i}/>)}
                </CardContainer>
            </BottomContent>
        </>
    )
};

export default WelcomePage;