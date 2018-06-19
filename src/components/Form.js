import React from "react";

const Form = (props) =>{

    return(
        <div>
            <form  onSubmit={props.handleSubmit}>
                <input type="text" placeholder="First Name" name="firstName" autoComplete="off" required></input>
                <input type="text" placeholder="Last Name" name="lastName" autoComplete="off" required></input>
                <input type="number" placeholder="Telephone Number" name="telephoneNumber" autoComplete="off" required></input>
                <input type="submit" value="Add Contact"></input>
            </form>
            
        </div>
    )
}
    
export default Form;
