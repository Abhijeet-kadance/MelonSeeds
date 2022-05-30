const visualOptions = {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'new-app-2',
    scrollAndStitchScreenshots: true
}

const sauceOptions = {
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
}

exports.config = {
    
    user: process.env.oauth-abhijeet.kadance.96-f66eb,
    key: process.env.24353ad7-e263-41e3-bf48-e045492adfcc,
    services: [
        ['sauce',{
            sauceConnect:true
        }]
    ],
  
    region: 'us',
    
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    hostname:'hub.screener.io',
    port:443,
    protocol:'https',
    path: '/wd/hub',
    capabilities: [{
    
        browserName: 'chrome',
        platformName:'windows 10',
        browserVersion:'latest',
        'sauce:options':{
            ...sauceOptions
        },
        'sauce:visual':{
            ...visualOptions,
            viewportSize:'1366x768'
        }
    }],
    
    logLevel: 'info',
    bail: 0,
    
    baseUrl: 'http://localhost:3000',
    
    waitforTimeout: 10000,
  
    connectionRetryTimeout: 120000,
   
    connectionRetryCount: 3,
   
    services: ['chromedriver'],
  
    framework: 'mocha',
   
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // }
}
