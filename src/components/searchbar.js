import React from 'react';

// state should be modified at some point so class component is used
class SearchBar extends React.Component {
state = {term: ''};

/* by leaving off the parantesis on onInputChange, we will make sure that it is rendered when it is necesary. Otherwise it will be rendered everytime. Don't put parantesis on callback functions.

we take the value of the input and assign it to the value prop, what we assign to that value prop, what the input will show

onChange is a property to handle event, specific name = {this.onInputChange} is the same thing

uncontrolled vs controlled component: uncontrolled component makes finding the value of an input harder cuz you need to reach out reactDom to reference that input. Having control make you able to see the input value from your state
*/ 
render() {
    return (<div className = "ui segment">
        <form className = "ui-form">
        <div className = "field">
            <label>Image Search  </label>
            <input 
            type = "text" 
            value = {this.state.term}
            onChange = {(event) => this.setState({term: event.target.value})}/>
        </div>
        </form>
    </div>);
    }
};

export default SearchBar;