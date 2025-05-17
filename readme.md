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





