import React from 'react';
import {Link} from 'react-router-dom';

import {
    BottomContent,
    ButtonContainer,
    Container,
    Form,
    FormTop,
    H4,
    SubmitButton,
    TriangleTop,
    Wrapper
} from '../tools/ComingSoonStyle';
import Logo from '../../imgs/favicon-96x96.png';


const ComingSoon = () => {
    return (
        <Wrapper>

            <FormTop>
                <TriangleTop>
                </TriangleTop>
            </FormTop>

            <BottomContent>
                <Form>

                    <Container>
                        <img src={Logo} alt='use my tools logo'/>
                        <H4>Coming Soon</H4>
                        <img src={Logo} alt='use my tools logo'/>
                    </Container>

                    <ButtonContainer>
                        <SubmitButton>
                            <Link to='/dashboard'>Return Home</Link>
                        </SubmitButton>
                    </ButtonContainer>

                </Form>
            </BottomContent>
        </Wrapper>
    )
};

export default ComingSoon