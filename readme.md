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