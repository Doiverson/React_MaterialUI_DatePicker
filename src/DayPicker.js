import React from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";

class App extends React.Component{

    state = {
        selectedDate: new Date()
    };

    render() {
        const {selectedDate} = this.state;
        console.log(selectedDate)

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    clearable
                    value={selectedDate}
                    placeholder="10/10/2018"
                    onChange={date => this.setState({selectedDate: date})}
                    minDate={new Date()}
                    format="MM/dd/yyyy"
                />
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
