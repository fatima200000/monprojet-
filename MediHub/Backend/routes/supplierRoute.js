const express = require("express");
const {
    createSupplier,
  

} = require("../controller/SupplierCntrl");
const router = express.Router();
router.post("/registerSupplier",createSupplier);




module.exports = router;