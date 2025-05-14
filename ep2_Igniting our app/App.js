
ReactDOM
    .createRoot(
        document.getElementById('root')
    )
    .render(
        React.createElement(
            'div',
            { id: 'parent' },
            [
                React.createElement(
                    'div',
                    { id: 'child' },
                    [
                        React.createElement('h1', {}, 'This is H1'),
                        React.createElement('h2', {}, 'This is H2')
                    ]
                ),
                React.createElement(
                    'div',
                    { id: 'child2' },
                    React.createElement(
                        'h1',
                        {},
                        'This is H1 of child2'
                    )
                )
            ]
        )
    )

