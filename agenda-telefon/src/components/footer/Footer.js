import React from 'react';
import './Footer.css';


class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            number: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }




    render() {
        return (
        <footer>
            <input value={this.state.name} onChange={this.handleChange} name="name" type="text" placeholder="Name..." />
            <input value={this.state.number} onChange={this.handleChange} name="number" type="text" placeholder="Number..." />
            <div id="add-btn" onClick={() => this.props.createItem(this.state.name, this.state.number)}>Add</div>
        </footer>)

    }
}

export default Footer;
