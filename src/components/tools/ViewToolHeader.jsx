import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextInput2} from "../common/form/TextInput";
import {FormSearch, SearchButtons, SearchContainer, SearchViewContainer, Bold, Italic, SubContainer, SubHeaderContainer, SubContainer1, SubContainer2,} from "./viewAllStyle";
import { italic } from 'ansi-colors';


const ViewToolHeader = () => {
    return (
        <div>
            <SearchViewContainer>
                <SearchContainer>
                    <FormSearch>
                        <Field name='search' type='text' component={TextInput2} label='Tool Search' placeholder='Search'/>

                        <SearchButtons>Search</SearchButtons>
                    </FormSearch>
                </SearchContainer>
                <div>
                    <SearchButtons actionButton>Back to My Tools</SearchButtons>
                    <SearchButtons actionButton>Back to My Home</SearchButtons>
                </div>
            </SearchViewContainer>

            <SubHeaderContainer>

                <SubContainer1>
                    <Bold>Where is this Tool?</Bold>
                </SubContainer1>

                <SubContainer>
                    <Bold>Tool Name</Bold>
                    <Italic>Tool Description</Italic>
                </SubContainer>

                <SubContainer2>
                    <Bold>Available For</Bold>
                </SubContainer2>

            </SubHeaderContainer>
        </div>
    );
};

export default reduxForm({form: 'search'})(ViewToolHeader);
