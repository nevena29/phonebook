import React from "react";

const Contact = (props) => {
    return (
        <div>
            <p>
                Name: {props.person.firstName} <br/>
                Last Name: {props.person.lastName} <br/>
                Telephone Number: {props.person.telephoneNumber}
            </p>
            <button
                onClick={(e) => props.handleRemoveContact(props.person.telephoneNumber)}
            >Remove Contact</button>
        </div>
    );
}

export default Contact;