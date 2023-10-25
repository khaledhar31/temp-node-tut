// npm - Node Package Manager
// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packagename>

// global dependenc y - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - minfest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm i nodemon -D

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flatMapDeep(items);
console.log(newItems);
console.log('hello ssss')