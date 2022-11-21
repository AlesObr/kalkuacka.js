const express = require('express');

const app = require('express')();

app.use(express.static('./www'));

module.exports = app;