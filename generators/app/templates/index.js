//
//                      Project Index
//

// =======================================================
//  Require Diet
// =======================================================
var server = require('diet')

// =======================================================
//  Create Server
// =======================================================
var app = module.app = server()
    app.config = require('./config')(app)
    app.listen(app.config.host)

// =======================================================
//  Initialize Models & Routes
// =======================================================
    require('./models')(function(){
        require('./routes')
    })
    
    