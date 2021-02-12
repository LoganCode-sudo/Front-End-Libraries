// so we have covered React and redux, in this section we will see how to use them together.
// React is a view library that you provide with data, it then renders the view in an efficient and predictable way.
// Reduxis a state management framwork that you can use to simplify the management of your application state 
// in a React redux app, you create a single redux store that manages the entire state of your app. Your React components subscribe to only the pieces of data in the store that is relevant to their role. you then dispatch actions directly from React components, that trigger store updates

// React components can manage their own state locally, when you have a complex app, its generally better to keep the app state in a single location with redux. There are exceptions when individual components may have local state specific only to them.

// Redux is not designed to work with React out of the box, we need to use the 'react-redux' package. it allows you to pass Redux state and dispatch to your React components as prop

//firstly, you will create a simple react component which allows you to input new text messages. These are added to an array thats displayed in the view. Next, you will create a redux store and actions that manage the state of the messages array. Finally you will use 'react-redux' to connect the Redux store with your component, thereby extracting the local state into the redux store.
class DisplayMessages extends React.Component {
constructor(props){
  super(props);
  this.state = {
    input: "",
    messages: []
  };
  this.handleChange = this.handleChange.bind(this);
  this.submitMessage = this.submitMessage.bind(this);
};

handleChange(event){
    this.setState({
        input:event.target.value
    })
};



submitMessage(){
    this.setState({
        messages: [...this.state.messages,this.state.input],
        input:""
    })
};

  render() {
    return (
        <div>
            <input type="text" value={this.state.input} onChange= {this.handleChange} />
            <button onClick = {this.submitMessage}>Submit.</button>
            <ul>
            {/*the below maps over the array, it creates <li> for each index of the array*/}
                {this.state.messages.map((x,i)=>{
                    return <li key={i}>{x}</li>
                })}
            </ul>
        </div>
    )
  }
};

// Now that we have our react component, we need to move the logic its performing locally in state to redux.

//define action type "ADD"
const ADD = "ADD";

// action to add message
function addMessage(message){
    return {
        type:ADD,
        message
    };
};

let defaultState = [];

// handles state for messages
const messageReducer = (state = defaultState, action) =>{
    switch(action.type){
        default: return state;
        case "ADD": return [...defaultState,action.message]
    };
};

const store = Redux.createStore(messageReducer);

// The next step is to provide react access to the redux store and the actions it needs to dispatch uodates. This is where "react-redux" comes in. it provides a small API with two key features: "Provider" and "connnect"(cover connect later). The Provider is a wrapper comonent from React Redux that wraps your react app. This then allows you to access the Redux store and dispatch functions throughout your component tree. Provider takes two props "redux store and child component of your app"

//defined Provider
const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {

  render(){
    return (
    
      {/*redux store prop*/}
      <Provider store = {store}>
      
      {/*child Component*/}
      <DisplayMessages />
      
      </Provider>
    );
  };
};
