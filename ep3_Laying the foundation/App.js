import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = React.createElement(
    'h1',
    { id: 'heading' },
    'Hello World from React'
);

const headingJSX = (
    <h1 id='heading'>
        Hello World from React I am JSX
    </h1>
);

const HeadingComponent = () => (
    <h1 id='heading'>
        Hello World from React I am JSX
    </h1>
);

const FunctionalComponent = () => {
    return (
        <div>
            <HeadingComponent /> // component composition
            <h1 id='heading'>
                Hello World from React I am JSX from Functional Component
            </h1>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FunctionalComponent />);