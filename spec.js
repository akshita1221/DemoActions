const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");
//test passed
describe('login feature', function()
{
    it('should launch the given url successfully', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        console.log("test passed")
    })     
    })

