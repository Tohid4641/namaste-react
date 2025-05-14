const root = document.getElementById('root');
const container = document.createElement('div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');

h1.innerHTML = 'heading 1'
h2.innerHTML = 'heading 2'

container.appendChild(h1)
container.appendChild(h2)

root.appendChild(container);