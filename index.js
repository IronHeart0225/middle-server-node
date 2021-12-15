const express = require('express')
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

const host = "https://kabcash.com";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('*', function (req, res) {
    const method = req.method;
    const url = host + req.url;
    console.log(req.body);
    const headers = req.headers;
    var data = JSON.stringify(req.body);

    var config = {
        method,
        url,
        headers,
        data
    };
    console.log(config);

    axios(config)
    .then(function (response) {
        console.log("response => ", response.data);
        return res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        return res.send(error);
    });
})

app.post('*', function (req, res) {
    const method = req.method;
    const url = host + req.url;
    console.log(req.body);
    const headers = req.headers;
    var data = JSON.stringify(req.body);

    var config = {
        method,
        url,
        headers,
        data
    };

    console.log(config);

    axios(config)
    .then(function (response) {
        console.log(response);
        return res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        return res.send(error);
    });
})

app.listen(80, () => console.log("app is runing on 8080"))
app.listen(443, () => console.log("app is runing on 8081"))