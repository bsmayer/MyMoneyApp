'use strict'

const restful      = require('node-restful');
const creditSchema = _require('src/modules/billing/schemas/creditSchema');
const debitSchema  = _require('src/modules/billing/schemas/debitSchema');

const mongoose = restful.mongoose;

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Nome do ciclo de pagamento é obrigatório'] },
  month: { type: Number, min: [1, 'Mês deve estar entre 1 e 12'], max: [12, 'Mês deve estar entre 1 e 12'], required: [true, 'Mês do ciclo de pagamento é obrigatório'] },
  year: { type: Number, min: 1970, max: 2100, required: [true, 'Ano do ciclo de pagamento é obrigatório'] },
  credits: [creditSchema],
  debits: [debitSchema]
});

billingCycleSchema.statics.summary = function() {
  return this.aggregate(
    {
      $project: {
        credit: {
          $sum: "$credits.value"
        },
        debit: {
          $sum: "$debits.value"
        }
      }
    },
    {
      $group: {
        _id: null,
        credit: {
          $sum: "$credit"
        },
        debit: {
          $sum: "$debit"
        }
      }
    },
    {
      $project: {
        _id: 0,
        credit: 1,
        debit: 1
      }
    }
  );
};

module.exports = restful.model('BillingCycle', billingCycleSchema);
