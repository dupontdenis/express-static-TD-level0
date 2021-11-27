const debug = require('debug')('controller:levels')
const { menu } = require('../models/courses');

debug(JSON.stringify(menu));

const levelsReadALL = (req, res) => {
    res.render('levels', { menu });
}

module.exports = {
    levelsReadALL,
};