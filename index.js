const express = require("express") // Express = application framework atop Node
const helmet = require("helmet") // Adds https headers for security
const logger = require("morgan") // logger for inspecting calls
const server = express() // initialize server
const port = process.env.port || 3095; // set default port if one is not configured on running machine instance
const projectRouter = require('./data/routes/projectRouter')
// Pulling in modular router for Project related inputs
const actionsRouter = require('./data/routes/actionsRouter')
// Pulling in modular router for Actions related inputs

server.use( // initializing middleware for availability to server
 helmet(),
 logger('dev'),
 express.json() // allows for two way parsing of JSON objects
)

server.use('/api/projects', projectRouter) // Allows server access to request handler for endpoint(s)
server.use('/api/actions', actionsRouter)

server.listen(port, () => { // initializes server to listen for requests
 console.log(`Server is running live on ${port}`)
})