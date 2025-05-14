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

# Chapter 01 - Igniting Our App

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

> npx parcel index.html        ---- X
> npx parcel build index.html  ---- X
    - Add scripts in package.json file 
        - "start": "parcel index.html", > npm run start (or) npm start
        - "build": "parcel build index.html" > npm run build

* React Element: 
    Plain JS object describe the DOM node or HTML Element.
        React.createElement(
            'h1',                             render()                  HTML Element
            { id: 'heading' },             --------------->   <h1>Hello World from React</h1>  -----> DOM ---> Display
            'Hello World from React'
        );

* JSX (JavaScript XML):
    - HTML / XML Like Syntax
    - JSX is not HTML in JS                     
                                                use             
                                        Parcel ------> BABEL
                                            transpiled                                                                                  
    <h1>Hello {name} from React</h1> --------------------------> React.createElement('h1', {id: 'heading'}, 'Hello world from React') ---
    
       render()                HTML Element
    ---------------> <h1>Hello World from React</h1>  -----> DOM ---> Display
                                            
* Components in React:
    Reusable piece of code Every react component return HTML Element
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


                                        


