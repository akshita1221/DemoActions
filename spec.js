const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe('login feature', function()
{
    it('should logged in successfully', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        console.log("test passed")
    })     
    })

