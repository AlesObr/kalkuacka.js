const express = require('express');
const { route } = require('express/lib/application');
const req = require('express/lib/request');
const jsondb = require('simple-json-db');
const db = new jsondb('./data/buttons.json');
const router = express.Router();

const app = require('express')();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./www'));


router.post("/api", function (req, res) {
    console.log(req.body.tlacitko);
    const stisknute = req.body.tlacitko;
    var i = db.get(stisknute);
    console.log(i);
    if(i != null){

        db.set(stisknute, i + 1);
    }
    else{
        db.set(stisknute, 1);
    }
    res.json(db.JSON()) 
});

app.use(router)
module.exports = app;
