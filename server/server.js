const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh' , (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:8080/home",
        clientId: "cb68540409d947c8a34d95a24dbe65d7",
        clientSecret: "6e1f757a7b83463a9c56c1e88c2018f6",
        refreshToken
    })

    spotifyApi.refreshAccessToken()
        .then(data => {
          res.json({
            access_token: data.body.access_token,
            expires_in: data.body.expires_in,
          })
        }).catch(() => {
            res.sendStatus(400)
        })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:8080/home",
        clientId: "cb68540409d947c8a34d95a24dbe65d7",
        clientSecret: "6e1f757a7b83463a9c56c1e88c2018f6",
    })
    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            access_token: data.body.access_token,
            token_type: data.body.token_type,
            refresh_token: data.body.refresh_token,
            expires_in: data.body.expires_in,
            scope: data.body.scope,
        })
    }).catch((err) =>{
        console.log(err)
        res.sendStatus(400)
    })

})

app.listen(3001)