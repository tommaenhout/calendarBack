function handleValidationErrors(err, req, res, next) {
    if (err.name === 'ValidationError') {
      const errors = {};
      for (const field in err.errors) {
        errors[field] = err.errors[field].message;
      }
      return res.status(422).json({ errors });
    }
    next(err);
  }

module.exports = handleValidationErrors;

