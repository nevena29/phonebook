import React , {Component} from "react";
import Header from "../components/Header";
import ListOfContacts from "../components/ListOfContacts";
import FormContainer from "./FormContainer";

  
class MainPage extends Component{
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


// handleAddContact = () => {
//     this.setState(() => {
       
//     });
// }
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
            <FormContainer />
            {/* handleAddContact = {this.handleAddContact}/> */}
            </div>
        )
    }

}







export default MainPage;


