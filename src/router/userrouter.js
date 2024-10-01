import express from "express";
const router = express.Router();

// import userrouter from "../controller/controller.js";
// const { enteruser, getuser } = userrouter;
// // router.post("/enteruser", enteruser);
// // router.post("/enterproduct", enterproduct);
// // router.post("/orders/:id", order);
// // router.get("/checkorders/:id", checkorders);
// router.post("/enteruser",enteruser);
// router.get("/getuser/:id",getuser);

import controller from "../controller/controller.js";
const {enterstudent,getstudent}=controller;
router.post("/enterstudent",enterstudent);
router.get("/getstudent/:id",getstudent);
export default router;