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


//------------------REDUX-----------------------------------------


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


//----------------------------------------------------------------------


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

// The Provider component allows you to provide "state" and "dispatch" to your React components, but you must specify exactly what state and actions you want. This makes sure that each component only has access to the state it needs.
// To do this you must create two functions, "mapStateToProp() && mapDispactchToProps()"
// in these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch
//NOTE: React Redux uses the store.subscribe() method to implement mapStateToProps()

function mapStateToProps(state = defaultState){
    return {
        messages: state
    };
};

// mapDispatchToProps() is used to provide specific action creators to your React components so they can dispatch against the Redux store. the syntax is similar to mapStateToProps(). you return an object that maps dispatch actions to property names, which become component props. Instead of returning a piece of state, each property returns a function that calls dispatch with an action creator and any relavent actin data.
// You have access to dispatch because its passed to mapDispatchToProps() as a parameter when you define the function. React Redux is using Redux's store.dispatch() to conduct these dispatches.
function mapDispatchToProps(dispatch){
  return {
    submitNewMessage: function(message){
      dispatch(addMessage(message));
    }
  };
};

// Now that we have the mapStateToProps() & mapDispatchToProps() functions, you can use them to map state and dispatch to the props of one of your react components. this is where the connect method comes in, it takes two arguments (optional). You may have a component that only needs access to state but doesnt need to dispatch any actions or via versa
const connect = ReactRedux.connect;
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
//NOTE: if you want to omit one of the arguments, you pass null in its place.
