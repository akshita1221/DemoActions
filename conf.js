var HtmlReporter = require('protractor-beautiful-reporter');
exports.config={
    directConnect: true,
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome',
      
        'chromeOptions': {
           args: [ "user-agent=Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/95.0.4638.54 Mobile Safari/535.19", "--headless", "--disable-gpu" ]
         }
      },
  onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'Reports',
           preserveDirectory: false
        }).getJasmine2Reporter());
     }

     
}
