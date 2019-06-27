import React, {Component} from 'react';

import TextInput from '../common/form/TextInput';
import CheckInput from '../common/form/CheckInput';
import {Field, reduxForm} from 'redux-form';

const locations = ['My Garage Only', 'My Network', 'Rental'];

class AddTool extends Component {
    render() {
        return (
            <div>
                <h1>Add a Tool</h1>
                <form>
                    <Field name='tool_name' placeholder='Tool Name' component={TextInput} label='Tool Name'/>
                    <Field name='tool_description' placeholder='Tool Description' component={TextInput}
                           label='Tool Description'/>
                    <Field name='location' type='checkbox' options={locations} component={CheckInput}/>
                    <Field name='rental_price' placeholder='Price' label='Price' component={TextInput}/>
                    <Field name='length_of_time' placehodler='Length of Time' label='Length of Time'
                           component={TextInput}/>
                    <button>Add to My Tools</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({form: 'addTool'})(AddTool);