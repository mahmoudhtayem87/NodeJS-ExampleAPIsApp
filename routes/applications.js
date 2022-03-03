const express = require('express');
const router = express.Router();
const applications = require('../services/applications');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await applications.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting applications `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
    try {
      res.json(await applications.create(req.body));
    } catch (err) {
      console.error(`Error while creating application`, err.message);
      next(err);
    }
  });

module.exports = router;