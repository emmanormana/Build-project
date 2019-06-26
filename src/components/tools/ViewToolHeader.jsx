import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextInput} from "../common/form/TextInput";
import {FormSearch, SearchButtons, SearchContainer, SearchViewContainer} from "./viewAllStyle";


const ViewToolHeader = () => {
    return (
        <SearchViewContainer>
            <SearchContainer>
                <FormSearch>
                    <Field name='search' type='text' component={TextInput} label='Tool Search' placeholder='Search'/>

                    <SearchButtons>Search</SearchButtons>
                </FormSearch>
            </SearchContainer>
            <div>
                <SearchButtons actionButton>Back to My Tools</SearchButtons>
                <SearchButtons actionButton>Back to My Home</SearchButtons>
            </div>
        </SearchViewContainer>
    );
};

export default reduxForm({form: 'search'})(ViewToolHeader);
