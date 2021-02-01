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

{/* the componentDidMount() method is also the best place to attach any event listeners you need for specific functionality. React provides a synthetic event system which wraps the event system in the browser. this means that React's event system behaves exactly the same regardles of the users browser.*/}
{/*we have already used some of these synthetic event handlers such as onClick(). reacts event system is great for most interactions you'll manage on DOM elements. however if you want to attach an event handler to the doc or windows object, you will have to do it directly.*/}
class MyListener extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            output: ""
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    };
    
    componentDidMount(){
        {/*add event listener*/}
        document.addEventListener("event", this.handleKeyPress);
    };
    
    componentWillUnmount(){
        {/*its good practise to use the below to clean up events before its unmounted and destroyed*/}
        document.removeEventListener("event",this.handleKeyPress);
    };
    
    handleEnter(){
        this.setState((state) =>({
            output: "this is enter"
        }));
    };
    
    handleKeyPress(event){
        {/*the below is used to check what key the user pressd, keyCode is the Number assinged to a key, 13 is enter*/}
        if(event.keyCode === 13){
            this.handleEnter();
        };
    };
    
    render(){
        return (
            <div>
                <h1>{this.state.output}</h1>
            </div>
        );
    };
    
};
ReactDOM.render(<MyListener />,document.getElementById("eventListener"));

{/*if componets receive a new state or prop, it re-renders itself and its children, normally this isnt a problem*/}
{/*react offers a lifecycle method you can call when child components receice a new state or prop, and declare specifically if the component should update or not*/}
{/*the method shouldComponentUpdate() takes two parameters, nextProps and nextState*/}
{/*this method is a useful way to optimize performance. e.g. the default behaviour is that your component re-renders when it receives new props, even if the prop didnt change. you can use ShouldComponentUpdate() to prevent this by comparing the props. the method returns a boolean that triggers the re-render or not*/}
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    {/*only if the number is even will it re render*/}
    if(nextProps.value % 2 === 0){
      return true ;
    }else{
      return false;
    };
  };
  
  componentDidUpdate() {
    console.log('Component re-rendered.');
  };
  
  render() {
    return <h1>{this.props.value}</h1>;
  };
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  };
  
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  };
  
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
    
  };
  
};
ReactDOM.render(<Controller />,document.getElementById("isEven"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*inline styles, you might remember theses from HTML using the style tag. you can do the same in React but with a little difference*/}
class Colorful extends React.Component {
  render() {
    return (
    {/*the styles are nested within two sets of {{}}*/}
      <div style={{color:"red", fontSize:"72px"}}>Big Red</div>
      {/*also note that we use camel case for styles that use - like font-size. also note that "72px" is in quotes, this is so that we can specify the size type px */}
    );
  }
};

{/*you can create style objects that hold styles. this can help when multiple elements need the same style.*/}
const styles = {
  color: "purple",
  fontSize: "40px",
  border:"2px solid purple"
};

class Colorful extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
  }
};

{/*you can write javascript directly in the render() before the return*/}
class MyTest extends React.Component{
    constructor(props){
        super(props);
    };
    
    render(){
        var age =19;
        
        return (
            <h1>{age}</h1>
        );
    };
};
ReactDOM.render(<MyTest />,document.getElementById("OfAge"));

{/*being able to write normal js allows you to control what is rendered based on how you process the return. below is an example of using a if/else statement to render different UI*/}
class MyIfStatement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  
  render() {
    if(this.state.display === true){
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                <h1>Displayed!</h1>
            </div>
        );
    }else{
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
        );
    };
   
  };
};
ReactDOM.render(<MyIfStatement />,document.getElementById("ifTrue"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}
{/*the above will work when dealing with afew different outcomes, but there is another way to achieve the same results.*/}

{/*the && operator is used to create a sort of inline if statement:*/}
class MyAndOp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {/*the below reads, if state.display is true show this <h1>. so only if the value is true will h1 show up. {condition && what-to-render} */}
         {this.state.display ==true && <h1>Displayed!</h1>}
       </div>
    );
  }
};

{/*the ternary operator is another way to write inline if/else statements. the problem with if/else is that its always on the outside of the return statement. the ternary operator can be used within your JSX*/}
{/*the basic syntax is: (condition? iftrue:itfalse)*/}
{/*you can also chain multiple statements together*/}

const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input:"" ,
        userAge: 0
    };
    
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  };
  
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  };
  
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        
        {
        {/*the below can be read as (if userAge is empty show button one, else check if age is over 18, if it is over 18 show button two, else is false show button three*/}
           this.state.userAge ==="" ? buttonOne: this.state.userAge >=18 ?buttonTwo:buttonThree
        }
      </div>
    );
  }
}
ReactDOM.render(<CheckUserAge />,document.getElementById("inline"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*so far we have seen the if/else, &&, and ternary operator. all are used to make conditional decisions. there is one topic left that will let you combine any/all of the above methods*/}
{/*React feature: props.*/}
{/*using props to conditionally render code is very common within the react communtity. they use the value of a given prop to automatically make decisions about what to render.*/}
{/*below we have two components, results being the child.*/}
class Results extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return( 
        <h1>
        {/*below you can see how we use props to do the decision making*/}
            {this.props.fiftyFifty === true? "You Win!":"You Lose!"}
        </h1>
        );
  };
  
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  };
  
  handleClick() {
    this.setState({
      counter: this.state.counter +1
    });
  };
  
  render() {
  {/*the const below will produce a true or false*/}
    const expression = Math.random() >=.5? true:false ;
    
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/*call the child with its prop, set the prop to the expression*/}
        <Results fiftyFifty= {expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  };
  
};

{/*so far we have been using conditionally rendering to render HTML but we can also use it to render CSS based on the state of a component*/}
{/*to do this, we check for a condition, if condition is met, modify the styles object that's assigned to the JSX elements in the render method*/}
{/*this paradigm is important to understand. Its a dramatic shift from the traditional approach of applying styles by modifying DOM elements directly (common with jQuery). in that approach you must keep track of when elements change and also handle the actual manipulation directly. this can make it difficult to keep track of changes, making your UI unpredictable */}
{/*when you set a style object based on conditions, you describe how the UI should look as a function of the application's state. there is a clear flow of information that only moves in one direction*/}
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  };
  
  handleChange(event) {
    this.setState({ input: event.target.value })
  };
  
  render() {
  {/*Style object...*/}
    let inputStyle = {
      border: '1px solid black'
    };
    
if(this.state.input.length > 15){
  inputStyle.border = "3px solid red"
};

    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        {/*the style tag is set to the style object*/}
        <input type="text" style={inputStyle} value={this.state.input} onChange={this.handleChange} />
      </div>
    );
  };
};
ReactDOM.render(<GateKeeper />,document.getElementById("CSStyle"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*sometimes you will need your component to render an unknown number of elements. often in reactive propgramming, a propgrammer has no way to know what the state of an application is until runtime, because so much depends on a user's interaction with the application. you need to write code to correctly handle this unknown state ahead of time, using Array.may() in react illustrates this concept.*/}
{/*for example lets say you writtinig a "to do list" app. you have no way of knowing how many items a user might have on their list. you need to set up your component to dynamically render the correct number of list elements. */}
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    
    {/*we define the userInput and the empty array that we are going to populate*/}
    this.state ={
        userInput:"",
        toDoList:[]
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  };
  
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  };
  
  render() {
    {/*we pass a function to map with two parameters. item is what we adding to the list, i(index) is the key value*/}
    const items = this.state.toDoList.map((item,i)=> <li key={i}>{item}</li>); 
    return (
      <div>
        <textarea onChange={this.handleChange} value={this.state.userInput} style={textAreaStyles} placeholder='Separate Items With Commas' />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  };
};
ReactDOM.render(<MyToDoList />,document.getElementById("ToDo"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*if you look at const items above you will see that <li> has a key attribute, this is to keep track of which items are added,changed or removed. this helps make the re-rendering process more efficient when the list is modified in any way.*/}
{/*NOTE: keys are not global, they only need to be unique between sibling elements*/}
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item,i)=> <li key={i}>{item}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
};

{/*NOTE: Normally, you want to make the key something that uniquely identifies the element being rendered. As a last resort the array index may be used, but typically you should try to use a unique identification.*/}

{/*Array.filter() can be used filter contents of an array based on a condition, then returns a new array*/}
class MyFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  };
  render() {
  {/*filter usernames, store only online users*/}
    const usersOnline = this.state.users.filter(user=>user.online ===true);
    
    {/*render online usernames*/}
    const renderOnline = usersOnline.map((users)=> <li key={users.username}>{users.username}</li>);
    
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  };
};
ReactDOM.render(<MyFilter />,document.getElementById("filtering"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*so far we have just been rendering components on the client, normally this is what you will always do. however there are some cases where it makes sense to render a react component on the server. since react is a js view libarary and you can run js on the server with node, this is possible. react provides a renderToString() method*/}
{/*there are two key reasons why rendering on the server may be used in a real world app.*/}
{/*Firstly, without doing this, your app would consist of a relatively empty HTML file and a large bundle of JS when it's initially loaded to the browser. this may not be ideal for search engines that are trying to index the content of your pages so people can find them. if you render the initial HTML markup on the server and send that to the client, the initial page load contains all the page's markup which can be crawled by search engines*/}
{/*Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JS code. react will still be able to recognize you r app and manage it after the initial load*/}
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>
  }
};

ReactDOMServer.renderToString(<App />);
