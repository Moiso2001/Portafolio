const { Router } = require('express');
const { Abilities, Profile, Aspirations, Love } = require('../db.js');

const router = Router();

router.get('/abilities', async (req,res) => {
    try {
        const abilities = await Abilities.findAll();

        abilities.length > 0 
        ? res.status(200).json(abilities)
        : res.status(404).json({err: 'Abilities are empty :('})
    } catch (error) {
        res.status(400).json({err: error});
    }   
})

router.get('/aspirations', async (req,res) => {
    try {
        const aspirations = await Aspirations.findAll();

        aspirations.length > 0
        ? res.status(200).json(aspirations)
        : res.status(404).json({err: 'Aspirations are empty :('})
    } catch (error) {
        res.status(400).json({err: error});
    }
})

router.get('/love', async (req,res) => {
    try {
        const love = await Love.findAll();

        love.length > 0
        ? res.status(200).json(love)
        : res.status(404).json({err: 'I do not love anything :('})
    } catch (error) {
        res.status(400).json({err: error});
    }
})

router.get('/me', async (req,res) => {
    try {
        const me = await Profile.findAll();

        me.length > 0
        ? res.status(200).json(me)
        : res.status(404).json({err: `It's looks like I don't exist`})
    } catch (error) {
        res.status(400).json({err: error});
    }
})

module.exports = router