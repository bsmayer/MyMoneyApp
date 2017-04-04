const _  = require('lodash');

const parseErrors = (nodeRestfulErrors) => {
  const errors = [];
  _.forIn(nodeRestfulErrors, error => errors.push(error.message));

  return errors;
}

module.exports = (request, response, next) => {
  const bundle = response.locals.bundle;
  if (bundle.errors) {
    const errors = parseErrors(bundle.errors);
    response.status(500).send({errors});
  } else {
    next();
  }
};
