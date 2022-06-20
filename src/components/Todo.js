import React from "react";




class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: "",
        items: [],
        completed: {},
      };
      this.handleRemove = this.handleRemove.bind(this);
      this.handleCheck = this.handleCheck.bind(this);
    }
  
    onChange = event => {
      this.setState({ term: event.target.value });
    };
  
    onSubmit = event => {
      event.preventDefault();
      if (this.state.term) {
        this.setState({
          term: "",
          items: [...this.state.items, this.state.term]
        });
      } 
    };
  
    handleRemove(index, event) {
      if (("are you sure?")) {
        let todoArray = this.state.items;
        todoArray.splice(index, 1);
        this.setState({
          items: todoArray
        });
      }
    }
    handleCheck(index, event) {
      this.setState(state => ({
        completed: { ...state.completed, [index]: !state.completed[index] }
      }));
    }
  
    render() {
      return (
        <div className="container">
         <h1>All Tasks</h1>
        <form onSubmit={this.onSubmit}>
        <div>
           <input id="input" type="text" name="add" class="textinput" placeholder="Add a new task"  value ={this.state.term} onChange={this.onChange} />
           <button id="addbtn" class="button" >Add</button>
         
        </div>
        </form>
        
        <div>
            {this.state.items.length === 0 && <h2 id="h2">Seems like a quiet day</h2>}
        </div>
          <ul class="ul">
            {this.state.items.map((item, index) => (
              <li
              class="list"  style={{
                textDecoration: this.state.completed[index]
                  ? "line-through"
                  : ""
              }}  key={index} > 
              <div class="list-items" ><input  type="checkbox"  class="checkbox" id="chk"
                onChange={() => this.handleCheck(index)}
                 ></input>
                 <span>  {item}</span></div><button  class="deletebtn"   ><i onClick={event => this.handleRemove(index, event)} class="fa fa-trash" ></i></button> 
             </li>
              
            ))}
          </ul>
        </div>
      );
    }
  }
  

  export default  Todo