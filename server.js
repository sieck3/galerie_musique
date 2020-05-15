'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dao = require('.').dao

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('dist'))

const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'

app.get('/genders', (request, response) => {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    dao.connect()
    dao.query('SELECT * FROM playlist', [], (result) => {
        // assert.strictEqual(result.command, 'SELECT')
        response.end(JSON.stringify(result.rows))
        dao.disconnect()
    })
})

app.get('/playlists/playlist', (request, response) => {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    dao.connect()
    dao.query('SELECT * FROM track', [], (result) => {
        // assert.strictEqual(result.command, 'SELECT')
        response.end(JSON.stringify(result.rows))
        dao.disconnect()
    })
})

app.post('/track', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })

    dao.connect()
    dao.query('INSERT INTO track (title,playlist_id,uri,master_id) VALUES (' + "'" + request.body.title + "'" + ',1,' + "'" + request.body.uri + "'," + request.body.masterCode + ')', [], (result) => {
        // assert.strictEqual(result.command, 'SELECT')
        response.end(JSON.stringify(result.rows))
        dao.disconnect()
    })
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
