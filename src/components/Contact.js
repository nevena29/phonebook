import React from "react";

const Contact = (props) => {
    return (
        <div>
            <p> 
                Name: {props.person.first_name} <br/>
                Last Name: {props.person.last_name} <br/>
                Telephone Number: {props.person.telephone}
            </p>
            <button
                onClick={(e) => props.handleRemoveContact(props.person.telephoneNumber)}
            >Remove Contact</button>
        </div>
    );
}

export default Contact;