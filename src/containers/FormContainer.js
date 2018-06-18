import React,{Component} from "react";
import Form from "../components/Form";

class FormContainer extends Component {
        handleSubmits = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const telephoneNumber = e.target.telephoneNumber.value;
        this.props.handleAddContact(firstName, lastName, telephoneNumber);
    }

    render() {
        return (
            <Form handleSubmits={this.handleSubmit} />
        );
    }
}


export default FormContainer;