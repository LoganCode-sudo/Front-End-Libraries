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
Welcome.defaultProps(user:'No_User');
{/*so if you render the welcome component but dont give it a user value, it will use the above*/}
{/*to override the default, just give "user" a value when calling the component*/}
ReactDOM.render(Welcome,document.getElementById("not_my_name"));
{/*See it work on codepen: https://codepen.io/Logan_code/pen/BaLMwdX */}

{/*if you want the value of props to be integer instead of string, wrap the value in {} */}
ReactDOM.render(<Welcome user={100}/>,document.getElementById("not_a_name"));
