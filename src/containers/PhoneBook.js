import React , {Component} from "react";
import Header from "../components/Header";
import ListOfContacts from "../components/ListOfContacts";
import FormContainer from "./FormContainer";

  
class PhoneBook extends Component{
    constructor(props){
        super(props);
        this.state = {
             people : []
    }
}
componentDidMount(){
    this.getPeople();
}
getPeople = (people) =>{
    fetch("http://localhost:4000/")
    .then(response=>response.json())
    .then( response => this.setState({people:response.data}))
    .catch(error=>console.error(error))
    
    
}






handleAddContact = (firstName, lastName, telephoneNumber) => {
    this.setState(() => {
        return { 
            contacts: [...this.state.people, { firstName, lastName, telephoneNumber }],
           
        }
    });
}
// renderPeople =(people) =>{
//     this.setState ({
//         people:people
//     })
// }

    
    render(){
        

        return(
            <div>
            <Header/>
            <ListOfContacts people = {this.state.people} getPeople ={this.getPeople}/>
            {/* {people.map(this.renderPeople)} */}
            <FormContainer handleAddContact = {this.handleAddContact}/>
            </div>
        )
    }

}







export default PhoneBook;


