import React from "react";
import Contact from "./Contact";

class ListOfContacts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: ''
      }
    }
      
      updateSearch(event) {
      this.setState({
        search: event.target.value
      })
    }
  
    render() {
       
      let filteredPeople = this.props.people.filter(
          
        (person) => {
          console.log(person)
          var fullName = person.first_name.toLowerCase() + person.last_name.toLowerCase()
          return fullName.indexOf(
            this.state.search.toLowerCase()) !== -1;
        }
      );
  
      return (
        <div>
               <div className="input-field">
                  <input type="text" 
                      className="search_input"
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}
                      placeholder="Enter name or lastname"
                />
               </div>
          <ul className="list">
            {filteredPeople.map((person)=> {
              return <Contact person={person} />
            })}
               </ul>
        </div>
  
      )
    }
  }
  export default ListOfContacts;
  

