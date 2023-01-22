//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const {addAbout, addExperience, addWork, addLinks} = require('./src/controllers/addToDB.js');
const { conn } = require('./src/db.js');

const port = process.env.PORT || 3001

// Syncing all the models at once.
conn.sync({ force: true })
.then(() => {
  server.listen(port, async () => {
    await addAbout()
    await addExperience()
    await addWork()
    await addLinks()
    console.log(`Server listening at ${port}`); // eslint-disable-line no-console
  });
})
.catch(err => console.log(err))
