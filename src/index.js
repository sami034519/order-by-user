// // import connection from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
// import router from "./router/userrouter.js";
dotenv.config({ path: ".env" });
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());

// // app.use("/api/checkorders/:id", async (req, res, next) => {
// //   try {
// //     const getmaxid = async () => {
// //       return new Promise((resolve, reject) => {
// //         connection.query(
// //           `SELECT MAX(userid)AS maxUserId,min(userid) as minuserid FROM myorders`,
// //           (err, results) => {
// //             if (err) {
// //               reject(err);
// //             } else {
// //               resolve(results[0]);
// //             }
// //           }
// //         );
// //       });
// //     };

// //     const { maxUserId, minuserid } = await getmaxid();

// //     if (req.params.id > maxUserId || req.params.id < minuserid) {
// //       res.status(404).send("No order with this id");
// //     } else {
// //       next();
// //     }
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send("Error checking orders");
// //   }
// // });

// // app.use("/api", router);


// // import router from "./router/userrouter.js";
// sequelize1;
import router from "./router/userrouter.js";
import { sequelize1 } from "./config/db.js";
sequelize1;
app.use("/api",router);
app.listen(port, () => {
      console.log("app running on port ", port);
    });

