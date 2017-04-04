'use strict'

const express       = require('express');
const billingSchema = _require('src/modules/billing/schemas/billingSchema');
const errorHandler  = _require('src/server/routes/api/common/errorHandler');

let router = express.Router();

// Routes by node restful
billingSchema.methods(['get', 'post', 'put', 'delete']);
billingSchema.updateOptions({ new: true, runValidators: true });
billingSchema.after('post', errorHandler).after('put', errorHandler);
billingSchema.register(router, '/billing');

// Routes by express
/// /api/billing/count
router.get('/billing/count', (request, response) => {
  billingSchema.count()
    .then(count => response.status(200).send({count}))
    .catch(err => response.status(500).send({err}));
});

/// /api/billing/summary
router.get('/billing/summary', (request, response) => {
  billingSchema.summary()
    .then(res => response.status(200).send(res[0] || { credit: 0, debit: 0 }))
    .catch(err => response.status(500).send(err));
});

module.exports = router;
