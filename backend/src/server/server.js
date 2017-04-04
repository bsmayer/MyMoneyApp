'use strict'

const express      = require('express');
const bodyParser   = require('body-parser');
const queryParser  = require('express-query-int');
const billingRoute = _require('src/server/routes/api/billing/route');
const cors         = _require('src/server/routes/middlewares/cors');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);
app.use(queryParser());

// Routes
app.use('/api', billingRoute);

app.listen(process.env.PORT, () => console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`));
