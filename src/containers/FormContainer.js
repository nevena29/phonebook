import React,{Component} from "react";


class FormContainer extends Component {
      constructor(props){
          super(props);

          this.state = {
              formObject: {
                  firstName: "",
                  lastName: "",
                  telephoneNumber: ""
              }
          }
      }
        handleSubmit = (e) => {
            // console.log(e.target.name)
        e.preventDefault();
        this.setState({
            formObject:{
                ...this.state.formObject,[e.target.name]: e.target.value
            }
        })
       
    }

    render() {
        return (
            <div>
            <form >
                <input type="text" onChange={this.handleSubmit} placeholder="First Name" name="firstName" autoComplete="off" required value = {this.state.formObject.firstName}/>
                <input type="text" onChange={this.handleSubmit} placeholder="Last Name" name="lastName" autoComplete="off" required value = {this.state.formObject.lastName}/>
                <input type="text" onChange={this.handleSubmit} placeholder="Telephone Number" name="telephoneNumber" autoComplete="off" required value = {this.state.formObject.telephoneNumber}/>
            </form>
                <input type="submit" onClick={() => this.props.handleAddContact(this.state.formObject)} value="Add Contact"></input>
            
        </div>
        );
    }
}


export default FormContainer;