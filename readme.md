# Chapter 01 - Inception

# Theory -
    ● What is Emmet?
    ● Difference between a Library and Framework?
    ● What is CDN? Why do we use it?
    ● Why is React known as React?
    ● What is crossorigin in script tag?
    ● What is diference between React and ReactDOM
    ● What is difference between react.development.js and react.production.js files via CDN?
    ● What is async and defer? - see my Youtube video ;)

# Coding -
    ● Set up all the tools in your laptop
        ○ VS Code
        ○ Chrome
        ○ Extensions of Chrome

    ● Create a new Git repo
    ● Build your first Hello World program using,
        ○ Using just HTML
        ○ Using JS to manipulate the DOM
        ○ Using React
            ■ use CDN Links
            ■ Create an Element
            ■ Create nested React Elements
            ■ Use root.render

    ● Push code to Github (Theory as well as code)
    ● Learn about Arrow Functions before the next class

References:
    - https://beta.reactjs.org/apis/react/createElement
    - https://www.youtube.com/watch?v=IrHmpdORLu8

# Chapter 02 - Igniting Our App

We build "create-react-app" from scratch and understand every details.

1. create existing ep1 code of react CDN
2. > npm init 
3. > npm install -D parcel
4. create .gitignore file and add node_modules
5. > npx parcel index.html <--- development build
    - Error (Did you mean App.html)
        - remove entry point line in package.json "main": "App.js"
6. remove CDN Links
    - Error (React is not defined)
        - > npm install react react-dom
        - import React from 'react'
        - import ReactDOM from 'react-dom'
    - Error (Browser script cannot have import or export)
        - Do changes in script <script type="module" src="./App.js"></script>

7. > npx parcel build index.html <--- production build -- takes time compared to dev build
8. put .parcel-cache, /dist, /node_modules in .gitignore file
9. config browerslist in package.json file for making app compatible with old browsers
10. our app is IGNITED now

# Chapter 03 - Laying the foundation (React Element, JSX, Babel, Components)

* Don't use that

* > npx parcel index.html
* > npx parcel build index.html

* Instead Add scripts in package.json file 
    - "start": "parcel index.html", > npm run start (or) npm start
    - "build": "parcel build index.html" > npm run build

* React Element: 
    - Plain JS object describe the DOM node or HTML Element.
        - React.createElement(
            'h1',                         
            { id: 'heading' },     
            'Hello World from React'
        );
    
    React.createElement()--->{jsObj}--->render({jsObj})--->DOM

* JSX (JavaScript XML):
    - HTML / XML Like Syntax
    - JSX is not HTML in JS                  
                                                                                   
        < h1> Hello {writeJSCodeHere} from React </ h1>
    
    JSX--->Babel --->React.createElement()--->{jsObj}--->render({jsObj})--->DOM  
                                     
* Components in React:
    * Reusable piece of code Every react component return HTML Element
        - Functional based components
        - Class based components

* Functional based components:
    This are JS functions that return JSX

        const HeadingComponent = () => {
            return <h1>Heading</h1>
        }

        const FunctionalComponent = () => {
            return (
                <div>
                    <HeadingComponent /> // component composition (components nesting)
                    <h1 id='heading'>
                        Hello World from React I am JSX from Functional Component
                    </h1>
                </div>
            );
        }

        render(<FunctionalComponent />)  // Component should only be called like this

        // only pass JSX
        const headingJSX = (
            <h1 id='heading'>
                Hello World from React I am JSX   ---> render(headingJSX)
            </h1>
        );

        You can use JS in JSX
            const data = 'ABCD'

            <div>
                <span>{data}</span>
            </div>
        If data is fetching from API
            const data = api.getData() <---- Attacker can send malicious data that display in app

            <div>
                <span>{data}</span>
            </div>
        JSX (JavaScript XML) in React helps prevent injection attacks by automatically escaping any values embedded within JSX elements. This means that React converts all embedded values to strings before rendering them, effectively neutralizing potentially malicious code.


        You can do also
            const data = 'ABCD'
            const element = <h1>Hello</h1>
            const Component = () => {
                return (
                    <h1>I am component</h1>
                )
            }
            
            <div>
                <span>{data}</span>
                {element}
                {Component()} (or) <Component/> (or) <Component></Component>
            </div>

# Chapter 04 - Talk is cheap, show me the code

## Building Food Delivery App

**Project Structure**
```
App
    header
        logoContainer
            logo
        navItems
            home
            about
            contact
            cart
    body
        searchContainer
            searchBar
            searchBtn
        CardContainer
            Card
                image
                name
                cusisines
                avgRating
                costForTwo
                delhiveryTime
    footer
```

### Props

    - Short for properties, are a mechanism for passing data from parent components to child components in React.
    - Props is React is like similar for arguments in JavaScript functions.
    - Props in components === Arguments in JS

### Config Driven UI

    Server ----> {JSON} ----> UI

    It means using a configuration file (json, yaml) to define how the user interface looks and behaves rather than directly coding those details into the application itself.

### Key prop in React
     
O O O O | O*  -----DOM Re-Render All------> O O O O O <br/>

O O O O | O*  -----DOM Re-Render Only 5th------> O O O O O <br/>
1 2 3 4<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>5
<br/>
* = changes, new added

The key prop is used in react to identify by dom when multiples items render using map if you not giving unique key prop to each item the DOM consider this all the same items so that whenever the new item come or changes in existing items so DOM is not identify which items are new or changes so it will re-render all items, If you give unique key for each items the DOM with re-render exact item that have been added or updated.

### Not use index as a Key prop

Key = {index}  X<br/>
Key = {item.id}  Use this React Says

If items are removed, updated or added this can change arrangement that react DOM don't understand that causes incorrect re-rendering, data inconsistence & unnecessary re-render.


# Chapter 05 - Let's get Hooked

## Two types of Export/Imports

    1. Default
        - export default **moduleName**;
        - import **moduleName** from "path";
    2. Named
        - export **const moduleName**;
        import { **moduleName** } from "path";

### Libraries and Frameworks ?
    - Developer expericence easy
    - Write less code
    - Optimize code
    - Provide extra super power's ( We learn Hook's now )

### Why need Hook's

    If you want to sync data layer with UI layer and expect the change in data directly reflect in UI is not possible you some how to refresh that UI to getting the letest updated data but its not happen using the normal javascript variable so React provide us the State variable with extra super power that extra super power is setState() function that triggered the UI component to re-render again.

### What is Hook's

    It is a normal JS utility functions provide extra super power for react variable to managing the state, side effects in react.

    1. useState()
        - It is used to manage the state inside a component locally.

        - const [state, setState] = useState()

    2. useEffect()
        - It is used to run after a component render. It's used in API calls (or) those functionalities that we have to run after a component was render.

        - const useEffect(()=> {}, [])
            - ()=>{} ===> callback function
            - [] ===> dependency array

    - **STATE IN REACT**: state is a built-in object within a component that stores data about the component's current condition.

    - **EFFECT IN REACT**: Effect refers to side effects triggered by a component's rendering process. These are operations that don't directly impact the component's UI but interact with the outside world, such as fetching data, setting up subscriptions, or directly manipulating the DOM. React uses the useEffect hook to manage these effects, allowing components to synchronize with external systems.

### Reconciliation Algorithm In React (React Fiber since v16.8)

Till Now we learn React achieve dynamic nature in UI by re-rendering the component to intract with updated data layer, But how can React do this? Now we will dive deep into Working of React.js.

React uses Reconciliation algorithm 

    - **Reconciliation**: The algorithm React uses to diff one tree with another to determine which parts need to be changed.

    - **Update**: A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

    React Re-render UI part (component) that need to be changed in efficient way beacuse of the Virtual DOM that is the "Representaion on the actual DOM". In first render react creates V.DOM and when the component state is changed the component should need to be re-render so react forms a new V.DOM and compare with old V.DOM and calculate the difference what need to be changed and Then it will update the actual DOM.

    Reconciliation is the process of keeping 2 DOM Trees in sync by a library like ReactDOM. It is done by using Reconciler and a Renderer.

    Reconciler uses Diffing Algorithm to find differences between Current Tree and Work in Progress Tree and sends computed changes to the Renderer.

    The Renderer is the one that updates the app’s UI. Different devices can have different Renderers while sharing the same Reconciler.

    [Learn more about React Fiber](https://github.com/acdlite/react-fiber-architecture)

# Chapter 06 - Exploring the world

## Monolithic and Microservices Architechtures

**Monolithic** applications are single, unified codebases, while microservices architectures break applications into smaller, independent services.

    [ API Service + UI Service + Auth Service + DB Service + SMS Service ] = Monolithic App

**Microservices** applications is structured as a collection of independently deployable, loosely coupled services.

    [UI Service] --- / :1234
    [ API Service ] --- /api :8080
    [SMS Service] --- /sms :3000
    [Auth Service] 
    [DB Service]

## API Call Approaches:

1. App Loads ---> API call ---> Render
2. App Loads ---> Render ---> API call ---> Re-render  **Better in UX In react we recommended**

## Shimmer UI

Fake representation on the actual UI that rendered before data comes.

Shimmer UI, also known as skeleton UI or placeholder UI, is a user interface design pattern used to provide a visual representation of loading content.

## Conditional Rendering:

Rendered different UI's on the basic of conditions.

Conditional rendering in React is a technique to render different UI elements or components based on certain conditions. It's similar to how conditions work in JavaScript, using statements like if/else, ternary operators, and logical operators to control what is displayed.

# Chapter 07 - Finding the path
syntax:

```
useEffect(() => {
  // side effect code here

  return () => {
    // cleanup code here (optional)
  };
}, [dependencies]);
```

**useEffect(()=>{}) with no dependency** : Execute every component render.

**useEffect(()=>{}, []) with empty dependency** : Execute initial component render.

**useEffect(()=>{}, [id]) with some dependency** : Execute first render with component render after execute if your dependency changes means **id** changes or updated.

**useEffect(()=>{**
    **return () => {**
    **socket.close(); // Cleanup on unmount**
  **};**
**}, [])** : When you're setting intervals, WebSocket, or subscriptions, you must clean them up.

### Routing
Routing in web development refers to how navigation is handled in applications. Traditionally, HTML used server-side routing, where each URL change triggered a full page reload from the server. In contrast, React uses client-side routing via libraries like react-router-dom, allowing dynamic page rendering without reloading the browser, giving users a seamless single-page app (SPA) experience. React doesn’t include routing by default to stay lightweight and modular. On the backend, API routing handles HTTP requests (e.g., GET /api/users) to serve data or perform logic. While frontend routing decides what UI to show, backend/API routing decides what data to serve. Both work together: the frontend renders pages based on routes, and fetches data from backend APIs to populate those pages.

- Analogy (for Interviews)
Think of frontend routing like the TV remote — it changes what you see on the screen.
Think of backend/API routing like the cable provider — it decides what content (data) is sent when you press a channel.

### Two types of routing
1. **Server Side Routing**
    -   You request a page /about throuth anchor tag <a href='/about'>About</a> that make's a request call to the server and server get back with the HTML page and reload the whole page.

2. **Client Side Routing**
    - You request a page /about throuth react-router-dom utilities Link tage <Link to={'/about'} >About</Link> that replace only the component and whole page is not getting refresh.

# Chapter 08 - Let's get Classy

## Class Components: 

- It is create using javascript ES6 classes that extends or inherit from React.Component and render() method is return the JSX, It is older way of creating the components in react.

```
class ComponentName extends from React.Component{
    render(){
        return (
            <div>Class Component</div>
        )
    }
}
```
- To get props in Class Component, passing props is same as in functional components
```
class ComponentName extends from React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>this.props.name</div>
        )
    }
}
```
To create state in Class Component
```
class ComponentName extends from React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }
    render(){
        return (
            <div>this.state.count</div>
        )
    }
}
```
To set state in Class Component
```
class ComponentName extends from React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={
                    this.setState({
                        count: this.state.count + 1
                    })
                }>Increament</button>
            </div>
        )
    }
}
```

## Component Lifecycle Phases and Lifecycle Methods

## Lifecycle Phases: 
 - Series of stages a component goes through from its creation to it's removal from the DOM.

    1. BORN - Mounting: 
        - These methods are called in the following order when an instance of a component is being created and inserted into the DOM.

    2. GROW - Updating:
        - An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered.
    3. DIE - Unmounting:
        - This method is called when a component is being removed from the DOM.

## Lifecycle Methods:

At each phases different methods is used for different use cases.

1. Mounting
    - **constructor()**: Initial state or Bind
    - static getDerivedStateFromProps()
    - **render()**: Return jsx rendered to DOM
    - **componentDidMount()** : After component mounted/loaded

2. Updating
    - static getDerivedStateFromProps()
    - shouldComponentUpdate()
    - **render()**: 
    - getSnapshotBeforeUpdate()
    - **componentDidUpdate()**: After component updated

3. Unmounting
    - **componentWillUnmount()**: Before component was removed

## React execute components lifecycle phases in 2 stages.

- While react encounters two child class components that are siblings each other than in that case the react is Batching update both in render phase first and then its will execute the commit phase.

1. Render Phase: Pure and has no side effects. May be paused, aborted or restarted by React.

- Mounting [ constructor --> render ]
- Updating [ render ]
- Unmounting []

2. Commit Phase: Can work with DOM, run side effects, schedule updates.

- Mounting [ componentDidMount ]
- Updating [ componentDidUpdate ]
- Unmounting [ componentWillUnmount ]

[Refer this Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/):

# Chapter 09 - Optimizing Our App

## Single Responsibility Principle (SRP):
- The Single Responsibility Principle (SRP) in React suggests that each component should have one clear responsibility or role. In other words, a React component should do one thing and do it well.
- Do one task only

## Modular Code
- Modular code refers to the practice of breaking down a large application into smaller, independent, and reusable modules or components.
- use for test cases (easly)
- Reuse component (Reusability)
- Maintainability
- Testable

## Custom Hook's

Custom hooks in React are JavaScript functions that enable the reuse of stateful logic across different components. They follow specific naming conventions, always starting with the prefix "use," such as useCounter or useFetch.

## Lazy Loading / Dynamic Bundling / Chunking / On Demand Loading / Code Splitting / Dynamic Import

### What is Lazy Loading in React?
Lazy Loading in React means loading components only when they are needed, instead of loading everything at once during the initial render.

### Why Use Lazy Loading?
To improve performance by reducing the initial load time of the app — especially for large applications with many components or routes

### Example: Without Lazy Loading
`
import About from "./About"; // Loaded immediately

function App() {
  return (
    <div>
      <Home />
      <About />
    </div>
  );
}
`
-  Even if About is not shown initially, it gets loaded right away.

### With Lazy Loading (React's lazy and Suspense)
`
import { lazy, Suspense } from "react";

const About = lazy(() => import("./About")); // Lazy loaded

function App() {
  return (
    <div>
      <Home />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}

`
- **lazy():** tells React to load the component on demand.

- **Suspense:** wraps lazy-loaded components and shows a fallback (like a loading spinner) while loading.

### Common Use Case: Lazy Loading Routes
`
const Contact = lazy(() => import("./pages/Contact"));

<Route path="/contact" element={
  <Suspense fallback={<div>Loading contact page...</div>}>
    <Contact />
  </Suspense>
} />

`

### Benefits

- Faster initial load
- Reduced bundle size
- Better user experience on slow networks

# Chapter 10 - Jo Dikhta Hai Wo Bikta Hai ( UI )

- To beutify UI we use simple css or custome css

## Sass ( Syntactically Awesome Stylesheet ):
- css preprocessor, a scripting language that is compiled into css.

## Scss ( Sassy Cascading Style Sheets ):
- It is also a css preprocessor, only syntax and extension difference.

**.css**
`
body {
  color: #333;
}

.container {
  padding: 10px;
}
`

**.sass**

`
body
  color: #333

.container
  padding: 10px

`

**.scss**
`
$primary-color: #333;

body {
  color: $primary-color;
}

.container {
  padding: 10px;

  .inner {
    margin: 5px;
  }
}

`

## Frameworks:
    1. styled-component -- Industry standard
    2. Material UI
    3. Bootstap
    4. Chakra-UI
    5. Tailwind CSS -- We use this
    ...

## Tailwind CSS
- Rapidly build modern websites without ever leaving your HTML.

### What is Post CSS:
 - Tool for transforming CSS inside JS

Tailwind ---Uses Behind---> Post CSS

### Installation:
    ---> Choose Framework
    ---> Follow Steps

### Pros
1. Tailwind is lightweight and easy to use becuase it's includes only required CSS.
2. You have not move towards CSS and HTML files while writting CSS.

### Cons
1. Initial Learning Curve
2. Your JS file should lenthy while wrtting complex CSS.

# Chapter 11 - (Data is the new Oil)

## Higher Order Component (HOC):
- Advance technique for reusing component logic.
- It is a function that takes a component as an argument and returns a new, enhanced component.
`
<Comp. />
    -------I/P------> 
        
        function(component){
            return(props){
                return(
                    <component {props}>
                )
            }
        }
        
    <--------O/P---------
<Comp./>  // Enhanced Component
`

## Lifting State Up & Controlled and Uncontrolled Components

[Refer this DOC](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example):

Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.

- When you want to coordinate two components, move their state to their common parent.
- Then pass the information down through props from their common parent.
- Finally, pass the event handlers down so that the children can change the parent’s state.
- It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

### What is the single source of truth (SSOT) concept?
The SSOT concept, in software development, states that pieces of data should be stored in only one location within a system, ensuring there is one…

This ensures consistency and prevents data from being duplicated, reducing the risk of conflicts and discrepancies in the UI.

## Props Drilling

[Refer this DOC](https://react.dev/learn/passing-data-deeply-with-context#replace-prop-drilling-with-context):

Prop drilling in React refers to the process of passing data (props) down through multiple layers of nested components to reach a deeply nested child component that needs that data.

## Context

React Context provides a way to share data between components without explicitly passing props through every level of the component tree. It's a way to manage global state, making data accessible to any component in the application, regardless of nesting.