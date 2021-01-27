{/*Reat, created by facebook.*/}
{/*open-source Javascript library for building user nterfaces.*/}
{/*create components, handle states and props, utilize event listeners and certain life cycle methods to update data as it changes */}

{/*Reat combines HTML with JS functionality to create its own markup language, JSX. this means you can have the full programmatic power of JS with HTML. It also helps keep your code readable*/}

{/*JSX is similar to HTML to a certain degree, there are key differences that will be covered. for instance, because JSX is a syntactic extention of JS, this means that you can add JS directly with JSX by putting the code in {}. Rememeber this for later.*/}

{/*how to create comments in JSX*/}

{/*here is an example of making html elements with js*/}
const HelloJSX = <h1>Hello JSX!</h1>;
{/*the above is know as a simple JSX element*/}

{/*more complex elements can be created, but you must note that you must return one element*/}
  const DIV = () => {
    return (
        <div>
            <h2>I'm a Sub-heading :|</h2>
            <p>text is what I am...</p>
        </div>
    );
};

{/*as you can see we have multiple elements, but we are only returning the Div that holds those elements*/}

const JSX = () => {
  return (
     <div>
        <h2>There is more!</h2>
        <p>Words go here...</p>
     </div>
  );
};

{/*So, JSX is a conveinient tool to write HTML within JavaScript. Using React we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM*/}
{/*ReactDOM offers a simmple method to render React elements to the DOM*/}
{/* ReactDOM.render(componentToRender,TargetNode) */}

{/*for the next Example lets say we have a main HTML file with an empty div, it has the Id="main-heading"*/}
{/*we need to render the jsx into that file/div so that our code can be converted into HTML*/}
ReactDOM.render(HelloJSX,document.getElementById("main-heading"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}
{/*NOTE: you can only render an element after it has been created, they are variables after all*/}

{/*one key difference between JSX and HTML is that the word class is reserved by JavaScript. this means you cant use it to define classes of elements, you need to use className instead */}
{/*in fact the naming of many HTML attributes and event references become camelCase when used in JSX*/}
{/*onClick instead of onclick*/}
{/*onChange instead of onchange*/}
{/*the difference might be small but is something to keep in mind*/}
const MoreHere = () => {
 return (
    <div className ="myDiv">
    <h1>Im in a class!</h1>
    <p>you dont know my class...</p>
  </div>
 );
};

{/*another difference is that HTML has Self-closing tags, such as <br> and <hr>. in JSX this would cause an error, all tags must be closed*/}
{/*for HTML self-closing tags, in JSX you can write the with the following syntax*/}
const CloseMe = ()=>{
 return(
      <div>
        <h2>Welcome to React!</h2>
        <br />
        {/*Notice the space before the "/" */}
        <p>Be sure to close all tags!</p>
        <hr />
      </div>
 );
 
  
};

{/*Extra Info: the div tag is not self-closing but can also be written as <div />, all this will do is make sure that you cannot include anything within that div. later you will see why this is useful for rendering react components.*/}

{/*Components are the core of react, everything is a component.*/}
{/*there are two ways to to create a component.*/}
{/*you can use a JavaScript function, doing this will create a stateless functional component (concept of state in an application will be covered later). For now think of it as a component that can receive data and render it. although it does not manage or track changes to the data*/}
{/*to use the above method you will write a JS function that returns JSX code*/}
{/*NOTE: React requires your function name to start with a capital letter*/}
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};

{/*you can use components to put together more complex HTML pages. this is one key advantage to using react's component architecture. this also makes building and maintaining complex interfaces easier. */}

{/*the second method to define components is with the ES6 class syntax*/}
class Kitten extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }

}
{/*the above creates a class "Kitten" that extends the "React.Component" class. this means Kitten has access to many useful react features (that will be covered later).*/}
{/*Kitten also has a constructor defined that calls super(). it is best practise to call a components constructor with super(), and pass "props" to both. this makes sure that the component is initialized properly, for now its standard for this code to be included when using this method*/}

{/*You can compose multiple react components*/}
{/*lets say we building an app and we need three components*/}
{/*To compose these components together you could create an App parent which renders the three components as children. to do this you include the component name written as a custom HTML tag */}
class Puppies extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
    <div>
    {/*When react encounters a custom tag that references another component, it renders that component in the location of the tag*/}
        <DIV />
        <JSX />
        <MoreHere />
    </div>
    );
  };

};

{/*Component composition is very powerful, it is important to think of your UI in terms of components. you break down your UI into its basic building blocks(they become the components). this greatly simplifies the development and maintenance of complex projects */}

{/*to render the ES6 class you can use the same syntax as before. the only difference is that when you call a ES6 class you must wrap its name in a tag(it becomes a custom tag) */}
ReactDOM.render(<Puppies />,document.getElementById("body-text"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/* just a recap, simple components are rendered with thier variable name such as the HelloJSX at the top of the document. for ES6 class components and functional components we use the custom tag, as show with the Puppies class*/}

{/*React components are (most of the time) written in ES6 class syntax, the more you practise them the more complex you can make them */}
class MyComponent extends React.Component{
    constructor(props){
        super(props);
    };
    
    render() {
        return(
            <div>
                <CloseMe />
                <Kitten />
            </div>
        );
    };
};
ReactDOM.render(<MyComponent />,document.getElementById("more-text"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*So we have learned about the different types of components (simple, functional and ES6 class) */}
{/*Props or properties can be used as a parameter for functional components*/}
const Welcome = (props) =>{
    return (
    <p>hello {props.user}</p>
    );
};
{/*the above means, when the custom tag is rendered, whatever you set the "user" property to will be used as the value*/}
const element = <Welcome user="logan"/>;
ReactDOM.render(element,document.getElementById("myName"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*you can also pass an array as props/properties*/}
const MyArr = (props)=>{
    return (
        <p>{props.color.join(", ")}</p>
    );
};
{/*the above takes the array given to color, joins it into a string separated by a "," */}

const RGB = <MyArr color={["red","green","blue"]} />;
ReactDOM.render(RGB,document.getElementById("RGB"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*You can also set default props. theses values are used when you dont specify*/}
Welcome.defaultProps = {user:'No_User'};
{/*so if you render the welcome component but dont give it a user value, it will use the above*/}
{/*to override the default, just give "user" a value when calling the component*/}
ReactDOM.render(Welcome,document.getElementById("not_my_name"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*if you want the value of props to be integer instead of string, wrap the value in {} */}
ReactDOM.render(<Welcome user={100}/>,document.getElementById("not_a_name"));

{/*PropTypes is a way to check the type of the data being passed to a component*/}
{/*for Example, your application makes an API call that retrieves data that is then passed to a component. with propTypes you can set the component to only accept data of a certain type, if any other type is passed a useful warning will be throw.*/}
{/*the syntax is very similar to defaultProps*/}
MyArr.propTypes ={color: PropTypes.array.isRequired}
//ReactDOM.render(<MyArr color=" not an array" />,document.getElementById("not_an_arr"));
{/*the above render will throw an error, this is because "MyArr" is expecting an array*/}
{/*See it NOT work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}
{/*NOTE:  As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from "https://cdn.skypack.dev/prop-types"; */}

{/*With the ES6 class syntax you can use "this" to access the prop from within the class component*/}
class MyNameIs extends React.Component{
    constructor(props){
        super(props);
    };
    
    render() {
        return(
            <p>my name is: <strong>{this.props.name}</strong></p>
        );
    };
};
ReactDOM.render(<MyNameIs name="Logan" />,document.getElementById("MyNameIs"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}


{/*Terminology recap*/}
{/*a stateless functional component is a function that takes props as a paremeter and returns JSX*/}
const StatelessFunc = (props) =>{
    return (
        <p>I am a... <strong>{props.state}</strong></p>
    );
};
ReactDOM.render(<StatelessFunc state="Stateless functional component" />,document.getElementById("statelessFunc"));

{/*A stateless component is a class that extends "React.Component". it doesn not use internal state */}
class StateComp extends React.Component{
    constructor(props){
        super(props);
    };
    
    render() {
        return (
            <p>I am a... <strong>{this.props.state}</strong></p>
        );
    };
};
ReactDOM.render(<StateComp state="Stateless component" />,document.getElementById("statelessComp"));

{/*A stateful component is a class component that does maintain its own internal state, theses are often referred to as react components or just components*/}
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        name:"Stateful component"
      }
  }
  render() {
    return (
      <div>
        <p>i am a... <strong>{this.state.name}</strong></p>
      </div>
    );
  }
};
ReactDOM.render(<StatefulComponent />,document.getElementById("statefulComp"));
{/*state consists of any data your application needs to know about(can change over time). your app should respond to the changes by making UI changes when necessary*/}
{/*as you can see state is declared within constructor. it is declared as an object, within the object is the property and the property value. we then call that value through state instead of prop */}
{/*state is one of the most powerful features of components. it allows you to track important data in you app and render a UI in response to changes in data. when state data updates, it triggers a re-render of the component using the data*/}
{/*Note: when you make a component stateful, no other components are aware of its state. this means state is local to the component its declared in. this is very important because it allows you to write certain logic and have it contained in one place of your code*/}

{/*a comman pattern, minimize the use of statefulness, use stateless functional components wherever possible. this helps improve development and maintainance of your app by making it easier to follow how changes to state affect its behaviour */}

{/*there is another way to access state, this can be done in the render() before the return. you can write JavaScript code directly, you could declare functions, access data from prop and state, perform computations on this data and so on. you can then assign any data to variables and access them in the return statement*/}
class JsFunctionality extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        name:"logan"
      }
  }
  render() {
  const name = this.state.name
  {/*we can write normal js */}
    return (
      <div>
        <h1>my name is... {name}</h1>
        {/*accessed variable*/}
      </div>
    );
  };
};
ReactDOM.render(<JsFunctionality />,document.getElementById("JsCode"));

{/*so you have seen how to initalize state in the constructor. there is also a way to change a components state using .setState() call it within the component with this.setState() */}
class SettingState extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username: "LoganCode"
        };
      this.handleClick = this.handleClick.bind(this);
      {/*the above is know as a class method. we need to bind class methods with "this" so it can access state and props of the component its in. */}
    };
    
    {/*so we have already bind the method above and can now code it to do something*/}
    handleClick() {
     this.setState({
       username: "LoganCode-sudo"
     });
  }
  
    render(){
      
        return(
          <div>
            <button onClick ={this.handleClick}>GitHub</button>
            <p>{this.state.username}</p>
          </div>
        );
    };
};
ReactDOM.render(<SettingState />,document.getElementById("GitHub"));

{/*the problem with using setState() is when you want the previous state. React may batch multiple updates into a single update (you lose previous values along the way). so if your next state depends on the previous state you wont have the value you need.*/}
{/*there is away around it though, by passing a function to setState() and giving it access to state and/or props, you are guaranteed to work with the most current values */}
class AgeCounter extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            age:10
        };
        this.handleClick = this.handleClick.bind(this);
    };
    
    handleClick() {
     this.setState((state) =>({
         age: state.age + 1
     }));
  };
    
    render(){
        return(
        <div>
            <p>I am {this.state.age} years old.</p>
            <button onClick={this.handleClick}> add year...</button>
        </div>
        );
    };
};
ReactDOM.render(<AgeCounter />,document.getElementById("AgeCount"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*there will be more complex interactions between state and the rendered UI. Such as form controls (inputs, textare). theres maintain their own state in the DOM as "user types". In React you can move this mutable state into a component's state. The users input will then become part of the application state, React controls the value of that input field. a react component with input fields the user can use is known as a controlled input form. */}
class ControlledInput extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            input: "test here..."
        };
    };
    
    handleChange(event){
    {/*pass "event" to class method. it handles the input*/}
        this.setState({
            input: event.target.value
        });
    };
    
    render(){
        return (
            <div>
            {/*as you can see you can bind "this" in the JSX return as well*/}
                <input value={this.state.input} onChange={this.handleChange.bind(this)} />
                <p>Output: {this.state.input}</p>
            </div>
        );
    };
};

ReactDOM.render(<ControlledInput />,document.getElementById("controlled"));

{/*you can create a controlled form similar to what was shown above*/}
class ControlledForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            input: "",
            submit: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    handleChange(event) {
    this.setState({
      input: event.target.value
    });
  };
  
    
    handleSubmit(event) {
    this.setState({
      submit: this.state.input
    });
  };
  
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button type="submit" >Submit!</button>
                </form>
                <p>{this.state.submit}</p>
            </div>
        );
    };
};
ReactDOM.render(<ControlledForm />,document.getElementById("controlledForm"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*we have seen props passed to child elements and child react components, but where does it come from?*/}
{/*a comman pattern is to have a stateful component containing the state important to your app(that then renders child components). you want these components to have access to some pieces of that state, theses pieces are passed in as props */}
{/*this illustrates some important paradigms in React.*/}
{/*first: unidirectional data flow. state flows in one direction down the tree of your application components, from the stateful parent to the child component (child only recieve the state data they need*/}
{/*second: complex stateful apps can be broken down into just a few, maybe a single stateful component. the rest of the components recieve state from the parent as props, and render a UI from that state. it begins to create a separation where state management is handled in one part of code and UI rendering in aonther. this is one of React's key principles. when done correctly it makes desinging complex applications much easier*/}
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name ={this.state.name} />
       </div>
    );
  }
};

{/*the above is a stateful component that has the state name*/}
{/*the below is a stateless component that gets  its props from the state of the stateful component*/}
{/*the flow is as follows: define name in the stateful component, the value is then called in the stateless component through props (which gets the needed state)*/}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is:{this.props.name} </h1>
    </div>
    );
  }
};
ReactDOM.render(<Navbar />,document.getElementById("childComp"));

{/*you can also pass a method through props*/}
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  };
  render() {
    return (
       <div>
        
        <GetInput input = {this.state.inputValue} handleChange= {this.handleChange}/>
        <RenderInput input ={this.state.inputValue}/>
        
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        {/*as you can see the below calls "handleChange" from the MyApp stateful component through props.*/}
        <input value={this.props.input} onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

{/*React has special mwthods that provide opportunities to perform actions at specific times in the lifecycle of a component( lifecycle methods/hooks). theses actions can be done before rendering, before updating, before receiving props, before the unmount and so on */}
{/*some main lifecycles methods are:
    componentDidMount()
    shouldComponentUpdate()
    componentDidUpdate()
    componentWillMount()
    componentWillUnmount()
*/}

{/*componentWillMount() is used to update the state value right before the component is rendered to the DOM. */}
class MyMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ""
    };
  };
  
  componentWillMount() {
   this.setState({
       name: "Logan"
   })
  };
  
  render() {
    return (
        <div>
            <p>{this.state.name}</p>
        </div>
    );
  };
};
ReactDOM.render(<MyMount />,document.getElementById("myMount"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*most web devs will need to make a API call to retrieve data*/}
{/*the best practise with react is to place the API calls/any calls to the server in the componentDidMount() method.this is called after a component is mounted to the DOM. any calls to setState() will trigger a re-render od the conponent. when you call an API in this method, and set state with the data from the AIP return it will automatically triggger an update once you receive the data. */}
class MyDidMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  };
  componentDidMount() {
  {/*the below is a fake server call to show an example of how it works*/}
    setTimeout(() => {this.setState({activeUsers: 1273});}, 2500);
  };
  render() {
    return (
      <div>
        <h1>Active Users:{this.state.activeUsers} </h1>
      </div>
    );
  };
};
ReactDOM.render(<MyDidMount />,document.getElementById("mydidMount"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}
