import React , {Component} from "react";
import Header from "../components/Header";
import ListOfContacts from "../components/ListOfContacts";
import FormContainer from "./FormContainer";

// let people = [
//     {firstName: "John", lastName: "Doe", age: 50, phone: "333 4567111"},
//     {firstName: "Alice", lastName: "Smith", age: 22, phone: "333 45667933"},
//     {firstName: "Mark", lastName: "Joseph", age: 45, phone: "333 33446776"},
//     {firstName: "Marion", lastName: "Justin", age: 45, phone: "333 4343433345"}
//   ];
  
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
getPeople = () =>{
    fetch("http://localhost:4000/")
    .then(response=>response.json())
    .then(({data})=>{
        console.log(data)
    })
    .catch(error=>console.error(error))
    
    
}






handleAddContact = (firstName, lastName, telephoneNumber) => {
    this.setState(() => {
        return { 
            contacts: [...this.state.people, { firstName, lastName, telephoneNumber }],
           
        }
    });
}
renderPeople =(people) =>{
    this.setState ({
        people:people
    })
}

    
    render(){
        

        return(
            <div>
            <Header/>
            <ListOfContacts people = {this.state.people}/>
            {/* {people.map(this.renderPeople)} */}
            <FormContainer handleAddContact = {this.handleAddContact}/>
            </div>
        )
    }

}







export default PhoneBook;


