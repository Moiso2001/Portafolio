const { Router } = require('express');

const about = require('./about');
const experience = require('./experience');
const work = require('./work');
const link = require('./links')

const router = Router();

router.use('/about', about);
router.use('/experience', experience);
router.use('/work', work);
router.use('/links', link);

router.get('/', (req, res) => {
    res.status(200).send("My Portafolio");
});

router.get('*', (req,res) => {
    res.send([{msg: "Please type an available route", routes: 'work'}])
})
module.exports = router;