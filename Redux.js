// Redux is a predictable state container for JS. it helps you write applications that behave consistently, run in different enviroments (client, server, and native), its also easy to test.

// Redux is a state management framework that can be used with different web technologies.
// In Redux there is a single state object that is responsible for the state of your entire application.
// This means if you had a react app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store

// Create a Redux store, this is the first important principle to understand. the Redux store is the single source of truth when it comes to application state. this also means any time something in your app wants to update state, it must do so through the Redux store.

// The redux store is an object which holds and manages application state. there is a method called createStore(), which can be used to create the store.
const defaultState = state =>{
    state = {
        login: false
    }
};

const store = Redux.createStore(defaultState);
// The above will create the store and store the value of defaultState

// you can retrieve the current state from the Redux store using the getState() method.
const currentState = store.getState();

// updating state is one of redux core tasks. All state updates are triggered by dispatch actions. an action is simply a JS object that contains information about an action event that has occurred. Redux store receives theses actions, then updates its state accordingly. Sometimes a redux action also carries some data. e.g. the action carries a username after a user logs in. While the data is optional, actions must carry a type property that specifies the 'type' of action that occurred.
// You can think of redux actions as messengers that deliver information about events happening in your app to the redux store. The store then conducts the business of updating state based on the action that occurred.
// AS you can see below actions are just objects with a type property
const action = {
    type:"LOGIN"
};

// After creating an action, the next step is sending it to the redux store so it can update its state. to do this you must define an action creator  An action creator is simply a JS function that returns an action. action creators create objects that represent action events.
function actionCreator(){
  return action;
};

// dispatch is a method that is used to dispatch actions to the redux store. Calling store.dispatch() and passing the value of the action creator sends an action back to the store.
// Action creator return an object with a type property that specifies the action that has occurred. The method dispatches an action object to the redux store.
store.dispatch(actionCreator());

// After an action is created and dispatched, the store needs to know how to respond to this action. this is where the reducer function comes in. reducers are responsible for the state modification that takes place in response to actions. reducers take state and action as arguments, it will always return a new state. it is important to note that this is the ONLY role of the reducer. It has no side effects (never calls an API endpoint and never has any hidden surprises).

// Another key principle in redux is that state is read only. this means reducers must always return a new copy of state and never modify state directly. Redux doesnt enforce this however it is good practise.
const reducer = (state = defaultState, action) => {
    if(action.type === "LOGIN"){
        return {
            login: true
        };
    }else{
        return state;
    }
};

// you can tell the redux store how to handle multiple actions types.Say you are managing user authentication in the store. you want to have a state representation for when users are logged in and when they are logged out. you represent this with a single state object with the property "authenticated". you also need action creators that create actions corresponding to user login and user logout, along with the action object themselves.

const authReducer = (state = defaultState, action) => {
    switch(action.type){
        case "LOGIN": return {
            authenticated: true
        };
        
        case "LOGOUT": return {
            authenticated: false
        };
        
        default: return state;
    };
};

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
  
};

const authStore = Redux.createStore(authReducer);

// a comman practise is to assign action types as read-only constants, then reference thses constants whererever they are used.

// const LOGIN = "LOGIN";
// const LOGOUT = "LOGOUT";

// const defaultState = {
//   authenticated: false
// };

// const authReducer = (state = defaultState, action) => {

//   switch (action.type) {
//     case LOGIN :
//       return {
//         authenticated: true
//       }
//     case LOGOUT :
//       return {
//         authenticated: false
//       }

//     default:
//       return state;

//   }

// };

// const store = Redux.createStore(authReducer);

// const loginUser = () => {
//   return {
//     type: LOGIN
//   }
// };

// const logoutUser = () => {
//   return {
//     type: LOGOUT
//   }
// };

// Another method you have access to on the redux store object is store.subscribe(). this allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use of this is to subscribe a function to your store that simply logs a message every time an action is received and the store is undated.
const ADD = 'ADD';

const addReducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(addReducer);

// Global count
let count = 0;

function callback(){
  return count++;
}
store.subscribe(callback);
//count will go up everytime dispatch is called
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

// When the state of your app begins to grow more complex, it may be tempting to divide state into multiple pieces. Instead, remember the first principle of Redux: "all app state is help in a single state object in the store". Redux provides reducer composition as a solution for a complex state model. You define multiple reducers to handle different pieces of your application state, then compose these reducers together into one root reducer. The root reducer is then passed into createStore().

// To do this we use the combineReducers() method. This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions.The name you give to the keys will be used by Redux as the name for the associated piece of state.
// it is good practise to create a render for each peice of applicationn state when they are distinct or unique. If you look at the above examples you will see how we createStore() after the reducer has been created.
// we can combine these reducers and push them all at once
const rootReducer = Redux.combineReducers({
    auth: authReducer,
    add: addReducer
});
//the state held in the store will be a single object containing both reducers properties
const store = Redux.createStore(rootReducer);
