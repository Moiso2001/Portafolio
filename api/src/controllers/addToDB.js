const { Abilities, Profile, Aspirations, Love, Experience, Work, Link} = require('../db.js');
const { abilities, aspirations, me, love, experience, work, urls } = require('./arrays.js');

module.exports = {
    addAbout: async () => {
        try {
            const meCreated = await Profile.create(me);
            const loveCreated = await Love.bulkCreate(love);
            const abilitiesCreated = await Abilities.bulkCreate(abilities);
            const aspirationsCreated = await Aspirations.bulkCreate(aspirations);
            return true;
        } catch (error) { 
            throw new Error(error)
        }
    },
    addExperience: async () => {
        try {
            const experienceCreated = await Experience.bulkCreate(experience);
            return true;
        } catch (error) {
            throw new Error(error)
        }
    },
    addWork: async () => {
        try {
            const workCreated = await Work.bulkCreate(work);
            const abilities = await Abilities.findAll();
    
            for (let index = 1; index !== workCreated.length + 1; index++) {     
                const work = await Work.findByPk(index);

                for (const ability of abilities) {
                    const {dataValues: {id}} = ability
                    await work.addAbilities(id);
                }        
            }

            return true
        } catch (error) {
            throw new Error(error)
        }
    },
    addLinks: async () => {
        try {
            const linksCreated = await Link.bulkCreate(urls);
            return true
        } catch (error) {
            throw new Error(error)
        }
    }
}