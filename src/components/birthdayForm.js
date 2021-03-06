import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class BirthdayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(date){
        this.setState({startDate: date})
    }

    render(){
        return(
            <div>
                <h1>Birthday Form Component</h1>
                {this.state.startDate.toString}
                <DatePicker 
                    selected = {this.state.startDate}
                    onChange = {this.handleChange}/>
            </div>
        )
    }
}

export default BirthdayForm