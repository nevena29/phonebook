import React , {Component} from "react";
import Header from "../components/Header";
import ListOfContacts from "../components/ListOfContacts";
import FormContainer from "./FormContainer";

  
class MainPage extends Component{
    constructor(props){
        super(props);
        
        this.state = {
             people : [],
             postContact:{
                 firstName: "",
                 lastName:"",
                 phone: ""
             }
    }
}
 componentDidMount(){
     this.getPeople();
 }
// componentWillMount(){
//     this.handleAddContact();
// }

getPeople = (people) =>{
    fetch("http://localhost:4000/")
    .then(response=>response.json())
    .then( response => this.setState({people:response.data}))
    .catch(error=>console.error(error))
    
    
}
handleAddContact = (postContact) =>{
//    console.log(postContact)
    fetch(`http://localhost:4000/add_contact/?fn=${postContact.firstName}&ln=${postContact.lastName}&tn=${postContact.phone}`)
//    , {
//        method: 'POST', 
//        body: JSON.stringify(postContact)
        
//        })
//          .then(response => response.json())
          .then(this.getPeople)
//            this.setState({postContact:postContact}))
        .catch(error => console.error('Error:', error))
}

    render(){
        
        return(
            <div>
            <Header/>
            <ListOfContacts people = {this.state.people} getPeople ={this.getPeople}/>
            <FormContainer handleAddContact = {this.handleAddContact} />
            </div>
        )
    }

}







export default MainPage;


