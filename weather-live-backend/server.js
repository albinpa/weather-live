const express = require('express');
const config = require('./config/config.json');
const app = require('./index');
app.listen(config.app.port);