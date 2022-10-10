//npm == global command, comes iwth nodeTest
//npm --version
//local dependency - use it only in this project 
//npm i <packageName>

//global dependency - use it in any project 
//npm install -g <packageName>
// sudo npm install -g <packageName>

// package.json -manifest file(stores impt info about project/package)
// 3 ways to create package.json down below
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//nom init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, 4], 5], 6]
const newItems = _.flattenDeep(items)
console.log(newItems)