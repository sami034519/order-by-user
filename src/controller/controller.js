// // import connection from "../config/db.js";




// // const enteruser = async (req, res) => {
// //   const { user } = req.body;
// //   const finaldata = [];

// //   try {
// //     for (let users of user) {
// //       const data = await new Promise((resolve, reject) => {
// //         connection.query(
// //           `insert into user set username=?, age=?`,
// //           [users.username, users.age],
// //           (err, results) => {
// //             if (err) {
// //               return reject(err);
// //             } else {
// //               return resolve(results);
// //             }
// //           }
// //         );
// //       });
// //       finaldata.push(data);
// //     }
// //     return res.status(200).json({
// //       data: finaldata,
// //       message: "users entered",
// //     });
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // const enterproduct = async (req, res) => {
// //   try {
// //     const { products } = req.body;
// //     const finaldata = [];
// //     for (let product of products) {
// //       const data = await new Promise((resolve, reject) => {
// //         connection.query(
// //           `insert into products set productname=?, price=?`,
// //           [product.productname, product.price],
// //           (err, results) => {
// //             if (err) {
// //               return reject(err);
// //             } else {
// //               return resolve(results);
// //             }
// //           }
// //         );
// //       });
// //       finaldata.push(data);
// //     }
// //     res.status(200).json({
// //       data: finaldata,
// //       message: "products added",
// //     });
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // const order = async (req, res) => {
// //   try {
// //     const { orders } = req.body;
// //     const finalorders = [];
// //     for (let order1 of orders) {
// //       const data = await new Promise((resolve, reject) => {
// //         connection.query(
// //           `INSERT INTO myorders (userid, productid) VALUES (?, ?)`,
// //           [req.params.id, order1],
// //           (err, results) => {
// //             if (err) {
// //               return reject(err);
// //             } else {
// //               return resolve(results);
// //             }
// //           }
// //         );
// //       });
// //       finalorders.push(data);
// //     }

// //     res.status(200).json({
// //       data: finalorders,
// //       message: "order created",
// //     });
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // const checkorders = async (req, res) => {
// //   try {
// //     const data = await new Promise((resolve, reject) => {
// //       connection.query(
// //         `select productname from products join myorders on myorders.productid=products.id join user on user.id=myorders.userid where user.id=?`,
// //         [req.params.id],
// //         (err, results) => {
// //           if (err) {
// //             return reject(err);
// //           } else {
// //             return resolve(results);
// //           }
// //         }
// //       );
// //     });
// //     return res.status(200).json({
// //       data: data,
// //       message: "orders found",
// //     });
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // export default { enteruser, enterproduct, order, checkorders };
// // enteruser.js
// // import { Table1 } from '../config/db.js';

// // const enteruser = async (req, res) => {
// //   const { username, age } = req.body;

// //   try {
// //     const data = await Table1.create({ username, age });
// //     res.status(200).json({
// //       data: data,
// //       message: "User entered"
// //     });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({
// //       message: "Error entering user",
// //       error: err.message
// //     });
// //   }
// // };
// // const getuser = async (req, res) => {
   
  
// //     try {
// //       const data = await Table1.findByPk(req.params.id,{
// //         attributes:['username','age'],
// //         where:{
// //             id:req.params.id
// //         }
// //       });
// //       res.status(200).json({
// //         data: data,
// //         message: "User found"
// //       });
// //     } catch (err) {
// //       console.error(err);
// //       res.status(500).json({
// //         message: "Error entering user",
// //         error: err.message
// //       });
// //     }
// //   };
  

// // export default {enteruser,getuser};
// // import {student} from "../config/db.js";
// // const enterstudent=async (req,res)=>{
// //     const{studentname,age}=req.body;
// //     try{
// //     const data=await student.create({studentname,age});
// //     res.status(200).json({
// //         data:data,
// //         message:"student entered"
// //     })
// //     }catch(err){
// //         console.log(err);
// //     }
// // };
// import { Student1,sequelize1 } from "../config/db.js";

// const enterstudent = async (req, res) => {
//   const { studentname, age } = req.body;
//   try {
//     const data = await Student1.create({ studentname, age });
//     res.status(200).json({
//       data: data,
//       message: "Student entered"
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: "Error entering student",
//       error: err.message
//     });
//   }
// };
// export default enterstudent;
// '../controllers/enterstudent.js'
// '../controllers/enterstudent.js'
import { sequelize1,Student } from "../config/db.js";
const enterstudent = async (req, res) => {
  const { studentname, age } = req.body;
  try {
    const data = await Student.create({ studentname, age });
    res.status(200).json({
      data: data,
      message: "Student entered"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error entering student",
      error: err.message
    });
  }
};
const getstudent=async (req,res)=>{
    try{
        const id=req.params.id;
     const data= await Student.findByPk(id,{
        attributes:["studentname","age","updatedAt"],
        where:{
            id:id
        }
     });
     res.status(200).json({
        data:data,
        message:"student found"
     })
    }catch(err){
        console.log(err);
    }
}

export default {enterstudent,getstudent};
