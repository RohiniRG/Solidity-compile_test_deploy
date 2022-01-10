// For testing
const assert = require('assert')

// Our local testnet to test our contracts
const ganache = require('ganache-cli')

// Web3 is a constructor function so thats why it is capitalized
const Web3 = require('web3')

// Getting the interface and bytecode from the compiled file exports
const {interface, bytecode} = require('../compile')

// We pass a provider, here provider for testnet ganache
const web3 = new Web3(ganache.provider())

let fetchedAccounts
let contract

beforeEach(async () => {
    // To fetch the unlocked (accounts that do not require public and private keys)
    // can also use promise .then() but, async await makes it looks like sync code
    fetchedAccounts = await web3.eth.getAccounts() 

    // deploying the compiled contract's bytecode with its interface from a fetched account 
    contract =  await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there']}) // list of arguments to pass to the constructor 
        .send({from: fetchedAccounts[0], gas: '1000000'})
})

describe('Inbox', () => {
    it ('deploys contract', () => {
        // test passes only if it returns a truthy value
        assert.ok(contract.options.address)
    })
})

// Sample test

// class Car {
//     drive () {
//         return 'vroom'
//     }

//     park() {
//         return 'stopped'
//     }
// }

// let car;

// beforeEach (() => {
//     car = new Car();
// })

// describe ('Car', () => {
//     it ('can drive', () =>  {
//         assert.equal(car.drive(), 'vroom')
//     })
//     it ('can drive', () =>  {
//         assert.equal(car.park(), 'stopped')
//     })
// })
