const assert = require('assert');
const ganache = require('ganache-cli');
// Web3 is a constructor function so thats why it is capitalized
const Web3 = require('web3');

// We pass a provider, here provider for testnet ganache
const web3 = new Web3(ganache.provider());


class Car {
    drive () {
        return 'vroom'
    }

    park() {
        return 'stopped'
    }
}

let car;

beforeEach (() => {
    car = new Car();
})

describe ('Car', () => {
    it ('can drive', () =>  {
        assert.equal(car.drive(), 'vroom')
    })
    it ('can drive', () =>  {
        assert.equal(car.park(), 'stopped')
    })
})
