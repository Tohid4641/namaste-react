import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM
    .createRoot(
        document.getElementById('root')
    )
    .render(
        React.createElement(
            'div',
            { id: 'parent', key: '1' },
            [
                React.createElement(
                    'div',
                    { id: 'child', key: '2' },
                    [
                        React.createElement('h1', { key: '3' }, 'This is H1'),
                        React.createElement('h2', { key: '4' }, 'This is H2')
                    ]
                ),
                React.createElement(
                    'div',
                    { id: 'child2', key: '5' },
                    React.createElement(
                        'h1',
                        { key: '6' },
                        'This is H1 of child2'
                    )
                )
            ]
        )
    )

