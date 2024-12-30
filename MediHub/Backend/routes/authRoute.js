const express = require("express");
const {
  createUser,  
  loginUserCtrl,
  

} = require("../controller/UserCntrl");
const router = express.Router();
router.post("/register",createUser);
router.post("/login", loginUserCtrl);




module.exports = router;