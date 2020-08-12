// Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Nunjucks - Template engine
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})


//Inicio e configuraçã odo servidor
server

// receber dados pelo req.body
.use(express.urlencoded({ extended: true }))

.use(express.static("public"))

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)  
.post("/save-classes", saveClasses)

// Start do servidor
.listen(5500)