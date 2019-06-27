import React, {Component} from 'react';

import TextInput from '../common/form/TextInput';
import CheckInput from '../common/form/CheckInput';
import {Field, reduxForm} from 'redux-form';


const locations = [{
    dbName: 'my_garage_only',
    label: 'My Garage Only'
},
    {
        dbName: 'my_network',
        label: 'My Network'
    },
    {
        dbName: 'rental',
        label: 'Rental'
    }

];

class AddTool extends Component {

    render() {
        const {handleSubmit, pristine, submitting} = this.props;
        return (
            <div>
                <h1>Add a Tool</h1>
                <form onSubmit={handleSubmit}>
                    <Field name='tool_name' placeholder='Tool Name' component={TextInput} label='Tool Name'/>
                    <Field name='tool_description' placeholder='Tool Description' component={TextInput}
                           label='Tool Description'/>
                    {locations.map((location, i) => <Field name={location.dbName} key={i} type='checkbox' label={location.label}
                                                           component={CheckInput}/>)}
                    <Field name='rental_price' placeholder='Price' label='Price' component={TextInput}/>
                    <Field name='length_of_rental' placehodler='Length of Time' label='Length of Time'
                           component={TextInput}/>
                    <button type='submit' disabled={pristine || submitting}>Add to My Tools</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({form: 'addTool'})(AddTool);