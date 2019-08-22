function sayHi(name){
    let mes = "My name is " + name;
    return mes;
}

let assert = require('chai').assert

describe("sayHi", function(){
    it("Get phrase", function(){
        assert.typeOf(sayHi("Ivan"), 'string'); // mocha test - to start
});