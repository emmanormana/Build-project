import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';
import {dashboard} from '../common/data/welcomePageData';
import {CardContainer, User, QuickLink, QuickLinkContainer, Trianglebox} from "./cardStyle";
import heroImage from '../../imgs/Hero Image.png'
import {BottomContent, Image, Wrapper} from '../styles/signInFormStyle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

const WelcomePage = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <Wrapper>
            <Image dashboard src={heroImage} alt='Various Tools' />
            
            <Trianglebox>
                            {/* Add ${user}  ? */}
                <User>Welcome Shamalamadingdong!</User>
                <QuickLinkContainer>

                    <QuickLink onClick={()=>setToggle(!toggle)}>Quick Links<FontAwesomeIcon icon={faCaretDown}/></QuickLink>

                    {toggle && <Link to='/add-tool'><QuickLink child>Add a Tool</QuickLink></Link>}

                    {toggle && <Link to='/borrow-tool'><QuickLink child>Borrow a Tool</QuickLink></Link>}

                </QuickLinkContainer>

            </Trianglebox>
            
            <BottomContent card>

                <CardContainer>
                    {dashboard.map((card, i) => <Card card={card} key={i}/>)}
                </CardContainer>

            </BottomContent>
        </Wrapper>
    )
};

export default WelcomePage;