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
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Type } = require("./src/db");
const { BASE_URL } = require("./constants");
const axios = require("axios");

let CreateDataBase = async () => {
  const apitype = await axios.get(`${BASE_URL}type`);
  await Promise.all(
    apitype.data.results.map((type, index) => {
      let pkmntype = {
        id: ++index,
        name: type.name,
      };
      Type.findOrCreate({ where: pkmntype });
    })
  );
};

CreateDataBase();

// Syncing all the models at once.
// conn.sync({ force: false }).then(() => {
//   server.listen(3001, () => {
//     console.log("%s listening at 3001"); // eslint-disable-line no-console
//   });
// });

conn.sync({ force: true }).then(() => {
  // server.listen(3000, async () => {
  server.listen(process.env.PORT, async () => {
    console.log(`listening at PORT ${process.env.PORT}`);
  });
});
